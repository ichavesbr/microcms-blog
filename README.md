# microcms-blog

A blog application built with [Next.js](https://nextjs.org) and [microCMS](https://microcms.io), styled with [Tailwind CSS](https://tailwindcss.com). Content is fetched from the microCMS headless CMS and rendered as a list of articles with social sharing support.

## Tech Stack

- **[Next.js](https://nextjs.org)** – React framework with App Router and React Compiler
- **[microCMS JS SDK](https://github.com/microcmsio/microcms-js-sdk)** – Fetches blog content from microCMS
- **[Tailwind CSS](https://tailwindcss.com)** – Utility-first styling
- **[react-share](https://github.com/nygardk/react-share)** – Social share buttons (X/Twitter, Facebook, LINE, Hatena)
- **TypeScript** – Full type safety across the project

## Getting Started

### 1. Set up environment variables

Create a `.env.local` file at the project root with your microCMS credentials:

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

You can find these values in your [microCMS dashboard](https://app.microcms.io).

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

## microCMS API Schema

The `blogs` endpoint is expected to have the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title (also used as the URL slug) |
| `content` | richtext | HTML post body |
| `author` | string | Author name |
| `author_img` | image | Author/cover image |
| `date` | date | Publication date |
| `hashtags` | string | Comma-separated tags |

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/new). Add the `MICROCMS_SERVICE_DOMAIN` and `MICROCMS_API_KEY` environment variables in the Vercel project settings before deploying.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
