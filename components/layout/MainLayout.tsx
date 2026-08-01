import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  top: ReactNode;
  children: ReactNode;
}

export default function MainLayout({ top, children }: Props) {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-[280px_1fr]
          gap-8
        "
      >

        <Sidebar />

        <section>
          {top}
        </section>

        {/* Ocupa las dos columnas: Sidebar + contenido */}

        <section className="col-span-2">
          {children}
        </section>

      </div>

    </main>
  );
}
