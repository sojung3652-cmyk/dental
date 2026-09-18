# 산뜻치과 (Santteut Dental)

Concept-only design mockup for a fictional Korean dental clinic — a portfolio/proposal
piece. No real backend, people, addresses, or photos. Deploys to Netlify from GitHub.

## Stack

- Next.js 15 (App Router, TypeScript, no `src/` dir)
- Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css` — brand tokens ported
  from `docs/refernce-preview/santteut-dental-home-v2.html`)
- lucide-react for icons

## Fonts

- **Pretendard Variable** — loaded via the jsdelivr CDN (`app/layout.tsx`), not
  `next/font`, since Pretendard isn't on Google Fonts and has no first-party npm/next
  integration. Used for all body/UI text.
- **Nanum Pen Script** — loaded via `next/font/google` (`app/layout.tsx`), applied through
  the `.signature` utility class for handwritten accent moments (hero eyebrow, section
  markers, the director's signature).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

All sections live as components under `app/components/`, composed in `app/page.tsx`.
