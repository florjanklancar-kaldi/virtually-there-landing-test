import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { PageHero } from "@/components/page/page-hero";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { SignOff } from "@/components/sections/sign-off";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "The Young Entrepreneur Scheme",
  description:
    "Virtually There’s Young Entrepreneurs Scheme offers young founders up to £5,000, mentoring and a year of free professional services.",
  alternates: { canonical: "/young-entrepreneur-scheme/" },
};

const prizes = [
  {
    title: "Up to £5,000",
    body: "Funding to help turn a promising idea into a real business.",
  },
  {
    title: "StartUp 101 workshop",
    body: "A practical introduction to launching and running a company.",
  },
  {
    title: "1-2-1 mentoring",
    body: "Sessions with experienced founders to work through your plans.",
  },
  {
    title: "A year of free services",
    body: "A professional address and business services, free for 12 months.",
  },
];

export default function YoungEntrepreneurPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Young Entrepreneur Scheme" }]}
        illustration="highfive"
        intro="Our Young Entrepreneurs Scheme (YES) backs young people with big ideas, giving them the funding, guidance and tools to get started."
        title="The Young Entrepreneur Scheme"
      />
      <section aria-label="What winners receive" className="section pt-0">
        <RevealGroup className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prizes.map((prize) => (
            <RevealItem
              className="flex flex-col gap-2 rounded-2xl bg-green-background p-6"
              key={prize.title}
            >
              <h2 className="font-bold text-2xl">{prize.title}</h2>
              <p className="text-lg leading-snug">{prize.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
      <section aria-labelledby="yes-status" className="section pt-0">
        <div className="container-page">
          <FeaturePanel illustration="jetpack">
            <h2 className="text-4xl tracking-tight sm:text-5xl" id="yes-status">
              Applications are currently closed
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              We’re not accepting applications right now. Got an idea or a young business
              you’d like support with in the meantime? Get in touch and we’ll be happy to
              help.
            </p>
            <a
              className={buttonVariants({ size: "xl", className: "self-start" })}
              href={`mailto:${siteConfig.contact.email}`}
            >
              Email the team
            </a>
          </FeaturePanel>
        </div>
      </section>
      <SignOff />
    </>
  );
}
