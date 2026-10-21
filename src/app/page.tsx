import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { values } from "@/data/values";

export default function HomePage() {
  return (
    <>
      <section className="bg-brand-50 py-16 sm:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Software yang dibangun untuk bisnis Anda
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600">
              Kami membantu perusahaan merancang, membangun, dan merawat produk digital yang
              benar-benar dipakai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services">Lihat layanan</Button>
              <Button href="/contact" variant="outline">
                Hubungi kami
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-brand-100" aria-hidden />
            <Image
              src="/images/hero.png"
              alt="Tim Nusantara Digital sedang bekerja"
              width={800}
              height={600}
              priority
              className="relative w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Layanan kami"
            description="Tiga bidang yang kami kerjakan sehari-hari."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title="Cara kami bekerja" />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-l-4 border-accent-400 pl-5">
                <h3 className="font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-16 sm:pt-20">
        <CtaBanner />
      </div>
    </>
  );
}