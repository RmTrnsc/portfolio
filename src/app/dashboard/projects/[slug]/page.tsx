import getProject from "@/lib/getProject";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";
import ProjectPictures from "@/components/project-pictures";
import ArrowUpRight from "app/ui/icons/arrowUpRight";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="grid gap-4">
      <h3 className="font-header text-3xl">{project?.title}</h3>
      <p className="indent-4">{project?.presentation}</p>
      <ProjectPictures pictures={project?.pictures || []} />
      {project?.url && (
        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <PrimaryButton>
            <ArrowUpRight />
            Voir en ligne
          </PrimaryButton>
        </Link>
      )}
    </div>
  );
}
