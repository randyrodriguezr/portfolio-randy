import Card from "../ui/Card";
import ProfileStatCard from "../cards/ProfileStatCard";
import SectionTitle from "../ui/SectionTitle";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import {
  BriefcaseBusiness,
  FolderGit2,
  FileText
} from "lucide-react";


export default function Profile() {
  const currentYear = new Date().getFullYear();
  const firstExperience = Math.min(
    ...experiences.map((exp) => {
      const year = exp.start.match(/\d{4}/);
      return year ? Number(year[0]) : new Date().getFullYear();
    })
  );

  const yearsExperience = new Date().getFullYear() - firstExperience;
  const totalProjects = projects.length;
  const totalPublications = publications.length;
  return (
    <section id="perfil">

      <SectionTitle
        title="Perfil"
        subtitle="Conóceme un poco más"
      />

      <Card>

        <p className="leading-8 text-gray-600">
          Soy Ingeniero de Software con más de{" "}
          <span >
            {yearsExperience} años
          </span>{" "}
          de experiencia desarrollando aplicaciones web, móviles y empresariales.
          Me apasiona construir soluciones que optimicen procesos, aprender nuevas
          tecnologías y participar en proyectos que generen impacto.
        </p>
      </Card>
      <div className="mt-8 flex w-full justify-between gap-6">

        <ProfileStatCard

          icon={BriefcaseBusiness}

          value={`${yearsExperience}+`}

          title="Años de experiencia"

        />

        <ProfileStatCard

          icon={FolderGit2}

          value={totalProjects}

          title="Proyectos"

        />

        <ProfileStatCard

          icon={FileText}

          value={totalPublications}

          title="Artículos publicados"

        />

      </div>
    </section>
  );
}