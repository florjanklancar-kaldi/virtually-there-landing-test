"use client";

import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/content/home";

const STAR_KEYS = ["1", "2", "3", "4", "5"] as const;

function Stars() {
  return (
    <span aria-label="Rated 5 out of 5 stars" className="flex gap-0.5" role="img">
      {STAR_KEYS.map((key) => (
        <span className="flex size-5 items-center justify-center bg-trustpilot" key={key}>
          <StarIcon className="size-3.5 fill-white stroke-white" />
        </span>
      ))}
    </span>
  );
}

function ArrowButton({ direction, onClick }: { direction: -1 | 1; onClick: () => void }) {
  const Icon = direction < 0 ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      aria-label={direction < 0 ? "Previous reviews" : "Next reviews"}
      className="hidden size-7 shrink-0 items-center justify-center rounded-full border-2 border-foreground transition-colors hover:bg-foreground hover:text-background sm:flex"
      onClick={onClick}
      type="button"
    >
      <Icon className="size-4" strokeWidth={3} />
    </button>
  );
}

/** Mock Trustpilot review carousel (demo content). */
export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const { rating, items } = testimonials;

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!(track && card instanceof HTMLElement)) {
      return;
    }
    const step =
      card.offsetWidth + Number.parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section aria-label="Trustpilot reviews" className="bg-green-background py-10">
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <ArrowButton direction={-1} onClick={() => scroll(-1)} />
            <ul
              className="flex min-w-0 flex-1 snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              ref={trackRef}
            >
              {items.map((review) => (
                <li
                  className="flex w-[85%] shrink-0 snap-start flex-col rounded-md bg-white p-4 shadow-xs sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-6rem)/5)]"
                  key={review.title}
                >
                  <Stars />
                  <h3 className="mt-2 truncate font-bold text-base text-foreground">
                    {review.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-foreground text-sm leading-snug">
                    {review.body}
                  </p>
                  <p className="mt-auto pt-6 text-muted-foreground text-xs">
                    <span className="font-semibold">{review.author},</span> {review.date}
                  </p>
                </li>
              ))}
            </ul>
            <ArrowButton direction={1} onClick={() => scroll(1)} />
          </div>

          <div className="mt-4 flex flex-col items-center gap-1 text-center text-foreground text-sm">
            <p>
              Rated <strong>{rating.score}</strong> / 5 based on{" "}
              <a
                className="font-semibold underline underline-offset-2"
                href={siteConfig.links.trustpilot}
                rel="noreferrer"
                target="_blank"
              >
                {rating.count} reviews
              </a>
              . Showing our 4 &amp; 5 star reviews.
            </p>
            <a
              className="flex items-center gap-1 font-medium text-base transition-opacity hover:opacity-80"
              href={siteConfig.links.trustpilot}
              rel="noreferrer"
              target="_blank"
            >
              <StarIcon className="size-5 fill-trustpilot stroke-trustpilot" />
              Trustpilot
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
