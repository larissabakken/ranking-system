import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeasonsService } from './seasons.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Controller('seasons')
export class SeasonsController {
  constructor(private readonly seasonsService: SeasonsService) {}

  @Post('create')
  async create(@Body() data: CreateSeasonDto) {
    return this.seasonsService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateSeasonDto) {
    return this.seasonsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.seasonsService.remove(id);
  }
}
