"use client";

import { useEffect } from "react";
import { animate, splitText, stagger } from "animejs";

export default function ProjectTitle({ title }: { title?: string }) {
  useEffect(() => {
    document.querySelector(".project-title")?.classList.remove("opacity-0");
    const { chars } = splitText(".project-title", {
      chars: { wrap: "visible" },
    });
    animate(chars, {
      opacity: [0, 1],
      y: [{ to: ["-100%", "0%"] }],
      scale: [{ from: 3, to: 1, ease: "in(3)" }],
      duration: 750,
      ease: "in(3)",
      delay: stagger(50),
    });
  }, []);

  return (
    <h3 className="opacity-0 project-title font-header text-4xl md:text-center">
      {title}
    </h3>
  );
}
