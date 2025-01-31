import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  await app.listen(3000);
}
bootstrap();