import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    return data;
  }

  async update(id: string, data: UpdateTaskDto) {
    return data;
  }

  async remove(id: string) {
    return id;
  }
}
