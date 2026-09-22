import { CheckIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
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
    name: "Starter",
    price: "$0",
    description: "For individuals trying things out.",
    features: ["Feature one", "Feature two", "Community support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professionals who need more.",
    features: [
      "Everything in Starter",
      "Feature three",
      "Feature four",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    description: "For teams collaborating at scale.",
    features: ["Everything in Pro", "Shared workspaces", "SSO", "Dedicated support"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section border-y bg-muted/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="Start free. Upgrade when you're ready."
        />
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
                    href="#waitlist"
                    className={buttonVariants({
                      variant: plan.featured ? "default" : "outline",
                      className: "w-full",
                    })}
                  >
                    Get started
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
