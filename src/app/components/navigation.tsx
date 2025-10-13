"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .reduce<Array<{ label: string; path: string }>>((acc, segment, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      return [
        ...acc,
        {
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          path,
        },
      ];
    }, []);

  return (
    <nav aria-label="Chemin de navigation">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        {segments.map((segment) => (
          <li key={segment.path} className="flex items-center gap-2">
            <span className="text-gray-400">/</span>
            <Link
              href={segment.path}
              className={pathname === segment.path ? "font-header" : ""}
            >
              {segment.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
