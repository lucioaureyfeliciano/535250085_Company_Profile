import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Pengembangan Web",
    summary: "Website dan aplikasi web yang cepat, aman, dan mudah dirawat.",
    description:
      "Kami membangun website company profile, toko online, hingga dashboard internal dengan teknologi modern dan performa yang terukur.",
    features: [
      "Desain responsif untuk semua perangkat",
      "Optimasi kecepatan dan SEO dasar",
      "Integrasi API dan sistem pembayaran",
      "Dokumentasi dan serah terima kode",
    ],
    image: "/images/services/web-development.jpg",
  },
  {
    slug: "mobile-app",
    title: "Aplikasi Mobile",
    summary: "Aplikasi Android dan iOS dengan pengalaman pengguna yang mulus.",
    description:
      "Dari prototipe sampai rilis ke store, kami mendampingi pembuatan aplikasi mobile yang sesuai kebutuhan pengguna Anda.",
    features: [
      "Satu basis kode untuk Android dan iOS",
      "Notifikasi push dan mode offline",
      "Pengujian di berbagai perangkat",
      "Bantuan publikasi ke Play Store dan App Store",
    ],
    image: "/images/services/mobile-app.jpg",
  },
  {
    slug: "ui-ux-design",
    title: "Desain UI/UX",
    summary: "Riset dan desain antarmuka yang mudah dipahami pengguna.",
    description:
      "Kami memulai dari riset pengguna, lalu menyusun alur dan tampilan yang jelas sebelum satu baris kode pun ditulis.",
    features: [
      "Wireframe dan prototipe interaktif",
      "Design system yang konsisten",
      "Uji kegunaan dengan pengguna nyata",
      "File desain siap diserahkan ke developer",
    ],
    image: "/images/services/ui-ux-design.jpg",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
