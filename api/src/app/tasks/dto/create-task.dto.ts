import {
  Autonomy,
  Challenge,
  ExecutionTime,
  Impact,
  Performance,
  Rank,
  Role,
  TaskType,
} from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsEnum(Rank)
  rank: Rank;

  @IsNotEmpty()
  @IsEnum(Performance)
  performance: Performance;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsNotEmpty()
  @IsEnum(ExecutionTime)
  executionTime: ExecutionTime;

  @IsNotEmpty()
  @IsBoolean()
  planningTime: boolean;

  @IsNotEmpty()
  @IsEnum(TaskType)
  taskType: TaskType;

  @IsNotEmpty()
  @IsEnum(Impact)
  impactProduct: Impact;

  @IsNotEmpty()
  @IsEnum(Impact)
  impactTeam: Impact;

  @IsNotEmpty()
  @IsEnum(Autonomy)
  autonomy: Autonomy;

  @IsNotEmpty()
  @IsEnum(Challenge)
  challenge: Challenge;

  @IsNotEmpty()
  @IsString()
  seasonId: string;
}
