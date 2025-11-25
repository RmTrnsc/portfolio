"use client";

import { useEffect } from "react";
import { waapi, stagger, animate } from "animejs";
import { Project } from "app/types/Project";
import ArrowRight from "app/ui/icons/arrowRight";
import PrimaryButton from "app/ui/primary-button";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";

export function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Cibler uniquement les éléments du bouton cliqué
    const button = e.currentTarget;
    const arrow = button.querySelector(".button-arrow");
    const text = button.querySelector(".button-text");

    // Animation de la flèche et du texte
    if (arrow) {
      animate(arrow, {
        x: ["0rem", "10rem"],
        duration: 700,
        easing: "ease-in-out",
      });
    }

    if (text) {
      animate(text, {
        opacity: [1, 0],
        duration: 700,
        easing: "ease-in-out",
      });
    }

    // Fade-out général après l'animation du bouton
    setTimeout(() => {
      animate(".loading-container, .project-card", {
        opacity: [1, 0],
        duration: 500,
      });
      setTimeout(() => {
        router.push(`/dashboard/projects/${project.slug}`);
      }, 500);
    }, 700);
  };

  return (
    <div className="project-card grid gap-2">
      <h3 className="project-title font-header text-3xl">{project.title}</h3>
      <div className="relative grid px-4 gap-4">
        <div className="project-presentation absolute z-10 w-3/4 left-4 indent-4 py-1 px-2 rounded-2xl bg-(--btn-bg-primary)/85 text-[#fffffb]">
          {project.contents && parse(project.contents[0].presentation)}
        </div>
        <img
          src={project.pictures[0]?.url}
          alt={project.title}
          className="project-image mt-7 mx-auto max-w-4/5 rounded-2xl"
        />
        <div
          onClick={handleClick}
          className="project-button flex items-center cursor-pointer"
        >
          <PrimaryButton>
            <span className="button-arrow inline-block">
              <ArrowRight />
            </span>
            <span className="button-text">Voir la suite</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  useEffect(() => {
    waapi.animate(".project-card", {
      opacity: [0, 1],
      x: ["-2rem", "0rem"],
      duration: 750,
      easing: "ease-in-out",
      delay: stagger(500),
    });

    waapi.animate(".project-title, .project-presentation, .project-image, .project-button", {
      opacity: [0, 1],
      x: ["-2rem", "0rem"],
      duration: 500,
      easing: "ease-in-out",
      delay: stagger(150, { start: 300 }),
    });
  }, []);

  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
}
