import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
  data: [
    {
      title: "Project Alpha",
      presentation: "First project description",
      published: true,
      slug: "project_alpha",
      url: "",
    },
    {
      title: "Project Beta",
      presentation: "Second project description",
      published: true,
      slug: "project_beta",
      url: "",
    },
    {
      title: "Project Gamma",
      presentation: "Third project description",
      published: false,
      slug: "project_gamma",
      url: "",
    },
  ],
  skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
