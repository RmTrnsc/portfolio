import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default async function getProject(slug: string) {
  return await prisma.project.findFirst({
    where: { slug: slug },
  });
}
