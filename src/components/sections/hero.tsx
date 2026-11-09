"use client";
import { content } from "@/config/content";

import { useRef } from "react";
import Image from "next/image";
import { media } from "@/config/media";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { clinic } from "@/config/clinic";
const copy = content.hero;

export function Hero() {
  const target = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [-18, 35]);
  return (
    <section className="hero on-dark" ref={target}>
      <motion.div
        className="hero-backdrop"
        style={reduced ? {} : { y: imageY }}
      >
        <Image
          src={media.hero.src}
          alt={media.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-stage">
        <div className="hero-topline on-dark">
          <p>
            <span className="status-dot" /> {copy.esteticaIdentidadeEvolucao}
          </p>
          <span>{copy.umNovoOlharElara}</span>
        </div>
        <motion.div className="hero-copy" style={reduced ? {} : { y: textY }}>
          <h1 aria-label={copy.headline.join(" ")}>
            {copy.headline.map((line, index) => (
              <span
                className={`hero-word hero-word-${index}`}
                key={line}
                aria-hidden="true"
              >
                <motion.span
                  initial={false}
                  animate={reduced ? {} : { y: ["105%", "0%"] }}
                  transition={{
                    duration: 1.15,
                    delay: 0.12 + index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <div className="hero-copy-bottom">
            <span className="crosshair" aria-hidden="true">
              <Plus size={28} strokeWidth={1} />
            </span>
            <p>
              {copy.umNovoOlharSobreAEstetica}
              <br />
              {copy.umCuidadoQueComecaEmQuem}
            </p>
          </div>
          <Link className="hero-cta" href="/agendamento">
            <span>{copy.comeceASuaExperiencia}</span>
            <span className="button-orb">
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </motion.div>
        <motion.div
          className="portrait-orbit"
          style={reduced ? {} : { rotate: orbitRotate }}
          aria-hidden="true"
        >
          <span className="orbit-point" />
        </motion.div>
        <Link href="/procedimentos" className="hero-explore">
          <ArrowUpRight size={25} strokeWidth={1} />
          <span>
            {copy.explore}
            <br />
            {copy.osCuidados}
          </span>
        </Link>
        <div className="hero-image-note">
          <span>{copy.textIndividualidade}</span>
          <span>{media.hero.caption}</span>
        </div>
      </div>
      <div className="container hero-bottom">
        <Link href="#filosofia">
          <span className="scroll-indicator">
            <ArrowDown size={13} />
          </span>{" "}
          {copy.exploreOutraPerspectiva}
        </Link>
        {clinic.showDemoBadge && (
          <span>{copy.conceitoDemonstrativoMarcaFicticia}</span>
        )}
        <span className="hero-index">{copy.scrollToDiscover}</span>
      </div>
    </section>
  );
}
