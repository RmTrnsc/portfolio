import getProject from "@/lib/getProject";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";
import ProjectPictures from "@/components/project-pictures";
import ArrowUpRight from "app/ui/icons/arrowUpRight";
import parse from "html-react-parser";

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
      <div className="indent-4">
        {project?.contents ? parse(project?.contents[0].presentation) : null}
      </div>
      <ProjectPictures pictures={project?.pictures || []} />
      <div>
        <span>
          {project?.contents ? parse(project.contents[0].request) : null}
        </span>
        <span>
          {project?.contents ? parse(project.contents[0].constraints) : null}
        </span>
      </div>
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
