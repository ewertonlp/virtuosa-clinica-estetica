import { content } from "@/config/content";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
const copy = content.bookingCta;

export function BookingCTA() {
  return (
    <section className="booking-cta">
      <div className="container">
        <div className="section-kicker">
          <span>{copy.seuProximoMovimento}</span>
          <Plus size={16} />
        </div>
        <Reveal className="booking-cta-inner">
          <p className="eyebrow">{copy.reserveUmTempoParaVoce}</p>
          <Link href="/agendamento" className="cta-statement">
            <h2>
              {copy.oProximo}
              <br />
              {copy.passoE}
              <span>{copy.seu}</span>
            </h2>
            <span className="cta-orb">
              <ArrowUpRight strokeWidth={0.8} />
            </span>
          </Link>
          <div className="cta-bottom">
            <p>
              {copy.umaConversaPodeAbrir}
              <br />
              {copy.umaNovaPerspectiva}
            </p>
            <Link href="/agendamento" className="text-link">
              {copy.agendarMinhaAvaliacao}
              <ArrowUpRight size={17} />
            </Link>
            <span className="cta-disclosure">
              {copy.agendamentoDemonstrativo}
              <br />
              {copy.semEnvioDeDadosOuReserva}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
