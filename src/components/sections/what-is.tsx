import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";

export function WhatIs() {
  return (
    <section id="what-is" className="bg-muted/50 py-20 sm:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What is a Virtual Office?
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-pretty">
            <p>
              A{" "}
              <span className="font-medium text-primary">virtual office</span> is a
              professional business address for your business, ideal for startups,
              freelancers and sole traders, without the cost or hassle of renting an
              office.
            </p>
            <p>
              We handle your mail and forward it whenever you need it, plus your calls
              too if you need them, so nothing gets missed. You can check everything
              anytime in your customer portal.
            </p>
            <p>
              It&apos;s reliable, affordable, and we&apos;ll have your business address
              set up in as little as 5 minutes through our simple online onboarding.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src="/images/what-is-illustration.png"
            alt="Illustration of a hand holding a magnifying glass over mail"
            width={560}
            height={560}
            className="mx-auto h-auto w-full max-w-md"
          />
        </Reveal>
      </div>
    </section>
  );
}
