"use client";

import { useState } from "react";

import { timeline } from "@/data/timeline";
import { Timeline as TimelineType } from "@/types/Timeline";

import TimelineCard from "./TimelineCard";
import TimelineModal from "./TimelineModal";
import SectionTitle from "../ui/SectionTitle";

export default function Timeline() {

    const [selected, setSelected] = useState<TimelineType | null>(null);

    return (

        <section id="timeline">

            <SectionTitle
                title="Mi camino"
                subtitle="Momentos que marcaron mi crecimiento personal"
            />

            <div className="relative mx-auto mt-12 max-w-4xl">

                <div className="absolute left-7 top-0 h-full w-1 rounded-full bg-green-200" />

                <div className="space-y-10">

                    {timeline.map((item) => (

                        <TimelineCard
                            key={item.id}
                            item={item}
                            onClick={() => setSelected(item)}
                        />

                    ))}

                </div>

            </div>

            <TimelineModal
                open={!!selected}
                item={selected}
                onClose={() => setSelected(null)}
            />

        </section>

    );

}