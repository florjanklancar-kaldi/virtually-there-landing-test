import { CheckIcon } from "lucide-react";
import type { IllustrationName } from "@/components/illustrations";
import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/motion/reveal";
import type { Crumb } from "@/components/page/breadcrumbs";
import { Breadcrumbs } from "@/components/page/breadcrumbs";

type PageHeroProps = {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  illustration?: IllustrationName;
  badges?: string[];
  /** CTA buttons or a price block. */
  children?: React.ReactNode;
};

/** Standard hero for inner pages: breadcrumbs, headline, intro, actions, illustration. */
export function PageHero({
  crumbs,
  title,
  intro,
  illustration,
  badges,
  children,
}: PageHeroProps) {
  return (
    <section className="overflow-hidden">
      <div className="container-page grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
        <div className="flex flex-col items-start gap-6">
          <Reveal immediate>
            <Breadcrumbs items={crumbs} />
          </Reveal>
          <Reveal delay={0.05} immediate>
            <h1 className="text-balance font-extrabold text-4xl leading-[1.02] tracking-tighter sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1} immediate>
              <p className="max-w-xl text-pretty text-xl leading-snug sm:text-2xl">
                {intro}
              </p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal className="flex flex-wrap items-center gap-4" delay={0.15} immediate>
              {children}
            </Reveal>
          ) : null}
          {badges?.length ? (
            <Reveal delay={0.2} immediate>
              <ul className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <li
                    className="flex items-center gap-1.5 rounded-full bg-green-background px-3.5 py-1.5 font-semibold text-sm"
                    key={badge}
                  >
                    <CheckIcon aria-hidden className="size-4 text-green-dark" />
                    {badge}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
        {illustration ? (
          <Reveal
            className="mx-auto w-full max-w-sm lg:max-w-md"
            delay={0.15}
            from="right"
            immediate
          >
            <Illustration name={illustration} priority />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
