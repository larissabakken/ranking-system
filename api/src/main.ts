import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 const running =  await app.listen(process.env.PORT ?? 5050);
  console.log(`Application is running on port: ${running.url}`);
}
bootstrap();
