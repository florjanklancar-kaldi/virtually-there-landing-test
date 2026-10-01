import type { IconFeatureItem } from "@/components/sections/icon-features";
import type { FaqKey } from "@/content/faqs";
import type { Site, SiteExtra } from "@/content/locations/sites";

export type LocationMode = "office" | "registered";

const baseFeatures = [
  "10 free mail scans sent to your inbox every month",
  "Cancel any time on a monthly plan",
  "24/7 account management in the customer portal",
];

const extraFeatures: Record<SiteExtra, string> = {
  meetingRooms: "Meeting rooms available to hire (extra cost)",
  parcels: "Parcels accepted",
};

export function locationFeatures(site: Site, mode: LocationMode): string[] {
  if (mode === "registered") {
    return [
      "2 director’s service addresses included (£2 each thereafter)",
      ...baseFeatures,
      "No set-up fee",
    ];
  }
  return [...baseFeatures, ...(site.extras ?? []).map((extra) => extraFeatures[extra])];
}

export function locationIntro(site: Site, mode: LocationMode): string {
  return mode === "registered"
    ? `Register your company at ${site.street} with Companies House and HMRC, and use it as your trading address for your website, marketing and invoices. Included as standard:`
    : `Get a ${site.city} business address on ${site.street} with no set-up fee. Included as standard:`;
}

export function locationUsps(place: string): IconFeatureItem[] {
  return [
    {
      title: "No set-up fees",
      body: "We cover the set-up costs, so your budget goes on running your business.",
      icon: "/icons/nofees.svg",
    },
    {
      title: "Free mail scanning",
      body: "10 free scans to your inbox every month, then £1 per item.",
      icon: "/icons/mail.svg",
    },
    {
      title: "Customer portal",
      body: `Manage your ${place} address online with 24/7 access.`,
      icon: "/icons/portal.svg",
    },
    {
      title: "Cancel any time",
      body: "Monthly rolling plans give you the freedom to leave whenever you like.",
      icon: "/icons/cancel.svg",
    },
  ];
}

export const locationFaqs: Record<LocationMode, FaqKey[]> = {
  office: [
    "whatIsVirtualOffice",
    "googleBusiness",
    "registerCompany",
    "virtualVsRegistered",
    "setupTime",
    "proofOfId",
    "monthlyBill",
  ],
  registered: [
    "virtualVsRegistered",
    "directorsServiceAddress",
    "registerCompany",
    "setupTime",
    "proofOfId",
    "contract",
  ],
};
