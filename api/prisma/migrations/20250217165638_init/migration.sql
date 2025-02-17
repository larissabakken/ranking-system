-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MASTER', 'GRANDMASTER', 'TOP500');

-- CreateEnum
CREATE TYPE "Performance" AS ENUM ('LEVELUP', 'LEVELDOWN', 'DRAW');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('TANK', 'DAMAGE', 'SUPPORT', 'FLEX');

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "rank" "Rank" NOT NULL,
    "performance" "Performance" NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "seasonId" TEXT,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seasons" (
    "id" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "initialRank" "Rank" NOT NULL,
    "finalRank" "Rank" NOT NULL,
    "seasonEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seasons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seasons_season_key" ON "seasons"("season");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "seasons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
