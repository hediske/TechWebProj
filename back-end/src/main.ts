import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCss: `
      .swagger-ui .topbar { display: none; }
    `,
    customJs: `
      const authorizeBtn = document.querySelector('.authorize');
      if (authorizeBtn) {
        authorizeBtn.addEventListener('click', () => {
          const token = document.querySelector('input[name="bearerAuth"]').value;
          console.log("Authorization token:", token); // Log the token to the console
        });
      }
    `
  });
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

   // Configurer le dossier "uploads" comme dossier statique
   app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(process.env.APP_PORT);
}
bootstrap();