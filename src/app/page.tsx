"use client";

import PrimaryButton from "./ui/primary-button";
import ArrowRight from "./ui/icons/arrowRight";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { animate, splitText, stagger } from "animejs";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { words } = splitText(".welcome-content", {
      words: { wrap: "clip" },
    });

    animate(words, {
      opacity: [0, 1],
      duration: 750,
      easing: "ease-in-out",
      delay: stagger(50),
    });

    animate(".welcome-link", {
      opacity: [0, 1],
      duration: 750,
      x: ["-5rem", "0rem"],
      easing: "ease-in-out",
      delay: 2000,
    });
  });

  const handleClick = () => {
    animate(".welcome-container", {
      opacity: [1, 0],
      duration: 500,
    });
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

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
      <div
        aria-describedby="link to dashboard"
        className="welcome-link flex items-center"
        onClick={() => handleClick()}
      >
        <PrimaryButton>
          <ArrowRight />
          Commencer la visite
        </PrimaryButton>
      </div>
    </main>
  );
}
