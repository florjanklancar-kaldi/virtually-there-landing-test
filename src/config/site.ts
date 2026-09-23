export const siteConfig = {
  name: "Virtually There",
  tagline: "Be there, without being there.",
  description:
    "Virtually There is a placeholder description. Replace it with a clear, one-sentence value proposition for your product.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_US",
  links: {
    x: "https://x.com",
    github: "https://github.com",
    email: "mailto:hello@example.com",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
