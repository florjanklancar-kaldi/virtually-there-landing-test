import { ExternalLinkIcon } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page/page-hero";
import { SignOff } from "@/components/sections/sign-off";
import { Testimonials } from "@/components/sections/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Customer Reviews | Rated Excellent",
  description:
    "See what customers say about Virtually There’s virtual offices, registered addresses and call answering on Trustpilot.",
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Reviews" }]}
        illustration="landline"
        intro="Thousands of UK businesses rely on us every day. Here’s what some of them have to say."
        title="What our customers say"
      >
        <a
          className={buttonVariants({ variant: "brand", size: "xl" })}
          href={siteConfig.links.trustpilot}
          rel="noreferrer"
          target="_blank"
        >
          Read our Trustpilot reviews
          <ExternalLinkIcon data-icon="inline-end" />
        </a>
      </PageHero>
      <Testimonials />
      <SignOff />
    </>
  );
}
