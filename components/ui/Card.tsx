import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-gray-200
        shadow-sm
        p-6
      "
    >
      {children}
    </div>
  );
}