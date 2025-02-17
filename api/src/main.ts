import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PrismaClient } from '@prisma/client';
import { ValidationPipe } from '@nestjs/common';

const prisma = new PrismaClient();
const port = process.env.PORT || 3030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true },
  });

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
  });

  await (async () => {
    try {
      await prisma.$connect();
      console.log('Connected to database.');
      return { message: 'Connected to database' };
    } catch (error) {
      console.error('Error to connect', error);
      throw new Error('Error to connect');
    }
  })();
}
bootstrap();
