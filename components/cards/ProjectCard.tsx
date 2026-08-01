import { Project } from "@/types/Project";
import {
  CalendarRange,
  Building2,
  MapPin,
  ExternalLink,
  GitBranch,
  Eye,
} from "lucide-react";

import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onView,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Imagen */}

      <div className="relative h-60 w-full overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-green-600
            px-3
            py-1
            text-xs
            font-semibold
            text-white
          "
        >
          {project.category}
        </span>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-1 text-green-600">
          {project.subtitle}
        </p>

        <div className="mt-5 space-y-2 text-gray-600">

          {project.company && (
            <div className="flex items-center gap-2">
              <Building2 size={18} />
              {project.company}
            </div>
          )}

          {project.location && (
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {project.location}
            </div>
          )}

          <div className="flex items-center gap-2">
            <CalendarRange size={18} />
            {project.start} - {project.end}
          </div>

        </div>

        <p className="mt-5 leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-gray-100
                px-3
                py-1
                text-xs
                font-medium
              "
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-8 flex flex-wrap gap-3">

          <button
            onClick={() => onView(project)}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-green-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            <Eye size={18} />

            Ver proyecto
          </button>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                px-5
                py-3
              "
            >
              <ExternalLink size={18} />

              Sitio
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                px-5
                py-3
              "
            >
              <GitBranch size={18} />

              GitHub
            </a>
          )}

        </div>

      </div>

    </article>
  );
}