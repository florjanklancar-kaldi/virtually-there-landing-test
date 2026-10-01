import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/page/json-ld";
import { PageHero } from "@/components/page/page-hero";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { pickFaqs } from "@/content/faqs";
import { faqPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Pricing | Virtual Office Address from £10/month",
  description:
    "Simple virtual office pricing: a UK business address from £120 a year, or add a registered office address. No set-up fees, cancel any time on monthly plans.",
  alternates: { canonical: "/pricing/" },
};

const faqs = pickFaqs([
  "vat",
  "setupFee",
  "monthlyBill",
  "proofOfId",
  "directorsServiceAddress",
  "extraMail",
  "annualVsMonthly",
  "addRegisteredLater",
]);

const usps = [
  {
    title: "No set-up fees",
    body: "We cover the set-up, so you only pay for your plan.",
    icon: "/icons/nofees.svg",
  },
  {
    title: "Free mail scanning",
    body: "10 scans included every month as standard.",
    icon: "/icons/mail.svg",
  },
  {
    title: "Customer portal",
    body: "Manage your subscription online, 24/7.",
    icon: "/icons/portal.svg",
  },
  {
    title: "Business bank account",
    body: "Apply for a free business account and get a decision in seconds.",
    icon: "/icons/payg.svg",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        crumbs={[{ label: "Pricing" }]}
        illustration="highfive"
        intro="One simple price for your business address, with no set-up fees. Save with an annual plan, or stay flexible month to month."
        title="Simple, transparent pricing"
      />
      <section aria-label="Plans" className="section pt-0">
        <div className="container-page">
          <PricingPlans />
        </div>
      </section>
      <section aria-labelledby="difference-title" className="section bg-green-background">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="difference-title">
              Virtual office or registered office?
            </h2>
          </Reveal>
          <Reveal className="rounded-2xl bg-white p-8" delay={0.05}>
            <h3 className="mb-3 font-bold text-2xl">Virtual Office</h3>
            <p className="text-lg leading-relaxed">
              A trading address for your website, invoices, business cards and directory
              listings, with everyday post scanned to your portal.
            </p>
          </Reveal>
          <Reveal className="rounded-2xl bg-white p-8" delay={0.1}>
            <h3 className="mb-3 font-bold text-2xl">Registered Virtual Office</h3>
            <p className="text-lg leading-relaxed">
              Everything in Virtual Office, plus an official address for Companies House
              and HMRC and director’s service addresses, keeping your home address
              private.
            </p>
          </Reveal>
        </div>
      </section>
      <IconFeatures items={usps} />
      <Faq items={faqs} title="FAQs" />
      <SignOff />
    </>
  );
}
