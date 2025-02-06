import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity/product.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ImageEntity } from './entity/image.entity/image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, ImageEntity]),
    MulterModule.register({
      dest: './uploads', // Dossier où les fichiers seront temporairement stockés
  }),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
