import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "A short, specific quote about the outcome this customer got.",
    name: "Alex Morgan",
    role: "Head of Ops, Acme",
  },
  {
    quote: "A short, specific quote about the outcome this customer got.",
    name: "Sam Rivera",
    role: "Founder, Globex",
  },
  {
    quote: "A short, specific quote about the outcome this customer got.",
    name: "Jordan Lee",
    role: "CTO, Initech",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="Loved by early users" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <Card className="h-full">
                <CardContent className="flex-1">
                  <blockquote className="text-pretty">“{t.quote}”</blockquote>
                </CardContent>
                <CardFooter className="gap-3">
                  <Avatar>
                    <AvatarFallback>{initials(t.name)}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-muted-foreground">{t.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
