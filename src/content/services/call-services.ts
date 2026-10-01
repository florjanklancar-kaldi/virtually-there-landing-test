import type { IconFeature, ServiceContent } from "@/content/services/types";

const quote = { label: "Get a quote", href: "/contact-us/" };

const ukReceptionists: IconFeature = {
  title: "UK-based receptionists",
  body: "Every call is handled by our own team in the UK.",
  icon: "/icons/uk.svg",
};
const cancelAnytime: IconFeature = {
  title: "Cancel any time",
  body: "Monthly rolling plans, so you’re never locked in.",
  icon: "/icons/cancel.svg",
};
const allHours: IconFeature = {
  title: "24/7 call answering",
  body: "Day, night and weekends: no enquiry goes unanswered.",
  icon: "/icons/answering.svg",
};

export const callServices: ServiceContent[] = [
  {
    slug: "call-answering-services",
    name: "Call Answering",
    summary: "UK receptionists answering your calls 24/7.",
    metaTitle: "UK Call Answering Services | Free Trial",
    metaDescription:
      "24/7 UK-based call answering for small businesses. Virtual receptionists, switchboards, PAs and landlines with a 14-day free trial.",
    title: "Call answering that never clocks off",
    intro:
      "Friendly UK receptionists answer in your business name, around the clock. Choose the level of support you need, from a simple landline to a dedicated PA.",
    illustration: "highfive",
    cta: quote,
    badges: [
      "14-day free trial",
      "Set up within 24 hours",
      "12,000+ businesses supported",
    ],
    explainer: {
      title: "24/7 call answering",
      paragraphs: [
        "Missed calls are missed opportunities. Our receptionists pick up every call, take detailed messages or transfer callers straight to you.",
        "You decide how calls are handled, and change it any time from your portal.",
      ],
      illustration: "whisper",
    },
    features: [
      ukReceptionists,
      allHours,
      {
        title: "Never miss a call",
        body: "A whole reception team backs up your receptionist, so the line is always covered.",
        icon: "/icons/calls.svg",
      },
      cancelAnytime,
    ],
    related: [
      "virtual-receptionist",
      "virtual-landline",
      "virtual-switchboard",
      "virtual-personal-assistant",
    ],
    faqs: ["receptionTypes", "ukBased", "keepNumber", "transferCalls", "busyOnly"],
  },
  {
    slug: "virtual-receptionist",
    name: "Virtual Receptionist",
    summary: "Calls answered in your business name, with messages sent to you.",
    metaTitle: "Virtual Receptionist UK | Free 14-Day Trial",
    metaDescription:
      "A UK-based virtual receptionist answering your calls in your business name. Pay as you go, cancel any time, with a free 14-day trial.",
    title: "A virtual receptionist for your business",
    intro:
      "Give every caller a warm, professional welcome without hiring in-house. We answer as you, take messages and put urgent calls through.",
    illustration: "whisper",
    cta: { label: "Start your free trial", href: "/contact-us/" },
    badges: ["Free 14-day trial", "Set up within 24 hours"],
    explainer: {
      title: "What is a virtual receptionist?",
      paragraphs: [
        "A virtual receptionist is a remote member of your front-of-house team. Calls to your number are answered by a trained receptionist using your script and greeting.",
        "You get the polish of a staffed reception desk at a fraction of the cost, with every message sent straight to you.",
      ],
      illustration: "highfive",
    },
    features: [
      ukReceptionists,
      {
        title: "14-day free trial",
        body: "Try the service properly before you commit.",
        icon: "/icons/nofees.svg",
      },
      {
        title: "Pay as you go",
        body: "Low-cost plans that grow with your call volume.",
        icon: "/icons/payg.svg",
      },
      cancelAnytime,
    ],
    faqs: ["receptionTypes", "ukBased", "keepNumber", "busyOnly", "transferCalls"],
  },
  {
    slug: "virtual-landline",
    name: "Virtual Landline",
    summary: "A local business number that rings through to your mobile.",
    metaTitle: "Virtual Landline | UK Business Phone Numbers from £6/month",
    metaDescription:
      "A local or national UK business number that diverts to your mobile. From £6 a month billed annually, plus low per-minute call charges.",
    title: "Dial up that first impression",
    intro:
      "Get a local or national business number that rings straight through to your mobile, so customers always reach a professional line.",
    illustration: "landline",
    cta: {
      label: "Buy now",
      portal: {
        path: "/onboarding",
        params: { billing: "year", plan: "vl", addon: "vl" },
      },
    },
    price: { from: 6, note: "/month + VAT, billed annually. Calls from 2p per minute." },
    explainer: {
      title: "What is a virtual landline?",
      paragraphs: [
        "It’s a real UK phone number that isn’t tied to a physical line. Calls are diverted to any phone you choose, wherever you’re working.",
        "Add our receptionists later if you want calls answered for you.",
      ],
      illustration: "jetpack",
    },
    features: [
      cancelAnytime,
      {
        title: "No set-up fees",
        body: "We cover the set-up, so you only pay for your plan.",
        icon: "/icons/nofees.svg",
      },
      {
        title: "Pay as you go",
        body: "From £6 a month plus per-minute charges from 2p.",
        icon: "/icons/payg.svg",
      },
      {
        title: "No big bills",
        body: "Some of the lowest prices on the market, with no hidden extras.",
        icon: "/icons/bills.svg",
      },
    ],
    faqs: ["landlineOnly", "callCost", "regionalNumber", "vat", "receptionTypes"],
  },
  {
    slug: "virtual-switchboard",
    name: "Virtual Switchboard",
    summary: "Every caller routed to the right person or team.",
    metaTitle: "Virtual Switchboard UK | Outsourced Call Routing",
    metaDescription:
      "An outsourced UK switchboard that answers and routes every call to the right person or team, 24/7. Free 14-day trial.",
    title: "A switchboard that routes every call",
    intro:
      "We answer, find out what the caller needs and connect them to the right person or department, so your team only takes the calls that matter.",
    illustration: "octopus",
    cta: { label: "Start your free trial", href: "/contact-us/" },
    badges: ["Free 14-day trial", "Set up within 24 hours"],
    explainer: {
      title: "How a virtual switchboard works",
      paragraphs: [
        "Give us your team directory and routing rules. Our switchboard operators greet callers in your company name and transfer them, or take a message when nobody’s free.",
      ],
      illustration: "whisper",
    },
    features: [
      ukReceptionists,
      allHours,
      {
        title: "Priced to fit",
        body: "Every business is different, so we quote a monthly price around your needs.",
        icon: "/icons/nofees.svg",
      },
      cancelAnytime,
    ],
    faqs: ["receptionTypes", "regionalNumber", "landlineOnly", "monthlyBill", "callCost"],
  },
  {
    slug: "virtual-personal-assistant",
    name: "Virtual PA",
    summary: "Help with calls, diary and appointments.",
    metaTitle: "Virtual PA Service UK | Live Transfers & Diary Management",
    metaDescription:
      "A UK-based virtual PA to manage your calls, diary and appointments, available 24/7. Tell us what you need for a tailored quote.",
    title: "You’re the boss. Leave the admin to your PA.",
    intro:
      "Your own virtual personal assistant handles calls, books appointments and keeps your diary in order, so you can focus on the work only you can do.",
    illustration: "octopus",
    cta: quote,
    explainer: {
      title: "What does a virtual PA do?",
      paragraphs: [
        "Beyond answering calls, your PA gets to know your business: recognising regular callers, managing your calendar and following up on your behalf.",
      ],
      illustration: "highfive",
    },
    features: [
      {
        title: "Your own PA",
        body: "Help with calls, calendar, appointments and more.",
        icon: "/icons/calls.svg",
      },
      {
        title: "Never miss a call",
        body: "A 24/7 service, so no caller is left waiting.",
        icon: "/icons/answering.svg",
      },
      ukReceptionists,
      cancelAnytime,
    ],
    faqs: ["receptionTypes", "keepNumber", "ukBased", "transferCalls", "regionalNumber"],
  },
];
