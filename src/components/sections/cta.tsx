import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact-cta" className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Don&apos;t be shy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Give us a call or drop us a message and we&apos;ll help you find the
            right plan for your business.
          </p>
          <div className="mt-8">
            <a href="/contact" className={buttonVariants({ size: "lg" })}>
              Contact us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
