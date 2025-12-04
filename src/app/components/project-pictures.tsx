"use client";

import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { animate } from "animejs";
import CustomButton from "app/ui/button";
import { useEffect, useState } from "react";

export default function ProjectPictures({
  pictures,
}: {
  pictures: { url: string; projectId: number }[];
}) {
  if (pictures.length === 0) {
    return null;
  }
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pictureIndex, setPictureIndex] = useState<number>(0);

  useEffect(() => {
    animate(".project-image-container", {
      opacity: [0, 1],
      x: ["-5rem", "0rem"],
      duration: 500,
      delay: 750,
      easing: "ease-in-out",
    });

    animate(".project-image", {
      opacity: [0, 1],
      x: ["-5rem", "0rem"],
      duration: 500,
      easing: "ease-in-out",
    });
    
    setTimeout(() => {
      document.querySelector(".project-image-container")?.classList.remove("project-image-container");
    }, 1000);
  });

  return (
    <div className="project-image-container relative flex items-center justify-center gap-2">
      {currentIndex !== 0 && (
        <CustomButton
          className="fixed left-4 z-50 bg-(--btn-bg-primary) text-[#fffffb] lg:left-8 xl:left-36"
          onClick={() => (
            setCurrentIndex(currentIndex - 1), setPictureIndex(pictureIndex - 1)
          )}
        >
          <ArrowLeftIcon className="size-6" />
        </CustomButton>
      )}
      <img
        key={pictureIndex}
        src={pictures[pictureIndex].url}
        alt={`Project picture ${pictureIndex + 1}`}
        className={`${
          currentIndex !== pictureIndex && "hidden"
        } project-image w-full rounded-2xl object-cover lg:w-[80%] xl:w-[50%]`}
      />

      {currentIndex < pictures.length - 1 && (
        <CustomButton
          className="fixed right-4 z-50 bg-(--btn-bg-primary) text-[#fffffb] lg:right-8 xl:right-36"
          onClick={() => (
            setCurrentIndex(currentIndex + 1), setPictureIndex(pictureIndex + 1)
          )}
        >
          <ArrowRightIcon className="size-6 " />
        </CustomButton>
      )}
    </div>
  );
}
