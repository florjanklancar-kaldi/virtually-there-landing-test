import { ArrowRightIcon } from "lucide-react";

import { FeaturePanel } from "@/components/sections/feature-panel";
import { buttonVariants } from "@/components/ui/button";
import { serviceBlocks } from "@/content/home";
import { cities } from "@/content/navigation";

function cityPunctuation(i: number): "." | "," | "" {
  if (i === cities.length - 1) {
    return ".";
  }
  return i < cities.length - 2 ? "," : "";
}

function CityLinks() {
  return (
    <>
      {cities.map((city, i) => (
        <span key={city.href}>
          {i === cities.length - 1 ? " and " : " "}
          <a className="link-underline" href={city.href}>
            {city.label}
          </a>
          {cityPunctuation(i)}
        </span>
      ))}
    </>
  );
}

export function Services() {
  return (
    <section
      aria-label="Our services"
      className="flex flex-col gap-24 py-12 sm:gap-32 sm:py-24"
    >
      {serviceBlocks.map((service, i) => (
        <div className="container-page" key={service.title}>
          <FeaturePanel
            illustration={service.illustration}
            illustrationSide={i % 2 === 0 ? "left" : "right"}
          >
            <h2 className="text-4xl tracking-tight sm:text-5xl">{service.title}</h2>
            <p className="text-lg leading-relaxed sm:text-xl">
              {service.body}
              {service.showCities ? <CityLinks /> : null}
            </p>
            <a
              className={buttonVariants({ size: "xl", className: "group self-start" })}
              href={service.cta.href}
            >
              {service.cta.label}
              <ArrowRightIcon
                className="transition-transform group-hover:translate-x-1"
                data-icon="inline-end"
              />
            </a>
          </FeaturePanel>
        </div>
      ))}
    </section>
  );
}
