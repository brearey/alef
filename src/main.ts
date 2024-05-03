import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Инциализация документации API на основе Swagger
  const swaggerConfig = new DocumentBuilder().setTitle('Alef app').build()
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, swaggerDoc)

  await app.listen(3000);
}
bootstrap();
