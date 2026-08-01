"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
    X,
    Calendar,
    MapPin,
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import { Achievement } from "@/types/Achievement";

interface AchievementModalProps {
    open: boolean;
    achievements: Achievement[];
    activeIndex: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export default function AchievementModal({
    open,
    achievements,
    activeIndex,
    onClose,
    onNavigate,
}: AchievementModalProps) {

    const achievement = achievements[activeIndex] ?? null;

    const [currentImage, setCurrentImage] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Bloquear scroll del body mientras el modal está abierto
    useEffect(() => {

        if (!open) return;

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [open]);

    // Atajos de teclado: Escape para cerrar, flechas para navegar logros
    useEffect(() => {

        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {

            if (event.key === "Escape") {

                onClose();

            }

            if (event.key === "ArrowLeft" && activeIndex > 0) {

                onNavigate(activeIndex - 1);

            }

            if (
                event.key === "ArrowRight" &&
                activeIndex < achievements.length - 1
            ) {

                onNavigate(activeIndex + 1);

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [open, onClose, onNavigate, activeIndex, achievements.length]);

    // Reiniciar la imagen activa cuando cambia el logro
    useEffect(() => {

        setCurrentImage(0);
        setImageLoaded(false);

    }, [achievement]);

    if (!open || !achievement) {

        return null;

    }

    const images = [
        achievement.image,
        ...(achievement.gallery ?? []),
    ];

    const previousImage = () => {

        setImageLoaded(false);

        setCurrentImage((prev) =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );

    };

    const nextImage = () => {

        setImageLoaded(false);

        setCurrentImage((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );

    };

    const hasPrevAchievement = activeIndex > 0;
    const hasNextAchievement = activeIndex < achievements.length - 1;

    const handleBackdropClick = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {

        if (event.target === event.currentTarget) {

            onClose();

        }

    };

    return (

        <div
            onMouseDown={handleBackdropClick}
            className="
                fixed
                inset-0
                z-50
                bg-black/70
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-6
                animate-in
                fade-in
                duration-200
            "
        >

            <div
                className="
                    relative
                    h-[92vh]
                    w-full
                    max-w-6xl
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    shadow-2xl
                    animate-in
                    zoom-in-95
                    duration-200
                "
            >

                <button
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="
                        absolute
                        right-6
                        top-6
                        z-50
                        rounded-full
                        bg-white
                        p-3
                        shadow-xl
                        transition
                        hover:scale-110
                    "
                >

                    <X size={22} />

                </button>

                {/* Navegación entre logros */}

                {hasPrevAchievement && (

                    <button
                        onClick={() => onNavigate(activeIndex - 1)}
                        aria-label="Logro anterior"
                        className="
                            absolute
                            left-6
                            top-6
                            z-50
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            shadow-xl
                            transition
                            hover:scale-105
                        "
                    >

                        <ArrowLeft size={16} />
                        Anterior

                    </button>

                )}

                {hasNextAchievement && (

                    <button
                        onClick={() => onNavigate(activeIndex + 1)}
                        aria-label="Siguiente logro"
                        className="
                            absolute
                            right-20
                            top-6
                            z-50
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-white
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            shadow-xl
                            transition
                            hover:scale-105
                        "
                    >

                        Siguiente
                        <ArrowRight size={16} />

                    </button>

                )}

                <div className="h-full overflow-y-auto">

                    {/* HERO */}

                    <div
                        className="
                            relative
                            h-[420px]
                            w-full
                            bg-gray-100
                        "
                    >

                        {!imageLoaded && (

                            <div
                                className="
                                    absolute
                                    inset-0
                                    animate-pulse
                                    bg-gray-200
                                "
                            />

                        )}

                        <Image
                            src={images[currentImage]}
                            alt={achievement.title}
                            fill
                            priority
                            sizes="100vw"
                            onLoad={() => setImageLoaded(true)}
                            className={`
                                object-cover
                                transition-opacity
                                duration-300
                                ${imageLoaded ? "opacity-100" : "opacity-0"}
                            `}
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/80
                                via-black/10
                                to-transparent
                            "
                        />

                        {images.length > 1 && (

                            <>

                                <button
                                    onClick={previousImage}
                                    aria-label="Imagen anterior"
                                    className="
                                        absolute
                                        left-6
                                        top-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        bg-white
                                        p-3
                                        shadow-xl
                                        transition
                                        hover:scale-110
                                    "
                                >

                                    <ChevronLeft />

                                </button>

                                <button
                                    onClick={nextImage}
                                    aria-label="Siguiente imagen"
                                    className="
                                        absolute
                                        right-6
                                        top-1/2
                                        -translate-y-1/2
                                        rounded-full
                                        bg-white
                                        p-3
                                        shadow-xl
                                        transition
                                        hover:scale-110
                                    "
                                >

                                    <ChevronRight />

                                </button>

                            </>

                        )}

                        <div
                            className="
                                absolute
                                bottom-10
                                left-10
                                right-10
                                text-white
                            "
                        >

                            <p
                                className="
                                    text-lg
                                    font-semibold
                                    text-green-300
                                "
                            >

                                {achievement.subtitle}

                            </p>

                            <h1
                                className="
                                    mt-2
                                    text-5xl
                                    font-bold
                                "
                            >

                                {achievement.title}

                            </h1>

                        </div>

                    </div>

                    {/* CONTENIDO */}

                    <div className="mx-auto max-w-5xl p-10">

                        {/* Información rápida */}

                        <div className="grid gap-6 md:grid-cols-2">

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-gray-50
                                    p-6
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-green-100
                                    "
                                >

                                    <Calendar
                                        size={24}
                                        className="text-green-600"
                                    />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Fecha

                                    </p>

                                    <h3 className="text-lg font-semibold">

                                        {achievement.date}

                                    </h3>

                                </div>

                            </div>

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    bg-gray-50
                                    p-6
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-green-100
                                    "
                                >

                                    <MapPin
                                        size={24}
                                        className="text-green-600"
                                    />

                                </div>

                                <div>

                                    <p className="text-sm text-gray-500">

                                        Ubicación

                                    </p>

                                    <h3 className="text-lg font-semibold">

                                        {achievement.location}

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* Stats */}

                        {achievement.stats && achievement.stats.length > 0 && (

                            <section className="mt-8">

                                <div
                                    className="
                                        grid
                                        gap-4
                                    "
                                    style={{
                                        gridTemplateColumns: `repeat(${achievement.stats.length}, minmax(0, 1fr))`,
                                    }}
                                >

                                    {achievement.stats.map((stat, index) => (

                                        <div
                                            key={index}
                                            className="
                                                rounded-2xl
                                                bg-green-50
                                                p-5
                                                text-center
                                            "
                                        >

                                            <p
                                                className="
                                                    text-2xl
                                                    font-bold
                                                    text-green-700
                                                "
                                            >

                                                {stat.value}

                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    text-gray-500
                                                "
                                            >

                                                {stat.label}

                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </section>

                        )}

                        {/* Historia */}

                        <section className="mt-14">

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-gray-900
                                "
                            >

                                Mi experiencia

                            </h2>

                            <p
                                className="
                                    mt-6
                                    text-lg
                                    leading-9
                                    text-gray-600
                                    whitespace-pre-line
                                "
                            >

                                {achievement.details || achievement.description}

                            </p>

                        </section>

                        {/* Learnings */}

                        {achievement.learnings && achievement.learnings.length > 0 && (

                            <section className="mt-10">

                                <h3
                                    className="
                                        text-xl
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    Habilidades desarrolladas

                                </h3>

                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-wrap
                                        gap-3
                                    "
                                >

                                    {achievement.learnings.map((learning, index) => (

                                        <span
                                            key={index}
                                            className="
                                                rounded-full
                                                bg-green-100
                                                px-4
                                                py-2
                                                text-sm
                                                font-medium
                                                text-green-700
                                            "
                                        >

                                            {learning}

                                        </span>

                                    ))}

                                </div>

                            </section>

                        )}

                        {/* Galería */}

                        <section className="mt-16">

                            <div className="flex items-center justify-between">

                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >

                                    Galería

                                </h2>

                                <span className="text-gray-500">

                                    {currentImage + 1} / {images.length}

                                </span>

                            </div>

                            <div
                                className="
                                    mt-8
                                    grid
                                    grid-cols-2
                                    gap-5
                                    md:grid-cols-4
                                "
                            >

                                {images.map((image, index) => (

                                    <button
                                        key={index}
                                        onClick={() => {

                                            setImageLoaded(
                                                index === currentImage
                                            );

                                            setCurrentImage(index);

                                        }}
                                        className={`
                                            relative
                                            aspect-square
                                            overflow-hidden
                                            rounded-2xl
                                            transition-all
                                            duration-300
                                            ${currentImage === index
                                                ? "scale-105 ring-4 ring-green-500"
                                                : "hover:scale-105"
                                            }
                                        `}
                                    >

                                        <Image
                                            src={image}
                                            alt={`${achievement.title}-${index}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            className="object-cover"
                                        />

                                    </button>

                                ))}

                            </div>

                        </section>

                        {/* Reflexión */}

                        <section className="mt-16">

                            <div
                                className="
                                    rounded-3xl
                                    bg-gradient-to-r
                                    from-green-600
                                    to-emerald-500
                                    p-10
                                    text-white
                                "
                            >

                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >

                                    Lo que aprendí

                                </h2>

                                <p
                                    className="
                                        mt-6
                                        text-lg
                                        leading-9
                                        text-green-50
                                    "
                                >

                                    Cada una de estas experiencias ha contribuido a mi crecimiento
                                    personal. Me han enseñado que la perseverancia, la disciplina y
                                    la capacidad de salir de la zona de confort son habilidades que
                                    también fortalecen mi desarrollo profesional como ingeniero de
                                    software.

                                </p>

                            </div>

                        </section>

                        {/* Botón */}

                        <div
                            className="
                                mt-16
                                flex
                                justify-center
                            "
                        >

                            <button
                                onClick={onClose}
                                className="
                                    rounded-xl
                                    bg-green-600
                                    px-8
                                    py-4
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:bg-green-700
                                "
                            >

                                Cerrar

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
