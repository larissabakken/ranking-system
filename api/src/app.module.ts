import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './app/tasks/tasks.module';
import { SeasonsModule } from './app/seasons/seasons.module';

@Module({
  imports: [PrismaModule, TasksModule, SeasonsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
