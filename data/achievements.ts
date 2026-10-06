import {
    Medal,
    Mountain,
    PlaneTakeoff,
    HeartHandshake,
    GraduationCap,Plane,
} from "lucide-react";

import { Achievement } from "@/types/Achievement";


export const achievements: Achievement[] = [

    {
        id: 1,

        year: "2026",

        title: "Media Maratón Quito 21K",

        subtitle: "Mi primer medio maratón",

        description:
            "Completé mi primera carrera oficial de 21 kilómetros \n en la ciudad de Quito.",

        details:
            "La Media Maratón Quito 21K representó uno de los mayores retos deportivos que he afrontado. La altitud de la ciudad hizo que la competencia fuera aún más exigente, poniendo a prueba mi resistencia física y mental. Cruzar la meta fue el resultado de meses de disciplina, entrenamiento y perseverancia.",

        category: "Running",

        icon: Medal,

        location: "Quito, Ecuador",

        date: "31 de mayo de 2026",

        image: "/beyond-code/running/cover.webp",

        gallery: [
            "/beyond-code/running/1.webp",
            "/beyond-code/running/2.webp",
        ],

        learnings: [
            "Disciplina",
            "Constancia",
            "Perseverancia",
            "Resiliencia",
        ],

        stats: [
            {
                label: "Distancia",
                value: "21.1 km",
            },
            {
                label: "Ciudad",
                value: "Quito",
            },
            {
                label: "Año",
                value: "2026",
            },
        ],

        reflection:
            "Correr 21K en altitud me enseñó que la preparación mental pesa tanto como la física. Cruzar la meta reforzó mi confianza para afrontar otros retos, dentro y fuera del deporte.",
    },

    {
        id: 2,

        year: "2025",

        title: "Ascenso al Huayna Potosí",

        subtitle: "5222 msnm",

        description:
            "Uno de los mayores desafíos físicos y mentales que he vivido.",

        details:
            "Alcancé la cumbre del Huayna Potosí, ubicada a 5.222 metros sobre el nivel del mar. La expedición requirió preparación física, adaptación a la altura y trabajo en equipo para superar las exigentes condiciones de montaña.",

        category: "Montañismo",

        icon: Mountain,

        location: "La Paz, Bolivia",

        date: "2025",

        image: "/beyond-code/huayna/cover.webp",

        gallery: [
            "/beyond-code/huayna/1.webp",
            "/beyond-code/huayna/2.webp",
            "/beyond-code/huayna/3.webp",
            "/beyond-code/huayna/4.webp",
        ],

        learnings: [
            "Resiliencia",
            "Trabajo en equipo",
            "Autoconfianza",
            "Preparación",
        ],

        stats: [
            {
                label: "Altitud",
                value: "5222 msnm",
            },
            {
                label: "País",
                value: "Bolivia",
            },
        ],
        reflection:
            "Llegar a la cumbre del Huayna Potosí me mostró que los límites que me impongo suelen ser más mentales que reales. El trabajo en equipo con el grupo de expedición fue clave para lograrlo.",

    },

    {
        id: 3,

        year: "2024",

        title: "Viaje a Perú",

        subtitle: "Lima • Cusco • Machu Picchu",

        description:
            "Un recorrido por la historia y la cultura peruana, desde la capital hasta la ciudadela inca.",

        details:
            "Durante este viaje recorrí Lima, Cusco y Machu Picchu, descubriendo la riqueza histórica y cultural del Perú. Cada ciudad ofreció una perspectiva distinta: la vida moderna de la capital, el pasado inca vivo en las calles de Cusco, y la majestuosidad de Machu Picchu como cierre de la experiencia.",

        category: "Viajes",

        icon: PlaneTakeoff,

        location: "Lima, Cusco y Machu Picchu, Perú",

        date: "2024",

        image: "/beyond-code/peru/cover.webp",

        gallery: [
            "/beyond-code/peru/1.webp",
            "/beyond-code/peru/2.webp",
            "/beyond-code/peru/3.webp",
            "/beyond-code/peru/4.webp",
        ],

        learnings: [
            "Adaptación",
            "Planificación",
            "Respeto por nuevas culturas",
            "Crecimiento personal",
        ],

        stats: [
            {
                label: "Ciudades",
                value: "3",
            },
            {
                label: "País",
                value: "Perú",
            },
            {
                label: "Año",
                value: "2024",
            },
        ], reflection:
            "Recorrer Lima, Cusco y Machu Picchu me recordó lo valioso que es salir de la rutina y ver el mundo desde otra perspectiva. Cada ciudad tenía su propio ritmo, y aprender a moverme entre ellos con flexibilidad fue tan enriquecedor como los lugares mismos.",

    },

    {
        id: 4,

        year: "2025",

        title: "Viaje a Bolivia",

        subtitle: "La Paz • Uyuni",

        description:
            "Un viaje que combinó ciudad y naturaleza, desde La Paz hasta el imponente Salar de Uyuni.",

        details:
            "Visité La Paz y el Salar de Uyuni, dos destinos que muestran contrastes únicos de Bolivia: la vida urbana en altura de la capital administrativa y la inmensidad del desierto de sal más grande del mundo. Una experiencia que reforzó mi gusto por descubrir nuevos paisajes y culturas.",

        category: "Viajes",

        icon: PlaneTakeoff,

        location: "La Paz y Uyuni, Bolivia",

        date: "2025",

        image: "/beyond-code/bolivia/cover.webp",

        gallery: [
            "/beyond-code/bolivia/1.webp",
            "/beyond-code/bolivia/2.webp",
            "/beyond-code/bolivia/3.webp",
            "/beyond-code/bolivia/4.webp",
        ],

        learnings: [
            "Adaptación",
            "Planificación",
            "Respeto por nuevas culturas",
            "Crecimiento personal",
        ],

        stats: [
            {
                label: "Ciudades",
                value: "2",
            },
            {
                label: "País",
                value: "Bolivia",
            },
            {
                label: "Año",
                value: "2025",
            },
        ], reflection:
            "De La Paz al Salar de Uyuni descubrí paisajes que parecían de otro planeta. Este viaje reforzó algo que ya sabía pero no siempre practicaba: la mejor forma de crecer es exponerme a lo desconocido, aunque implique salir de mi zona de confort.",

    },

    {
        id: 5,

        year: "2025",

        title: "Voluntariado",

        subtitle: "Aquí Estoy Chat",

        description:
            "Durante tres meses brindé acompañamiento emocional y escucha activa como voluntario.",

        details:
            "Entre febrero y abril de 2025 participé como voluntario en Aquí Estoy Chat, una iniciativa de apoyo emocional. Mi labor consistía en ofrecer escucha activa, contención emocional y orientación inicial a personas que buscaban un espacio seguro para expresar sus preocupaciones. Esta experiencia fortaleció mi empatía, comunicación y compromiso con el bienestar de los demás.",

        category: "Voluntariado",

        icon: HeartHandshake,

        location: "Modalidad virtual",

        date: "Febrero - Abril 2025",

        image: "/beyond-code/volunteer/cover.webp",

        gallery: [
            "/beyond-code/volunteer/1.webp",
            "/beyond-code/volunteer/2.webp",
            "/beyond-code/volunteer/3.webp",
        ],

        learnings: [
            "Empatía",
            "Escucha activa",
            "Comunicación",
            "Responsabilidad",
            "Inteligencia emocional",
        ],

        stats: [
            {
                label: "Duración",
                value: "3 meses",
            },
            {
                label: "Modalidad",
                value: "Virtual",
            },
            {
                label: "Año",
                value: "2025",
            },
        ], reflection:
            "Ser voluntario en Aquí Estoy Chat me enseñó que escuchar de verdad es una habilidad que se entrena, no algo que simplemente se tiene. Acompañar a otras personas en momentos difíciles fortaleció mi empatía y me hizo más consciente de cómo comunico las cosas, algo que hoy también aplico trabajando en equipo.",

    },

    {
        id: 6,

        year: "2012",

        title: "DRAMAS+",

        subtitle: "Comunidad de dramas asiáticos desde 2012",

        description:
            "Un blog que empecé por afición y que con los años se convirtió en un punto de encuentro para una comunidad de amantes de los dramas.",

        details:
            "Desde 2012 mantengo DRAMAS+, un blog dedicado a compartir K-Dramas, Lakorns, dramas BL, GL y contenido en audio latino. Lo que comenzó como un espacio personal para compartir lo que veía se transformó, con los años, en una comunidad donde he conocido a muchísimas personas de distintos países, todas unidas por el gusto por estas historias. He recibido mensajes de personas agradeciendo por descubrir un drama que las marcó, y he construido amistades genuinas alrededor de este proyecto que sigue activo hasta hoy.",

        category: "Comunidad",

        icon: HeartHandshake,

        location: "Modalidad virtual",

        date: "Desde 2012",

        image: "/beyond-code/dramas/cover.webp",

        gallery: [
            "/beyond-code/dramas/1.webp",
            "/beyond-code/dramas/2.webp",
            "/beyond-code/dramas/3.webp",
        ],

        learnings: [
            "Constancia",
            "Comunidad",
            "Comunicación",
            "Curación de contenido",
            "Gestión de una audiencia",
        ],

        stats: [
            {
                label: "Años activo",
                value: "12+",
            },
            {
                label: "Modalidad",
                value: "Virtual",
            },
        ],

        reflection:
            "DRAMAS+ me enseñó que un proyecto pequeño y constante puede crecer mucho más de lo que imaginas. No empecé pensando en crear una comunidad, pero con el tiempo entendí que compartir algo que amas, de forma honesta y constante, es suficiente para conectar con personas reales. Mantenerlo vivo durante más de una década me enseñó disciplina y el valor de construir algo, aunque sea poco a poco.",
    },
    {
  id: 7,

  year: "2022",

  title: "Graduación como Ingeniero en Sistemas",

  subtitle: "Una meta cumplida",

  description:
    "Me gradué como Ingeniero en Sistemas, cerrando una etapa llena de aprendizajes, retos y grandes personas.",

  details:
    "En 2022 me gradué como Ingeniero en Sistemas, después de un camino con muchos altibajos, tropiezos y logros. Durante esos años conocí a compañeros y profesores que me apoyaron en momentos difíciles y que fueron clave para llegar hasta el final. Fue una etapa trascendente en mi vida, no solo por lo académico, sino por todo lo que aprendí sobre disciplina, perseverancia y el valor de no rendirme.",

  category: "Educación",

  icon: GraduationCap,

  location: "Ecuador",

  date: "2022",

  image: "/beyond-code/graduacion/cover.webp",

  gallery: [
    "/beyond-code/graduacion/1.webp",
    "/beyond-code/graduacion/2.webp",
  ],

  learnings: [
    "Perseverancia",
    "Disciplina",
    "Trabajo en equipo",
    "Resiliencia",
    "Gestión del tiempo",
  ],

  stats: [
    {
      label: "Graduación",
      value: "2022",
    },
    {
      label: "Título",
      value: "Ingeniero en Sistemas",
    },
  ],

  reflection:
    "Esta etapa me enseñó que las metas importantes casi nunca son un camino recto. Hubo tropiezos que en su momento se sintieron como retrocesos, pero que hoy entiendo como parte del proceso. Lo que más valoro no es solo el título, sino a las personas que conocí en el camino: compañeros y profesores que me apoyaron en los momentos difíciles y que hicieron que esta etapa fuera mucho más que una carrera universitaria.",
},
{
  id: 8,

  year: "2026",

  title: "Viaje a Brasil",

  subtitle: "Río de Janeiro y el Cristo Redentor",

  description:
    "Viajé a Río de Janeiro y conocí el Cristo Redentor, una de las siete maravillas del mundo moderno.",

  details:
    "En 2026 viajé a Brasil y estuve en Río de Janeiro. Uno de los momentos más especiales fue subir a conocer el Cristo Redentor y ver la ciudad desde las alturas. Fue una experiencia increíble que me permitió conocer otra cultura, otros paisajes y otra forma de vivir.",

  category: "Viajes",

  icon: Plane,

  location: "Río de Janeiro, Brasil",

  date: "2026",

  image: "/beyond-code/brasil/cover.webp",

  gallery: [
    "/beyond-code/brasil/1.webp",
    "/beyond-code/brasil/2.webp",
    "/beyond-code/brasil/3.webp",
  ],

  learnings: [
    "Cultura",
    "Aventura",
    "Adaptación",
    "Nuevas perspectivas",
  ],

  stats: [
    {
      label: "País",
      value: "Brasil",
    },
    {
      label: "Ciudad",
      value: "Río de Janeiro",
    },
    {
      label: "Año",
      value: "2026",
    },
  ],

  reflection:
    "Viajar me recuerda que el mundo es mucho más grande de lo que imaginamos. Estar frente al Cristo Redentor me hizo valorar cada paso que me llevó hasta ahí y me motivó a seguir conociendo nuevos lugares.",
},
];