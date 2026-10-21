import Link from "next/link";
import { NAV_ITEMS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-brand-100">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE_NAME}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{SITE_DESCRIPTION}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="font-semibold text-white">Menu</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-2 text-sm not-italic">
          <p className="font-semibold text-white">Kontak</p>
          <p>halo@nusantaradigital.id</p>
          <p>+62 21 0000 0000</p>
          <p>Jakarta Selatan</p>
        </address>
      </Container>
      <div className="border-t border-brand-800 py-5 text-center text-xs">
        © {new Date().getFullYear()} {SITE_NAME}. Hak cipta dilindungi.
      </div>
    </footer>
  );
}