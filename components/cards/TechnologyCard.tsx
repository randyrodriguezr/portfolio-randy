import Image from "next/image";
import { Technology } from "@/types/Technology";

interface TechnologyCardProps {
    technology: Technology;
}

export default function TechnologyCard({
    technology,
}: TechnologyCardProps) {

    return (

        <div
            className="
                group
                bg-white
                rounded-2xl
                border
                border-gray-200
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-green-500
                cursor-pointer
            "
        >

            {/* Logo */}

            <div className="flex justify-center">

                <Image
                    src={technology.icon}
                    alt={technology.name}
                    width={60}
                    height={60}
                    className="object-contain"
                />

            </div>

            {/* Nombre */}

            <h3
                className="
                    mt-5
                    text-center
                    text-xl
                    font-bold
                "
            >
                {technology.name}
            </h3>

            {/* Categoría */}

            <p
                className="
                    mt-1
                    text-center
                    text-sm
                    text-green-600
                "
            >
                {technology.category}
            </p>

            {/* Descripción */}

            <p
                className="
                    mt-4
                    text-center
                    text-sm
                    text-gray-500
                    line-clamp-2
                "
            >
                {technology.description}
            </p>

            {/* Barra */}

            <div
                className="
                    mt-6
                    h-2
                    rounded-full
                    bg-gray-200
                    overflow-hidden
                "
            >

                <div
                    className="
                        h-full
                        rounded-full
                        bg-green-500
                        transition-all
                        duration-700
                    "
                    style={{
                        width: `${technology.level * 20}%`,
                    }}
                />

            </div>

            {/* Nivel */}

            <div
                className="
                    mt-2
                    flex
                    justify-between
                    text-sm
                    text-gray-500
                "
            >

                <span>

                    {[
                        "",
                        "Básico",
                        "Intermedio",
                        "Competente",
                        "Avanzado",
                        "Experto",
                    ][technology.level]}

                </span>

                <span>

                    {technology.years} años

                </span>

            </div>

        </div>

    );

}