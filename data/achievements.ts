import {
    Medal,
    Mountain,
    PlaneTakeoff,
    HeartHandshake,
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
        ],
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
        ],
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
        ],
    },
];