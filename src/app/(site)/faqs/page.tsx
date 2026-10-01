import type { Metadata } from "next";
import { JsonLd } from "@/components/page/json-ld";
import { PageHero } from "@/components/page/page-hero";
import { Faq } from "@/components/sections/faq";
import { SignOff } from "@/components/sections/sign-off";
import type { FaqKey } from "@/content/faqs";
import { pickFaqs } from "@/content/faqs";
import { faqPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Virtual Office FAQs",
  description:
    "Answers to common questions about virtual offices, registered addresses, mail handling, call answering, pricing and onboarding.",
  alternates: { canonical: "/faqs/" },
};

const groups: { title: string; keys: FaqKey[] }[] = [
  {
    title: "Addresses",
    keys: [
      "whatIsVirtualOffice",
      "virtualVsRegistered",
      "registerCompany",
      "directorsServiceAddress",
      "marketing",
      "googleBusiness",
    ],
  },
  {
    title: "Calls",
    keys: [
      "receptionTypes",
      "ukBased",
      "keepNumber",
      "transferCalls",
      "busyOnly",
      "regionalNumber",
      "callCost",
    ],
  },
  {
    title: "Pricing & billing",
    keys: ["setupFee", "vat", "monthlyBill", "contract", "annualVsMonthly", "extraMail"],
  },
  {
    title: "Getting started",
    keys: ["setupTime", "proofOfId", "overseas", "beneficialOwner"],
  },
];

export default function FaqsPage() {
  const all = pickFaqs(groups.flatMap((group) => group.keys));

  return (
    <>
      <JsonLd data={faqPageJsonLd(all)} />
      <PageHero
        crumbs={[{ label: "FAQs" }]}
        illustration="yoga"
        intro="Everything you need to know about our addresses, calls, pricing and getting set up."
        title="Frequently asked questions"
      />
      {groups.map((group, i) => (
        <Faq
          className={i % 2 === 0 ? undefined : "bg-background"}
          items={pickFaqs(group.keys)}
          key={group.title}
          title={group.title}
        />
      ))}
      <SignOff />
    </>
  );
}
