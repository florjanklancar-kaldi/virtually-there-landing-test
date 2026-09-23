import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  tint?: boolean;
};

const services: Service[] = [
  {
    id: "virtual-offices",
    title: "Virtual Offices",
    body: "Get a business address that'll impress your customers. Choose from desirable virtual offices in London, Mayfair, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow, Liverpool, Cardiff, Belfast, Newcastle upon Tyne, Bradford, and Huddersfield.",
    cta: "View virtual offices",
    href: "#locations",
    tint: true,
  },
  {
    id: "registered-office",
    title: "Registered Office Address",
    body: "Add a registered address to your virtual office, so you can register with Companies House and HMRC while keeping your home address private.",
    cta: "Find out more",
    href: "#pricing",
  },
  {
    id: "virtual-landline",
    title: "Virtual Landline",
    body: "Looking for a local phone number for your business? Our Virtual Landline service gives your business the professional number you need and diverts calls directly to your personal phone.",
    cta: "Find out more",
    href: "#pricing",
    tint: true,
  },
  {
    id: "call-answering",
    title: "24/7 Call Answering",
    body: "Never miss a business opportunity again. We support over 12,000 UK businesses with 24/7 call answering services. Get a quote today and enjoy a 14-day free trial.",
    cta: "Get a quote",
    href: "#pricing",
  },
];

export function Services() {
  return (
    <div id="services">
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className={cn("py-16 sm:py-20", service.tint && "bg-muted/50")}
        >
          <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {service.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-muted-foreground text-pretty">{service.body}</p>
              <a
                href={service.href}
                className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
              >
                {service.cta}
              </a>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
