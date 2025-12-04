import getProject from "@/lib/getProject";
import ProjectPictures from "@/components/project-pictures";
import { Suspense } from "react";
import Loading from "./loading";
import ProjectTitle from "@/components/project-title";
import ProjectContent from "@/components/project-content";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="grid gap-6">
      <Suspense fallback={<Loading />}>
        <ProjectTitle title={project?.title} />
        <div className="grid gap-6 md:grid-cols-[55%_1fr] md:items-center">
          <ProjectPictures pictures={project?.pictures || []} />
          <ProjectContent project={project || []} />
        </div>
      </Suspense>
    </div>
  );
}
