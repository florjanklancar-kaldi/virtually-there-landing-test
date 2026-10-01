import { ArrowDownIcon } from "lucide-react";

import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <Reveal immediate>
            <h1 className="text-balance font-extrabold text-5xl leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} immediate>
            <p className="max-w-xl text-pretty text-xl leading-snug sm:text-2xl lg:text-[1.75rem]">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.2} immediate>
            <a
              className={buttonVariants({ size: "xl", className: "group" })}
              href={hero.cta.href}
            >
              {hero.cta.label}
              <ArrowDownIcon
                className="transition-transform group-hover:translate-y-0.5"
                data-icon="inline-end"
              />
            </a>
          </Reveal>
        </div>
        <Reveal
          className="mx-auto w-full max-w-md lg:max-w-none"
          delay={0.15}
          from="right"
          immediate
        >
          <Illustration
            alt="Business woman taking a selfie in front of an office building"
            name="hero"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
