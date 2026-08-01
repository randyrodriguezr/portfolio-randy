"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-3
          px-6
          py-6
          text-sm
          text-gray-500
          md:flex-row
        "
      >
        {/* Copyright */}

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-700">
            Randy Jimmy Rodríguez
          </span>
        </p>

        {/* Cargo */}

        <p className="text-center">
          Software Engineer
          <span className="mx-2 text-gray-300">•</span>
          Full Stack Developer
        </p>

        {/* Redes */}

        <div className="flex items-center gap-5">

          <Link
            href="https://github.com/randyrodriguezr"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub
              size={20}
              className="
                transition
                hover:scale-110
                hover:text-black
              "
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/randyrodriguezec/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={20}
              className="
                transition
                hover:scale-110
                hover:text-blue-600
              "
            />
          </Link>

        </div>

      </div>
    </footer>
  );
}