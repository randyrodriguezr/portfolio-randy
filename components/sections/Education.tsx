import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import EducationCard from "../cards/EducationCard";

import { education } from "@/data/education";

export default function Education() {

    return (

        <section id="educacion">

            <SectionTitle
                title="Educación"
                subtitle="Formación académica"
            />

            <Card>
                {[...education]
                    .sort((a, b) => Number(b.start) - Number(a.start))
                    .map((item) => (
                        <EducationCard
                            key={item.id}
                            education={item}
                        />
                    ))}
            </Card>

        </section>

    );

}