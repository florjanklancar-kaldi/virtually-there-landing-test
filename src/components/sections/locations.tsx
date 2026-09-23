import { StarIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const locations = [
  {
    name: "Mayfair, London",
    line1: "Albemarle Street",
    line2: "Mayfair, London, W1S",
    price: "16",
  },
  {
    name: "Regent Place, City Centre, Birmingham",
    line1: "Regent Place",
    line2: "City Centre, Birmingham, B1",
    price: "10",
  },
  {
    name: "Swan Street, City Centre, Manchester",
    line1: "Swan Street",
    line2: "City Centre, Manchester, M4",
    price: "10",
  },
];

export function Locations() {
  return (
    <section id="locations" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Most popular locations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose a business address in any of our 13 UK cities, from London to
            Belfast.{" "}
            <a href="#virtual-offices" className="font-medium text-primary underline-offset-4 hover:underline">
              View all locations
            </a>
            .
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 0.06}>
              <Card className="h-full text-center">
                <CardContent className="flex flex-1 flex-col items-center pt-8">
                  <div className="grid size-20 place-items-center rounded-full bg-primary/10 text-primary">
                    <span className="text-xs font-medium">from</span>
                    <span className="-mt-1 text-2xl font-bold">£{loc.price}</span>
                    <span className="-mt-1 text-[0.65rem] text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-balance">
                    {loc.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {loc.line1}
                    <br />
                    {loc.line2}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <a
                    href="#pricing"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Buy now
                  </a>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            or Call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-foreground hover:text-primary">
              {siteConfig.phone}
            </a>
          </p>
          <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2">
            <span className="text-sm font-semibold">Excellent</span>
            <span className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-medium text-muted-foreground">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
