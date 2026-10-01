import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/page/json-ld";
import { siteConfig } from "@/config/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: crumb.href ? new URL(crumb.href, siteConfig.url).toString() : undefined,
          })),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground text-sm sm:text-base">
          {trail.map((crumb, i) => (
            <li className="flex items-center gap-1.5" key={crumb.label}>
              {i > 0 && <ChevronRightIcon aria-hidden className="size-3.5" />}
              {crumb.href && i < trail.length - 1 ? (
                <Link className="link-underline" href={{ pathname: crumb.href }}>
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-primary">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
