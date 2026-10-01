import type { IllustrationName } from "@/components/illustrations";
import type { IconFeatureItem } from "@/components/sections/icon-features";
import { pickFaqs } from "@/content/faqs";

export const hero = {
  title: "The UK’s leading virtual office you can trust",
  subtitle:
    "Get a professional UK business address from £10 a month, live in about 5 minutes. Need a registered office too? Add it whenever you’re ready.",
  cta: { label: "View our locations", href: "#locations" },
};

export const ratings = {
  trustpilot: { label: "Excellent" },
  google: { score: 4.6 },
};

export const usps: IconFeatureItem[] = [
  {
    title: "Companies House compliant",
    body: "Fully verified with HMRC and AML checks, so you can register with confidence.",
    icon: "/icons/uk.svg",
  },
  {
    title: "No setup fees",
    body: "We absorb the setup costs. You just pay your monthly plan.",
    icon: "/icons/nofees.svg",
  },
  {
    title: "Customer portal",
    body: "See your mail, calls and subscription any time, day or night.",
    icon: "/icons/portal.svg",
  },
  {
    title: "Cancel any time",
    body: "Rolling monthly contracts mean you’re never locked in.",
    icon: "/icons/bills.svg",
  },
];

export const whatIs = {
  title: "What is a virtual office?",
  paragraphs: [
    "A virtual office gives your business a credible address without the expense of leasing a physical space. It’s a natural fit for startups, freelancers and sole traders.",
    "We receive your post and forward or scan it on your schedule, and we can answer your calls too, so nothing slips through. Everything is visible in your customer portal.",
    "Onboarding happens entirely online, and most customers have their new address within minutes.",
  ],
};

export const popularLocations = {
  title: "Most popular locations",
  intro: "Pick a business address in any of our 13 UK cities, from London to Belfast.",
  /** Site paths, see content/locations/sites.ts. */
  sites: ["london/mayfair", "birmingham", "manchester"],
};

export type Service = {
  title: string;
  body: string;
  cta: { label: string; href: string };
  illustration: IllustrationName;
  /** Render city links inline after the body copy. */
  showCities?: boolean;
};

export const serviceBlocks: Service[] = [
  {
    title: "Virtual Offices",
    body: "Give customers an address that inspires confidence. Choose from sought-after locations right across the UK:",
    cta: { label: "View virtual offices", href: "/virtual-offices/" },
    illustration: "address",
    showCities: true,
  },
  {
    title: "Registered Office Address",
    body: "Add a registered office to your plan and use it for Companies House and HMRC filings, while your home address stays off the public record.",
    cta: { label: "Find out more", href: "/registered-office-address/" },
    illustration: "registered",
  },
  {
    title: "Virtual Landline",
    body: "Get a local business number that rings straight through to your mobile, so you sound established wherever you’re working from.",
    cta: { label: "Find out more", href: "/virtual-landline/" },
    illustration: "landline",
  },
  {
    title: "24/7 Call Answering",
    body: "Never miss another lead. Our receptionists answer for more than 12,000 UK businesses around the clock. Ask for a quote and try it free for 14 days.",
    cta: { label: "Get a quote", href: "/call-answering-services/" },
    illustration: "calls",
  },
];

// Mock Trustpilot reviews for the demo; swap for the real Trustpilot widget before launch.
export const testimonials = {
  rating: { score: 4.5, count: 550 },
  items: [
    {
      title: "Always have a great experience with the team",
      body: "Always have a great experience with the customer service team - Amin in particular is always quick to help and sort out anything we need.",
      author: "Louise Bowran",
      date: "3 days ago",
    },
    {
      title: "Virtually There the perfect virtual office",
      body: "I've been using Virtually There for a few years now and have been very happy with the service. Post is scanned promptly and the portal is easy to use.",
      author: "Jan Ralph",
      date: "3 days ago",
    },
    {
      title: "Amazing service so far",
      body: "Amazing service so far! Been 5 months and super great for my application.",
      author: "SV",
      date: "6 days ago",
    },
    {
      title: "Great team",
      body: "Great team, great service. A real pleasure to work with! Thanks to Amin for all the help getting set up.",
      author: "Thomas Simpson",
      date: "24 September",
    },
    {
      title: "Great customer service",
      body: "Great customer service, my call was answered immediately and issue resolved within minutes.",
      author: "Michael",
      date: "22 September",
    },
    {
      title: "Reliable and professional",
      body: "Mail is always handled quickly and the team keep me updated. Exactly what a small business needs.",
      author: "Priya Shah",
      date: "18 September",
    },
    {
      title: "Easy setup, great value",
      body: "Signed up in minutes and had my registered address the same day. Excellent value for money.",
      author: "Daniel Hughes",
      date: "12 September",
    },
  ],
};

export const faqs = pickFaqs([
  "whatIsVirtualOffice",
  "registerCompany",
  "contract",
  "googleBusiness",
  "marketing",
  "setupTime",
  "proofOfId",
]);

export const signOff = {
  eyebrow: "We’re here to help",
  title: "Still have questions?",
  body: "Don’t be shy. Our UK-based team is happy to talk you through the options and find the right fit for your business.",
  cta: { label: "Send us a message", href: "/contact-us/" },
};
