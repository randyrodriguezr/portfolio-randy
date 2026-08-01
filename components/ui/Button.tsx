import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className="
        w-full
        rounded-full
        bg-green-500
        hover:bg-green-600
        transition
        py-3
        text-white
        font-semibold
      "
    >
      {children}
    </button>
  );
}