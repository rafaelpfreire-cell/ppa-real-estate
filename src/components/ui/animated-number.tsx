"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1300,
  className = "",
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frameId: number | null = null;
    let observer: IntersectionObserver | null = null;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      frameId = requestAnimationFrame(() => setDisplay(value));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();

            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) {
                frameId = requestAnimationFrame(step);
              }
            };

            frameId = requestAnimationFrame(step);
            observer?.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(node);
    }

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
