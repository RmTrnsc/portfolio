"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .reduce<Array<{ label: string; path: string }>>(
      (acc, segment, index, array) => {
        const path = `/${array.slice(0, index + 1).join("/")}`;

        if (array.length > 2 && index === 2) {
          const slug = array[2];
          const projectTitle = slug
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return [
            ...acc,
            {
              label: projectTitle,
              path,
            },
          ];
        } else {
          return [
            ...acc,
            {
              label: segment.charAt(0).toUpperCase() + segment.slice(1),
              path,
            },
          ];
        }
      },
      []
    );

  return (
    <nav aria-label="Chemin de navigation">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className="!no-underline">
            Accueil
          </Link>
        </li>
        {segments.map((segment) => (
          <li key={segment.path} className="flex items-baseline gap-2">
            <span className="text-gray-400">/</span>
            <Link
              href={segment.path}
              className={`${
                pathname === segment.path ? "!font-action text-xl" : ""
              } !no-underline`}
            >
              {segment.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
