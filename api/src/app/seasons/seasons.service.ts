import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Injectable()
export class SeasonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSeasonDto) {
    return data;
  }

  async update(id: string, data: UpdateSeasonDto) {
    return data;
  }

  async remove(id: string) {
    return id;
  }
}
