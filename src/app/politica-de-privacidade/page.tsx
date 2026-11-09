import { content } from "@/config/content";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
const copy = content.privacy;

export const metadata: Metadata = { title: copy.privacidadeNaDemonstracao };
export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow={copy.clarezaERespeito}
        title={copy.seuCuidadoComeca}
        italic={copy.comPrivacidade}
        description={copy.estasInformacoesDescrevemOFuncionamentoDesta}
      />
      <article className="container privacy-copy">
        <h2>{copy.umaExperienciaDemonstrativa}</h2>
        <p>{copy.elaraEUmaMarcaFicticiaOs}</p>
        <h2>{copy.oQueAconteceComAsInformacoes}</h2>
        <p>{copy.osCamposPermanecemTemporariamenteNaMemoria}</p>
        <h2>{copy.conciergeENavegacao}</h2>
        <p>{copy.oConciergeUtilizaPerguntasERespostas}</p>
        <h2>{copy.imagensFontesEInfraestrutura}</h2>
        <p>{copy.imagensIlustrativasEFontesSaoServidas}</p>
        <h2>{copy.antesDeUmAtendimentoReal}</h2>
        <p>{copy.umaClinicaRealDeveraInformarO}</p>
        <h2>{copy.contato}</h2>
        <p>{copy.naoHaUmControladorClinicoNem}</p>
      </article>
    </>
  );
}
