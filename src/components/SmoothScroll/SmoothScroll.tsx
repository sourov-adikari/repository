"use client";

import { type ReactNode, useEffect, useState } from "react";
import ReactLenis from "lenis/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (reducedMotion) return <>{children}</>;

  return <ReactLenis root options={{ smoothWheel: true, duration: 1.2, autoRaf: true }}>{children}</ReactLenis>;
}