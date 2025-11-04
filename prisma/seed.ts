import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.project.create({
    data: {
      title: "Patapi",
      published: true,
      slug: "patapi",
      url: "https://patapi.fr",
      contents: {
        create: [
          {
            presentation:
              "<p>Patapi, est le site d'une pet walker/sitter, installée sur Montrouge(92). Elle propose ses services aux particuliers, soucieux du bien-être de leur animal de compagnie. Promenade, garde, jeux, soin font parties des prestations</p>",
            request:
              "<p>Marion, souhaitais créer une site web administrable, qui lui permet, en plus de sa page google, d'améliorer sa visibilité.</p>",
            constraints:
              "<p>Administrable, car évolutif. Une envie de partager ses relations avec les animaux, renseigner sur ses services était essentiel. Il y a donc toute une partie, administrateur, qui lui permet d'éditer le contenu de son site web, allant du texte de présentation, aux avis, passant par les services, qui sont susceptible d'évoluer.</p>",
          },
        ],
      },
      pictures: {
        create: [
          {
            url: "https://images.pexels.com/photos/34307788/pexels-photo-34307788.jpeg?_gl=1*cvv6sx*_ga*OTIyNjAzMjUzLjE3NjEyOTk1NDY.*_ga_8JE65Q40S6*czE3NjEyOTk1NDUkbzEkZzEkdDE3NjEyOTk2MzkkajI5JGwwJGgw",
          },
          {
            url: "https://images.pexels.com/photos/31653067/pexels-photo-31653067.jpeg?_gl=1*1p836wr*_ga*OTIyNjAzMjUzLjE3NjEyOTk1NDY.*_ga_8JE65Q40S6*czE3NjEyOTk1NDUkbzEkZzEkdDE3NjEyOTk2MTckajUxJGwwJGgw",
          },
          {
            url: "https://images.pexels.com/photos/34090068/pexels-photo-34090068.jpeg?_gl=1*vd0s65*_ga*OTIyNjAzMjUzLjE3NjEyOTk1NDY.*_ga_8JE65Q40S6*czE3NjEyOTk1NDUkbzEkZzEkdDE3NjEyOTk1OTAkajE1JGwwJGgw",
          },
        ],
      },
    },
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
