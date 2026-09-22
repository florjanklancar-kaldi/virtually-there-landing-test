import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const steps = [
  { title: "Sign up", description: "Explain the first step in a sentence." },
  { title: "Connect", description: "Explain the second step in a sentence." },
  { title: "Be there", description: "Explain the outcome in a sentence." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section border-y bg-muted/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in minutes"
          description="Three simple steps from sign-up to value."
        />
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.08} className="flex flex-col gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
