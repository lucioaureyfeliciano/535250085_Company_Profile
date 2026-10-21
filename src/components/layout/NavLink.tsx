"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

type NavLinkProps = NavItem & {
  onClick?: () => void;
  className?: string;
};

export default function NavLink({ href, label, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  // "/" hanya aktif jika persis di beranda; halaman lain aktif juga untuk sub-route (/services/xxx)
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-brand-50 text-brand-800"
          : "text-stone-600 hover:bg-stone-100 hover:text-ink"
      } ${className}`}
    >
      {label}
    </Link>
  );
}