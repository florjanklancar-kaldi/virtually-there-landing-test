import Image from "next/image";

import { cn } from "@/lib/utils";

/*
 * Brand illustrations: most are shared with the customer portal (its /public/svg);
 * whisper, highfive, octopus and jetpack come from virtually-there.net.
 * Next serves .svg sources unoptimised, so width/height only reserve layout space.
 */
const illustrations = {
  hero: { src: "/illustrations/hero-selfie.svg", width: 240, height: 240 },
  whatIs: { src: "/illustrations/cannon.svg", width: 288, height: 288 },
  address: { src: "/illustrations/flower.svg", width: 242, height: 242 },
  registered: { src: "/illustrations/magician.svg", width: 361, height: 360 },
  landline: { src: "/illustrations/skateboarding.svg", width: 240, height: 240 },
  calls: { src: "/illustrations/phone-clock.svg", width: 240, height: 240 },
  yoga: { src: "/illustrations/yoga.svg", width: 465, height: 400 },
  whisper: { src: "/illustrations/whisper.svg", width: 1211, height: 1040 },
  highfive: { src: "/illustrations/highfive.svg", width: 1142, height: 1086 },
  octopus: { src: "/illustrations/octopus.svg", width: 1293, height: 986 },
  jetpack: { src: "/illustrations/jetpack.svg", width: 1239, height: 1235 },
} as const;

export type IllustrationName = keyof typeof illustrations;

export function Illustration({
  name,
  alt = "",
  priority,
  float = true,
  className,
}: {
  name: IllustrationName;
  /** Leave empty for decorative use. */
  alt?: string;
  priority?: boolean;
  /** Gentle idle bob (disabled under prefers-reduced-motion). */
  float?: boolean;
  className?: string;
}) {
  const { src, width, height } = illustrations[name];

  return (
    <Image
      alt={alt}
      className={cn("h-auto w-full select-none", float && "animate-float", className)}
      draggable={false}
      height={height}
      priority={priority}
      src={src}
      width={width}
    />
  );
}
