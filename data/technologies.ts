import { Technology } from "@/types/Technology";

export const technologies: Technology[] = [

  // ===========================
  // BACKEND
  // ===========================

  {
    id: 1,
    name: "Java",
    category: "Backend",
    icon: "/icons/java.svg",
    level: 5,
    years: 7,
    description: "Desarrollo de aplicaciones empresariales con Java.",
    projects: [
      "ERP T4ALL",
      "Sistema OCR Vehicular",
      "JIT - Juegos Interactivos para Todos",
      "Módulo de Recursos Humanos",
      "Módulo Kardex",
      "Sistema de Inventario",
      "Vales de Caja",
      "Reportes Empresariales"
    ]
  },

  {
    id: 2,
    name: "C#",
    category: "Backend",
    icon: "/icons/csharp.svg",
    level: 5,
    years: 6,
    description: "Desarrollo de aplicaciones con C#.",
    projects: [
      "Aplicaciones Académicas",
      "Proyectos Personales"
    ]
  },

  {
    id: 3,
    name: ".NET",
    category: "Backend",
    icon: "/icons/dotnet.svg",
    level: 5,
    years: 6,
    description: "Desarrollo sobre la plataforma .NET.",
    projects: [
      "Aplicaciones Empresariales",
      "Proyectos Académicos"
    ]
  },

  {
    id: 4,
    name: "PHP",
    category: "Backend",
    icon: "/icons/php.svg",
    level: 4,
    years: 5,
    description: "Desarrollo de aplicaciones web.",
    projects: [
      "Sistema de Inventario",
      "TFM ERP"
    ]
  },

  {
    id: 5,
    name: "Python",
    category: "Backend",
    icon: "/icons/python.svg",
    level: 3,
    years: 1,
    description: "Automatización y Ciencia de Datos.",
    projects: [
      "Análisis de Datos",
      "Portafolio Personal"
    ]
  },

  // ===========================
  // FRONTEND
  // ===========================

  {
    id: 6,
    name: "Angular",
    category: "Frontend",
    icon: "/icons/angular.svg",
    level: 4,
    years: 4,
    description: "Desarrollo de aplicaciones SPA.",
    projects: [
      "Factura Club",
      "TFM ERP"
    ]
  },

  {
    id: 7,
    name: "React",
    category: "Frontend",
    icon: "/icons/react.svg",
    level: 3,
    years: 1,
    description: "Interfaces modernas.",
    projects: [
      "Portafolio Personal"
    ]
  },

  {
    id: 8,
    name: "Next.js",
    category: "Frontend",
    icon: "/icons/nextdotjs.svg",
    level: 3,
    years: 1,
    description: "Aplicaciones React SSR.",
    projects: [
      "Portafolio Personal"
    ]
  },

  {
    id: 9,
    name: "TypeScript",
    category: "Frontend",
    icon: "/icons/typescript.svg",
    level: 4,
    years: 3,
    description: "Desarrollo tipado.",
    projects: [
      "Portafolio Personal",
      "Factura Club"
    ]
  },

  {
    id: 10,
    name: "JavaScript",
    category: "Frontend",
    icon: "/icons/javascript.svg",
    level: 5,
    years: 7,
    description: "Desarrollo Frontend.",
    projects: [
      "Factura Club",
      "ERP T4ALL",
      "Portafolio Personal"
    ]
  },

  {
    id: 11,
    name: "HTML5",
    category: "Frontend",
    icon: "/icons/html5.svg",
    level: 5,
    years: 8,
    description: "Maquetación Web.",
    projects: [
      "Todos los proyectos Web"
    ]
  },

  {
    id: 12,
    name: "CSS3",
    category: "Frontend",
    icon: "/icons/css.svg",
    level: 5,
    years: 8,
    description: "Diseño Web.",
    projects: [
      "Todos los proyectos Web"
    ]
  },

  {
    id: 13,
    name: "Bootstrap",
    category: "Frontend",
    icon: "/icons/bootstrap.svg",
    level: 5,
    years: 6,
    description: "Framework CSS.",
    projects: [
      "Factura Club",
      "Sistemas Académicos"
    ]
  },

  {
    id: 14,
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "/icons/tailwindcss.svg",
    level: 3,
    years: 1,
    description: "Framework CSS moderno.",
    projects: [
      "Portafolio Personal"
    ]
  },

  {
    id: 15,
    name: "jQuery",
    category: "Frontend",
    icon: "/icons/jquery.svg",
    level: 4,
    years: 6,
    description: "Manipulación del DOM.",
    projects: [
      "ERP T4ALL"
    ]
  },

  // ===========================
  // FRAMEWORKS
  // ===========================

  {
    id: 16,
    name: "Laravel",
    category: "Frameworks",
    icon: "/icons/laravel.svg",
    level: 4,
    years: 3,
    description: "Framework PHP.",
    projects: [
      "TFM ERP"
    ]
  },

  {
    id: 17,
    name: "JSF",
    category: "Frameworks",
    icon: "/icons/jsf.svg",
    level: 5,
    years: 5,
    description: "Java Server Faces.",
    projects: [
      "ERP T4ALL"
    ]
  },

  {
    id: 18,
    name: "PrimeFaces",
    category: "Frameworks",
    icon: "/icons/primefaces.svg",
    level: 5,
    years: 5,
    description: "Framework JSF.",
    projects: [
      "ERP T4ALL"
    ]
  },

  {
    id: 19,
    name: "Flutter",
    category: "Frameworks",
    icon: "/icons/flutter.svg",
    level: 2,
    years: 1,
    description: "Aplicaciones móviles.",
    projects: [
      "Proyectos Académicos"
    ]
  },

  // ===========================
  // BASES DE DATOS
  // ===========================

  {
    id: 20,
    name: "SQL Server",
    category: "Base de Datos",
    icon: "/icons/sqlserver.svg",
    level: 5,
    years: 7,
    description: "Motor de Base de Datos.",
    projects: [
      "ERP T4ALL",
      "Sistema OCR",
      "Factura Club"
    ]
  },

  {
    id: 21,
    name: "PostgreSQL",
    category: "Base de Datos",
    icon: "/icons/postgresql.svg",
    level: 4,
    years: 3,
    description: "Base de datos relacional.",
    projects: [
      "TFM ERP"
    ]
  },

  {
    id: 22,
    name: "MySQL",
    category: "Base de Datos",
    icon: "/icons/mysql.svg",
    level: 4,
    years: 5,
    description: "Base de datos relacional.",
    projects: [
      "Proyectos Web"
    ]
  },

  {
    id: 23,
    name: "MongoDB",
    category: "Base de Datos",
    icon: "/icons/mongodb.svg",
    level: 2,
    years: 1,
    description: "Base de datos NoSQL.",
    projects: [
      "Prácticas"
    ]
  },

  // ===========================
  // HERRAMIENTAS
  // ===========================

  {
    id: 24,
    name: "Git",
    category: "Herramientas",
    icon: "/icons/git.svg",
    level: 5,
    years: 6,
    description: "Control de versiones.",
    projects: [
      "Todos los proyectos"
    ]
  },

  {
    id: 25,
    name: "GitHub",
    category: "Herramientas",
    icon: "/icons/github.svg",
    level: 5,
    years: 5,
    description: "Repositorios Git.",
    projects: [
      "Portafolio Personal"
    ]
  },

  {
    id: 26,
    name: "Docker",
    category: "Herramientas",
    icon: "/icons/docker.svg",
    level: 3,
    years: 2,
    description: "Contenedores.",
    projects: [
      "Laboratorios"
    ]
  },

  {
    id: 27,
    name: "Figma",
    category: "Herramientas",
    icon: "/icons/figma.svg",
    level: 4,
    years: 2,
    description: "Diseño UI/UX.",
    projects: [
      "Portafolio Personal",
      "TFM ERP"
    ]
  },

  {
    id: 28,
    name: "NetBeans",
    category: "Herramientas",
    icon: "/icons/netbeans.svg",
    level: 5,
    years: 7,
    description: "IDE Java.",
    projects: [
      "ERP T4ALL"
    ]
  },

  {
    id: 29,
    name: "Visual Studio",
    category: "Herramientas",
    icon: "/icons/visualstudio.svg",
    level: 5,
    years: 6,
    description: "IDE Microsoft.",
    projects: [
      "Aplicaciones .NET"
    ]
  },

  {
    id: 30,
    name: "VS Code",
    category: "Herramientas",
    icon: "/icons/vscode.svg",
    level: 5,
    years: 6,
    description: "Editor de código.",
    projects: [
      "Todos los proyectos recientes"
    ]
  },

  {
    id: 31,
    name: "JasperReports",
    category: "Herramientas",
    icon: "/icons/jasperreports.svg",
    level: 5,
    years: 5,
    description: "Generación de reportes.",
    projects: [
      "ERP T4ALL"
    ]
  },

  {
    id: 32,
    name: "Power BI",
    category: "Herramientas",
    icon: "/icons/powerbi.svg",
    level: 2,
    years: 1,
    description: "Visualización de datos.",
    projects: [
      "Análisis de Datos"
    ]
  },

  {
    id: 33,
    name: "Photoshop",
    category: "Herramientas",
    icon: "/icons/photoshop.svg",
    level: 3,
    years: 3,
    description: "Edición de imágenes.",
    projects: [
      "Diseño de Interfaces"
    ]
  },

  {
    id: 34,
    name: "Android Studio",
    category: "Herramientas",
    icon: "/icons/androidstudio.svg",
    level: 3,
    years: 2,
    description: "Desarrollo Android.",
    projects: [
      "Aplicaciones Móviles"
    ]
  },

  {
    id: 35,
    name: "Visual Paradigm",
    category: "Herramientas",
    icon: "/icons/visualparadigm.svg",
    level: 4,
    years: 4,
    description: "Modelado UML.",
    projects: [
      "TFM ERP",
      "Proyectos Académicos"
    ]
  }

];