"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Building2,
  CalendarRange,
  MapPin,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { Project } from "@/types/Project";

interface ProjectViewerProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}

export default function ProjectViewer({
  open,
  project,
  onClose,
}: ProjectViewerProps) {

  const [selectedImage, setSelectedImage] = useState<string>("");


  useEffect(() => {

    if (!project) {
      setSelectedImage("");
      return;
    }

    setSelectedImage(project.image ?? "");

  }, [project]);


  useEffect(() => {

    if (!open) return;


    document.body.style.overflow = "hidden";


    const handleKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") {
        onClose();
      }

    };


    window.addEventListener("keydown", handleKey);


    return () => {

      document.body.style.overflow = "auto";

      window.removeEventListener(
        "keydown",
        handleKey
      );

    };

  }, [open, onClose]);



  if (!open || !project) {
    return null;
  }



  return (

    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >


      <div
        className="
          mx-auto
          my-4
          sm:my-8
          flex
          min-h-[calc(100vh-2rem)]
          sm:min-h-0
          sm:h-[92vh]
          w-full
          sm:w-[95vw]
          max-w-7xl
          flex-col
          overflow-hidden
          rounded-none
          sm:rounded-2xl
          bg-white
          shadow-2xl
        "
        onClick={(e)=>e.stopPropagation()}
      >


        <header className="flex items-center justify-between gap-4 border-b p-4 sm:p-6">

          <h2 className="text-lg sm:text-2xl font-bold">
            {project.title}
          </h2>


          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>


        </header>



        <div className="grid flex-1 overflow-auto grid-cols-1 lg:grid-cols-3">


          <div className="lg:col-span-2 p-4 sm:p-6">


            <div className="relative h-[240px] sm:h-[360px] lg:h-[500px] w-full overflow-hidden rounded-xl">


              {selectedImage ? (

                <Image
                  src={selectedImage}
                  alt={project.title}
                  fill
                  className="object-contain"
                />

              ) : (

                <div className="flex h-full items-center justify-center bg-gray-100 text-sm text-gray-500">

                  Sin imagen disponible

                </div>

              )}


            </div>



            <div className="mt-4 sm:mt-5 flex gap-3 overflow-x-auto">


              {[project.image, ...(project.gallery ?? [])]
                .filter(Boolean)
                .map((img)=>(
                  
                <button
                  key={img}
                  onClick={()=>setSelectedImage(img)}
                  className="relative h-16 w-24 sm:h-24 sm:w-36 flex-shrink-0 overflow-hidden rounded-lg border"
                >

                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                  />

                </button>

              ))}


            </div>


          </div>



          <aside className="border-t lg:border-t-0 lg:border-l p-4 sm:p-6">

            <h3 className="text-lg sm:text-xl font-semibold">
              {project.subtitle}
            </h3>


            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
              {project.description}
            </p>



            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base">


              {project.company && (

                <div className="flex items-center gap-2">
                  <Building2 size={18} className="shrink-0" />
                  {project.company}
                </div>

              )}



              {project.location && (

                <div className="flex items-center gap-2">
                  <MapPin size={18} className="shrink-0" />
                  {project.location}
                </div>

              )}



              <div className="flex items-center gap-2">

                <CalendarRange size={18} className="shrink-0" />

                {project.start} - {project.end}

              </div>


            </div>



            <h4 className="mt-6 sm:mt-8 font-semibold">
              Tecnologías
            </h4>


            <div className="mt-3 flex flex-wrap gap-2">


              {project.technologies?.map((tech)=>(

                <span
                  key={tech}
                  className="
                    rounded-full
                    bg-green-100
                    px-3
                    py-1
                    text-xs
                    sm:text-sm
                    text-green-700
                  "
                >
                  {tech}
                </span>

              ))}


            </div>


          </aside>


        </div>


      </div>


    </div>

  );

}