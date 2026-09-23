export const siteConfig = {
  name: "Virtually There",
  tagline: "The UK's leading virtual office you can trust",
  description:
    "A professional UK business address from £15/month, set up in 5 minutes. Add a registered address whenever you need it.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_GB",
  phone: "+44 (0) 203 476 7792",
  phoneHref: "tel:+442034767792",
  links: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    x: "https://x.com",
    email: "mailto:team@virtually-there.net",
  },
  nav: [
    {
      label: "Virtual Office",
      href: "#virtual-offices",
      items: [
        { label: "Virtual Office", href: "#virtual-offices" },
        { label: "Registered Office Address", href: "#registered-office" },
        { label: "Mail Handling Services", href: "#virtual-offices" },
        { label: "Call and Landline Services", href: "#call-answering" },
        { label: "Customer Portal", href: "#customer-portal" },
      ],
    },
    {
      label: "Virtual Services",
      href: "#services",
      items: [
        { label: "Virtual Landline", href: "#virtual-landline" },
        { label: "24/7 Call Answering", href: "#call-answering" },
        { label: "Virtual Receptionist", href: "#call-answering" },
        { label: "Virtual PA", href: "#call-answering" },
      ],
    },
    { label: "Customer Portal", href: "#customer-portal" },
    { label: "Pricing", href: "#pricing" },
  ],
  locations: [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Glasgow",
    "Liverpool",
    "Bristol",
    "Edinburgh",
    "Cardiff",
    "Newcastle",
    "Bradford",
    "Belfast",
    "Huddersfield",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
