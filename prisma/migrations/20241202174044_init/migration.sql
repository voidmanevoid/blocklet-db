-- CreateTable
CREATE TABLE "Export" (
    "id" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "file" TEXT,
    "url" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Export_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExportVote" (
    "id" TEXT NOT NULL,
    "exportId" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExportVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoundPack" (
    "id" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "passport" TEXT,

    CONSTRAINT "SoundPack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sound" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT,
    "soundPackId" TEXT NOT NULL,

    CONSTRAINT "Sound_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExportVote" ADD CONSTRAINT "ExportVote_exportId_fkey" FOREIGN KEY ("exportId") REFERENCES "Export"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sound" ADD CONSTRAINT "Sound_soundPackId_fkey" FOREIGN KEY ("soundPackId") REFERENCES "SoundPack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
