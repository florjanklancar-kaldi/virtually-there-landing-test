import { QuoteIcon, StarIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Great communication, excellent service. Would highly recommend.",
    name: "Julia Eden",
    company: "Squaregrowth",
  },
  {
    quote:
      "Setting up our business address took minutes and the mail forwarding has been flawless ever since.",
    name: "Marcus Bell",
    company: "Northbound Studio",
  },
  {
    quote:
      "The customer portal makes managing everything effortless. Brilliant value for money.",
    name: "Priya Shah",
    company: "Lumen Consulting",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Trusted by 20,000+ UK businesses since 2012
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-5 fill-current" />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col pt-6">
                  <QuoteIcon className="size-8 text-primary/30" />
                  <p className="mt-4 flex-1 text-pretty">{t.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
