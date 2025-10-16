import ArrowRight from "app/ui/icons/arrowRight";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default function Dashboard() {
  const links = [
    { href: "/dashboard/presentation", label: "Tout savoir, ou presque" },
    { href: "/dashboard/projects", label: "Ils ont fait appel à mon expertise" },
    { href: "/dashboard/contact", label: "On boit un café ?" },
  ];
  return (
    <main className="flex flex-col gap-4 justify-center items-center">
      {links.map((link) => (
        <PrimaryButton key={link.href}>
          <ArrowRight />
          <Link key={link.href} href={link.href} aria-description={`link to ${link.label}`}>
            {link.label}
          </Link>
        </PrimaryButton>
      ))}
    </main>
  );
}
