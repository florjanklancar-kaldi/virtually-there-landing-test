import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { relatedLinks } from "@/content/services/registry";

export function RelatedCards({ slugs, title }: { slugs: string[]; title: string }) {
  const links = slugs.flatMap((slug) => relatedLinks[slug] ?? []);

  return (
    <section aria-labelledby="related-title" className="section bg-green-background">
      <div className="container-page">
        <Reveal>
          <h2 className="mb-10 text-4xl tracking-tight sm:text-5xl" id="related-title">
            {title}
          </h2>
        </Reveal>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <RevealItem key={link.href}>
              <Link
                className="group flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-lg"
                href={{ pathname: link.href }}
              >
                <span className="font-bold text-2xl">{link.title}</span>
                <span className="text-lg leading-snug">{link.body}</span>
                <span className="mt-auto flex items-center gap-1.5 pt-2 font-bold text-green-dark">
                  Find out more
                  <ArrowRightIcon
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
