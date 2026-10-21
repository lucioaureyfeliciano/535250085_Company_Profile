import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-stone-600">Alamat yang Anda buka tidak ada atau sudah dipindahkan.</p>
      <div className="mt-8">
        <Button href="/">Kembali ke beranda</Button>
      </div>
    </Container>
  );
}
