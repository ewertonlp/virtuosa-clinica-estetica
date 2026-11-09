import { content } from "@/config/content";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Procedures } from "@/components/sections/procedures";
import { BookingCTA } from "@/components/sections/booking-cta";
const copy = content.proceduresPage;

export const metadata: Metadata = {
  title: copy.nossosCuidados,
  description: copy.exploreAsCategoriasIlustrativasDeCuidado,
};
export default function ProceduresPage() {
  return (
    <>
      <PageIntro
        eyebrow={copy.possibilidadesDeCuidado}
        title={copy.oSeuCuidado}
        italic={copy.aSuaEscolha}
        description={copy.exploreNossasCategoriasConceituaisOsProcedimentos}
      />
      <Procedures full />
      <BookingCTA />
    </>
  );
}
