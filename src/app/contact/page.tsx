import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Kontak" };

const contactInfo = [
  { label: "Alamat", value: "Jl. Contoh Raya No. 10, Jakarta Selatan" },
  { label: "Email", value: "halo@nusantaradigital.id" },
  { label: "Telepon", value: "+62 21 0000 0000" },
  { label: "Jam kerja", value: "Senin–Jumat, 09.00–17.00 WIB" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontak"
        description="Ceritakan kebutuhan Anda, kami akan menghubungi balik."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Kontak" }]}
      />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <dl className="space-y-5 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="border-l-4 border-accent-400 pl-5">
                <dt className="text-sm font-semibold text-ink">{item.label}</dt>
                <dd className="mt-1 text-stone-600">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}