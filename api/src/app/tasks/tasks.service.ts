import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
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

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    const { seasonId, ...rest } = data;

    rest.rank = this.taskRankLevelCalculation(rest);

    return this.prisma.task.create({
      data: {
        ...rest,
        season: {
          connect: {
            id: seasonId,
          },
        },
      },
    });
  }

  private taskRankLevelCalculation(
    task: Omit<CreateTaskDto, 'seasonId' | 'rank'>,
  ): Rank {
    let points = 0;

    // ⏳ Tempo de Execução
    if (task.executionTime === ExecutionTime.SHORT) points += 2;
    if (task.executionTime === ExecutionTime.MEDIUM) points += 4;
    if (task.executionTime === ExecutionTime.LONG) points += 10;

    // 🕒 Tempo Dentro do Planejado
    if (task.planningTime) points += 6;

    // 🛠 Tipo da Task
    if (task.taskType === TaskType.FIX) points += 2;
    if (task.taskType === TaskType.REFACT) points += 5;
    if (task.taskType === TaskType.FEATURE) points += 6;

    // 🎭 Performance
    if (task.performance === Performance.LEVELUP) points += 6;
    if (task.performance === Performance.DRAW) points += 1;
    if (task.performance === Performance.LEVELDOWN) points -= 5;

    // ⚡ Impacto no Produto
    if (task.impactProduct === Impact.LOW) points += 0;
    if (task.impactProduct === Impact.MEDIUM) points += 6;
    if (task.impactProduct === Impact.HIGH) points += 12;

    // 🤝 Impacto para o Time
    if (task.impactTeam === Impact.LOW) points += 0;
    if (task.impactTeam === Impact.MEDIUM) points += 6;
    if (task.impactTeam === Impact.HIGH) points += 10;

    // 🎭 Role
    if (task.role === Role.TANK) points += 5;
    if (task.role === Role.DAMAGE) points += 10;
    if (task.role === Role.SUPPORT) points += 10;
    if (task.role === Role.FLEX) points += 30;

    // 🏆 Nível de Autonomia
    if (task.autonomy === Autonomy.INDEPENDENT) points += 10;
    if (task.autonomy === Autonomy.MIN_HELP) points += 6;
    if (task.autonomy === Autonomy.MAX_HELP) points += 0;

    // 🎢 Nível de Desafio
    if (task.challenge === Challenge.EASY) points += 0;
    if (task.challenge === Challenge.MEDIUM) points += 3;
    if (task.challenge === Challenge.HARD) points += 6;
    if (task.challenge === Challenge.NIGHTMARE) points += 10;

    if (task.role === Role.FLEX) {
      if (points >= 95) return Rank.TOP500;
      if (points >= 56) return Rank.GRANDMASTER;
      return Rank.MASTER;
    }

    if (
      task.role === Role.DAMAGE ||
      task.role === Role.TANK ||
      task.role === Role.SUPPORT
    ) {
      if (points >= 55) return Rank.DIAMOND;
      if (points >= 40) return Rank.PLATINUM;
      if (points >= 25) return Rank.GOLD;
      if (points >= 10) return Rank.SILVER;
      return Rank.BRONZE;
    }

    return Rank.BRONZE; // Fallback
  }

  async update(id: string, data: UpdateTaskDto) {
    const { seasonId, ...rest } = data;

    return this.prisma.task.update({
      where: { id },
      data: {
        ...rest,
        ...(seasonId && {
          season: {
            connect: { id: seasonId },
          },
        }),
      },
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
