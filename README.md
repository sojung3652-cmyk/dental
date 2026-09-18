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

## Structure

- `app/page.tsx` composes the home page from section components in `app/components/`.
- `data/*.ts` holds the fictional clinic content (clinic info, doctors, services,
  schedule, process steps, concerns) — edit these, not the components, to change copy.
- `app/reservation`, `app/doctors`, `app/pricing`, `app/privacy`, `app/terms` are
  placeholder routes ("곧 만나요") for pages a real build would flesh out later.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + lint + typecheck
```

## Deploying to Netlify

`netlify.toml` is already configured: build command `npm run build`, publish directory
`.next`, and the `@netlify/plugin-nextjs` plugin (installed as a devDependency) handles
App Router/SSR output on Netlify's platform. In the Netlify UI:

1. "Import an existing project" → pick this repo's GitHub remote.
2. Build settings are picked up from `netlify.toml` automatically — no manual
   configuration needed.
3. Deploy. Netlify's Next.js runtime installs `@netlify/plugin-nextjs` from
   `package.json` if it isn't already present.

No environment variables or backend services are required — this is a static/SSR
concept site with no real data layer.
