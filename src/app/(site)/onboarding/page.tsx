import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page/page-hero";
import { PortalLink } from "@/components/portal-link";
import { Faq } from "@/components/sections/faq";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { pickFaqs } from "@/content/faqs";
import { portal } from "@/lib/portal";

export const metadata: Metadata = {
  title: "Quick & Secure Onboarding",
  description:
    "What you need to sign up for a virtual office or registered address: photo ID, proof of address and a quick selfie. Most customers are live in minutes.",
  alternates: { canonical: "/onboarding/" },
};

const steps = [
  {
    title: "Tell us about your business",
    body: "Choose your address and plan, then share your company details. It takes a couple of minutes.",
  },
  {
    title: "Verify your identity",
    body: "Upload one photo ID and a recent proof of address, then take a quick selfie holding your ID.",
  },
  {
    title: "We run our checks",
    body: "Our team completes the anti-money-laundering checks UK law requires, usually within minutes.",
  },
  {
    title: "Start using your address",
    body: "Once approved, your address is live and your portal is ready for your first post.",
  },
];

export default function OnboardingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Onboarding" }]}
        illustration="whisper"
        intro="Our online onboarding is quick, secure and fully compliant. Here’s what to expect and what you’ll need."
        title="Quick and secure onboarding"
      >
        <PortalLink
          className={buttonVariants({ variant: "brand", size: "xl" })}
          to={portal.onboarding}
        >
          Start onboarding
        </PortalLink>
      </PageHero>
      <section aria-labelledby="steps-title" className="section pt-0">
        <div className="container-page">
          <Reveal>
            <h2 className="mb-10 text-4xl tracking-tight sm:text-5xl" id="steps-title">
              How it works
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealItem
                className="flex flex-col gap-3 rounded-2xl bg-green-background p-6"
                key={step.title}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-green font-extrabold text-xl">
                  {i + 1}
                </span>
                <h3 className="font-bold text-2xl leading-tight">{step.title}</h3>
                <p className="text-lg leading-snug">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <Faq
        items={pickFaqs(["proofOfId", "setupTime", "overseas", "beneficialOwner"])}
        title="Onboarding FAQs"
      />
      <SignOff />
    </>
  );
}
