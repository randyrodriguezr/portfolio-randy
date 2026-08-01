import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../cards/ExperienceCard";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia">

      <SectionTitle
        title="Experiencia"
        subtitle="Trayectoria profesional"
      />

      <Card>
        {[...experiences]
          .sort((a, b) => {
            // Primero los trabajos actuales
            if (a.end === "Actualidad" && b.end !== "Actualidad") return -1;
            if (a.end !== "Actualidad" && b.end === "Actualidad") return 1;

            // Luego ordenar por año
            const yearA = parseInt(a.start.split("/").pop()!);
            const yearB = parseInt(b.start.split("/").pop()!);

            if (yearA !== yearB) {
              return yearB - yearA;
            }

            // Si es el mismo año, ordenar por mes
            const monthA = a.start.includes("/") ? parseInt(a.start.split("/")[0]) : 1;
            const monthB = b.start.includes("/") ? parseInt(b.start.split("/")[0]) : 1;

            return monthB - monthA;
          })
          .map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
      </Card>

    </section>
  );
}