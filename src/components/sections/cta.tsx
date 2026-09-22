import { Reveal } from "@/components/motion/reveal";
import { WaitlistForm } from "@/components/sections/waitlist-form";

export function Cta() {
  return (
    <section id="waitlist" className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ready to be virtually there?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-primary-foreground/80">
            Join the waitlist and be the first to get access.
          </p>
          <div className="mt-8 [&_button]:bg-background [&_button]:text-foreground [&_input]:bg-background [&_input]:text-foreground">
            <WaitlistForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
