"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  formatFn?: (n: number) => string;
}

function defaultFormat(n: number): string {
  return n.toLocaleString("pt-BR");
}

export function CountUp({
  end,
  suffix = "",
  duration = 2,
  className,
  formatFn,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");
  const formatRef = useRef(formatFn ?? defaultFormat);

  useEffect(() => {
    if (!isInView) return;

    const format = formatRef.current;
    let start: number | null = null;
    let frame: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);

      setDisplay(format(current) + suffix);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(format(end) + suffix);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
