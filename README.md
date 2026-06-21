# Coin Analyzer

A Next.js + TypeScript crypto futures analyzer dashboard with market scoring, CLT validation, pump authenticity checks, breakout detection, watchlist, backtest, and paper trading modules.

> Educational and research tool only. Not financial advice.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS / shadcn UI
- Prisma
- SQLite for local development
- Binance Futures public market data

## Main Structure

```txt
src/app/page.tsx                         Main dashboard UI
src/app/api/futures/analyze/route.ts     Futures scanner API
src/app/api/coin-detail/[symbol]/route.ts Coin detail API
src/lib/analytics/                       Market analysis engine
src/components/coin-analyzer/            Dashboard panels
src/lib/paper-trading/                   Paper trading engine
prisma/schema.prisma                     Database schema
```

## Analytics Pipeline

```txt
Raw Market Data
  ↓
Normalize data
  ↓
Feature scoring
  ↓
CLT validation
  ↓
Pump authenticity check
  ↓
Breakout / dump / short logic
  ↓
Final verdict
```

Important files:

```txt
src/lib/analytics/formulas.ts
src/lib/analytics/clt-validation.ts
src/lib/analytics/pump-authenticity.ts
src/lib/analytics/final-verdict.ts
src/lib/analytics/breakout-detector.ts
src/lib/analytics/watchlist-engine.ts
src/lib/analytics/price-prediction.ts
```

## Local Setup

```bash
bun install
cp .env.example .env.local
bunx prisma generate
bunx prisma db push
bun run dev
```

Open:

```txt
http://localhost:3000
```

## GitHub Push

```bash
git init
git add .
git commit -m "Initial commit: coin analyzer"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Notes

- Do not commit `.env` or real API keys.
- SQLite is good for local testing. For production/Vercel, use a hosted database.
- Binance public endpoints can rate-limit; add caching if scans become heavy.
