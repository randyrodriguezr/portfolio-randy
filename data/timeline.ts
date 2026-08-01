import { Timeline } from "@/types/Timeline";

import {
    Medal,
    Mountain,
    Plane,
    HeartHandshake,
    PlaneTakeoff
} from "lucide-react";

export const timeline: Timeline[] = [

    {
        id: 1,

        year: "2026",

        title: "Media Maratón Quito 21K",

        subtitle: "Mi primer medio maratón",

        icon: Medal,

        cover: "/beyond-code/maraton/cover.webp",

        description:
            "Completé mi primera carrera oficial de 21 kilómetros \n en la ciudad de Quito.",

        details:
            "Después de varios meses de entrenamiento logré finalizar la Media Maratón Quito 21K. La altitud de Quito representó un gran desafío físico y mental, fortaleciendo mi disciplina y perseverancia.",

        location: "Quito, Ecuador",

        date: "31 de mayo de 2026",

        learnings: [
            "Disciplina",
            "Constancia",
            "Perseverancia",
            "Superación personal"
        ],

        stats: [
            {
                label: "Distancia",
                value: "21.1 km"
            },
            {
                label: "Ciudad",
                value: "Quito"
            },
            {
                label: "Año",
                value: "2026"
            }
        ],

        images: [
            "/beyond-code/maraton/1.webp",
            "/beyond-code/maraton/2.webp",
            "/beyond-code/maraton/3.webp",
            "/beyond-code/maraton/4.webp"
        ]
    },

    {
        id: 2,

        year: "2025",

        title: "Voluntariado",

        subtitle: "Aquí Estoy Chat",

        icon: HeartHandshake,

        cover: "/beyond-code/aqui-estoy/cover.webp",

        description:
            "Durante tres meses brindé acompañamiento emocional como voluntario.",

        details:
            "Entre febrero y abril de 2025 participé como voluntario en Aquí Estoy Chat, ofreciendo escucha activa y apoyo emocional a personas que atravesaban momentos difíciles.",

        location: "Modalidad virtual",

        date: "Febrero - Abril 2025",

        learnings: [
            "Empatía",
            "Escucha activa",
            "Comunicación",
            "Responsabilidad"
        ],

        stats: [
            {
                label: "Duración",
                value: "3 meses"
            },
            {
                label: "Periodo",
                value: "2025"
            }
        ],

        images: [
            "/beyond-code/aqui-estoy/1.webp",
            "/beyond-code/aqui-estoy/2.webp"
        ]
    },

    {
        id: 3,

        year: "2025",

        title: "Viaje a Bolivia",

        subtitle: "Cultura y aventura",

        icon: PlaneTakeoff,

        cover: "/beyond-code/bolivia/cover.webp",

        description:
            "Una experiencia que combinó turismo, naturaleza y montañismo.",

        details:
            "Durante mi viaje conocí diversos lugares de Bolivia y tuve la oportunidad de realizar el ascenso al Huayna Potosí.",

        location: "Bolivia",

        date: "2025",

        learnings: [
            "Adaptación",
            "Planificación",
            "Respeto por nuevas culturas"
        ],

        stats: [
            {
                label: "País",
                value: "Bolivia"
            }
        ],

        images: [
            "/beyond-code/bolivia/1.webp",
            "/beyond-code/bolivia/2.webp",
            "/beyond-code/bolivia/3.webp"
        ]
    },

    {
        id: 4,

        year: "2025",

        title: "Ascenso al Huayna Potosí",

        subtitle: "5222 msnm",

        icon: Mountain,

        cover: "/beyond-code/huayna/cover.webp",

        description:
            "Uno de los retos físicos y mentales más importantes de mi vida.",

        details:
            "Logré alcanzar la cima del Huayna Potosí, ubicado a 5.222 metros sobre el nivel del mar, superando las exigencias físicas de la altura y las condiciones de montaña.",

        location: "La Paz, Bolivia",

        date: "2025",

        learnings: [
            "Resiliencia",
            "Trabajo en equipo",
            "Preparación",
            "Autoconfianza"
        ],

        stats: [
            {
                label: "Altitud",
                value: "5222 msnm"
            },
            {
                label: "País",
                value: "Bolivia"
            }
        ],

        images: [
            "/beyond-code/huayna/1.webp",
            "/beyond-code/huayna/2.webp",
            "/beyond-code/huayna/3.webp",
            "/beyond-code/huayna/4.webp"
        ]
    },

    {
        id: 5,

        year: "2024",

        title: "Primer viaje internacional",

        subtitle: "Perú",

        icon: Plane,

        cover: "/beyond-code/peru/cover.webp",

        description:
            "Mi primera experiencia viajando fuera del Ecuador.",

        details:
            "Visité diferentes ciudades del Perú, conociendo su historia, gastronomía y cultura. Fue una experiencia que despertó aún más mi interés por descubrir nuevos lugares.",

        location: "Perú",

        date: "2024",

        learnings: [
            "Independencia",
            "Planificación",
            "Adaptación",
            "Crecimiento personal"
        ],

        stats: [
            {
                label: "País",
                value: "Perú"
            },
            {
                label: "Año",
                value: "2024"
            }
        ],

        images: [
            "/beyond-code/peru/1.webp",
            "/beyond-code/peru/2.webp",
            "/beyond-code/peru/3.webp"
        ]
    }

];