"use client";

import { splitText, stagger, animate } from "animejs";
import ButtonLink from "app/ui/button-link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Presentation() {
  const router = useRouter();
  const [cumulativeDelay, setCumulativeDelay] = useState(0);
  
  useEffect(() => {
    const container = document.querySelector(".presentation-container");
    container?.querySelectorAll<HTMLParagraphElement>("p").forEach(($el) => {
      $el.classList.add("presentation-content");
    });

    let cumulativeDelay = 0;

    document.querySelectorAll(".presentation-content").forEach(($el) => {
      const { words } = splitText($el as HTMLElement, {
        words: { wrap: "visible" },
      });
      const wordCount = words.length;
      const duration = 750;
      const delayBetweenWords = 50;
      const totalAnimationDuration =
        duration + (wordCount - 1) * delayBetweenWords;

      animate(words, {
        opacity: [0, 1],
        duration: 750,
        easing: "ease-in-out",
        delay: stagger(50, { start: cumulativeDelay }),
      });

      setCumulativeDelay((cumulativeDelay += totalAnimationDuration + 10));
    });
  }, []);

  const handleClick = (href: string) => {
    animate(".presentation-container", {
      opacity: [1, 0],
      duration: 500,
    });
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  return (
    <div className="presentation-container grid gap-6 md:my-10 md:w-1/2 md:mx-auto md:gap-20 xl:my-5">
      <div className="grid gap-(--content-gap)">
        <p className="text-justify">
          Je suis Romain, développeur passionné par la création d'applications
          web.
        </p>
        <p className="text-justify">
          Cela va de la conception d'une page web simple pour améliorer la
          visibilité en ligne, avec prise de contact, jusqu'à la création
          d'applications web complètes. Comprenant des fonctionnalités avancées,
          gestion d'utilisateurs, mise en place d'un contenu dynamique,
          intégration d'API.
        </p>
        <p className="text-justify">
          J'aime travailler avec les dernières technologies et créer des
          expériences utilisateur intuitives, qui correspondent à vos besoins et
          à vos attentes.
        </p>
        <p className="text-justify">
          Quand je ne code pas, j'aime me tenir au courant des nouveautés tech,
          sortir avec mes amis, ma famille, jouer à des jeux vidéo...
        </p>
      </div>
      <div>
        <p className="font-header text-2xl font-bold text-center">
          Bienvenue sur mon portfolio et bonne visite !
        </p>
      </div>
      <div className="grid gap-(--content-gap)">
        <p className="text-justify">
          Vous pouvez me contacter via les réseaux, ci-dessous, ou par email sur
          la page de{" "}
          <span
            onClick={() => handleClick("/dashboard/contact")}
            className="font-action text-2xl underline underline-offset-2 cursor-pointer"
          >
            contact
          </span>
          .
        </p>
        <div className="links-container grid justify-center items-center gap-2 md:grid-cols-3">
          <ButtonLink
            url="https://www.fiverr.com"
            text="Fiverr"
            stagger={500}
            totalAnimationDuration={cumulativeDelay}
            blank={true}
          />
          <ButtonLink
            url="https://www.malt.fr"
            text="Malt"
            stagger={500}
            totalAnimationDuration={cumulativeDelay}
            blank={true}
          />
          <ButtonLink
            url="https://www.linkedin.com/in/romain-tournesac/"
            text="LinkedIn"
            stagger={500}
            totalAnimationDuration={cumulativeDelay}
            blank={true}
          />
        </div>
      </div>
    </div>
  );
}
