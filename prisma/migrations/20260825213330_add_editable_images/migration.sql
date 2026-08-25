-- AlterTable
ALTER TABLE "SiteSettings" ADD COLUMN     "teamImage" TEXT NOT NULL DEFAULT '/images/equipe-campo-02.jpg',
ADD COLUMN     "footerLogo" TEXT NOT NULL DEFAULT '/brand/logo-white.png';

-- CreateTable
CREATE TABLE "FeatureStripItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "FeatureStripItem_pkey" PRIMARY KEY ("id")
);
