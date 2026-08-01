import { Certification } from "@/types/Certification";
import {
  CalendarRange,
  Building2,
  MapPin,
  Eye,
  Award,
} from "lucide-react";

interface CertificationCardProps {
  certification: Certification;
  onView: (certification: Certification) => void;
}

export default function CertificationCard({
  certification,
  onView,
}: CertificationCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
        hover:shadow-xl
      "
    >
      {/* Encabezado */}
      <div className="flex items-center justify-between">
        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-green-100
            px-3
            py-1
            text-sm
            font-semibold
            text-green-700
          "
        >
          <Award size={16} />
          {certification.type}
        </span>
      </div>

      {/* Título */}
      <h3
        className="
          mt-5
          text-xl
          font-bold
          leading-8
          transition-colors
          duration-300
          group-hover:text-green-600
        "
      >
        {certification.title}
      </h3>

      {/* Información */}
      <div className="mt-5 space-y-3 text-sm text-gray-600">
        <div className="flex items-start gap-3">
          <Building2
            size={18}
            className="mt-0.5 text-green-600"
          />

          <span>{certification.institution}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin
            size={18}
            className="text-green-600"
          />

          <span>{certification.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <CalendarRange
            size={18}
            className="text-green-600"
          />

          <span>
            {certification.start} - {certification.end}
          </span>
        </div>
      </div>

      {/* Descripción */}
      <p className="mt-5 flex-1 text-gray-600 leading-7">
        {certification.description}
      </p>

      {/* Tecnologías */}
      <div className="mt-6 flex flex-wrap gap-2">
        {certification.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              bg-gray-100
              px-3
              py-1
              text-xs
              font-medium
              text-gray-700
              transition-colors
              duration-300
              hover:bg-green-100
              hover:text-green-700
            "
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Botón */}
      <button
        onClick={() => onView(certification)}
        className="
          mt-8
          inline-flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-green-700
          hover:shadow-lg
          active:scale-95
        "
      >
        <Eye size={18} />

        Ver certificado
      </button>
    </article>
  );
}