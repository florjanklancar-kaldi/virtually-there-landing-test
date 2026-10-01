/**
 * A city page is either a single site (rendered as a location page) or a chooser
 * that lists several sites, possibly from other cities (West Yorkshire).
 */
export type City = {
  slug: string;
  name: string;
  /** Site paths (see sites.ts) shown on this page. One entry = single-site page. */
  sites: string[];
  /** City preselected in portal onboarding for multi-site pages. */
  onboardingCity?: string;
};

export const cities: City[] = [
  {
    slug: "london",
    name: "London",
    onboardingCity: "london",
    sites: [
      "london/london-central",
      "london/mayfair",
      "london/the-city-london",
      "london/london-bridge",
    ],
  },
  { slug: "manchester", name: "Manchester", sites: ["manchester"] },
  { slug: "birmingham", name: "Birmingham", sites: ["birmingham"] },
  { slug: "leeds", name: "Leeds", sites: ["leeds"] },
  { slug: "bradford", name: "Bradford", sites: ["bradford"] },
  { slug: "huddersfield", name: "Huddersfield", sites: ["huddersfield"] },
  {
    slug: "west-yorkshire",
    name: "West Yorkshire",
    sites: ["leeds", "bradford", "huddersfield"],
  },
  { slug: "liverpool", name: "Liverpool", sites: ["liverpool"] },
  {
    slug: "bristol",
    name: "Bristol",
    onboardingCity: "bristol",
    sites: ["bristol/st-nicholas-street", "bristol/whiteladies-road-clifton"],
  },
  { slug: "edinburgh", name: "Edinburgh", sites: ["edinburgh"] },
  {
    slug: "glasgow",
    name: "Glasgow",
    onboardingCity: "glasgow",
    sites: ["glasgow/newton-place", "glasgow/west-george-street"],
  },
  { slug: "cardiff", name: "Cardiff", sites: ["cardiff"] },
  { slug: "belfast", name: "Belfast", sites: ["belfast"] },
  {
    slug: "newcastle-upon-tyne",
    name: "Newcastle upon Tyne",
    sites: ["newcastle-upon-tyne"],
  },
  { slug: "newmarket", name: "Cambridge", sites: ["newmarket"] },
];
