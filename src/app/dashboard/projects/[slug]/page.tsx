import getProject from "@/lib/getProject";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  return (
    <div>
      <h1>{project?.title}</h1>
      <p>{project?.presentation}</p>
      {project?.url && (
        <Link href={project.url} target="_blank" rel="noreferrer">
          Voir le projet en ligne
        </Link>
      )}
    </div>
  );
}
