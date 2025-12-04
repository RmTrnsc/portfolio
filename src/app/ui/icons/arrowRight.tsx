import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function ArrowRight({ blank }: { blank?: boolean }) {
  return (
    <ArrowRightIcon
      className={`${blank && "-rotate-45"} button-arrow size-6 text-[#fffffb]`}
    />
  );
}
