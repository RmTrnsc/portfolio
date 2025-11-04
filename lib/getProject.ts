import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default async function getProject(slug: string) {
  return await prisma.project.findUnique({
    where: {
      slug: slug,
    },
    select: {
      title: true,
      contents: true,
      url: true,
      updatedAt: true,
      pictures: true,
    },
  });
}
