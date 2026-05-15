# Daily Chinese Medicine

A small Next.js application for daily Chinese medicine, health, seasonal care, and food therapy posts.

## Stack

- Next.js App Router
- PostgreSQL
- Prisma

## Local setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run build
npm run dev
```

The homepage falls back to bundled starter posts when the database is unavailable, while `/api/health` reports database connectivity.
