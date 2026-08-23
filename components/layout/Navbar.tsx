"use client";

import Link from "next/link";

import {
  User,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  Award,
  FolderGit2,
  Code2,
  Mail,
  Mountain,
} from "lucide-react";

const menu = [
  {
    id: "perfil",
    icon: User,
    label: "Perfil",
  },
  {
    id: "educacion",
    icon: GraduationCap,
    label: "Educación",
  },
  {
    id: "experiencia",
    icon: BriefcaseBusiness,
    label: "Experiencia",
  },
  {
    id: "publicaciones",
    icon: BookOpen,
    label: "Publicaciones",
  },
  {
    id: "certificaciones",
    icon: Award,
    label: "Certificaciones",
  },
  {
    id: "proyectos",
    icon: FolderGit2,
    label: "Proyectos",
  },
  {
    id: "technologies",
    icon: Code2,
    label: "Tecnologías",
  },
  {
    id: "contacto",
    icon: Mail,
    label: "Contacto",
  },
];

export default function Navbar() {

  const goTo = (id: string) => {

     if (id === "contacto") {
      window.location.href = "mailto:randy.rodriguez.ec@gmail.com";
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (

    <nav
      className="
    w-full
    bg-white
    rounded-full
    shadow-sm
    border
    border-gray-200
    px-4
    sm:px-6
    py-3
    flex
    justify-start
    sm:justify-center
    items-center
    gap-4
    sm:gap-8
    overflow-x-auto
    scrollbar-hide
  "
    >

      {menu.map((item) => {

        const Icon = item.icon;

        return (

          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            title={item.label}
            className="
    group
    shrink-0
    transition
    duration-300
    hover:scale-110
  "
          >

            <Icon
              size={22}
              className="
                text-gray-500
                transition
                group-hover:text-green-500
              "
            />

          </button>

        );

      })}

      {/* Más allá del código */}

      <div className="h-6 w-px bg-gray-300" />

      <Link
        href="/beyond-code"
        title="Más allá del código"
        className="
          group
          transition
          duration-300
          hover:scale-110
        "
      >

        <Mountain
          size={22}
          className="
            text-amber-500
            transition
            group-hover:text-orange-600
          "
        />

      </Link>

    </nav>

  );

}