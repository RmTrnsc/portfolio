"use client";

import { animate, splitText, stagger } from "animejs";
import ButtonLink from "app/ui/button-link";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

export default function ProjectContent({ project }: { project: any }) {
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(0);

  useEffect(() => {
    document.querySelector(".project-content")?.classList.remove("opacity-0");
    const { words } = splitText(".project-content", {
      words: { wrap: "clip" },
    });

    const wordCount = words.length;
    const duration = 500;
    const delayBetweenWords = 50;
    const calculatedDuration = duration + (wordCount - 1) * delayBetweenWords;
    setTotalAnimationDuration(calculatedDuration);

    animate(words, {
      opacity: [0, 1],
      duration: 750,
      delay: stagger(50, { start: 1000 }),
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="grid gap-4 md:gap-10">
      <div className="opacity-0 project-content grid gap-6 md:grid-rows-3 md:items-center ">
        <span>{project ? parse(project.contents[0].presentation) : null}</span>
        <span>{project ? parse(project.contents[0].request) : null}</span>
        <span>{project ? parse(project.contents[0].constraints) : null}</span>
      </div>
      {project.url && (
        <ButtonLink
          url={project.url}
          text="Voir en ligne"
          totalAnimationDuration={totalAnimationDuration + 750}
          blank={true}
        />
      )}
    </div>
  );
}
