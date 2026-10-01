"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const formatter = new Intl.NumberFormat("en-GB");

/** Counts from 0 to `value` the first time it scrolls into view. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!(node && inView) || reduceMotion) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${formatter.format(Math.round(latest))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, suffix, value]);

  // Server-render the final value so the number is correct without JS.
  return (
    <span className="tabular-nums" ref={ref}>
      {formatter.format(value)}
      {suffix}
    </span>
  );
}
