"use client";

import { useEffect } from "react";

export function AmbientField() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${event.clientX}px`);
        root.style.setProperty("--my", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-grid-hot" />
      <div className="ambient-dots" />
      <div className="spotlight" />
    </div>
  );
}
