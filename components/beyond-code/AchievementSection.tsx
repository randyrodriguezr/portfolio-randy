"use client";

import { useState } from "react";

import SectionTitle from "../ui/SectionTitle";

import AchievementTimelineItem from "./AchievementTimelineItem";
import AchievementModal from "./AchievementModal";

import { achievements } from "@/data/achievements";

// Extrae el primer año numérico de un string (soporta "2025", "2022 - Actualidad", etc.)
function getYear(year: string): number {

    const match = year.match(/\d{4}/);

    return match ? parseInt(match[0], 10) : 0;

}

const sortedAchievements = [...achievements].sort(
    (a, b) => getYear(b.year) - getYear(a.year)
);

export default function AchievementSection() {

    const [activeIndex, setActiveIndex] =
        useState<number | null>(null);

    return (

        <section
            id="achievements"
            className="
                relative
                mx-auto
                max-w-4xl
                py-10
            "
        >

            <SectionTitle

                title="Mi camino"

                subtitle="Cada experiencia representa un desafío, un aprendizaje y un paso más en mi crecimiento personal."

            />

            <div
                className="
                    relative
                    mt-20
                "
            >

                {/* Línea central */}

                <div
                    style={{ zIndex: -1 }}
                    className="
                        absolute
                        left-1/2
                        top-0
                        -translate-x-1/2
                        h-full
                        w-1
                        rounded-full
                        bg-gradient-to-b
                        from-green-600
                        via-green-400
                        to-green-200
                    "
                />

                <div
                    style={{ zIndex: 1 }}
                    className="relative space-y-2"
                >

                    {

                        sortedAchievements.map((achievement, index) => (

                            <AchievementTimelineItem

                                key={achievement.id}

                                achievement={achievement}

                                isLast={
                                    index === sortedAchievements.length - 1
                                }

                                onClick={() =>
                                    setActiveIndex(index)
                                }

                            />

                        ))

                    }

                </div>

            </div>

            <AchievementModal
                open={activeIndex !== null}
                achievements={sortedAchievements}
                activeIndex={activeIndex ?? 0}
                onClose={() => setActiveIndex(null)}
                onNavigate={(index) => setActiveIndex(index)}
            />

        </section>

    );

}
