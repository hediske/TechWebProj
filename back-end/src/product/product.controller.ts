import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity/product.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('product')
export class ProductController {
    
    constructor(
        private productService: ProductService
    ){}

    products: ProductEntity[];
    
    // Collect all products
    @Get()
    async getAllProducts(): Promise<ProductEntity[]> {
        return await this.productService.getProducts();
    }    

    @Get('related')
    async getRelatedProducts(
        @Query('type') productType: string,
        @Query('excludeId') excludeProductId: number
    ): Promise<ProductEntity[]> {
        return this.productService.getRelatedProductsByType(productType, excludeProductId);
    }

    @Get(':id')
    async getProductById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<ProductEntity> {
        return await this.productService.getProductById(id);
    }  

    @Post()
    @UseInterceptors(
    FileFieldsInterceptor(
        [{ name: 'images', maxCount: 10 }],
        {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
            const uniqueSuffix = `${Date.now()}-${file.originalname}`;
            callback(null, uniqueSuffix);
            },
        }),
        },
    ),
    )
    async addProduct(
        @Body() productDto: AddProductDto,
        @UploadedFiles() files: { images?: Express.Multer.File[] },
    ) {
        console.log('Données reçues du frontend :', productDto);
        console.log('Fichiers uploadés :', files);

        // Vérifiez que des fichiers ont été uploadés
        const imagePaths = files?.images?.map((file) => file.path) || [];
        if (!imagePaths.length) {
            console.warn('Aucune image reçue.');
        }

        // Enregistrez le produit via le service
        const newProduct = await this.productService.addProduct(productDto, imagePaths);

        return { message: 'Produit ajouté avec succès !', product: newProduct };
    }


    // Update a product
    @Patch(':id')
    async updateProduct(
        @Body() updateProductDto: UpdateProductDto,
        @Param('id', ParseIntPipe) id: number
    ): Promise<ProductEntity> {
        return await this.productService.updateProduct(id, updateProductDto);
    }

    // Remove a product
    @Delete(':id')
    async removeProduct(
        @Param('id', ParseIntPipe) id: number
    ) {
        return await this.productService.deleteProduct(id);
    }
}
