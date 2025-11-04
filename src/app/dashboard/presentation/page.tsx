import ArrowUpRight from "app/ui/icons/arrowUpRight";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default function Presentation() {
  return (
    <main className="relative grid gap-8">
      <div className="grid gap-3">
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
          expériences utilisateur intuitives, qui correspondent à vos besoins
          et à vos attentes.
        </p>
        <p className="text-justify">
          Quand je ne code pas, j'aime me tenir au courant des nouveautés tech,
          sortir avec mes amis, ma famille, jouer à des jeux vidéo...
        </p>
        <p className="font-header text-2xl font-bold text-justify mx-auto">
          Bienvenue sur mon portfolio et bonne visite !
        </p>
      </div>
      <div className="grid gap-3">
        <p className="text-justify italic">
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
          <Link
            href="https://www.fiverr.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <PrimaryButton>
              <ArrowUpRight />
              Fiverr
            </PrimaryButton>
          </Link>
          <Link
            href="https://www.malt.fr/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <PrimaryButton>
              <ArrowUpRight />
              Malt
            </PrimaryButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/romain-tournesac/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <PrimaryButton>
              <ArrowUpRight />
              LinkedIn
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
