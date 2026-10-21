import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={640}
          height={360}
          className="aspect-video w-full object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{service.summary}</p>
        <span className="mt-4 text-sm font-semibold text-brand-700 group-hover:underline">
          Lihat detail
        </span>
      </div>
    </Link>
  );
}