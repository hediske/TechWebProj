import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProductDto } from './dto/add-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>
    ){}

    async getProducts(): Promise<ProductEntity[]> {
        return await this.productRepository.find();
    }

    async getProductById(id: number) {
        const product = await this.productRepository.findOneBy({id});
        if (! product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }

    async addProduct(product: AddProductDto): Promise<ProductEntity> {
        return await this.productRepository.save(product);
    }

    async updateProduct(id: number, product: UpdateProductDto): Promise<ProductEntity> {
        // Retrieve the product object by its id and change the old values ​​with those passed as parameters
        const newProduct = await this.productRepository.preload({
           id,
           ...product
        });
        if (! newProduct) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return await this.productRepository.save(newProduct);
    }

    async removeProduct(id: number) {
        const productToRemove = await this.getProductById(id);
        return await this.productRepository.remove(productToRemove);
    }

    async deleteProduct(id: number) {
        return await this.productRepository.delete(id);
    }

    // We can add the SoftDelete or the SoftRemove
    // and then use the recover methode
}
