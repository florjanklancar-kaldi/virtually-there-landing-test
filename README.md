# Virtually There — Landing Page

Landing page starter built with **Next.js 16** (App Router, Turbopack, React Compiler, typed routes), **React 19**, **Tailwind CSS v4**, and **shadcn/ui** (Base UI primitives, `base-nova` style).

## Stack

| Concern       | Package                                             |
| ------------- | --------------------------------------------------- |
| Framework     | `next` 16, `react` 19, React Compiler               |
| Styling       | `tailwindcss` v4, `tw-animate-css`                  |
| UI components | `shadcn` + `@base-ui/react`, `lucide-react` icons   |
| Theming       | `next-themes` (light / dark / system)               |
| Animation     | `motion` (reduced-motion aware `Reveal` component)  |
| Forms         | Server Actions + `useActionState` + `zod`, `sonner` |
| Tooling       | TypeScript (strict), ESLint, Prettier + Tailwind    |

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

- `pnpm dev`: start the dev server
- `pnpm build` / `pnpm start`: production build and serve
- `pnpm check`: typecheck, lint, and format check
- `pnpm format`: format with Prettier (sorts Tailwind classes)

## Structure

```
src/
  app/
    _actions/waitlist.ts   # server action (zod-validated)
    layout.tsx             # fonts, metadata, providers
    page.tsx               # composes the landing sections + JSON-LD
    opengraph-image.tsx    # generated OG image
    robots.ts sitemap.ts manifest.ts not-found.tsx
  components/
    layout/                # header, footer, mobile nav, logo
    sections/              # hero, logos, features, how-it-works, testimonials, pricing, faq, cta
    motion/reveal.tsx      # scroll-reveal wrapper
    ui/                    # shadcn components (add more: pnpm dlx shadcn@latest add <name>)
  config/site.ts           # name, copy, URLs, nav: edit this first
  lib/utils.ts
```

## Next steps

- Edit `src/config/site.ts` and the section copy.
- Set your brand colors in `src/app/globals.css` (`:root` / `.dark` tokens).
- Wire `joinWaitlist` to a real store (database, Resend, Loops, and so on).
- Set `NEXT_PUBLIC_SITE_URL` in production so canonical, OG, and sitemap URLs are correct.
