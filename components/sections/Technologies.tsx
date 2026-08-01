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
            className="space-y-20"
        >

            {/* Encabezado */}

            <div className="text-center">

                <h2
                    className="
                        text-4xl
                        font-bold
                    "
                >
                    Tecnologías
                </h2>

                <p
                    className="
                        mt-3
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
                        className="space-y-8"
                    >

                        <h3
                            className="
                                text-2xl
                                font-bold
                                border-l-4
                                border-green-500
                                pl-4
                            "
                        >

                            {category}

                        </h3>

                        <div
                            className="
                                grid
                                gap-6
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
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