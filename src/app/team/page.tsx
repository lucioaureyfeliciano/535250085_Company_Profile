import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import TeamCard from "@/components/sections/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Tim" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Tim kami"
        description="Orang-orang di balik setiap proyek."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Tim" }]}
      />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </Container>
      </section>
    </>
  );
}