import { Publication } from "@/types/Publication";
import { Calendar, MapPin, ExternalLink, FileText } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  return (
    <article
      className="
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          <FileText size={16} />
          {publication.type}
        </span>

        <span className="text-lg font-bold text-green-600">
          {publication.year}
        </span>

      </div>

      <h3 className="mt-5 text-xl font-bold leading-8">
        {publication.title}
      </h3>

      <div className="mt-5 flex items-center gap-2 text-gray-500">
        <MapPin size={18} />
        {publication.location}
      </div>

      <a
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          font-semibold
          text-green-600
          hover:text-green-700
        "
      >
        Ver publicación
        <ExternalLink size={18} />
      </a>
    </article>
  );
}