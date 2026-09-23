import { CheckIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Business Address",
    price: "£15",
    description: "A professional address for your mail.",
    features: [
      "Prestigious UK business address",
      "Mail collection & scanning",
      "Use on website & marketing",
      "24/7 customer portal",
    ],
    featured: false,
  },
  {
    name: "Registered Office",
    price: "£25",
    description: "Stay compliant and keep your home private.",
    features: [
      "Everything in Business Address",
      "Companies House registered office",
      "HMRC correspondence handling",
      "Director's service address",
    ],
    featured: true,
  },
  {
    name: "Complete",
    price: "£45",
    description: "Address plus calls, fully covered.",
    features: [
      "Everything in Registered Office",
      "Local virtual landline number",
      "24/7 call answering",
      "Dedicated account support",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section border-y bg-muted/30">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            No setup fees, monthly rolling contracts, cancel any time.
          </p>
        </div>
        <div className="mt-14 grid items-start gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05}>
              <Card className={cn("h-full", plan.featured && "ring-2 ring-primary")}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.featured && <Badge>Most popular</Badge>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                  <p className="mt-4">
                    <span className="text-4xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground"> / month</span>
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckIcon className="size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="/contact"
                    className={buttonVariants({
                      variant: plan.featured ? "default" : "outline",
                      className: "w-full",
                    })}
                  >
                    Buy now
                  </a>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
