"use client";

import PrimaryButton from "./ui/primary-button";
import Link from "next/link";
import ArrowRight from "./ui/icons/arrowRight";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(SplitText);
  let tl = gsap.timeline({ defaults: { ease: "power1" } });

  useEffect(() => {
    gsap.set(".welcome-container", { opacity: 1 });
    let split;

    SplitText.create(".welcome-content", {
      type: "words",
      wordsClass: "word",
      autoSplit: true,
      mask: "words",
      onSplit: (data) => {
        split = gsap.from(data.words, {
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
        });
        return split;
      },
    });

    tl.from(".welcome-link", {
      opacity: 0,
      duration: 0.5,
      delay: 3.5,
      transform: "translateX(-5rem)",
    });
  });

  return (
    <main className="welcome-container flex flex-col gap-20 justify-center">
      <div className="text-justify">
        <p className="welcome-content md:w-1/2 md:mx-auto">
          <span className="mx-2">Mon</span>
          travail est d'aider les entreprises, comme les particuliers, à créer
          ou améliorer leurs visibilités sur Internet, au travers d'applications
          mobiles, de sites web, en utilisant les technologies les plus adaptées
          à leurs besoins.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          href="/dashboard"
          aria-describedby="link to dashboard"
          className="welcome-link flex items-center"
        >
          <PrimaryButton>
            <ArrowRight />
            Commencer la visite
          </PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
