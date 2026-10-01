"use client";

import type { Variants } from "motion/react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right";
  /** Animate on mount instead of on scroll (for above-the-fold content). */
  immediate?: boolean;
};

const offsets = {
  bottom: { x: 0, y: 24 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
};

/** Fades and slides children into view once, when scrolled into the viewport. */
export function Reveal({
  delay = 0,
  from = "bottom",
  immediate = false,
  children,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const target = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...offsets[from] }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Staggers the entrance of its direct `RevealItem` children. */
export function RevealGroup({
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      variants={groupVariants}
      viewport={{ once: true, margin: "-80px" }}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem(props: React.ComponentProps<typeof motion.div>) {
  return <motion.div variants={itemVariants} {...props} />;
}
