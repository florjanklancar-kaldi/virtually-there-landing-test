import Link from "next/link";
import { LocationCard } from "@/components/locations/location-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { popularLocations } from "@/content/home";
import { getSites } from "@/lib/locations";

export function PopularLocations() {
  return (
    <section aria-labelledby="locations-title" className="section" id="locations">
      <div className="container-page">
        <Reveal className="mb-16 text-center">
          <h2
            className="font-bold text-4xl tracking-tight sm:text-5xl"
            id="locations-title"
          >
            {popularLocations.title}
          </h2>
          <p className="mt-4 text-lg sm:text-xl">
            {popularLocations.intro}{" "}
            <Link className="link-underline" href="/virtual-offices">
              View all locations
            </Link>
          </p>
        </Reveal>

        <RevealGroup className="mx-auto grid max-w-5xl gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {getSites(popularLocations.sites).map((site) => (
            <RevealItem key={site.path}>
              <LocationCard site={site} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 text-center text-lg">
          or call{" "}
          <a
            className="link-underline font-bold"
            href={`tel:${siteConfig.contact.phone}`}
          >
            {siteConfig.contact.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
