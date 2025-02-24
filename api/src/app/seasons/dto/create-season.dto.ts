import { Rank } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsString()
  season: string;

  @IsOptional()
  @IsEnum(Rank)
  initialRank: Rank;

  @IsOptional()
  @IsEnum(Rank)
  finalRank: Rank;

  @IsNotEmpty()
  seasonEnd: Date | string;
}
