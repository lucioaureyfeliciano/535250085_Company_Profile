import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import { getServiceBySlug, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

// Halaman detail dibuat statis saat build untuk setiap slug
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Layanan", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={500}
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <p className="mt-8 text-lg leading-relaxed text-stone-600">{service.description}</p>

            <h2 className="mt-10 text-xl font-semibold text-ink">Yang Anda dapatkan</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-stone-600">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl bg-brand-50 p-6">
              <h2 className="font-semibold text-ink">Tertarik dengan layanan ini?</h2>
              <p className="mt-2 text-sm text-stone-600">Konsultasi pertama gratis.</p>
              <Button href="/contact" className="mt-4 w-full">
                Konsultasi gratis
              </Button>
            </div>

            <div className="rounded-xl border border-stone-200 p-6">
              <h2 className="font-semibold text-ink">Layanan lainnya</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`} className="text-brand-700 hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}