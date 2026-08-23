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
            {/* Botón volver (flotante) */}

            <Link
                href="/"
                className="
                    fixed
                    left-3
                    top-3
                    sm:left-6
                    sm:top-6
                    z-50
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2
                    sm:px-5
                    sm:py-3
                    text-xs
                    sm:text-sm
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
                <span className="hidden sm:inline">
                    Volver al portafolio
                </span>
                <span className="sm:hidden">
                    Volver
                </span>

            </Link>

            {/* Contenido */}

            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">

                <AchievementSection />

            </div>


        </main>

    );

}