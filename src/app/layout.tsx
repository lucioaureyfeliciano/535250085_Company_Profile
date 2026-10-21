import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${font.className} flex min-h-screen flex-col bg-white text-stone-700 antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
