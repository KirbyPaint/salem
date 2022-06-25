-- CreateTable
CREATE TABLE "Event" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "organizer" TEXT NOT NULL
);
