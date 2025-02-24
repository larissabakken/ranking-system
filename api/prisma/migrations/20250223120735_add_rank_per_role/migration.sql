/*
  Warnings:

  - Added the required column `finalRankDamage` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalRankFlex` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalRankSupport` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalRankTank` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialRankDamage` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialRankFlex` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialRankSupport` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initialRankTank` to the `seasons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "seasons" ADD COLUMN     "finalRankDamage" "Rank" NOT NULL,
ADD COLUMN     "finalRankFlex" "Rank" NOT NULL,
ADD COLUMN     "finalRankSupport" "Rank" NOT NULL,
ADD COLUMN     "finalRankTank" "Rank" NOT NULL,
ADD COLUMN     "initialRankDamage" "Rank" NOT NULL,
ADD COLUMN     "initialRankFlex" "Rank" NOT NULL,
ADD COLUMN     "initialRankSupport" "Rank" NOT NULL,
ADD COLUMN     "initialRankTank" "Rank" NOT NULL;
