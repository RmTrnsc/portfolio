"use client";

import ArrowRight from "app/ui/icons/arrowRight";
import PrimaryButton from "app/ui/primary-button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { waapi, stagger, animate } from "animejs";

export default function Dashboard() {
  const router = useRouter();

  const links = [
    { href: "/dashboard/presentation", label: "Tout savoir, ou presque" },
    {
      href: "/dashboard/projects",
      label: "Ils ont fait appel à mon expertise",
    },
    { href: "/dashboard/contact", label: "On boit un café ?" },
  ];

  useEffect(() => {
    waapi.animate(".link", {
      opacity: [0, 1],
      duration: 750,
      x: ["-5rem", "0rem"],
      easing: "ease-in-out",
      delay: stagger(500),
    });
  });

  const handleClick = (href: string) => {
    animate(".links-container", {
      opacity: [1, 0],
      duration: 500,
    });
    setTimeout(() => {
      router.push(href);
    }, 500);
  };
  return (
    <div className="links-container flex flex-col gap-4 justify-center items-center">
      {links.map((link) => (
        <div
          key={link.href}
          aria-description={`link to ${link.label}`}
          className="link flex items-center"
          onClick={() => handleClick(link.href)}
        >
          <PrimaryButton key={link.href}>
            <ArrowRight />
            {link.label}
          </PrimaryButton>
        </div>
      ))}
    </div>
  );
}
