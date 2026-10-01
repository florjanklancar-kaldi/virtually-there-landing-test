import type { Metadata } from "next";
import { LocationGrid } from "@/components/locations/city-chooser";
import { PageHero } from "@/components/page/page-hero";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { sites } from "@/content/locations/sites";

export const metadata: Metadata = {
  title: "Partnerships | Generate New Revenue Streams",
  description:
    "Partner with Virtually There to earn from your building’s address, or refer your clients to trusted UK virtual office services.",
  alternates: { canonical: "/partnerships/" },
};

const benefits = [
  {
    title: "New revenue",
    body: "Earn from space you already have, with no extra staff or fit-out.",
    icon: "/icons/payg.svg",
  },
  {
    title: "We do the admin",
    body: "Onboarding, compliance checks and billing are all handled by us.",
    icon: "/icons/portal.svg",
  },
  {
    title: "Mail made simple",
    body: "Clear processes and our portal keep post handling straightforward.",
    icon: "/icons/mail.svg",
  },
  {
    title: "A UK-wide network",
    body: "Join addresses in 13 cities trusted by more than 20,000 businesses.",
    icon: "/icons/uk.svg",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Partnerships" }]}
        illustration="highfive"
        intro="Own or run a building in a great location? Partner with us to turn its address into a steady new income stream."
        title="Generate new revenue streams"
      >
        <a
          className={buttonVariants({ variant: "brand", size: "xl" })}
          href={`mailto:${siteConfig.contact.email}`}
        >
          Talk to us about partnering
        </a>
      </PageHero>
      <IconFeatures className="pt-0" items={benefits} />
      <section aria-labelledby="location-partners" className="section pt-0">
        <div className="container-page">
          <FeaturePanel illustration="address">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="location-partners">
              Location partnerships
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              We list your address on our network and bring the customers. You receive
              their post, and we take care of everything else, from identity checks to
              billing and support.
            </p>
          </FeaturePanel>
        </div>
      </section>
      <LocationGrid sites={sites.slice(0, 6)} title="Some of our partner locations" />
      <SignOff />
    </>
  );
}
