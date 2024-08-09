/*
  Warnings:

  - You are about to drop the column `londonIsAttending` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `rugbyIsAttending` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `londonIsAttending` on the `GuestMeta` table. All the data in the column will be lost.
  - You are about to drop the column `rugbyIsAttending` on the `GuestMeta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "londonIsAttending",
DROP COLUMN "rugbyIsAttending",
ADD COLUMN     "ceremonyIsAttending" BOOLEAN,
ADD COLUMN     "receptionIsAttending" BOOLEAN;

-- AlterTable
ALTER TABLE "GuestMeta" DROP COLUMN "londonIsAttending",
DROP COLUMN "rugbyIsAttending",
ADD COLUMN     "ceremonyIsAttending" BOOLEAN,
ADD COLUMN     "receptionIsAttending" BOOLEAN;
