"use client";

import Button from "../ui/Button";

import {
    Calendar,
    MapPin,
    ArrowRight,
} from "lucide-react";

import { Achievement } from "@/types/Achievement";

interface AchievementCardProps {

    achievement: Achievement;

    onClick: () => void;

}

export default function AchievementCard({

    achievement,

    onClick,

}: AchievementCardProps) {

    const Icon = achievement.icon;

    return (

        <div className="flex gap-8">

            {/* Año */}

            <div
                className="
                    hidden
                    w-28
                    shrink-0
                    md:flex
                    justify-end
                "
            >

                <div
                    className="
                        rounded-xl
                        bg-green-600
                        px-4
                        py-2
                        text-lg
                        font-bold
                        text-white
                        shadow
                    "
                >

                    {achievement.year}

                </div>

            </div>

            {/* Línea */}

            <div
                className="
                    relative
                    flex
                    w-8
                    justify-center
                "
            >

                <div
                    className="
                        absolute
                        top-0
                        h-full
                        w-[2px]
                        bg-green-200
                    "
                />

                <div
                    className="
                        relative
                        z-10
                        mt-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-green-600
                        text-white
                        shadow-lg
                    "
                >

                    <Icon size={22} />

                </div>

            </div>

            {/* Contenido */}

            <div
                className="
                    flex-1
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >

                {/* Año móvil */}

                <div className="mb-4 md:hidden">

                    <span
                        className="
                            rounded-lg
                            bg-green-600
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            text-white
                        "
                    >

                        {achievement.year}

                    </span>

                </div>

                <h2
                    className="
                        text-2xl
                        font-bold
                    "
                >

                    {achievement.title}

                </h2>

                <p
                    className="
                        mt-1
                        font-medium
                        text-green-600
                    "
                >

                    {achievement.subtitle}

                </p>

                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        gap-4
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-green-50
                            px-3
                            py-1
                            text-sm
                            text-green-700
                        "
                    >

                        <Calendar size={16} />

                        {achievement.date}

                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-gray-100
                            px-3
                            py-1
                            text-sm
                            text-gray-600
                        "
                    >

                        <MapPin size={16} />

                        {achievement.location}

                    </div>

                </div>

                <p
                    className="
                        mt-5
                        leading-8
                        text-gray-600
                    "
                >

                    {achievement.description}

                </p>

                {/* Aprendizajes */}

                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                    "
                >

                    {achievement.learnings.map((learning) => (

                        <span
                            key={learning}
                            className="
                                rounded-full
                                bg-green-100
                                px-3
                                py-1
                                text-sm
                                font-medium
                                text-green-700
                            "
                        >

                            {learning}

                        </span>

                    ))}

                </div>

                <div className="mt-8">

                    <Button onClick={onClick}>

                        <span className="flex items-center gap-2">

                            Ver experiencia

                            <ArrowRight size={18} />

                        </span>

                    </Button>

                </div>

            </div>

        </div>

    );

}