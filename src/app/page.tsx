"use client";

import PrimaryButton from "./ui/primary-button";
import ArrowRight from "./ui/icons/arrowRight";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  gsap.registerPlugin(SplitText);
  let tl = gsap.timeline({ defaults: { ease: "power1" } });
  let container: any;
  const router = useRouter();

  useEffect(() => {
    container = document.querySelector(".welcome-container");
    gsap.set(container, { opacity: 1 });
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

  const handleClick = () => {
    tl.to(container, {
      opacity: 0,
      duration: 0.5,
    });
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

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
      </div>
    </main>
  );
}
