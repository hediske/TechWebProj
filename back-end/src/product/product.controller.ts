import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ProductEntity } from './entity/product.entity/product.entity';
import { count } from 'console';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';

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

    @Get(':id')
    async getProductById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<ProductEntity> {
        return await this.productService.getProductById(id);
    }  
    
    // Add a new product
    @Post()
    async addProduct(
        @Body() productDto: AddProductDto
    ): Promise<ProductEntity>{
        return await this.productService.addProduct(productDto);
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
