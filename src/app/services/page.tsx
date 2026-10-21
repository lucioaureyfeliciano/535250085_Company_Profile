import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ServiceCard from "@/components/sections/ServiceCard";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Layanan" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan"
        description="Pilih layanan yang sesuai dengan kebutuhan Anda."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]}
      />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}