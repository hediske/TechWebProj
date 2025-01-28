import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Activer CORS globalement
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

   // Configurer le dossier "uploads" comme dossier statique
   app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(process.env.APP_PORT);
}
bootstrap();
