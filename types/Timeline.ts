import { LucideIcon } from "lucide-react";

export interface Timeline {

    id: number;

    year: string;

    title: string;

    subtitle: string;

    cover: string;

    description: string;

    details: string;

    location: string;

    date: string;

    icon: LucideIcon;

    learnings: string[];

    stats: {
        label: string;
        value: string;
    }[];

    images: string[];

}