/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Contract` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "createdAt",
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
