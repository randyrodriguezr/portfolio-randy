"use client";

import { useState } from "react";

import SectionTitle from "../ui/SectionTitle";
import CertificationCard from "../cards/CertificationCard";
import ImageViewer from "../modals/ImageViewer";

import { certifications } from "@/data/certifications";
import { Certification } from "@/types/Certification";

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const handleView = (certification: Certification) => {
    setSelectedCertification(certification);
  };

  const handleClose = () => {
    setSelectedCertification(null);
  };

  return (
    <section
      id="certificaciones"
      className="space-y-10"
    >
      <SectionTitle
        title="Licencias y Certificaciones"
        subtitle="Formación continua, cursos especializados y licencias profesionales obtenidas a lo largo de mi trayectoria."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onView={handleView}
          />
        ))}
      </div>

      <ImageViewer
        open={selectedCertification !== null}
         images={
    selectedCertification?.image
      ? [selectedCertification.image]
      : []
  }
        title={selectedCertification?.title}
        onClose={handleClose}
      />
    </section>
  );
}