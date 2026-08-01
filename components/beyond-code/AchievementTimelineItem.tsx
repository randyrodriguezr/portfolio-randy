"use client";

import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Achievement } from "@/types/Achievement";

interface AchievementTimelineItemProps {
    achievement: Achievement;
    isLast: boolean;
    onClick: () => void;
}

export default function AchievementTimelineItem({
    achievement,
    isLast,
    onClick,
}: AchievementTimelineItemProps) {

    const Icon = achievement.icon;

    return (

        <div className="relative z-10 flex flex-col items-center">
            {/* Línea */}

            {!isLast && (
                <div
                    className="
            absolute
            left-1/2
            top-14
            -translate-x-1/2
            h-full
            w-1
            bg-gradient-to-b
            from-green-500
            to-green-200
            z-0
        "
                />
            )}

            {/* Nodo */}

            <div
                className="
                    relative
                    z-20
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-green-600
                    text-white
                    shadow-xl
                    ring-8
                    ring-green-50
                    transition
                    duration-300
                    hover:scale-110
                "
            >
                <Icon size={28} />
            </div>

            {/* Año */}

            <span
                className="
        relative
        z-20
        mt-5
        bg-gray-50
        px-3
        text-sm
        font-semibold
        tracking-widest
        uppercase
        text-green-600
    "
            >
                {achievement.year}

            </span>

            {/* Contenido */}

            <div className="relative z-20 mt-4 mb-16 flex justify-center">
                <div
                    className="
        relative
        z-20
        w-[430px]
        min-h-[260px]
        rounded-2xl
        bg-white
        p-6
        text-center
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        flex
        flex-col
    "
                >

                    <h2 className="text-2xl font-bold leading-tight">

                        {achievement.title}

                    </h2>

                    <p className="mt-2 text-base font-medium text-green-600">

                        {achievement.subtitle}

                    </p>

                    {/* Fecha */}

                    <div className="mt-5 flex justify-center">

                        <div className="flex items-center gap-2 text-sm text-gray-500">

                            <Calendar size={16} />

                            <span>{achievement.date}</span>

                        </div>

                    </div>

                    {/* Ubicación */}

                    <div className="mt-2 flex justify-center">

                        <div className="flex items-center gap-2 text-sm text-gray-500">

                            <MapPin size={16} />

                            <span>{achievement.location}</span>

                        </div>

                    </div>

                    {/* Descripción */}

                    <div className="mt-5 shrink-0 h-[90px] overflow-hidden">
                        <p
                            className="
            text-gray-600
            leading-7
            line-clamp-3
        "
                        >
                            {achievement.description}
                        </p>
                    </div>

                    {/* Botón */}

                    <div className="mt-auto pt-5">

                        <button
                            onClick={onClick}
                            className="
            inline-flex
            items-center
            gap-2
            font-semibold
            text-green-600
            hover:gap-3
            transition-all
        "
                        >
                            Ver experiencia
                            <ArrowRight size={16} />
                        </button>

                    </div>

                </div>
            </div>

        </div>

    );

}
