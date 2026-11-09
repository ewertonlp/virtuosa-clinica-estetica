import { content } from "@/config/content";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Philosophy } from "@/components/sections/philosophy";
import { Team } from "@/components/sections/team";
import { BookingCTA } from "@/components/sections/booking-cta";
const copy = content.aboutPage;

export const metadata: Metadata = {
  title: copy.nossaEssencia,
  description: copy.conhecaAFilosofiaDeCuidadoDo,
};
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow={copy.aEssenciaElara}
        title={copy.cadaPessoaUmaHistoria}
        italic={copy.cadaCuidadoUmEncontro}
        description={copy.umConceitoDeEsteticaQueValoriza}
      />
      <Philosophy />
      <Team />
      <BookingCTA />
    </>
  );
}
