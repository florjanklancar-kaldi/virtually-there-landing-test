import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            The UK&apos;s leading{" "}
            <span className="text-primary">virtual office</span> you can trust
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground text-pretty">
            A professional UK business address from £15/month, set up in 5 minutes.
            Add a registered address whenever you need it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#locations" className={buttonVariants({ size: "lg" })}>
              View Our Locations
            </a>
            <a
              href="#pricing"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              See Pricing
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <Image
            src="/images/hero-illustration.png"
            alt="Illustration of a friendly waving hand next to a smartphone"
            width={640}
            height={640}
            priority
            className="mx-auto h-auto w-full max-w-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}
