import { content } from "@/config/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./header";
import { clinic } from "@/config/clinic";
const copy = content.footer;

export function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand light />
            <p className="mt-6 max-w-xs text-sm leading-7 text-inverse/65">
              {copy.suaEssenciaSeuTempo}
              <br />
              {copy.umCuidadoQueComecaEmVoce}
            </p>
          </div>
          <div>
            <p className="footer-label">{copy.explore}</p>
            <Link href="/sobre">{copy.aElara}</Link>
            <Link href="/procedimentos">{copy.nossosCuidados}</Link>
            <Link href="/#experiencia">{copy.aExperiencia}</Link>
            <Link href="/#equipe">{copy.nossaEquipe}</Link>
          </div>
          <div>
            <p className="footer-label">{copy.estamosPorAqui}</p>
            <Link href="/agendamento">
              {copy.agendarAvaliacao}
              <ArrowUpRight size={13} />
            </Link>
            <Link href="/contato">{copy.faleComAElara}</Link>
            <Link href="/#duvidas">{copy.duvidasFrequentes}</Link>
            <Link href="/politica-de-privacidade">{copy.privacidade}</Link>
          </div>
          <div>
            <p className="footer-label">{copy.umConceitoDeCuidado}</p>
            <p className="text-sm leading-7 text-inverse/65">
              {copy.marcaEExperienciaFicticias}
              <br />
              {copy.enderecoERegistrosProfissionais}
              <br />
              {copy.aguardamDadosVerificados}
            </p>
            {clinic.showDemoBadge && (
              <span className="demo-label">{copy.demonstracaoConceitual}</span>
            )}
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          {copy.elara}
        </div>
        <div className="footer-bottom">
          <span>
            {copy.text}
            {new Date().getFullYear()} {copy.elaraProjetoConceitual}
          </span>
          <span>{copy.imagensIlustrativasGeradasPorIaNao}</span>
          <span>{copy.designQueAcolhe}</span>
        </div>
      </div>
    </footer>
  );
}
