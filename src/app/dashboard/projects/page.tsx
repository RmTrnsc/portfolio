import getProjects, { getProjectsCount } from "@/lib/getProjects";
import { Project } from "app/types/Project";
import { Suspense } from "react";
import { LoadingProjectsSkeleton } from "@/components/loading-skeleton";
import { ProjectsGrid } from "@/components/project-card";

export default async function Projects() {
  const projectsCount = await getProjectsCount();
  const projects = (await getProjects()) as Project[];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <Suspense fallback={<LoadingProjectsSkeleton projectsLength={projectsCount}/>}>
        <ProjectsGrid projects={projects} />
      </Suspense>
    </div>
  );
}
