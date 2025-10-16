import ArrowUpRight from "app/ui/icons/arrowUpRight";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default function Presentation() {
  return (
    <main className="relative grid h-full items-center gap-4">
      <div className="grid gap-4">
        <p className="text-justify indent-4">
          Je suis Romain, développeur passionné par la création d'applications
          web.
        </p>
        <p className="text-justify">
          Cela va de la conception d'une page web simple pour améliorer la
          visibilité en ligne, avec prise de contact, jusqu'à la création
          d'applications web complètes. Comprenant des fonctionnalités avancées,
          gestion d'utilisateurs, mise en place d'un contenu dynamique,
          intégration d'API.
        </p>
        <p className="text-justify">
          J'aime travailler avec les dernières technologies et créer des
          expériences utilisateur intuitives, qui correspondent à leurs besoins
          et à leurs attentes.
        </p>
        <p className="text-justify">
          Quand je ne code pas, j'aime me tenir au courant des nouveautés tech,
          sortir avec mes amis, jouer à des jeux vidéo...
        </p>
        <p className="text-justify">
          Bienvenue sur mon portfolio et bonne visite !
        </p>
      </div>
      <div className="grid gap-4">
        <p className="text-justify">
          Vous pouvez me contacter via les réseaux, ci-dessous, ou par email sur
          la page de{" "}
          <Link
            href="/dashboard/contact"
            className="font-action text-2xl underline underline-offset-2"
          >
            contact
          </Link>
          .
        </p>
        <div className="grid justify-center items-center gap-2">
          <PrimaryButton>
            <ArrowUpRight />
            <Link
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              Fiverr
            </Link>
          </PrimaryButton>
          <PrimaryButton>
            <ArrowUpRight />
            <Link
              href="https://www.malt.fr/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              Malt
            </Link>
          </PrimaryButton>
          <PrimaryButton>
            <ArrowUpRight />
            <Link
              href="https://www.linkedin.com/in/romain-tournesac/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              LinkedIn
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
}
