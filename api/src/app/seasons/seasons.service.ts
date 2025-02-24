import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Injectable()
export class SeasonsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSeasonDto) {
    return this.prisma.season.create({
      data,
    });
  }

  async searchSeason(search: string) {
    return this.prisma.season.findMany({
      include: {
        tasks: true,
      },
    });
  }

  async getRank(id: string) {
    return this.prisma.season.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    });
  }

  async update(id: string, data: UpdateSeasonDto) {
    return this.prisma.season.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.season.delete({
      where: { id },
    });
  }
}
