import type { LucideIcon } from "lucide-react";
import {
  Building2Icon,
  HeadsetIcon,
  LandmarkIcon,
  MailboxIcon,
  PhoneForwardedIcon,
} from "lucide-react";

const SITE = "https://virtually-there.net";

export type NavLink = { label: string; href: string };

export const cities: NavLink[] = [
  { label: "London", href: "/virtual-offices/london/" },
  { label: "Mayfair", href: "/virtual-offices/london/mayfair/" },
  { label: "Manchester", href: "/virtual-offices/manchester/" },
  { label: "Leeds", href: "/virtual-offices/leeds/" },
  { label: "Birmingham", href: "/virtual-offices/birmingham/" },
  { label: "Bristol", href: "/virtual-offices/bristol/" },
  { label: "Belfast", href: "/virtual-offices/belfast/" },
  { label: "Edinburgh", href: "/virtual-offices/edinburgh/" },
  { label: "Glasgow", href: "/virtual-offices/glasgow/" },
  { label: "Liverpool", href: "/virtual-offices/liverpool/" },
  { label: "Cardiff", href: "/virtual-offices/cardiff/" },
  { label: "Newcastle", href: "/virtual-offices/newcastle-upon-tyne/" },
  { label: "Bradford", href: "/virtual-offices/bradford/" },
  { label: "Huddersfield", href: "/virtual-offices/huddersfield/" },
];

export const allLocationsHref = "/virtual-offices/";

export const services: (NavLink & { description: string; icon: LucideIcon })[] = [
  {
    label: "Virtual Office",
    href: "/virtual-offices/",
    description: "A prestigious UK business address with mail handling.",
    icon: Building2Icon,
  },
  {
    label: "Registered Office Address",
    href: "/registered-office-address/",
    description: "Register with Companies House and keep your home private.",
    icon: LandmarkIcon,
  },
  {
    label: "Mail Handling Services",
    href: "/mail-handling-services/",
    description: "Scanned, forwarded or collected: your post, your way.",
    icon: MailboxIcon,
  },
  {
    label: "Call and Landline Services",
    href: "/call-answering-services/",
    description: "Local numbers and friendly call answering, 24/7.",
    icon: PhoneForwardedIcon,
  },
  {
    label: "Customer Portal",
    href: "/customer-portal/",
    description: "Manage mail, calls and billing in one place.",
    icon: HeadsetIcon,
  },
];

export const primaryNav: NavLink[] = [
  { label: "Customer Portal", href: "/customer-portal/" },
  { label: "Pricing", href: "/pricing/" },
];

export const secondaryNav: NavLink[] = [
  { label: "Our Story", href: "/our-story/" },
  { label: "Partnerships", href: "/partnerships/" },
  {
    label: "Knowledge Hub",
    href: "https://knowledge-base.virtually-there.net/knowledge",
  },
  { label: "News & Blogs", href: `${SITE}/resources/` },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Industries", href: `${SITE}/industry/` },
  { label: "Reviews", href: "/reviews/" },
];

export const footerNav = {
  services: [
    { label: "Virtual Office", href: "/virtual-offices/" },
    { label: "Registered Office Address", href: "/registered-office-address/" },
    { label: "Virtual Landline", href: "/virtual-landline/" },
    { label: "Call Answering", href: "/call-answering-services/" },
    { label: "Virtual Receptionist", href: "/virtual-receptionist/" },
    { label: "Virtual Switchboard", href: "/virtual-switchboard/" },
    { label: "Virtual PA", href: "/virtual-personal-assistant/" },
  ],
  about: [
    { label: "Our Story", href: "/our-story/" },
    { label: "Onboarding", href: "/onboarding/" },
    { label: "Partnerships", href: "/partnerships/" },
    { label: "News & Blogs", href: `${SITE}/resources/` },
    { label: "FAQs", href: "/faqs/" },
    { label: "Young Entrepreneur Scheme", href: "/young-entrepreneur-scheme/" },
    { label: "Contact Us", href: "/contact-us/" },
  ],
  legal: [
    { label: "Privacy Policy", href: `${SITE}/privacy-technical-data-governance/` },
    { label: "Cookie Policy", href: `${SITE}/cookie-technical/` },
    { label: "Terms", href: `${SITE}/terms-of-service-virtually-there/` },
  ],
} satisfies Record<string, NavLink[]>;
