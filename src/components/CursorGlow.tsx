"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
        {
          duration: 600,
          fill: "forwards",
        },
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/65 blur-3xl md:block"
    />
  );
}
