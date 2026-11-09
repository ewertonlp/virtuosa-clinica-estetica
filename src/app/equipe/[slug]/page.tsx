import { content } from "@/config/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { UserRound, ArrowLeft } from "lucide-react";
import { clinic } from "@/config/clinic";
const copy = content.professionalPage;

export function generateStaticParams() {
  return clinic.team.map((person) => ({ slug: person.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      clinic.team.find((p) => p.slug === slug)?.name ??
      copy.perfilNaoEncontrado,
  };
}
export default async function TeamProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = clinic.team.find((p) => p.slug === slug);
  if (!person) notFound();
  return (
    <div className="container profile-page">
      <Link href="/#equipe" className="back-link">
        <ArrowLeft size={15} /> {copy.nossaEquipe}
      </Link>
      <UserRound size={72} strokeWidth={0.7} className="mb-8" />
      <p className="eyebrow">
        {person.placeholder ? copy.perfilDemonstrativo : copy.nossaEquipe2}
      </p>
      <h1>{person.name}</h1>
      <p className="detail-lead">{person.role}</p>
      <p>{person.biography}</p>
      {person.crm && (
        <p>
          {copy.crm}
          {person.crm} {person.rqe && `· RQE ${person.rqe}`}
        </p>
      )}
      {person.placeholder && (
        <div className="notice mt-8">
          {copy.nomeFotografiaFormacaoERegistrosProfissionais}
        </div>
      )}
    </div>
  );
}
