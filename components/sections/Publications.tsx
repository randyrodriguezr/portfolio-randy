import { publications } from "@/data/publications";
import PublicationCard from "../cards/PublicationCard";
import SectionTitle from "../ui/SectionTitle";

export default function Publications() {
  return (
    <section id="publicaciones">

      <SectionTitle
        title="Publicaciones Científicas"
        subtitle="Investigaciones y artículos publicados en congresos y revistas."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {publications.map((publication) => (
          <PublicationCard
            key={publication.id}
            publication={publication}
          />
        ))}

      </div>

    </section>
  );
}