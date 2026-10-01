import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortalLink } from "@/components/portal-link";
import { buttonVariants } from "@/components/ui/button";
import type { Site } from "@/content/locations/sites";
import { formatPrice, siteHref } from "@/lib/locations";
import { officeOnboarding } from "@/lib/portal";
import { cn } from "@/lib/utils";

export function PriceBadge({
  price,
  size = "md",
}: {
  price: number;
  size?: "sm" | "md";
}) {
  const small = size === "sm";

  return (
    <span
      className={cn(
        "absolute z-10 flex flex-col items-center justify-center rounded-full bg-green font-bold leading-none shadow-lg transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
        small ? "-top-4 -left-3 size-16" : "-top-6 -left-4 size-24",
      )}
    >
      <span className={small ? "text-[0.625rem]" : "text-sm"}>from</span>
      <span className={small ? "text-xl" : "text-3xl"}>{formatPrice(price)}</span>
      <span className={cn("font-normal", small ? "text-[0.5625rem]" : "text-xs")}>
        /month
      </span>
    </span>
  );
}

/** Photo card for a site: price badge, title linking to its page, address and Buy now. */
export function LocationCard({ site, title }: { site: Site; title?: string }) {
  const heading = title ?? `${site.street}, ${site.city}`;

  return (
    <article className="group relative flex h-full flex-col">
      <PriceBadge price={site.priceFrom} />
      <Link
        className="relative block aspect-[16/10] overflow-hidden rounded-xl"
        href={{ pathname: siteHref(site) }}
        tabIndex={-1}
      >
        <Image
          alt={site.imageAlt}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          src={site.image}
        />
      </Link>
      <h3 className="mt-5 text-3xl leading-tight">
        <Link className="hover:text-green-dark" href={{ pathname: siteHref(site) }}>
          {heading}
        </Link>
      </h3>
      <p className="mt-2 mb-auto flex items-start gap-2 text-lg">
        <MapPinIcon aria-hidden className="mt-1 size-4.5 shrink-0 text-green-dark" />
        <span>
          {site.building ? `${site.building}, ` : ""}
          {site.street}
          <br />
          {site.area}
        </span>
      </p>
      <PortalLink
        aria-label={`Buy now: ${heading}`}
        className={buttonVariants({ size: "xl", className: "mt-6 w-full" })}
        to={officeOnboarding(site.plan)}
      >
        Buy now
      </PortalLink>
    </article>
  );
}
