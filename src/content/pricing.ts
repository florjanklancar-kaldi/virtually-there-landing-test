export type BillingPeriod = "annual" | "monthly";

export type PlanFeature = { label: string; detail: string };

/** Rows of the plan comparison; each plan says which it includes. */
export const planFeatures = {
  companiesHouse: {
    label: "Use to register with Companies House",
    detail:
      "Register your company at our address and keep your home address private. For statutory mail from Companies House, HMRC and the ICO.",
  },
  directors: {
    label: "Director’s service address",
    detail:
      "Keep your directors’ and PSCs’ home addresses off the public register. Two included, then £2 per director.",
  },
  marketing: {
    label: "Use on your website and marketing",
    detail: "Show the address anywhere and receive everyday business post.",
  },
  scans: {
    label: "10 free mail scans per month",
    detail: "Included with every address plan; £1 per item after that.",
  },
  cancel: {
    label: "Cancel any time",
    detail:
      "Monthly plans cancel any time. Annual plans save more and cancel at renewal.",
  },
} satisfies Record<string, PlanFeature>;

export type PlanFeatureKey = keyof typeof planFeatures;

/** Display order of the plan comparison rows. */
export const planFeatureOrder = [
  "companiesHouse",
  "directors",
  "marketing",
  "scans",
  "cancel",
] as const satisfies readonly PlanFeatureKey[];

export type Plan = {
  name: string;
  description: string;
  /** Prices excluding VAT. */
  price: Record<BillingPeriod, number>;
  includes: Record<BillingPeriod, PlanFeatureKey[]>;
  /** Portal onboarding service type. */
  portalType: "vo" | "vora";
  featured?: boolean;
};

const addressBasics: PlanFeatureKey[] = ["marketing", "scans"];

export const plans: Plan[] = [
  {
    name: "Virtual Office",
    portalType: "vo",
    description:
      "A professional trading address for your website, invoices and marketing.",
    price: { annual: 120, monthly: 15 },
    includes: { annual: addressBasics, monthly: [...addressBasics, "cancel"] },
  },
  {
    name: "Registered Virtual Office",
    portalType: "vora",
    description:
      "Everything in Virtual Office, plus a registered and director’s service address.",
    price: { annual: 234, monthly: 23.5 },
    includes: {
      annual: ["companiesHouse", "directors", ...addressBasics],
      monthly: ["companiesHouse", "directors", ...addressBasics, "cancel"],
    },
    featured: true,
  },
];

export const extras = [
  {
    name: "Virtual Landline",
    description:
      "A professional business number that forwards calls to the phone of your choice.",
    price: { monthly: 5, annual: 72 },
  },
  {
    name: "Unlimited Mail Scanning",
    description: "For businesses expecting more than 10 items of post a month.",
    price: { monthly: 10, annual: 96 },
  },
  {
    name: "Post Forwarding",
    description:
      "Unlimited forwarding of your post, saving on postage and handling fees.",
    price: { monthly: 18, annual: 180 },
  },
] satisfies { name: string; description: string; price: Record<BillingPeriod, number> }[];

/** Saving from paying annually instead of twelve monthly payments. */
export function annualSaving(plan: Plan): number {
  return plan.price.monthly * 12 - plan.price.annual;
}
