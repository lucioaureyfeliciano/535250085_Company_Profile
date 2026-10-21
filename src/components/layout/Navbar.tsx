"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import NavLink from "./NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-brand-800"
          onClick={() => setOpen(false)}
        >
          {SITE_NAME}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Navigasi utama" className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>
          <Button href="/contact" size="sm">
            Konsultasi
          </Button>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {/* Mobile */}
      {open && (
        <nav id="mobile-menu" aria-label="Navigasi mobile" className="border-t border-stone-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} {...item} className="py-3" onClick={() => setOpen(false)} />
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}