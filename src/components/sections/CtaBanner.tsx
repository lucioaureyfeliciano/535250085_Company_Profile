import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export default function CtaBanner({
  title = "Punya proyek yang ingin dikerjakan?",
  description = "Ceritakan kebutuhan Anda. Konsultasi pertama gratis dan tanpa kewajiban.",
}: CtaBannerProps) {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-800 px-6 py-10 text-white sm:px-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 text-brand-100">{description}</p>
          </div>
          <Button href="/contact" variant="light">
            Hubungi kami
          </Button>
        </div>
      </Container>
    </section>
  );
}