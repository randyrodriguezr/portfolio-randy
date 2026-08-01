import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "@/components/beyond-code/Hero";
import Navbar from "@/components/layout/Navbar";
import AchievementSection from "@/components/beyond-code/AchievementSection";
import Footer from "@/components/layout/Footer";

export default function BeyondCodePage() {

    return (

        <main className="min-h-screen bg-gray-50">

            {/* Hero */}

            <Hero />
            <br/>
            {/* Navbar */}

            <div
                className="
                    sticky
                    top-0
                    z-40
                    bg-gray-50/90
                    backdrop-blur
                    border-b
                    border-gray-200
                "
            >

            </div>

            {/* Botón volver (flotante) */}

            <Link
                href="/"
                className="
                    fixed
                    left-6
                    top-6
                    z-50
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-gray-700
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-x-1
                    hover:border-green-500
                    hover:text-green-600
                    hover:shadow-xl
                "
            >

                <ArrowLeft size={16} />
                Volver al portafolio

            </Link>

            {/* Contenido */}

            <div className="mx-auto max-w-6xl px-6 py-16">

                <AchievementSection />

            </div>


        </main>

    );

}
