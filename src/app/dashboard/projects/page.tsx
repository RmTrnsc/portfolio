import getProjects from "@/lib/getProjects";
import { Project } from "app/types/Project";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default async function Projects() {
  const projects = (await getProjects()) as Project[];
  return (
    <main className="flex flex-col gap-20">
      <div className="grid gap-8">
        {projects.map((project) => (
          <div key={project.id} className="grid gap-2">
            <h3 className="font-header text-2xl">{project.title}</h3>
            <div className="grid px-4 gap-4">
              <p>{project.presentation.slice(0,100)}...</p>
              <Link
                href={`/dashboard/projects/${project.slug}`}
                className="mx-auto"
              >
                <PrimaryButton>Voir la suite</PrimaryButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
