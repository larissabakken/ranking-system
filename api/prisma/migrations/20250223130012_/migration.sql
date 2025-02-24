/*
  Warnings:

  - You are about to drop the column `finalRankDamage` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `finalRankFlex` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `finalRankSupport` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `finalRankTank` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `initialRankDamage` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `initialRankFlex` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `initialRankSupport` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `initialRankTank` on the `seasons` table. All the data in the column will be lost.
  - Added the required column `autonomy` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `challenge` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `executionTime` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impactProduct` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `impactTeam` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planningTime` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskType` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExecutionTime" AS ENUM ('SHORT', 'MEDIUM', 'LONG');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('REFACT', 'FEATURE', 'FIX');

-- CreateEnum
CREATE TYPE "Impact" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Autonomy" AS ENUM ('MIN_HELP', 'MAX_HELP', 'INDEPENDENT');

-- CreateEnum
CREATE TYPE "Challenge" AS ENUM ('EASY', 'MEDIUM', 'HARD', 'NIGHTMARE');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'FLEX';

-- AlterTable
ALTER TABLE "seasons" DROP COLUMN "finalRankDamage",
DROP COLUMN "finalRankFlex",
DROP COLUMN "finalRankSupport",
DROP COLUMN "finalRankTank",
DROP COLUMN "initialRankDamage",
DROP COLUMN "initialRankFlex",
DROP COLUMN "initialRankSupport",
DROP COLUMN "initialRankTank",
ALTER COLUMN "initialRank" SET DEFAULT 'BRONZE',
ALTER COLUMN "finalRank" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "autonomy" "Autonomy" NOT NULL,
ADD COLUMN     "challenge" TEXT NOT NULL,
ADD COLUMN     "executionTime" "ExecutionTime" NOT NULL,
ADD COLUMN     "impactProduct" "Impact" NOT NULL,
ADD COLUMN     "impactTeam" "Impact" NOT NULL,
ADD COLUMN     "planningTime" BOOLEAN NOT NULL,
ADD COLUMN     "taskType" "TaskType" NOT NULL,
ALTER COLUMN "rank" DROP NOT NULL;
