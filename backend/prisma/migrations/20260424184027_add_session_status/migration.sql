-- AlterTable
ALTER TABLE `upload_sessions` ADD COLUMN `status` ENUM('DRAFT', 'PROCESSED') NOT NULL DEFAULT 'DRAFT';
