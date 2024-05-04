import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "./filters/prisma-client-exception.filter";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;

  // Инициализация документации API на основе Swagger
  const swaggerConfig = new DocumentBuilder().setTitle('Alef app').build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDoc);

  // Обработка исключений Prisma
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  // Валидация
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Приложение запущено на порту ${PORT}`));
}
bootstrap();
