import { CheckIcon, XIcon } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { PortalLink } from "@/components/portal-link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ownTerms, providerIds, providers } from "@/content/locations/providers";
import type { Site } from "@/content/locations/sites";
import { formatPrice } from "@/lib/locations";
import type { PortalTarget } from "@/lib/portal";
import { cn } from "@/lib/utils";

const columns = [
  { key: "freeScans", label: "Free mail scans" },
  { key: "cancelAnytime", label: "Cancel anytime" },
  { key: "portal", label: "Portal / app" },
] as const;

function Tick({ value }: { value: boolean }) {
  return value ? (
    <CheckIcon aria-label="Yes" className="mx-auto size-5 text-green-dark" />
  ) : (
    <XIcon aria-label="No" className="mx-auto size-5 text-muted-foreground" />
  );
}

/** "What to look for" comparison against other providers in the same city. */
export function ComparisonTable({
  site,
  place,
  buy,
}: {
  site: Site;
  place: string;
  buy: PortalTarget;
}) {
  const rows = [
    { name: siteConfig.name, monthly: site.priceFrom, ...ownTerms, own: true },
    ...providerIds.flatMap((id) => {
      const monthly = site.competitors[id];
      return monthly === undefined ? [] : [{ ...providers[id], monthly, own: false }];
    }),
  ];

  return (
    <section aria-labelledby="compare-title" className="section">
      <div className="container-page">
        <Reveal className="mb-10 max-w-3xl">
          <h2 className="text-4xl tracking-tight sm:text-5xl" id="compare-title">
            Choosing a virtual office in {place}
          </h2>
          <p className="mt-4 text-lg leading-relaxed sm:text-xl">
            The headline price rarely tells the whole story. Set-up charges, mail
            scanning, contract terms and online access all change what you actually pay,
            so here’s how the main options in {place} compare.
          </p>
        </Reveal>
        <Reveal className="overflow-x-auto rounded-2xl border" delay={0.1}>
          <table className="w-full min-w-[40rem] text-left text-lg">
            <caption className="sr-only">
              Virtual office providers in {place} compared
            </caption>
            <thead className="bg-green-background">
              <tr>
                <th className="px-5 py-4" scope="col">
                  Provider
                </th>
                <th className="px-5 py-4" scope="col">
                  Monthly cost
                </th>
                {columns.map((col) => (
                  <th className="px-5 py-4 text-center" key={col.key} scope="col">
                    {col.label}
                  </th>
                ))}
                <th className="px-5 py-4" scope="col">
                  Set-up fee
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  className={cn("border-t", row.own && "bg-green-light/40 font-semibold")}
                  key={row.name}
                >
                  <th className="px-5 py-4" scope="row">
                    {row.name}
                  </th>
                  <td className="px-5 py-4">{formatPrice(row.monthly)}</td>
                  {columns.map((col) => (
                    <td className="px-5 py-4" key={col.key}>
                      <Tick value={row[col.key]} />
                    </td>
                  ))}
                  <td className="px-5 py-4">{formatPrice(row.setupFee)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="mt-6 flex flex-wrap items-center gap-4" delay={0.15}>
          <PortalLink
            className={buttonVariants({ variant: "brand", size: "xl" })}
            to={buy}
          >
            Sign me up
          </PortalLink>
          <p className="text-muted-foreground text-sm">
            Competitor prices are published starting rates and may change.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
