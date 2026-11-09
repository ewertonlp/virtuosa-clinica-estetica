"use client";
import { content } from "@/config/content";
import { clinic } from "@/config/clinic";

import { useRef } from "react";
import Image from "next/image";
import { media } from "@/config/media";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Reveal } from "@/components/motion/reveal";
const copy = content.philosophy;

const statement = copy.suaEssenciaEOPontoDe;
const words = statement.split(" ");
function Word({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const opacity = useTransform(
    progress,
    [(index / words.length) * 0.75, ((index + 1) / words.length) * 0.75],
    [0.32, 1],
  );
  return <motion.span style={reduced ? {} : { opacity }}>{word} </motion.span>;
}
export function Philosophy() {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start 85%", "end 75%"],
  });
  return (
    <section id="filosofia" className="section philosophy" ref={section}>
      <div className="container">
        <div className="section-kicker">
          <span>{copy.textAEssencia}</span>
          <span>{copy.humanaPorNaturezaContemporaneaPorEscolha}</span>
          <Plus size={16} />
        </div>
        <div className="manifesto-grid">
          <h2 className="manifesto" aria-label={statement}>
            <span aria-hidden="true">
              {words.map((word, index) => (
                <Word
                  key={index}
                  word={word}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </span>
          </h2>
          <Reveal className="manifesto-aside">
            <span className="outline-symbol" aria-hidden="true">
              {clinic.name.slice(0, 1).toLowerCase()}
            </span>
            <p>
              {copy.esteticaComIntencao}
              <br />
              {copy.escolhasComConsciencia}
              <br />
              {copy.cuidadoComPresenca}
            </p>
          </Reveal>
        </div>
        <div className="philosophy-grid">
          <Reveal className="philosophy-image">
            <Image
              src={media.philosophy.src}
              alt={media.philosophy.alt}
              fill
              sizes="(max-width: 767px) 90vw, 38vw"
              className="object-cover"
            />
            <span className="image-disclosure">{media.philosophy.caption}</span>
            <span className="image-index">{copy.form001}</span>
          </Reveal>
          <Reveal className="philosophy-copy">
            <p className="eyebrow">{copy.aBelezaDeNaoSerIgual}</p>
            <h3>
              {copy.naoExiste}
              <br />
              {copy.outraVersao}
              <br />
              <span>{copy.deVoce}</span>
            </h3>
            <p>{copy.aElaraEUmConceitoDe}</p>
            <Link href="/sobre" className="text-link">
              {copy.entreNoUniversoElara}
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
