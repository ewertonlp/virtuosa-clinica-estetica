import { content } from "@/config/content";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { Contact } from "@/components/sections/contact";
const copy = content.contactPage;

export const metadata: Metadata = {
  title: copy.vamosConversar,
  description: copy.exploreOsCanaisDeContatoDo,
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={copy.estamosPorAqui}
        title={copy.todaConexaoComeca}
        italic={copy.comUmOla}
        description={copy.umEspacoParaSuasPrimeirasPerguntas}
      />
      <Contact />
    </>
  );
}
