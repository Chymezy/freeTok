// src/components/Button/PrimaryButton.tsx
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({ children, ...rest }: Props) {
  return (
    <button
      className="bg-electric-blue hover:bg-deep-indigo rounded-xl px-4 py-2 font-medium text-white transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
}
