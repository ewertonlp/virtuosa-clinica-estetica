"use client";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { theme } from "@/config/theme";
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.45, 1], y: [18, 0] }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: theme.motion.duration,
        ease: theme.motion.ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
