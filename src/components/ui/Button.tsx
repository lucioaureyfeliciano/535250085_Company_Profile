import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  outline: "border border-brand-700 text-brand-700 hover:bg-brand-50",
  light: "bg-white text-brand-800 hover:bg-brand-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}