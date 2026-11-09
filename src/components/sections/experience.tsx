"use client";
import { content } from "@/config/content";

import Image from "next/image";
import { media } from "@/config/media";
import { Expand, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/motion/reveal";
const copy = content.experience;

const images = media.gallery;
export function Experience() {
  const [active, setActive] = useState(0);
  const image = images[active];
  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <Reveal className="experience-header">
          <p className="eyebrow">{copy.aExperienciaElara}</p>
          <h2>
            {copy.oCuidadoComeca}
            <br />
            <em>{copy.antesDoPrimeiroEncontro}</em>
          </h2>
          <p>
            {copy.nosDetalhesNaAtmosferaNoTempo}
            <br />
            {copy.conhecaAInspiracaoPorTrasDo}
          </p>
        </Reveal>
        <Reveal className="experience-gallery">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="gallery-open"
                aria-label={`Ampliar: ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
                <span className="gallery-overlay">
                  <span>
                    {image.title}
                    <small>{image.caption}</small>
                  </span>
                  <span className="expand-icon">
                    <Expand size={20} />
                  </span>
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl">
              <DialogTitle className="font-serif text-3xl">
                {image.title}
              </DialogTitle>
              <DialogDescription className="mb-4 mt-2 text-xs text-muted">
                {image.caption}
              </DialogDescription>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="max-h-[65dvh] w-full object-contain"
              />
            </DialogContent>
          </Dialog>
        </Reveal>
        <div className="gallery-controls">
          <span>{copy.umaVisaoConceitualDeAcolhimento}</span>
          <div>
            <button
              onClick={() =>
                setActive((active + images.length - 1) % images.length)
              }
              aria-label={copy.imagemAnterior}
            >
              <ArrowLeft size={18} />
            </button>
            <span>
              {String(active + 1).padStart(2, "0")}{" "}
              <span className="opacity-45">
                / {String(images.length).padStart(2, "0")}
              </span>
            </span>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              aria-label={copy.proximaImagem}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
