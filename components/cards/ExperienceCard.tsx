
import { Experience } from "@/types/Experience";
import Badge from "../ui/Badge";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="relative border-l-2 border-green-500 pl-6 pb-10">

      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-green-500"></div>

      <p className="text-sm text-gray-500">
        {experience.start} • {experience.end}
      </p>

      <h3 className="mt-2 text-xl font-bold">
        {experience.position}
      </h3>

      <p className="text-green-600 font-medium">
        {experience.company}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        📍 {experience.location}
      </p>

      <p className="mt-4 leading-7 text-gray-600">
        {experience.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>

    </div>
  );
}