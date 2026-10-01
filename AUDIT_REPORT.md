# Codebase Audit — virtually-there-landing-test

_Date: 2026-10-01 · Branch: `feature/redesign` · Scope: `src/`, `next.config.ts`, `.github/`, `public/`, `package.json`_

Five read-only reviews (security, Next.js/React practices, link integrity, duplication, design/a11y/SEO), merged and de-duplicated. Key claims were spot-checked against the code. Paths are relative to the repo root.

## Summary

The site is fully static (all dynamic routes use `generateStaticParams` + `dynamicParams = false`), has no forms or server actions, commits no secrets, and has **no broken internal links** (all 49 built pages checked). The real problems are:

1. **Every page shares the homepage's Open Graph / Twitter metadata** — social shares of any page show the home page.
2. **Hero headings and LCP images are server-rendered at `opacity: 0`** — nothing paints until JS hydrates.
3. **No security headers** and an **unfiltered query string forwarded to the customer portal**.
4. **Test site is indexable** and silently falls back to `localhost` / staging URLs when env vars are missing.
5. **Content data is duplicated** (cities ×3, services ×4, prices hardcoded in ~10 places) and already drifting.

| Area | High | Medium | Low |
| --- | --- | --- | --- |
| Security | – | 2 | 4 |
| Next.js / React | 2 | 3 | 3 |
| Links | – | 2 | 5 |
| Duplication / maintainability | 3 | 5 | 6 |
| Accessibility | – | 5 | 4 |
| SEO | 2 | 2 | 2 |
| Design / performance | – | 2 | 3 |

---

## 1. Security

### 🟠 Medium — Landing query string forwarded verbatim to the portal
`src/lib/portal.ts:18-25`, `src/components/portal-link.tsx:17-18,40`

The visitor's entire landing query string is stored in `sessionStorage` and appended to every Buy now / Log in link; only the target's own keys (`billing`, `plan`, `addon`, `selectedCity`) are overwritten. A crafted link such as `/?redirect=https://evil.example&email=…` turns the trusted marketing site into a relay that injects arbitrary params into `app.virtually-there.net/login`. Whether that becomes an open redirect depends on how the portal treats `redirect` / `next` / `returnTo`.

**Fix:** forward an allowlist only (`utm_*`, `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `ref`), cap value length, and filter before writing to `sessionStorage`. Separately confirm the portal validates any redirect parameter.

### 🟠 Medium — No security headers
`next.config.ts`

No `headers()` block: no CSP, HSTS, `X-Frame-Options` / `frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

**Fix:** add `async headers()` for `/:path*`. For CSP, nonces force dynamic rendering (see `node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md`), so keep pages static with a hash-based policy (`experimental.sri`) or a nonce-free policy including `frame-ancestors 'none'`.

### 🟡 Low
- **Silent fallback to staging / localhost** — `src/config/site.ts:6,8-9`. Missing `NEXT_PUBLIC_PORTAL_URL` sends every purchase link to `app.staging…`; missing `NEXT_PUBLIC_SITE_URL` puts `http://localhost:3003` in canonicals, sitemap and JSON-LD (the fallback port also disagrees with `.env.example`). **Fix:** throw at build time in production when either is unset.
- **Test site is indexable** — `src/app/robots.ts:7`, `src/app/layout.tsx` (`robots: { index: true }`). The page says "Test site" yet invites indexing → duplicate content against the live site and a lookalike that can read as phishing. **Fix:** `disallow: "/"` + `index: false` unless `VERCEL_ENV === "production"`.
- **Claude review workflow over-privileged** — `.github/workflows/claude-review.yml:14,64-65`. `id-token: write` is unused; `Bash(gh pr comment:*)` can comment on any PR (prompt-injection vector from a diff). Mitigated by using `pull_request` (no secrets for forks) and no untrusted interpolation in `run:`. **Fix:** drop `id-token`, scope the tool to the current PR number.
- **Actions pinned to mutable tags** — `ci.yml:20,22,24`, `claude-review.yml:35,40`. **Fix:** pin to commit SHAs (most important for `anthropics/claude-code-action`, which receives the API key, and `pnpm/action-setup`); let Dependabot bump them.

### ✅ Checked and fine
JSON-LD escapes `<` and only renders static content · every `target="_blank"` has `rel="noreferrer"` · portal host comes from env + a closed path union · only two public `NEXT_PUBLIC_` vars · CI uses `contents: read` and `--frozen-lockfile` · `.env*` gitignored except `.env.example`.

---

## 2. Next.js / React practices

### 🔴 High — Root Open Graph/Twitter metadata leaks to every page
`src/app/layout.tsx:23-35`

`openGraph` (including `url: "/"`, `title`, `description`) and `twitter` are set only at the root; no page overrides them and nested metadata fields are inherited whole. Only `canonical` is per-page.

**Fix:** remove `url`, `title`, `description` from the root `openGraph`/`twitter`, and add a small `pageMetadata({ title, description, path })` helper that every page's `metadata` / `generateMetadata` uses to set `alternates.canonical` and `openGraph.url` together.

### 🔴 High — Above-the-fold content rendered invisible
`src/components/sections/hero.tsx:13-47`, `src/components/page/page-hero.tsx:31-75`, `src/components/locations/location-hero.tsx:37-50`

`<Reveal immediate>` server-renders `initial={{ opacity: 0, … }}`, so the `<h1>`, intro and LCP image are invisible in the static HTML until JS loads, hydrates and runs a 0.7 s animation. Hurts LCP; no-JS visitors see nothing. `priority` on the hero image doesn't help while it's transparent.

**Fix:** don't wrap the h1 / LCP image in `Reveal`, or switch the `immediate` variant to a CSS keyframe that needs no hydration (e.g. tw-animate-css `animate-in fade-in`).

### 🟠 Medium
- **`priority` is deprecated in Next 16** — `logo.tsx:21`, `illustrations.tsx:29,49`, `hero.tsx:45`, `page-hero.tsx:74`, `location-hero.tsx:46`. Use `preload` / `fetchPriority="high"` on the single real LCP image only; drop it from the header logo (currently 2 preloads per page).
- **Client boundary too high in the header** — `src/components/layout/site-header.tsx:1`. The whole header is a client component just to toggle `scrolled`, pulling `Logo`, `CallBar` and `next/image` into the bundle. Extract a tiny `<ScrollShell>` client wrapper taking server-rendered `children` (or use CSS scroll-driven animation).
- **Testimonials fully client-side for two arrow buttons** — `src/components/sections/testimonials.tsx:1`. Move the arrows into a small client component; keep the list server-rendered.

### 🟡 Low
- `motion/react` ships on every page via `Reveal` — use `LazyMotion` + `domAnimation` + `m.div`, or CSS `animation-timeline: view()` for simple reveals.
- `src/components/ui/separator.tsx:1` — `"use client"` likely unnecessary.
- No `global-error.tsx` — optional for a static site.

### ✅ Checked and fine
`generateStaticParams` + `notFound()` guards on all dynamic routes · async `params` used correctly · per-page title/description/canonical · `next/font` with `display: swap` · `sizes` on all `fill` images · `PortalLink` uses `useSyncExternalStore` with an empty server snapshot (no hydration mismatch) · no redundant `useMemo`/`useCallback` under the React Compiler · no `any` · skip link present.

---

## 3. Links

**No broken internal links, no `href=""` / `#` / `javascript:` placeholders, no `http://` external links.** All 49 built pages checked; no link hits a redirect source.

### 🟠 Medium
| Location | Issue | Fix |
| --- | --- | --- |
| `src/content/navigation.ts:60` and `:67` | `/customer-portal/` appears twice in the header (Virtual Services dropdown **and** top-level item), same in the mobile menu | Keep one |
| `src/content/navigation.ts:52-54` | "Call and Landline Services" points only to `/call-answering-services/`; `/virtual-landline/` is missing from the header | Rename the label or add a Virtual Landline entry |

### 🟡 Low
| Location | Issue | Fix |
| --- | --- | --- |
| `src/app/not-found.tsx:7` | Skip link `#main` has no target on the 404 page (`id="main"` only set in `(site)/layout.tsx`) | Add `id="main"` |
| `src/components/locations/registered-upsell.tsx:32` | `officeOnboarding(plan, "")` emits an empty `addon=` param | Omit empty params in `src/lib/portal.ts` |
| `our-story/page.tsx:27,61,80`, `popular-locations.tsx:21` | Hrefs without trailing slash (`/virtual-offices`, `/onboarding`, `/young-entrepreneur-scheme`) while `trailingSlash: true` | Add `/` for consistency |
| `src/content/navigation.ts:16` | Mayfair (a London site) listed as a city in nav, footer and home prose | Nest under London or label "London – Mayfair" |
| `src/content/services/office-services.ts:19` | `/virtual-office-services/` is built and in the sitemap but nothing links to it (orphan) | Link it or remove it |

---

## 4. Duplication & maintainability

### 🔴 High payoff
1. **Cities defined three times, already out of sync** — `content/navigation.ts:14-29`, `content/locations/cities.ts:13-58`, `content/locations/registered.ts:52-103`. Nav lacks West Yorkshire and Cambridge (Newmarket) and adds Mayfair. → Derive nav links from `cities` with an `inNav` flag; add an optional `skylineImage` to `City` so `registeredCities` becomes a filter.
2. **Prices and counts hardcoded** — "£10" in `config/site.ts:5`, `content/home.ts:8`, `content/services/registry.ts:16`, `content/services/office-services.ts:27`, `pricing/page.tsx:13`, `virtual-offices/page.tsx:17,19,30`; "£17" in `registered-office-address/page.tsx:19,21` (while `REGISTERED_FROM` exists in the same file); **"13 UK cities"** in `virtual-offices/page.tsx:19,30`, `home.ts:51`, `partnerships/page.tsx:36` — but `cities.length` is **15**. → Export `OFFICE_FROM`, `REGISTERED_FROM`, `CITY_COUNT` from `lib/locations.ts` and interpolate.
3. **Service names/descriptions in four places** — `navigation.ts` `services` and `footerNav.services`, `services/registry.ts` `relatedLinks`, `home.ts` `serviceBlocks`. → One `serviceCatalog` record; project each list from it.

### 🟠 Medium payoff
4. **Three hero components with the same scaffolding** — `page-hero.tsx`, `location-hero.tsx`, `sections/hero.tsx` (section/grid, breadcrumbs, staggered reveals, near-identical h1). "From £X" price block duplicated in `service-page.tsx:17-25` and `location-hero.tsx:85-92`. → `<HeroShell>`, `<HeroTitle>`, `<PriceFrom>`.
5. **Explainer section copy-pasted** — `sections/what-is.tsx:6-19`, `services/service-page.tsx:80-93`, `registered-office-address/page.tsx:76-93` (and the h2 weights differ). → `<ExplainerSection>`.
6. **Section heading class string in 18 files** — `font-bold text-4xl tracking-tight sm:text-5xl`, plus a repeated heading+intro block (`popular-locations.tsx:12-25`, `city-chooser.tsx:21-28`). → `<SectionHeading title intro id />`.
7. **`tel:` / `mailto:` rebuilt 14 times** across ~10 files. → `siteConfig.contact.telHref` / `mailHref` or `<PhoneLink>` / `<EmailLink>`.
8. **Magic strings bypassing `siteConfig`** — `navigation.ts:10` (`SITE = "https://virtually-there.net"`), knowledge-base URL at `:76`, phone/email hardcoded in `contact-us/page.tsx:13` metadata. → `siteConfig.legacySiteUrl`, `siteConfig.links.knowledgeBase`.

### 🟡 Lower payoff
- **JSON-LD builders duplicated** — `location-page.tsx:51-62`, `service-page.tsx:34-45`, `(site)/page.tsx:15`, `breadcrumbs.tsx:15` → `organizationJsonLd()`, `serviceJsonLd()`, `breadcrumbJsonLd()` in `lib/json-ld.ts`.
- **Portal targets built inline** — `registered-office-address/[...slug]/page.tsx:43-46`, `virtual-offices/[city]/page.tsx:79-83` → `registeredOnboarding(plan)`, `cityOnboarding(city)` in `lib/portal.ts`.
- **Social icon list duplicated** — `menu-sheet.tsx:226-240`, `site-footer.tsx:84-95` → `<SocialLinks variant>`.
- **Address formatting duplicated** — `location-card.tsx:64`, `location-hero.tsx:61` → `formatSiteAddress()`.
- **Two import paths for `cn`** — `ui/*` imports from `"cn"`, everything else from `@/lib/utils` (a re-export). Pick one.
- **Naming / structure** — `locations/city-chooser.tsx` exports `LocationGrid` (rename file); `illustrations.tsx` and `portal-link.tsx` loose at `components/` root; `menu-sheet.tsx:165-176` primary/secondary nav share stagger indices.

### Dead code
- `components/ui/badge.tsx` and `components/motion/count-up.tsx` — never imported.
- `NavigationMenuViewport`, `NavigationMenuIndicator`, `navigationMenuTriggerStyle`, `SheetFooter` — shadcn leftovers, unused.
- `LocationHero` `ctaLabel` prop (`location-hero.tsx:20,31`) — never passed.
- `SiteConfig` type (`config/site.ts:48`) — unused.
- `shadcn` is a CLI in `dependencies`; only its `tailwind.css` is imported (`globals.css:3`) → move to `devDependencies`.

### Colors
No hardcoded hex in Tailwind classes. Remaining: `site-header.tsx:25` arbitrary shadow `rgb(71_85_101/0.35)` (= primary) → `--shadow-header` token; `manifest.ts`, `layout.tsx:40` (`themeColor`), `opengraph-image.tsx` need literal hex → one `brandColors` constant mirroring `globals.css`; `bg-white` ×7 → `bg-background` / `bg-card`.

---

## 5. Accessibility

Contrast ratios computed from `:root` tokens in `globals.css`.

### 🟠 Medium
| Location | Issue | Fix |
| --- | --- | --- |
| `sections/testimonials.tsx:55,70` | Section has `aria-label` but no h2; cards use h3 → home and `/reviews` jump h1 → h3 | Visually hidden h2, or cards as `<p>` |
| `young-entrepreneur-scheme/page.tsx:51` | Prize card titles are h2 at the same level as the real section heading (`:60`) | Add section h2, cards → h3 |
| `layout/site-footer.tsx:144,148` | `text-white/60` on `bg-primary` = **3.91:1** at `text-xs` (fails AA 4.5) | `text-white/80` (5.54:1) |
| `locations/location-hero.tsx:88` | `text-muted-foreground` on `bg-green-background` = **4.46:1** | `text-primary` (6.97:1) or darken token |
| `ui/button.tsx:7`, `globals.css:109`, `menu-sheet.tsx:41` | Focus ring `ring-ring/50` ≈ 2.34:1 (< 3:1); menu rows use `outline-none` with colour-only focus | Solid `ring-ring` + `ring-offset-2`; add outline to `rowClass` |

### 🟡 Low
- Price badge text 9–10 px (`location-card.tsx:27,29`) → at least `text-xs`.
- `location-card.tsx:43` image link has `tabIndex={-1}` but is still in the a11y tree → screen readers announce the link twice; add `aria-hidden`.
- Carousel arrows 28 px (`testimonials.tsx:29`) → `size-11` touch target.
- Truncated card text (`truncate` / `line-clamp-2`) with no way to read the rest.

### ✅ Fine
Skip link + `<main id="main">` · proper landmarks · one h1 per page · reduced motion respected (CSS + `useReducedMotion`) · icon-only controls labelled · body text contrast passes (primary/white 7.53, primary/green 4.82) · pricing toggle is a real radio fieldset.

---

## 6. SEO

### 🔴 High
- **Shared OG/Twitter metadata** — see [§2](#2-nextjs--react-practices).
- **Indexable test site + localhost canonical fallback** — see [§1 Low](#-low). Treat as high for SEO: a build without `NEXT_PUBLIC_SITE_URL` ships `localhost` canonicals and sitemap.

### 🟠 Medium
- **Thin JSON-LD** — `(site)/page.tsx:14-23` Organization lacks `logo`, `address` (both offices are in `siteConfig`), `sameAs` (socials in `siteConfig`), `aggregateRating` (Trustpilot). No `LocalBusiness`/`PostalAddress` anywhere. `location-page.tsx:62` `Offer` lacks a monthly `priceSpecification` (`unitText: "MON"`) and `url`.
- **Titles** — `our-story/page.tsx:12` repeats the brand ("… | Virtually There" twice); city titles (`virtual-offices/[city]/page.tsx:32`) and registered-address titles (`[...slug]/page.tsx:27`) run 75–90 chars with the suffix → aim for ≤ 60 or use `title.absolute`.

### 🟡 Low
- Trailing-slash-less internal hrefs (see §3).
- Sitemap has no `lastModified`.

---

## 7. Design & performance

### 🟠 Medium
- **CTA styles inconsistent** — "Buy now" is `brand` (green) in `site-header.tsx:44`, `location-hero.tsx:94`, `registered-office-address/page.tsx:40` but `default` (slate) in `location-card.tsx:72`; hero CTAs mix `default` and `brand`. → Rule: `brand` for purchase/conversion, `default`/`outline` for navigation.
- **Sticky header covers anchor targets** — `globals.css:112` `scroll-pt-36` (144 px) but banner + header + call bar is ~152–168 px, so `#sites-title` CTAs land under the header. → `scroll-pt-44` or a CSS variable for the stack height. The sticky chrome also uses ~20 % of a phone viewport; consider letting the call bar scroll away.

### 🟡 Low
- **Heading weight/size inconsistency** — most h2s inherit weight 400, some add `font-bold`, `what-is.tsx:9` sets `font-normal`; one-off `text-3xl` h2s in `virtual-offices/page.tsx:41`, `pricing-plans.tsx:144`. Solved by `<SectionHeading>`.
- **Large image** — `public/locations/newmarket.png` is 546 KB (850×850 photo as PNG) → convert to WebP/JPEG. ~10 other JPGs at 100–175 KB could be re-encoded.
- **Phone display format** — `config/site.ts:16` "+44 (0) 203 476 7792" → UK convention "+44 (0)20 3476 7792".

---

## Suggested order of work

1. **Quick wins (< 1 h):** root OG metadata fix · noindex non-production + fail build on missing env vars · `id="main"` on 404 · footer/hero contrast · focus ring · remove duplicate `/customer-portal/` · trailing slashes · `scroll-pt` · dead code removal.
2. **Performance:** drop `Reveal` from hero h1/LCP image · replace deprecated `priority` · shrink header/testimonials client boundaries · convert `newmarket.png`.
3. **Security hardening:** query-param allowlist in `portal.ts` · `headers()` with CSP/HSTS/frame-ancestors · tighten Claude workflow, pin actions.
4. **Refactors:** single source for cities/services/prices (fixes the "13 vs 15 cities" bug) · `SectionHeading` / `HeroShell` / `ExplainerSection` / JSON-LD builders · richer structured data.

---

_Corrections made during verification: the `cn` npm package was flagged as a possible typosquat — it is shadcn-ui's official class-merging package (`github.com/shadcn-ui/cn`) and is used via `src/lib/utils.ts`; not an issue._
