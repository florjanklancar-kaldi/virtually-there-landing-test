# Virtually There — Landing Page

Landing page starter built with **Next.js 16** (App Router, Turbopack, React Compiler, typed routes), **React 19**, **Tailwind CSS v4**, and **shadcn/ui** (Base UI primitives, `base-nova` style).

## Stack

| Concern       | Package                                                   |
| ------------- | --------------------------------------------------------- |
| Framework     | `next` 16, `react` 19, React Compiler, typed routes       |
| Styling       | `tailwindcss` v4, `tw-animate-css`, Source Sans 3         |
| UI components | `shadcn` + `@base-ui/react` (`base-nova`), `lucide-react` |
| Animation     | `motion` (scroll reveals, stagger, count-up, carousel)    |
| Tooling       | TypeScript (strict), ESLint, Prettier + Tailwind plugin   |

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3003
```

## Scripts

- `pnpm dev`: start the dev server
- `pnpm build` / `pnpm start`: production build and serve
- `pnpm check`: typecheck, lint, and format check
- `pnpm format`: format with Prettier (sorts Tailwind classes)

## Structure

```
src/
  app/                      # layout (font, metadata), page (sections + JSON-LD), OG image, robots, sitemap
  config/site.ts            # brand name, contact details, offices, external links
  content/
    home.ts                 # all landing page copy: hero, USPs, locations, services, FAQs...
    navigation.ts           # header, menu and footer links, city list
  components/
    layout/                 # header (nav menu, sheet menu, call bar), footer, logo
    sections/               # hero, ratings bar, USPs, what-is, locations, services, testimonials, FAQ, sign-off
    motion/                 # Reveal / RevealGroup / CountUp (reduced-motion aware)
    illustrations.tsx       # maps illustration names to the brand SVGs in public/illustrations
    ui/                     # shadcn components (add more: pnpm dlx shadcn@latest add <name>)
```

Assets in `public/`: `logo/` and `illustrations/` come from the customer portal's `public/svg`
(keep them in sync); `icons/` and `locations/` come from virtually-there.net.

Brand tokens (slate `#475565`, mint `#6AE79D`, tint `#F3F8F3`) live in `src/app/globals.css`.

## Before launch

- Replace the sample testimonials in `src/content/home.ts` with real, attributable ones.
- Confirm the social and Trustpilot URLs in `src/config/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in production so canonical, OG and sitemap URLs are correct.
