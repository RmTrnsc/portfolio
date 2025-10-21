import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default async function getProjects() {
  return await prisma.project.findMany();
}