import Image from "next/image";
import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 text-center shadow-sm">
      <Image
        src={member.photo}
        alt={`Foto ${member.name}`}
        width={320}
        height={320}
        className="mx-auto aspect-square w-40 rounded-full object-cover ring-4 ring-brand-50"
      />
      <h3 className="mt-5 font-semibold text-ink">{member.name}</h3>
      <p className="mt-1 text-sm text-stone-600">{member.role}</p>
    </div>
  );
}