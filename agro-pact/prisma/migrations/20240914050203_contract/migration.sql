/*
  Warnings:

  - Added the required column `phoneNumber` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerKg` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "pricePerKg" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;