"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
};

/** Fades and lifts children into view once when scrolled into the viewport. */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
