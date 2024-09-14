/*
  Warnings:

  - You are about to alter the column `quantity` on the `Contract` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `pricePerKg` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "pricePerKg" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;
