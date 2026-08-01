"use client";

import Image from "next/image";
import { useState } from "react";

import {
    Mail,
    MapPin,
    Download,
    ChevronDown,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "../ui/Button";

export default function Sidebar() {
    const [openCV, setOpenCV] = useState(false);

    return (
        <aside
            className="
        w-[280px]
        h-fit
        self-start
        bg-white
        rounded-3xl
        shadow-sm
        border
        border-gray-200
        p-6
        flex
        flex-col
        items-center
        gap-5
      "
        >
            {/* Foto */}

            <Image
                src="/profile/profile.jpg"
                alt="Randy Rodríguez"
                width={140}
                height={140}
                className="rounded-2xl object-cover"
            />

            {/* Información */}

            <div className="text-center">

                <h1 className="text-xl font-bold">
                    Randy Jimmy Rodríguez
                </h1>

                <p className="font-medium text-green-600">
                    Software Engineer
                </p>

                <p className="text-sm text-gray-500">
                    Full Stack Developer
                </p>

            </div>

            {/* Contacto */}

            <div className="w-full space-y-3">

    <div className="flex items-center gap-3 text-gray-600">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <Mail size={15} className="text-gray-500" />
        </div>

        <span className="text-sm">
            randy.rodriguez.ec@gmail.com
        </span>
    </div>


    <div className="flex items-center gap-3 text-gray-600">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <MapPin size={15} className="text-gray-500" />
        </div>

        <span className="text-sm">
            Quevedo, Ecuador
        </span>
    </div>

</div>

            {/* Redes */}

            <div className="flex gap-5">

                <a
                    href="https://www.linkedin.com/in/randyrodriguezec/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin
                        size={22}
                        className="
              text-gray-600
              transition
              hover:text-blue-600
            "
                    />
                </a>

                <a
                    href="https://github.com/randyrodriguezr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        size={22}
                        className="
              text-gray-600
              transition
              hover:text-black
            "
                    />
                </a>

            </div>

            
            {/* Botón */}

            <Button
    onClick={() =>
        window.open(
            "https://wa.me/+593969324161?text=Hola%20Randy,%20vi%20tu%20portafolio%20y%20quisiera%20contactarte.",
            "_blank"
        )
    }
>
    Contáctame
</Button>



            {/* Descargar CV */}

            <div className="relative w-full">

                <button
                    onClick={() => setOpenCV(!openCV)}
                    className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-5
        py-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
        hover:shadow-md
    "
                >

                    <div className="flex items-center justify-center gap-2">

                        <Download
                            size={20}
                            className="text-green-600"
                        />

                        <span className="font-semibold text-gray-800">
                            Descargar CV
                        </span>

                    </div>

                    <div className="mt-1 flex items-center justify-center gap-2">

                        <ChevronDown
                            size={12}
                            className={`
                transition-transform
                duration-300
                ${openCV ? "rotate-180" : ""}
            `}
                        />

                    </div>

                </button>

                {openCV && (

                    <div
                        className="
              absolute
              left-0
              top-full
              z-20
              mt-2
              w-full
              overflow-hidden
              rounded-xl
              border
              border-gray-200
              bg-white
              shadow-xl
            "
                    >

                        <a
                            href="/cv/Randy_Rodriguez_CV_ES.pdf"
                            download
                            className="
                flex
                items-center
                justify-between
                px-4
                py-3
                transition
                hover:bg-green-50
              "
                        >

                            <span>
                                🇪🇸 Español
                            </span>

                            <Download size={16} />

                        </a>

                        <div className="border-t border-gray-100" />

                        <a
                            href="/cv/Randy_Rodriguez_CV_EN.pdf"
                            download
                            className="
                flex
                items-center
                justify-between
                px-4
                py-3
                transition
                hover:bg-green-50
              "
                        >

                            <span>
                                🇺🇸 English
                            </span>

                            <Download size={16} />

                        </a>

                    </div>

                )}

            </div>

        </aside>
    );
}
