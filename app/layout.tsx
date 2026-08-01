import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/layout/Footer";

const centuryGothic = localFont({
  src: [
    {
      path: "./fonts/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/centurygothic_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Randy Rodríguez",
  description: "Software Engineer | Full Stack Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={centuryGothic.className}>
    

        <main>

            {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}