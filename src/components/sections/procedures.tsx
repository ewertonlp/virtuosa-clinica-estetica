"use client";
import { content } from "@/config/content";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { procedures } from "@/data/procedures";
import { Reveal } from "@/components/motion/reveal";
const copy = content.procedures;

const categories = [
  copy.todosOsCuidados,
  ...new Set(procedures.map((procedure) => procedure.category)),
];
export function Procedures({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState(categories[0]);
  return (
    <section
      className={`section procedures-section ${full ? "pt-0" : ""}`}
      id="cuidados"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">{copy.umCuidadoParaCadaMomento}</p>
            <h2>
              {copy.suaEssencia}
              <br />
              <em>{copy.nossasPossibilidades}</em>
            </h2>
          </div>
          <div className="section-intro">
            <p>{copy.caminhosDeCuidadoQueComecamCom}</p>
            <span className="small-note">
              {copy.categoriasIlustrativasServicosAValidar}
            </span>
          </div>
        </Reveal>
        <div
          className="filter-row"
          role="group"
          aria-label={copy.filtrarCuidados}
        >
          {categories.map((category) => (
            <button
              key={category}
              aria-pressed={filter === category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="procedure-grid" aria-live="polite">
          {procedures
            .filter((p) => filter === categories[0] || p.category === filter)
            .map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/procedimentos/${p.slug}`}
                  className="procedure-card group"
                >
                  <div className="procedure-image">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(max-width: 767px) 90vw, 30vw"
                      style={{ objectPosition: p.imagePosition }}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="procedure-tag">{p.category}</span>
                    <span className="image-disclosure">{p.image.caption}</span>
                    <span className="circle-arrow">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                  <div className="procedure-title">
                    <h3>{p.name}</h3>
                    <span>
                      {copy.text}
                      {i + 1}
                    </span>
                  </div>
                  <p>{p.description}</p>
                  <span className="card-link">
                    {copy.conhecerOCuidado}
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
