"use client";

import { animate, set, stagger } from "animejs";
import ArrowRight from "./icons/arrowRight";
import PrimaryButton from "./primary-button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ButtonLink(content: {
  url: string;
  text: string;
  stagger?: number | 0;
  totalAnimationDuration: number;
  blank?: boolean | false;
  animation?: any;
}) {
  const router = useRouter();
  useEffect(() => {
    document.querySelector(".link-container")?.classList.remove("opacity-0");

    animate(".link-container", {
      opacity: [0, 1],
      x: ["-5rem", "0rem"],
      delay:
        content.stagger && content.stagger != 0
          ? stagger(content.stagger, { start: content.totalAnimationDuration })
          : content.totalAnimationDuration,
      duration: 750,
      easing: "ease-in-out",
    });
  }, [content.stagger, content.totalAnimationDuration]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const button = e.currentTarget.querySelector("button");
    const arrow = button?.querySelector(".button-arrow");
    const text = button?.querySelector(".button-text");
    let textAnimation: any, arrowAnimation: any;

    if (arrow && text && button) {
      const buttonWidth = button.getBoundingClientRect().width;
      const translateDistance = `${buttonWidth}px`;

      arrowAnimation = animate(arrow, {
        rotate: content.blank ? 45 : 0,
        translateX: { to: translateDistance, delay: 300 },
        opacity: { to: 0, delay: 300 },
        duration: 250,
        easing: "ease-in-out",
      });
      textAnimation = animate(text, {
        opacity: [1, 0],
        duration: 750,
        easing: "ease-in-out",
      });
      setTimeout(() => {
        if (content.blank) {
          window.open(content.url, "_blank");
        } else {
          router.replace(content.url);
        }
        setTimeout(() => {
          arrowAnimation.reset();
          textAnimation.reset();
          content.animation?.reset();
        }, 500);
      }, 700);
    }
  };

  return (
    <div onClick={handleClick} className="opacity-0 link-container mx-auto">
      <PrimaryButton>
        <ArrowRight blank={content.blank} />
        <span className="button-text">{content.text}</span>
      </PrimaryButton>
    </div>
  );
}
