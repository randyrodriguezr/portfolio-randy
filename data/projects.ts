import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ERP T4ALL",
    subtitle: "Sistema ERP Empresarial",
    description:
      "Desarrollo y mantenimiento del ERP T4ALL para las empresas del Grupo Manobanda. Participación en el desarrollo de módulos de Recursos Humanos, Contabilidad, Inventario, Kardex, Compras, Bodegas, Caja, Producción y múltiples procesos empresariales.",
    category: "Empresarial",
    company: "Grupo Manobanda",
    location: "Quevedo, Ecuador",
    start: "2022",
    end: "Actualidad",
    responsibilities: [],
    technologies: [
      "Java",
      "JSF",
      "PrimeFaces",
      "SQL Server",
      "JasperReports",
      "Git"
    ],
    image: "/images/projects/t4all/cover.webp",
    gallery: [
      "/images/projects/t4all/1.webp",
      "/images/projects/t4all/2.webp",
      "/images/projects/t4all/3.webp",
      "/images/projects/t4all/4.webp"
    ],
    featured: true
  },

  {
    id: 2,
    title: "Factura Club",
    subtitle: "Sistema de Facturación Electrónica",
    description:
      "Participación en el desarrollo frontend de la plataforma Factura Club durante mi estancia en NimbusSoft.",
    category: "Empresarial",
    company: "NimbusSoft Cía. Ltda.",
    location: "Quito, Ecuador",
    start: "2021",
    end: "2021",
    responsibilities: [],
    technologies: [
      "APIs REST",
      ".NET Core",
      "SQL Server",
      "Flutter"
    ],
    image: "/images/projects/facturaclub/cover.webp",
    gallery: [
      "/images/projects/facturaclub/1.webp"
    ],
    website: "https://www.factura.club/",
    featured: true
  },

  {
    id: 3,
    title: "Sistema de Control Vehicular con OCR",
    subtitle: "Reconocimiento Óptico de Caracteres",
    description:
      "Aplicación desarrollada para controlar el ingreso y salida de vehículos en los parqueaderos de la Universidad Técnica Estatal de Quevedo mediante reconocimiento automático de placas.",
    category: "Investigación",
    company: "Universidad Técnica Estatal de Quevedo",
    location: "Quevedo, Ecuador",
    start: "2019",
    end: "2019",
    responsibilities: [],
    technologies: [
      "Android Studio",
      "Java",
      "OCR",
      "SQLite"
    ],
    image: "/images/projects/ocr/cover.webp",
    gallery: [
      "/images/projects/ocr/1.webp"
    ],
    article: "https://n9.cl/2dezr",
    featured: true
  },

  {
    id: 4,
    title: "JIT - Juegos Interactivos para Todos",
    subtitle: "Proyecto de Vinculación",
    description:
      "Desarrollo de funcionalidades para el proyecto JIT, orientado a la inclusión mediante juegos interactivos durante las prácticas de vinculación con la sociedad.",
    category: "Social",
    company: "GAD Municipal de Quevedo",
    location: "Quevedo, Ecuador",
    start: "2021",
    end: "2021",
    responsibilities: [],
    technologies: [
      "Vue.js",
      "PostgreSQL",
      "Aplicación Web"
    ],
    image: "/images/projects/jit/cover.webp",
    gallery: [
      "/images/projects/jit/1.webp"
    ],
    website: "https://fyc.uteq.edu.ec/jit/",
    featured: false
  },

  {
    id: 5,
    title: "ERP para la Gestión de Inventario",
    subtitle: "Trabajo Fin de Máster",
    description:
      "Aplicación web para la planificación de recursos empresariales enfocada en la gestión de inventario. Proyecto desarrollado como Trabajo Fin de Máster.",
    category: "Académico",
    company: "Universidad Internacional de Valencia",
    location: "Valencia, España",
    start: "2025",
    end: "2026",
    responsibilities: [],
    technologies: [
      "Laravel",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Figma",
      "Visual Paradigm"
    ],
    image: "/images/projects/tfm/cover.webp",
    gallery: [
      "/images/projects/tfm/1.webp",
      "/images/projects/tfm/2.webp",
      "/images/projects/tfm/3.webp"
    ],
    featured: true
  },

  {
    id: 6,
    title: "Portafolio Profesional",
    subtitle: "Marca Personal",
    description:
      "Desarrollo de un portafolio web moderno para presentar experiencia profesional, proyectos, investigaciones, certificaciones y trayectoria académica.",
    category: "Personal",
    location: "Ecuador",
    start: "2026",
    end: "Actualidad",
    responsibilities: [],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Figma"
    ],
    image: "/images/projects/portfolio/cover.webp",
    gallery: [
      "/images/projects/portfolio/1.webp"
    ],
    github: "https://github.com/",
    featured: true
  },
  {
    id: 7,

    title: "ERP Empresarial para el Sector Agroindustrial",

    subtitle: "ManobandaCorp • Oleorios • Grupo Magroz",

    description:
      "Participación en el desarrollo, implementación y mantenimiento del ERP corporativo utilizado por empresas del sector agroindustrial. Desarrollo de nuevas funcionalidades, soporte técnico y evolución continua del sistema para optimizar los procesos de negocio.",

    category: "Empresarial",

    location:
      "Vía El Empalme, Ecuador • San Carlos, Ecuador • Quevedo, Ecuador",

    start: "2024",

    end: "Actualidad",

    responsibilities: [
      "Desarrollo de nuevos módulos y funcionalidades del ERP corporativo.",
      "Análisis e implementación de requerimientos solicitados por las diferentes empresas del grupo.",
      "Mantenimiento correctivo y evolutivo de módulos existentes.",
      "Desarrollo y optimización de procedimientos almacenados en SQL Server.",
      "Generación y mantenimiento de reportes empresariales con JasperReports.",
      "Soporte técnico y resolución de incidencias reportadas por los usuarios.",
      "Optimización del rendimiento de consultas y procesos del sistema.",
      "Capacitación y acompañamiento a usuarios durante la implementación de nuevas funcionalidades.",
      "Participación en las pruebas funcionales y despliegue de nuevas versiones del ERP.",
      "Integración de mejoras para los módulos de Recursos Humanos, Inventarios, Kardex, Compras, Contabilidad, Caja y Bodegas."
    ],

    technologies: [
      "Java",
      "JSF",
      "PrimeFaces",
      "SQL Server",
      "JasperReports",
      "Apache POI",
      "Git",
      "ERP"
    ],

    image: "/images/projects/erp-agroindustrial/cover.webp",

    gallery: [
      "/images/projects/erp-agroindustrial/1.webp",
      "/images/projects/erp-agroindustrial/2.webp",
      "/images/projects/erp-agroindustrial/3.webp"
    ],

    github: "",

    featured: true
  }
];