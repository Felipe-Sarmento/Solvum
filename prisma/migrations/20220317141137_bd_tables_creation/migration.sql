-- CreateTable
CREATE TABLE "administrator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "administratorId" TEXT NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "administrator_username_key" ON "administrator"("username");

-- CreateIndex
CREATE UNIQUE INDEX "administrator_email_key" ON "administrator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administrator_password_key" ON "administrator"("password");

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- CreateIndex
CREATE UNIQUE INDEX "institution_address_key" ON "institution"("address");

-- CreateIndex
CREATE UNIQUE INDEX "book_name_key" ON "book"("name");

-- AddForeignKey
ALTER TABLE "institution" ADD CONSTRAINT "institution_administratorId_fkey" FOREIGN KEY ("administratorId") REFERENCES "administrator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
