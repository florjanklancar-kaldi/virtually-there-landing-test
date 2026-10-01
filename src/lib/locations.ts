import { cities } from "@/content/locations/cities";
import { registeredAddresses } from "@/content/locations/registered";
import type { Site } from "@/content/locations/sites";
import { sites } from "@/content/locations/sites";

const sitesByPath = new Map(sites.map((site) => [site.path, site]));

export function getSite(path: string): Site | undefined {
  return sitesByPath.get(path);
}

export function getSites(paths: readonly string[]): Site[] {
  return paths.flatMap((path) => getSite(path) ?? []);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getRegisteredAddress(path: string) {
  return registeredAddresses.find((address) => address.path === path);
}

export function siteHref(site: Site): `/${string}/` {
  return `/virtual-offices/${site.path}/`;
}

export function formatPrice(value: number): string {
  return `£${Number.isInteger(value) ? value : value.toFixed(2)}`;
}

/** Lowest starting price across the given sites. */
export function minPrice(list: readonly Site[]): number {
  return Math.min(...list.map((site) => site.priceFrom));
}

/** All sub-location params, e.g. { city: "london", site: "mayfair" }. */
export function subSiteParams() {
  return sites.flatMap((site) => {
    const [city, sub] = site.path.split("/");
    return city && sub ? [{ city, site: sub }] : [];
  });
}
