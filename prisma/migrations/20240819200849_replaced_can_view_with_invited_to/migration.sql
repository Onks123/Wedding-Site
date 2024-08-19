/*
  Warnings:

  - You are about to drop the column `canViewCeremony` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `canViewReception` on the `Guest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Guest" DROP COLUMN "canViewCeremony",
DROP COLUMN "canViewReception",
ADD COLUMN     "invitedToCeremony" BOOLEAN;
