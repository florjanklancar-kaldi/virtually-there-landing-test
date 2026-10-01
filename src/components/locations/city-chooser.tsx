import { LocationCard } from "@/components/locations/location-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { Site } from "@/content/locations/sites";

/** Grid of site cards used by multi-site city pages and the locations hub. */
export function LocationGrid({
  sites,
  title,
  intro,
  titleFor,
}: {
  sites: Site[];
  title: string;
  intro?: string;
  /** Card heading override, e.g. use the site label on city pages. */
  titleFor?: (site: Site) => string;
}) {
  return (
    <section aria-labelledby="sites-title" className="section">
      <div className="container-page">
        <Reveal className="mb-16 text-center">
          <h2 className="font-bold text-4xl tracking-tight sm:text-5xl" id="sites-title">
            {title}
          </h2>
          {intro ? (
            <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl">{intro}</p>
          ) : null}
        </Reveal>
        <RevealGroup className="mx-auto grid max-w-6xl gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <RevealItem key={site.path}>
              <LocationCard site={site} title={titleFor?.(site)} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
