import { Education } from "@/types/Education";

interface Props {
  education: Education;
}

export default function EducationCard({ education }: Props) {
  return (
    <div className="relative border-l-2 border-green-500 pl-6 pb-8">

      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></div>

      <p className="text-sm text-gray-500">
        {education.start} - {education.end}
      </p>

      <h3 className="text-lg font-semibold mt-1">
        {education.degree}
      </h3>

      <p className="text-gray-700">
        {education.institution}
      </p>

      <p className="text-sm text-gray-500">
        📍{education.location}
      </p>

    </div>
  );
}