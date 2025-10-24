import getProjects from "@/lib/getProjects";
import { Project } from "app/types/Project";
import ArrowRight from "app/ui/icons/arrowRight";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

export default async function Projects() {
  const projects = (await getProjects()) as Project[];
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <div key={project.id} className="grid gap-2">
          <h3 className="font-header text-3xl">{project.title}</h3>
          <div className="relative grid px-4 gap-4">
            <p className="absolute w-3/4 left-4 indent-4 py-1 px-2 rounded-2xl bg-[var(--btn-bg-primary)]/85 text-[#fffffb]">
              {project.presentation.slice(0, 100)} ...
            </p>
            <img
              src={project.pictures[0]?.url}
              alt={project.title}
              className="mt-7 mx-auto max-w-4/5 rounded-2xl"
            />
            <Link
              href={`/dashboard/projects/${project.slug}`}
              className="flex items-center"
            >
              <PrimaryButton>
                <ArrowRight />
                Voir la suite
              </PrimaryButton>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
