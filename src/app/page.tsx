"use client";

import { useEffect, useState } from "react";
import { animate, splitText, stagger } from "animejs";
import ButtonLink from "./ui/button-link";

export default function Home() {
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(0);
  let animation: any;

  useEffect(() => {
    const { words } = splitText(".welcome-content", {
      words: { wrap: "clip" },
    });

    const wordCount = words.length;
    const duration = 750;
    const delayBetweenWords = 50;
    const calculatedDuration = duration + (wordCount - 1) * delayBetweenWords;
    setTotalAnimationDuration(calculatedDuration);

    animation = animate(words, {
      opacity: [0, 1],
      duration: 750,
      easing: "ease-in-out",
      delay: stagger(50),
    });
  }, []);

  return (
    <main className="welcome-container flex flex-col gap-20 justify-center">
      <div className="text-justify">
        <p className="welcome-content md:w-1/2 md:mx-auto">
          <span className="mx-2 md:mx-0 md:mr-2">Mon</span>
          travail est d'aider les entreprises, comme les particuliers, à créer
          ou améliorer leurs visibilités sur Internet, au travers d'applications
          mobiles, de sites web, en utilisant les technologies les plus adaptées
          à leurs besoins.
        </p>
      </div>
      <ButtonLink
        url="/dashboard"
        text="Commencer la visite"
        totalAnimationDuration={totalAnimationDuration}
        animation={animation}
      />
    </main>
  );
}
