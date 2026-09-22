import {
  GlobeIcon,
  LockIcon,
  type LucideIcon,
  RocketIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ZapIcon,
    title: "Fast by default",
    description: "Describe a key benefit in one or two short sentences.",
  },
  {
    icon: GlobeIcon,
    title: "Works everywhere",
    description: "Describe a key benefit in one or two short sentences.",
  },
  {
    icon: SparklesIcon,
    title: "AI-assisted",
    description: "Describe a key benefit in one or two short sentences.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Reliable",
    description: "Describe a key benefit in one or two short sentences.",
  },
  {
    icon: LockIcon,
    title: "Private & secure",
    description: "Describe a key benefit in one or two short sentences.",
  },
  {
    icon: RocketIcon,
    title: "Ready to scale",
    description: "Describe a key benefit in one or two short sentences.",
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need, nothing you don't"
          description="A short supporting line that frames the feature grid below."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
