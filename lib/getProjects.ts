import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default async function getProjects() {
  return await prisma.project.findMany({
    where: { published: true },
    orderBy: [{ updatedAt: "desc" }],
    include: {
      pictures: {
        take: 1,
        orderBy: { id: "desc" },
      },
      contents: true
    },
  });
}
