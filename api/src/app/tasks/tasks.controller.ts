import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  async create(@Body() data: CreateTaskDto) {
    return this.tasksService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return this.tasksService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
