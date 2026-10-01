import { callServices } from "@/content/services/call-services";
import { officeServices } from "@/content/services/office-services";
import type { ServiceContent } from "@/content/services/types";

export const services: ServiceContent[] = [...callServices, ...officeServices];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

/** Card copy for "related" links, including pages that aren't service templates. */
export const relatedLinks: Record<string, { title: string; body: string; href: string }> =
  {
    "virtual-offices": {
      title: "Virtual Office",
      body: "A professional UK business address from £10 a month.",
      href: "/virtual-offices/",
    },
    "registered-office-address": {
      title: "Registered Office Address",
      body: "Register with Companies House and keep your home address private.",
      href: "/registered-office-address/",
    },
    ...Object.fromEntries(
      services.map((s) => [
        s.slug,
        { title: s.name, body: s.summary, href: `/${s.slug}/` },
      ]),
    ),
  };
