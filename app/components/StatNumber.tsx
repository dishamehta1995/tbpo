"use client";
import { useEffect, useRef, useState } from "react";

type StatNumberProps = {
  value: string;
  duration?: number;
  className?: string;
  once?: boolean;
};

export function StatNumber({
  value,
  duration = 1200,
  className = "",
  once = true,
}: StatNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const rawNumber = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.,]/g, "");
    const isDecimal = value.includes(".");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (once && hasAnimated.current) return;

        hasAnimated.current = true;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const current = rawNumber * progress;

          setDisplayValue(
            isDecimal
              ? current.toFixed(1)
              : Math.floor(current).toLocaleString()
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, once]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {value.replace(/[0-9.,]/g, "")}
    </span>
  );
}
