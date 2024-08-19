-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "ceremonyIsAttending" BOOLEAN,
    "receptionIsAttending" BOOLEAN,
    "fullName" TEXT,
    "displayName" TEXT,
    "canViewReception" BOOLEAN,
    "canViewCeremony" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);
