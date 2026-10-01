export const siteConfig = {
  name: "Virtually There",
  tagline: "The UK virtual office you can trust",
  description:
    "A professional UK business address from £10/month, set up online in minutes. Mail handling, registered office addresses and call answering for startups, freelancers and growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3003",
  /** Customer portal (login + onboarding). Defaults to staging; set the env var in production. */
  portalUrl:
    process.env.NEXT_PUBLIC_PORTAL_URL || "https://app.staging.virtually-there.net",
  locale: "en_GB",
  legalName: "Virtually There Offices Limited",
  contact: {
    email: "team@virtually-there.net",
    // biome-ignore lint/security/noSecrets: public business phone number.
    phone: "+442034767792",
    phoneDisplay: "+44 (0) 203 476 7792",
  },
  offices: [
    {
      label: "London",
      lines: [
        "4th Floor",
        "Silverstream House",
        "45 Fitzroy St",
        "Fitzrovia",
        "London",
        "W1T 6EB",
      ],
    },
    {
      label: "Bristol",
      lines: ["2.1a Temple Studios", "Temple Gate", "Bristol", "BS1 6QA"],
    },
  ],
  legal: {
    mlrNumber: "XYML00000174379",
    icoReference: "ZA375990",
  },
  links: {
    trustpilot: "https://uk.trustpilot.com/review/virtually-there.net",
    // biome-ignore lint/security/noSecrets: public URL.
    facebook: "https://www.facebook.com/VirtuallyThereUK/",
    linkedin: "https://www.linkedin.com/company/virtually-there-uk/about/",
    instagram: "https://www.instagram.com/virtuallythereuk/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
