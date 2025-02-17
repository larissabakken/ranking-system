import { Performance, Rank, Role } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsEnum(Rank)
  rank: Rank;

  @IsNotEmpty()
  @IsEnum(Performance)
  performance: Performance;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsNotEmpty()
  @IsString()
  seasonId: string;
}
