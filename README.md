# Allan Senteu — Portfolio

A single-page personal portfolio built with Next.js and TypeScript. Content is deliberately honest: projects are described from the supplied brief, article ideas are marked as drafts, and public contact details are configurable.

## Run locally

1. Install Node.js 18.18 or newer.
2. Copy `.env.example` to `.env.local` and add Allan's real links/email.
3. Run `npm install` then `npm run dev`.

## Edit content

- `content/site.ts` holds projects, article drafts, skills, and social configuration.
- `app/page.tsx` holds the page composition and reusable section components.
- `app/globals.css` controls the responsive editorial design.

Replace the `#` project links in `content/site.ts` when their GitHub repositories or live demos are available.
