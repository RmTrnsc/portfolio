import ArrowRight from "app/ui/icon/arrowRight";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default function Dashboard() {
  const links = [
    { href: "/dashboard/presentation", label: "Présentation" },
    { href: "/dashboard/projects", label: "Projets" },
    { href: "/dashboard/contact", label: "Contact" },
  ];
  return (
    <main className="flex flex-col gap-4 justify-center items-center">
      {links.map((link) => (
        <PrimaryButton key={link.href}>
          <ArrowRight />
          <Link key={link.href} href={link.href} className="">
            {link.label}
          </Link>
        </PrimaryButton>
      ))}
    </main>
  );
}
