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

      <div
        className="
          mt-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-6
        "
      >

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