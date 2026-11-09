import { content } from "@/config/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { procedures } from "@/data/procedures";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
const copy = content.procedurePage;

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = procedures.find((item) => item.slug === slug);
  return {
    title: p?.name ?? copy.cuidadoNaoEncontrado,
    description: p?.description,
  };
}
export default async function ProcedurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = procedures.find((item) => item.slug === slug);
  if (!p) notFound();
  return (
    <>
      <div className="container detail-page">
        <Link href="/procedimentos" className="back-link">
          <ArrowLeft size={15} /> {copy.todosOsCuidados}
        </Link>
        <div className="detail-grid">
          <div>
            <p className="eyebrow">
              {p.category} {copy.categoriaIlustrativa}
            </p>
            <h1>{p.name}</h1>
            <p className="detail-lead">{p.description}</p>
            <p>{p.intro}</p>
            <div className="detail-considerations">
              <h2>{copy.umCuidadoComecaComInformacao}</h2>
              <p>{p.considerations}</p>
            </div>
            <Button asChild>
              <Link href={`/agendamento?servico=${p.slug}`}>
                {copy.solicitarUmaAvaliacao}
                <ArrowUpRight />
              </Link>
            </Button>
            <p className="small-note mt-4">{copy.simulacaoSemEnvioDeDadosOu}</p>
          </div>
          <div className="detail-image">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority
              sizes="(max-width: 767px) 90vw, 45vw"
              className="object-cover"
              style={{ objectPosition: p.imagePosition }}
            />
            <span className="image-disclosure">{p.image.caption}</span>
          </div>
        </div>
      </div>
      <FAQ items={p.faq} />
    </>
  );
}
