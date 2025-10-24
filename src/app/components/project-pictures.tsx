"use client";

import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import CustomButton from "app/ui/button";
import { useState } from "react";

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

  return (
    <div className="relative flex gap-4">
      <img
        key={pictureIndex}
        src={pictures[pictureIndex].url}
        alt={`Project picture ${pictureIndex + 1}`}
        className={`${
          currentIndex !== pictureIndex && "hidden"
        } w-full rounded-2xl object-cover`}
      />
      <div className="absolute z-50 top-1/2 w-full flex justify-between px-4">
        {currentIndex !== 0 && (
          <CustomButton
            className="absolute left-4 bg-[var(--btn-bg-primary)] text-[#fffffb]"
            onClick={() => (
              setCurrentIndex(currentIndex - 1),
              setPictureIndex(pictureIndex - 1)
            )}
          >
            <ArrowLeftIcon className="size-6" />
          </CustomButton>
        )}
        {currentIndex < pictures.length - 1 && (
          <CustomButton
            className="absolute right-4 bg-[var(--btn-bg-primary)] text-[#fffffb]"
            onClick={() => (
              setCurrentIndex(currentIndex + 1),
              setPictureIndex(pictureIndex + 1)
            )}
          >
            <ArrowRightIcon className="size-6 " />
          </CustomButton>
        )}
      </div>
    </div>
  );
}
