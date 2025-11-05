import getProject from "@/lib/getProject";
import PrimaryButton from "app/ui/primary-button";
import Link from "next/link";
import ProjectPictures from "@/components/project-pictures";
import ArrowUpRight from "app/ui/icons/arrowUpRight";
import parse from "html-react-parser";
import { Suspense } from "react";
import Loading from "./loading";

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
        <h3 className="font-header text-4xl md:text-center">
          {project?.title}
        </h3>
        <div className="grid gap-6 md:grid-cols-[55%_1fr] md:items-start">
          <ProjectPictures pictures={project?.pictures || []} />
          <div className="grid gap-6 md:relative md:grid-rows-4 md:items-center">
            <span className="indent-4 md:indent-0">
              {project?.contents
                ? parse(project?.contents[0].presentation)
                : null}
            </span>
            <span>
              {project?.contents ? parse(project.contents[0].request) : null}
            </span>
            <span>
              {project?.contents
                ? parse(project.contents[0].constraints)
                : null}
            </span>
            {project?.url && (
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex md:absolute md:bottom-0 md:left-0 md:right-0"
              >
                <PrimaryButton>
                  <ArrowUpRight />
                  Voir en ligne
                </PrimaryButton>
              </Link>
            )}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
