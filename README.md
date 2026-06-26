# Zema Fidelat Landing Page

Marketing site for [Zema Fidelat](https://zemafidelat.com) — a free language learning app for Android.

Built with Next.js 16, React 19, Tailwind CSS 4, and Motion.

## Requirements

- Node.js **20.9+**

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy the environment file and set your production URL:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_APP_URL` should be `https://zemafidelat.com` in production.

Set `NEXT_PUBLIC_APK_DOWNLOAD_URL` to your direct APK download link (e.g. a Dropbox URL with `dl=1`).

## Screenshots

App screenshots in `public/screenshots/` are generated from source images in `public/games/` and `public/other features/`:

```bash
pnpm process-screenshots
```

Run this after updating any source screenshot assets.

## Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Deploy on Vercel

Set these in your Vercel project environment variables before deploying:

- `NEXT_PUBLIC_APP_URL=https://zemafidelat.com`
- `NEXT_PUBLIC_APK_DOWNLOAD_URL` — direct link to the APK file
