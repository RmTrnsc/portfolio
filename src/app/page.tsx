import PrimaryButton from "./ui/primary-button";
import Link from "next/link";
import ArrowRight from "./ui/icons/arrowRight";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center">
      <div className="text-justify">
        <p className="indent-4">
          Mon travail est d'aider les entreprises, comme les particuliers, à créer ou améliorer leurs visibilités sur Internet, au travers d'applications mobiles, de sites web, en utilisant les technologies les plus adaptées à
          leurs besoins.
        </p>
      </div>
      <div className="flex justify-center">
        <PrimaryButton>
          <ArrowRight />
          <Link href="/dashboard" aria-describedby="link to dashboard">Commencer la visite</Link>
        </PrimaryButton>
      </div>
    </main>
  );
}