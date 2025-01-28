import { Injectable, NotFoundException } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ImageEntity } from './entity/image.entity/image.entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        
        @InjectRepository(ImageEntity)
        private imageRepository: Repository<ImageEntity>
    ){}

      private transformProduct(product: ProductEntity, baseUrl: string): ProductEntity {
        return {
            ...product,
            images: product.images.map(image => ({
                ...image,
                url: `${baseUrl}${image.url.replace(/\\/g, '/')}`,
            })),
            availability: product.availability,
        };
    }
  
      async getProducts(): Promise<ProductEntity[]> {
        const products = await this.productRepository.find({ relations: ['images'] });
        const baseUrl = 'http://localhost:3000/';
        return products.map(product => this.transformProduct(product, baseUrl));
    }
    
    async getProductById(id: number): Promise<ProductEntity> {
        const product = await this.productRepository.findOne({
            where: { id },
            relations: ['images'],
        });
    
        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
    
        const baseUrl = 'http://localhost:3000/';
        return this.transformProduct(product, baseUrl);
    }
  
    async getRelatedProductsByType(productType: string, excludeProductId: number): Promise<ProductEntity[]> {
      // Récupérer les produits du même type, en excluant l'ID donné
      const relatedProducts = await this.productRepository.find({
          where: { type: productType, id: Not(excludeProductId) },
          relations: ['images'],
      });
  
      const baseUrl = 'http://localhost:3000/';
  
      return relatedProducts.map(relatedProduct => this.transformProduct(relatedProduct, baseUrl));
  }
  

    async addProduct(productDto: AddProductDto, imagePaths: string[]): Promise<ProductEntity> {
      // Créer une instance de ProductEntity à partir des données du DTO
      const product = this.productRepository.create({
          ...productDto,
          images: imagePaths.map((path) => {
              const image = new ImageEntity();
              image.url = path;
              return image;
          }),
      });
  
      // Sauvegarder le produit avec les images associées
      return this.productRepository.save(product);
  }
  
    async updateProduct(
        id: number,
        product: UpdateProductDto,
      ): Promise<ProductEntity> {
        // Mettre à jour le produit en incluant les images associées
        const { images, ...productData } = product;
      
        // Précharger le produit à mettre à jour
        const newProduct = await this.productRepository.preload({
          id,
          ...productData,
        });
      
        if (!newProduct) {
          throw new NotFoundException(`Product with ID ${id} not found`);
        }
      
        // Mettre à jour les images si elles sont incluses
        if (images && images.length > 0) {
          // Supprimer les anciennes images
          await this.imageRepository.delete({ product: { id } });
      
          // Ajouter les nouvelles images
          const newImages = images.map((url) =>
            this.imageRepository.create({ url, product: newProduct }),
          );
          await this.imageRepository.save(newImages);
        }
      
        return await this.productRepository.save(newProduct);
      }
      
      async removeProduct(id: number) {
        // Récupérer le produit par ID avec ses relations (images)
        const productToRemove = await this.getProductById(id);
      
        if (!productToRemove) {
          throw new NotFoundException(`Product with ID ${id} not found`);
        }
      
        // Supprime automatiquement les images liées grâce à la relation définie
        return await this.productRepository.remove(productToRemove);
      }
      
      async deleteProduct(id: number) {
        // Supprimer directement le produit par son ID, sans charger les relations
        return await this.productRepository.delete(id);
      }
      

    // We can add the SoftDelete or the SoftRemove
    // and then use the recover methode
}
