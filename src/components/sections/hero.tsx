import { ArrowRightIcon, SparklesIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow — swap for your own visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[40rem] bg-radial-[at_50%_0%] from-primary/10 to-transparent to-70%"
      />
      <div className="container-page flex flex-col items-center py-24 text-center sm:py-32">
        <Reveal>
          <Badge variant="outline" className="mb-6 gap-1.5">
            <SparklesIcon />
            Now in private beta
          </Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {siteConfig.tagline}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
            {siteConfig.description}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#waitlist"
            className={buttonVariants({ size: "lg", className: "h-11 px-5" })}
          >
            Get early access
            <ArrowRightIcon data-icon="inline-end" />
          </a>
          <a
            href="#how-it-works"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "h-11 px-5",
            })}
          >
            See how it works
          </a>
        </Reveal>
        <Reveal delay={0.2} className="mt-16 w-full">
          {/* Product screenshot / video placeholder */}
          <div className="aspect-video w-full rounded-xl border bg-muted/40 shadow-2xl ring-8 ring-border/50">
            <div className="grid h-full place-items-center text-sm text-muted-foreground">
              Product visual goes here
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
