import { Rank } from '@prisma/client';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateSeasonDto {
  @IsNotEmpty()
  @IsString()
  season: string;

  @IsNotEmpty()
  @IsEnum(Rank)
  initialRank: Rank;

  @IsNotEmpty()
  @IsEnum(Rank)
  finalRank: Rank;

  @IsNotEmpty()
  @IsDate()
  seasonEnd: Date;
}
