"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useIsPreview } from "./preview/PreviewContext";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isPreview = useIsPreview();

  useEffect(() => {
    if (isPreview) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isPreview]);

  // Inside the admin preview there is nothing to scroll into view, so skip
  // the animation entirely and render the content already visible.
  if (isPreview) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
