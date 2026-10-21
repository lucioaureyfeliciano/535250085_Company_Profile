import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import { values } from "@/data/values";

export const metadata: Metadata = { title: "Tentang Kami" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang kami"
        description="Siapa kami dan bagaimana kami bekerja."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang" }]}
      />

      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <Image
            src="/images/about.jpg"
            alt="Kantor Nusantara Digital"
            width={800}
            height={600}
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <div className="space-y-4 leading-relaxed text-stone-600">
            <p>
              Nusantara Digital berdiri pada 2018 di Jakarta. Kami mulai sebagai tim kecil yang
              membantu UMKM membuat website, dan kini bekerja dengan perusahaan dari berbagai
              industri.
            </p>
            <p>
              Misi kami sederhana: membuat teknologi terasa mudah bagi pemilik bisnis dan
              menyenangkan bagi penggunanya.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <SectionHeading title="Nilai yang kami pegang" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-14 sm:pt-20">
        <CtaBanner />
      </div>
    </>
  );
}