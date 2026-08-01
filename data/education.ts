import { Education } from "@/types/Education";

export const education: Education[] = [
  {
    id: 1,
    institution: 'Unidad Educativa "La Maná"',
    degree: "Bachiller en Ciencias",
    location: "La Maná, Ecuador",
    start: "2012",
    end: "2015",
    description:
      "Formación en ciencias básicas que fortaleció las bases en matemáticas, física y tecnología, despertando el interés por la informática y el desarrollo de software.",
    technologies: [
      "Matemáticas",
      "Física",
      "Informática"
    ],
    image: "/images/education/bachiller.webp"
  },

  {
    id: 2,
    institution: "Universidad Técnica Estatal de Quevedo",
    degree: "Ingeniero en Sistemas",
    location: "Quevedo, Ecuador",
    start: "2015",
    end: "2022",
    description:
      "Formación profesional en ingeniería de sistemas, con énfasis en desarrollo de software, bases de datos, redes, ingeniería de software y gestión de proyectos tecnológicos.",
    technologies: [
      "Java",
      "C#",
      ".NET",
      "SQL Server",
      "MySQL",
      "Ingeniería de Software"
    ],
    image: "/images/education/uteq.webp"
  },

  {
    id: 3,
    institution: "Universidad Internacional de Valencia",
    degree: "Máster en Desarrollo de Aplicaciones y Servicios Web",
    location: "Valencia, España",
    start: "2024",
    end: "2026",
    description:
      "Programa de posgrado especializado en arquitecturas web modernas, desarrollo full stack, servicios web, aplicaciones empresariales y tecnologías actuales para el desarrollo de software.",
    technologies: [
      "Laravel",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Arquitectura Web"
    ],
    image: "/images/education/viu.webp"
  },

  {
    id: 4,
    institution: "Universidad Espíritu Santo",
    degree: "Máster en Inteligencia de Negocios y Ciencias de Datos",
    location: "Guayaquil, Ecuador",
    start: "2026",
    end: "En curso",
    description:
      "Programa enfocado en inteligencia de negocios, análisis de datos, minería de datos, visualización y apoyo a la toma de decisiones mediante herramientas analíticas.",
    technologies: [
      "Power BI",
      "Python",
      "Machine Learning",
      "Data Analytics",
      "Business Intelligence"
    ],
    image: "/images/education/uees.webp"
  },

  {
    id: 5,
    institution: "Globaltech Florida University",
    degree: "Master of Business Administration (MBA) - Major in Advanced Analytics and Artificial Intelligence",
    location: "Florida, Estados Unidos",
    start: "2026",
    end: "En curso",
    description:
      "Programa internacional orientado a liderazgo empresarial, analítica avanzada, inteligencia artificial y estrategias para la transformación digital de organizaciones.",
    technologies: [
      "Artificial Intelligence",
      "Advanced Analytics",
      "Business Strategy",
      "Data Science",
      "Leadership"
    ],
    image: "/images/education/globaltech.webp"
  }
];