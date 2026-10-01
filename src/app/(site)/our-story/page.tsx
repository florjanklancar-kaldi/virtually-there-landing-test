import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page/page-hero";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { IconFeatures } from "@/components/sections/icon-features";
import { SignOff } from "@/components/sections/sign-off";
import { Testimonials } from "@/components/sections/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { usps } from "@/content/home";

export const metadata: Metadata = {
  title: "About Virtually There | UK Virtual Office Provider Since 2012",
  description:
    "Virtually There has helped UK businesses look established and stay flexible since 2012, with virtual offices, registered addresses and call answering.",
  alternates: { canonical: "/our-story/" },
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Our Story" }]}
        illustration="hero"
        intro="Since 2012 we’ve helped founders, freelancers and growing teams look established from day one, without the cost of a traditional office."
        title="A UK virtual office provider since 2012"
      >
        <Link className={buttonVariants({ size: "xl" })} href="/virtual-offices">
          View our locations
        </Link>
      </PageHero>
      <section aria-labelledby="sizes-title" className="section pt-0">
        <div className="container-page">
          <FeaturePanel illustration="octopus">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="sizes-title">
              We work with businesses of every size
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              From sole traders registering their first company to established firms with
              teams across the country, our customers want the same things: a credible
              address, post they can trust us with, and calls that never go unanswered.
            </p>
            <p className="text-lg leading-relaxed sm:text-xl">
              More than 20,000 UK businesses have trusted us with their address so far.
            </p>
          </FeaturePanel>
        </div>
      </section>
      <section aria-labelledby="compliance-title" className="section pt-8">
        <div className="container-page">
          <FeaturePanel illustration="registered" illustrationSide="left">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="compliance-title">
              Compliance you can trust
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              We’re supervised by HMRC for anti-money-laundering purposes and registered
              with the ICO. Every customer is verified during onboarding, which keeps our
              addresses reputable for everyone who uses them.
            </p>
            <Link
              className={buttonVariants({ size: "xl", className: "self-start" })}
              href="/onboarding"
            >
              How onboarding works
            </Link>
          </FeaturePanel>
        </div>
      </section>
      <section aria-labelledby="yes-title" className="section pt-8">
        <div className="container-page">
          <FeaturePanel illustration="highfive">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="yes-title">
              Backing the next generation
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              Our Young Entrepreneurs Scheme helps young people turn ideas into businesses
              with funding, mentoring and a year of free professional services.
            </p>
            <Link
              className={buttonVariants({ size: "xl", className: "self-start" })}
              href="/young-entrepreneur-scheme"
            >
              About the scheme
            </Link>
          </FeaturePanel>
        </div>
      </section>
      <IconFeatures items={usps} />
      <Testimonials />
      <SignOff />
    </>
  );
}
