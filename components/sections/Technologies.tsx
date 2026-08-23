import { technologies } from "@/data/technologies";

import TechnologyCard from "../cards/TechnologyCard";

const categories = [

    "Backend",

    "Frontend",

    "Frameworks",

    "Base de Datos",

    "Herramientas",

];

export default function Technologies() {

    return (

        <section
            id="technologies"
            className="space-y-12"
        >

            {/* Encabezado */}

            <div className="text-center">

                <h2
                    className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                    "
                >
                    Tecnologías
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-gray-500
                    "
                >
                    Tecnologías, frameworks y herramientas que utilizo
                    para desarrollar soluciones de software.
                </p>

            </div>

            {/* Categorías */}

            {

                categories.map((category) => (

                    <div
                        key={category}
                        className="space-y-5"
                    >

                        <h3
                            className="
                                text-lg
                                font-bold
                                border-l-4
                                border-green-500
                                pl-3
                            "
                        >

                            {category}

                        </h3>

                        <div
                            className="
                                grid
                                gap-4
                                grid-cols-2
                                sm:grid-cols-3
                                lg:grid-cols-4
                                xl:grid-cols-5
                            "
                        >

                            {

                                technologies

                                    .filter(
                                        (technology) =>
                                            technology.category === category
                                    )

                                    .map((technology) => (

                                        <TechnologyCard

                                            key={technology.id}

                                            technology={technology}

                                        />

                                    ))

                            }

                        </div>

                    </div>

                ))

            }

        </section>

    );

}