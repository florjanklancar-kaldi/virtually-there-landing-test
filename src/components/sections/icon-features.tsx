import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type IconFeatureItem = { title: string; body: string; icon: string };

/** Row of illustrated icons with a short title and description (USPs). */
export function IconFeatures({
  items,
  className,
}: {
  items: IconFeatureItem[];
  className?: string;
}) {
  return (
    <section aria-label="Why choose us" className={cn("section", className)}>
      <RevealGroup className="container-page grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, body, icon }) => (
          <RevealItem className="group flex flex-col items-center gap-3" key={title}>
            <Image
              alt=""
              className="mb-2 size-32 transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:-rotate-3 sm:size-36"
              height={140}
              src={icon}
              width={140}
            />
            <h3 className="font-bold text-2xl uppercase leading-tight">{title}</h3>
            <p className="max-w-xs text-lg leading-snug">{body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
