/** Standalone registered office address pages, each backed by a virtual office site. */
export type RegisteredAddress = {
  /** URL path under /registered-office-address/. */
  path: string;
  /** Site path (see sites.ts) providing the address and photo. */
  site: string;
  label: string;
  /** Portal plan id for the registered-only package, e.g. "ra:london_fitzrovia". */
  plan: string;
};

export const registeredAddresses: RegisteredAddress[] = [
  {
    path: "london/fitzrovia",
    site: "london/london-central",
    label: "Fitzroy Street",
    plan: "ra:london_fitzrovia",
  },
  {
    path: "london/lombard-street",
    site: "london/london-bridge",
    label: "Lombard Street",
    plan: "ra:london_bridge",
  },
  {
    path: "glasgow/newton-place",
    site: "glasgow/newton-place",
    label: "Newton Place",
    plan: "ra:glasgow_newton_place",
  },
  {
    path: "glasgow/west-george-street",
    site: "glasgow/west-george-street",
    label: "West George Street",
    plan: "ra:glasgow_west_george_street",
  },
  {
    path: "liverpool",
    site: "liverpool",
    label: "Liverpool",
    plan: "ra:liverpool_jamaica_street",
  },
];

/** City cards on the registered office hub (skyline photos). */
export const registeredCities = [
  {
    name: "London",
    href: "/virtual-offices/london/",
    image: "/locations/skyline-london.webp",
  },
  {
    name: "Manchester",
    href: "/virtual-offices/manchester/",
    image: "/locations/skyline-manchester.webp",
  },
  {
    name: "Birmingham",
    href: "/virtual-offices/birmingham/",
    image: "/locations/skyline-birmingham.webp",
  },
  {
    name: "Bristol",
    href: "/virtual-offices/bristol/",
    image: "/locations/skyline-bristol.webp",
    price: 21,
  },
  {
    name: "Belfast",
    href: "/virtual-offices/belfast/",
    image: "/locations/skyline-belfast.jpg",
  },
  {
    name: "Edinburgh",
    href: "/virtual-offices/edinburgh/",
    image: "/locations/skyline-edinburgh.webp",
  },
  {
    name: "Glasgow",
    href: "/virtual-offices/glasgow/",
    image: "/locations/skyline-glasgow.webp",
  },
  {
    name: "Liverpool",
    href: "/registered-office-address/liverpool/",
    image: "/locations/skyline-liverpool.webp",
  },
  {
    name: "Cardiff",
    href: "/virtual-offices/cardiff/",
    image: "/locations/skyline-cardiff.webp",
  },
  {
    name: "Newcastle",
    href: "/virtual-offices/newcastle-upon-tyne/",
    image: "/locations/skyline-newcastle.webp",
  },
] as const;

export const REGISTERED_FROM = 17;

/**
 * Legacy registered-address URLs that the live site redirects to virtual office pages.
 * Kept as permanent redirects so existing links and rankings carry over.
 */
export const registeredRedirects: Record<string, string> = {
  belfast: "belfast",
  birmingham: "birmingham",
  bristol: "bristol",
  cardiff: "cardiff",
  edinburgh: "edinburgh",
  glasgow: "glasgow",
  london: "london",
  "london/farringdon": "london/the-city-london",
  "london/mayfair": "london/mayfair",
  manchester: "manchester",
  newcastle: "newcastle-upon-tyne",
  "registered-address-bradford": "bradford",
  "registered-address-huddersfield": "huddersfield",
};
