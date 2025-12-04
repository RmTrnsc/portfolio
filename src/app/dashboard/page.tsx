import ButtonLink from "app/ui/button-link";

export default function Dashboard() {
  const links = [
    { href: "/dashboard/presentation", label: "Tout savoir, ou presque" },
    {
      href: "/dashboard/projects",
      label: "Ils ont fait appel à mon expertise",
    },
    { href: "/dashboard/contact", label: "On boit un café ?" },
  ];

  return (
    <div className="links-container flex flex-col gap-4 justify-center items-center">
      {links.map((link) => (
        <ButtonLink
          key={link.href}
          url={link.href}
          text={link.label}
          stagger={500}
          totalAnimationDuration={0}
        />
      ))}
    </div>
  );
}
