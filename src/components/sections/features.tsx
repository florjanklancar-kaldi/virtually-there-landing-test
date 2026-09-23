import {
  BadgeCheckIcon,
  CircleDollarSignIcon,
  type LucideIcon,
  MonitorSmartphoneIcon,
  XCircleIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BadgeCheckIcon,
    title: "Companies House Compliant",
    description: "Verified, HMRC and AML checked, so you can register with confidence.",
  },
  {
    icon: CircleDollarSignIcon,
    title: "No Setup Fees",
    description: "We cover the costs, so you only pay your monthly plan.",
  },
  {
    icon: MonitorSmartphoneIcon,
    title: "Customer Portal",
    description: "Manage your subscription with 24/7 access to our customer Portal.",
  },
  {
    icon: XCircleIcon,
    title: "Cancel Any Time",
    description:
      "We offer monthly rolling contracts to give you the flexibility to cancel any time.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-14">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.06}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="size-7" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
