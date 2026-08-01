import { LucideIcon } from "lucide-react";

export interface Achievement {

    id: number;

    year: string;

    title: string;

    subtitle: string;

    description: string;

    details: string;

    category:
        | "Running"
        | "Montañismo"
        | "Deportes"
        | "Viajes"
        | "Voluntariado";

    icon: LucideIcon;

    location: string;

    date: string;

    image: string;

    gallery: string[];

    learnings: string[];

    stats: {
        label: string;
        value: string;
    }[];

}