import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
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

  @Get('search/:search')
  async searchSeason(@Param('search') search: string): Promise<any> {
    return this.seasonsService.searchSeason(search);
  }

  @Get('rank/:id')
  async getRank(@Param('id') id: string): Promise<any> {
    return this.seasonsService.getRank(id);
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
