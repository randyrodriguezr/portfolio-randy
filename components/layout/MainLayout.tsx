import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  top: ReactNode;
  children: ReactNode;
}

export default function MainLayout({ top, children }: Props) {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[280px_1fr]
          gap-6
          lg:gap-8
        "
      >

        <Sidebar />

        <section>
          {top}
        </section>

        {/* Ocupa las dos columnas en desktop; en mobile ya es ancho completo */}

        <section className="lg:col-span-2">
          {children}
        </section>

      </div>

    </main>
  );
}