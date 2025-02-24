import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Challenge } from '@prisma/client';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  challenge?: Challenge;
}
