"use client";

import Image from "next/image";
import Button from "../ui/Button";

import { Calendar, MapPin, ArrowRight } from "lucide-react";

import { Timeline } from "@/types/Timeline";

interface TimelineCardProps {

    item: Timeline;

    onClick: () => void;

}

export default function TimelineCard({

    item,

    onClick,

}: TimelineCardProps) {

    const Icon = item.icon;

    return (

        <div className="relative flex gap-8">

            {/* Punto de la línea */}

            <div
                className="
        relative
        z-10
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-full
        border-4
        border-white
        bg-green-600
        text-white
        shadow-lg
    "
            >
                <Icon size={28} />
            </div>

            {/* Card */}

            <div
                className="
                    flex-1
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >

                {/* Imagen */}

                <div className="relative h-64 w-full">

                    <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />

                </div>

                {/* Contenido */}

                <div className="p-6">

                    <div className="flex flex-wrap gap-4">

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

                            {item.year}

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

                            {item.location}

                        </div>

                    </div>

                    <h2
                        className="
                            mt-5
                            text-2xl
                            font-bold
                        "
                    >
                        {item.title}
                    </h2>

                    <p className="font-medium text-green-600">

                        {item.subtitle}

                    </p>

                    <p
                        className="
                            mt-4
                            leading-8
                            text-gray-600
                        "
                    >

                        {item.description}

                    </p>

                    <div className="mt-6">

                        <Button onClick={onClick}>

                            <span className="flex items-center gap-2">

                                Descubrir la experiencia

                                <ArrowRight size={18} />

                            </span>

                        </Button>

                    </div>

                </div>

            </div>

        </div>

    );

}