CREATE TYPE "PostCategory" AS ENUM ('DAILY_RHYTHM', 'FOOD_THERAPY', 'HERBAL_WISDOM', 'MOVEMENT', 'SEASONAL_CARE');

CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "category" "PostCategory" NOT NULL DEFAULT 'DAILY_RHYTHM',
    "published" BOOLEAN NOT NULL DEFAULT true,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE INDEX "Post_published_publishedAt_idx" ON "Post"("published", "publishedAt");
