/*
  Warnings:

  - You are about to drop the column `image_data` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `toone` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `image` table. All the data in the column will be lost.
  - Added the required column `image` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_user_id_fkey`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `image_data`,
    DROP COLUMN `name`,
    DROP COLUMN `toone`,
    DROP COLUMN `user_id`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `PartyList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `guests` VARCHAR(191) NOT NULL,
    `receiver` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PartyList` ADD CONSTRAINT `PartyList_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
