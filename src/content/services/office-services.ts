import type { IconFeature, ServiceContent } from "@/content/services/types";
import { portal } from "@/lib/portal";

const buy = { label: "Get started", portal: portal.onboarding };

const portalAccess: IconFeature = {
  title: "Customer portal",
  body: "Manage your mail, services and billing online, 24/7.",
  icon: "/icons/portal.svg",
};
const cancelAnytime: IconFeature = {
  title: "Cancel any time",
  body: "Monthly rolling plans, so you’re never locked in.",
  icon: "/icons/cancel.svg",
};

export const officeServices: ServiceContent[] = [
  {
    slug: "virtual-office-services",
    name: "Virtual Office Services",
    summary: "Address, mail, calls and more, managed in one place.",
    metaTitle: "Virtual Office Services | Address, Mail & Calls",
    metaDescription:
      "Everything your business needs beyond an address: virtual offices, registered addresses, mail handling, call answering and a 24/7 customer portal.",
    title: "Supporting your business beyond the address",
    intro:
      "Start with a professional UK address from £10 a month, then add the services you need: registered office, mail handling, call answering and more.",
    illustration: "jetpack",
    cta: { label: "View our locations", href: "/virtual-offices/" },
    explainer: {
      title: "Everything managed in one place",
      paragraphs: [
        "Every service you take with us lives in a single customer portal, so your post, calls, invoices and subscriptions are always a click away.",
      ],
      illustration: "hero",
    },
    features: [
      {
        title: "No set-up fees",
        body: "We cover the set-up costs for every plan.",
        icon: "/icons/payg.svg",
      },
      {
        title: "Free mail scanning",
        body: "10 free scans a month, then £1 per item.",
        icon: "/icons/mail.svg",
      },
      portalAccess,
      cancelAnytime,
    ],
    related: [
      "registered-office-address",
      "mail-handling-services",
      "call-answering-services",
      "customer-portal",
    ],
    faqs: [
      "whatIsVirtualOffice",
      "virtualVsRegistered",
      "directorsServiceAddress",
      "transferCalls",
    ],
  },
  {
    slug: "mail-handling-services",
    name: "Mail Handling",
    summary: "Post received, scanned and forwarded on request.",
    metaTitle: "Mail Handling Services | Secure Business Mail Management",
    metaDescription:
      "Secure business mail handling: post received at your Virtually There address, scanned to your portal and forwarded on request.",
    title: "Business mail, handled",
    intro:
      "Your post arrives at your Virtually There address, gets scanned to your portal and forwarded whenever you need the original.",
    illustration: "hero",
    cta: buy,
    explainer: {
      title: "Business mail still matters",
      paragraphs: [
        "Contracts, tax letters and bank post still arrive on paper. We receive and log every item securely, scan it the same day and keep it safe until you decide what happens next.",
      ],
      illustration: "whatIs",
    },
    features: [
      {
        title: "Receive mail securely",
        body: "Post is received and logged at your business address.",
        icon: "/icons/mail.svg",
      },
      {
        title: "View mail online",
        body: "Open scanned letters wherever you’re working.",
        icon: "/icons/portal.svg",
      },
      {
        title: "Forward when needed",
        body: "Have originals sent to the address of your choice.",
        icon: "/icons/cancel.svg",
      },
      {
        title: "Stay in control",
        body: "Manage everything from your portal, 24/7.",
        icon: "/icons/calls.svg",
      },
    ],
    related: [
      "virtual-offices",
      "registered-office-address",
      "call-answering-services",
      "customer-portal",
    ],
    faqs: ["viewMail", "mobilePortal", "mailSecurity", "extraMail"],
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    summary: "Mail, services and billing online, 24/7.",
    metaTitle: "Customer Portal | Manage Your Virtual Office Online",
    metaDescription:
      "Manage your virtual office online: view scanned mail, update services, download invoices and control your account 24/7.",
    title: "Your virtual office, in your pocket",
    intro:
      "The Virtually There portal puts your mail, services and billing in one place, available around the clock on any device.",
    illustration: "hero",
    cta: { label: "Log in", portal: portal.login },
    explainer: {
      title: "Manage your account any time",
      paragraphs: [
        "Review your post, upgrade or add services, update your details and download invoices, all without picking up the phone.",
      ],
      illustration: "jetpack",
    },
    features: [
      {
        title: "Manage your mail",
        body: "View incoming post and scanned documents from anywhere.",
        icon: "/icons/mail.svg",
      },
      {
        title: "Update your services",
        body: "Change plans, billing details and settings in one place.",
        icon: "/icons/portal.svg",
      },
      {
        title: "View your documents",
        body: "Invoices and account documents, ready to download.",
        icon: "/icons/nofees.svg",
      },
      {
        title: "Stay in control 24/7",
        body: "Access your account whenever you need it.",
        icon: "/icons/calls.svg",
      },
    ],
    faqs: ["viewMail", "addRegisteredLater", "mobilePortal", "invoices"],
  },
];
