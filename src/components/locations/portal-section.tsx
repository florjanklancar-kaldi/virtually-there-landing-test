import { CheckIcon } from "lucide-react";
import { FeaturePanel } from "@/components/sections/feature-panel";
import { buttonVariants } from "@/components/ui/button";

const capabilities = [
  "Review every item of post sent to your address",
  "Upgrade or add services in a few clicks",
  "Add more addresses to your portfolio",
  "Update your subscription and account details",
  "Download monthly and annual invoices",
];

export function PortalSection({ place }: { place: string }) {
  return (
    <section aria-labelledby="portal-title" className="section pt-0">
      <div className="container-page">
        <FeaturePanel illustration="jetpack" illustrationSide="right">
          <h2 className="text-4xl tracking-tight sm:text-5xl" id="portal-title">
            24/7 virtual office management
          </h2>
          <p className="text-lg sm:text-xl">
            Your {place} address comes with full access to the Virtually There portal,
            where you can:
          </p>
          <ul className="grid gap-2">
            {capabilities.map((item) => (
              <li className="flex items-start gap-2.5 text-lg" key={item}>
                <CheckIcon aria-hidden className="mt-1 size-5 shrink-0 text-green-dark" />
                {item}
              </li>
            ))}
          </ul>
          <a
            className={buttonVariants({ size: "xl", className: "self-start" })}
            href="/customer-portal/"
          >
            Take a look around
          </a>
        </FeaturePanel>
      </div>
    </section>
  );
}
