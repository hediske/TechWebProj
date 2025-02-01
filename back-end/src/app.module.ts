import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EnumModule } from './enum/enum.module';
import { User } from './user/user.entity';
import { TokenModule } from './token/token.module';
import { Token } from './token/token.entity';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

import * as dotenv from 'dotenv';
import { ProductEntity } from './product/entity/product.entity/product.entity';
import { ImageEntity } from './product/entity/image.entity/image.entity';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ProductEntity, ImageEntity, User, Token],
      synchronize: true,
    }),
    ProductModule,
    UserModule,
    AuthModule,
    TokenModule,
    EnumModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
