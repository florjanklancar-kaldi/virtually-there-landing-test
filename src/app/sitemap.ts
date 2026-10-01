import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { cities } from "@/content/locations/cities";
import { registeredAddresses } from "@/content/locations/registered";
import { services } from "@/content/services/registry";
import { subSiteParams } from "@/lib/locations";

const staticPaths = [
  "",
  "virtual-offices",
  "registered-office-address",
  "pricing",
  "our-story",
  "contact-us",
  "faqs",
  "reviews",
  "partnerships",
  "onboarding",
  "young-entrepreneur-scheme",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((service) => service.slug),
    ...cities.map((city) => `virtual-offices/${city.slug}`),
    ...subSiteParams().map(({ city, site }) => `virtual-offices/${city}/${site}`),
    ...registeredAddresses.map((address) => `registered-office-address/${address.path}`),
  ];

  return paths.map((path) => ({
    url: new URL(path ? `/${path}/` : "/", siteConfig.url).toString(),
    changeFrequency: "weekly",
    priority: path ? 0.7 : 1,
  }));
}
