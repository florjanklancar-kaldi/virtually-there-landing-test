import type { IllustrationName } from "@/components/illustrations";
import { Illustration } from "@/components/illustrations";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Tinted card with copy on one side and an illustration that breaks out of the
 * card edge on the other. Used by "What is" and the service blocks.
 */
export function FeaturePanel({
  illustration,
  illustrationSide = "right",
  children,
  className,
}: {
  illustration: IllustrationName;
  illustrationSide?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}) {
  const art = illustrationSide === "left";

  return (
    <div
      className={cn(
        "grid items-center gap-4 rounded-2xl bg-green-background px-6 py-10 sm:px-12 lg:grid-cols-2 lg:gap-12 lg:py-12",
        className,
      )}
    >
      <Reveal
        className={cn("flex flex-col gap-5", art && "lg:order-2")}
        from={art ? "right" : "left"}
      >
        {children}
      </Reveal>
      <Reveal
        className={cn(
          "mx-auto w-full max-w-xs lg:-my-24 lg:max-w-md",
          art && "lg:order-1",
        )}
        delay={0.1}
        from={art ? "left" : "right"}
      >
        <Illustration name={illustration} />
      </Reveal>
    </div>
  );
}
