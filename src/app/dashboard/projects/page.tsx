import getProjects from "@/lib/getProjects";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  presentation: string;
  published: boolean;
  slug: string;
}

export default async function Projects() {
  const projects = (await getProjects()) as Project[];

  return (
    <main className="flex flex-col gap-20">
      <div className="grid gap-8">
        {projects.map(
          (project) =>
            project.published && (
              <div key={project.id} className="grid gap-2">
                <h3 className="font-header text-2xl">{project.title}</h3>
                <div className="grid px-4 gap-4">
                  <p>{project.presentation}</p>
                  <Link
                    href={`/dashboard/projects/${project.slug}`}
                    className="text-right"
                  >
                    <PrimaryButton>Voir le projet</PrimaryButton>
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </main>
  );
}
