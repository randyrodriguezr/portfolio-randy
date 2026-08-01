"use client";

import { useState } from "react";

import { projects } from "@/data/projects";
import { Project } from "@/types/Project";

import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../cards/ProjectCard";
import ProjectViewer from "../modals/ProjectViewer";

export default function Projects() {

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="proyectos"
      className="space-y-10"
    >
      <SectionTitle
        title="Proyectos"
        subtitle="Algunos de los proyectos académicos, empresariales y personales en los que he participado."
      />

      <div className="grid gap-8 lg:grid-cols-2">

        {projects.map((project) => {

  console.log(project);

  return (
    <ProjectCard
      key={project.id}
      project={project}
      onView={setSelectedProject}
    />
  );

})}

      </div>

 <ProjectViewer
    open={selectedProject !== null}
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
/>

    </section>
  );
}