import type { MediaConfig, SiteImage } from "@/types/media";

const portrait: SiteImage = {
  src: "/images/hero-v2.webp",
  alt: "Retrato editorial de uma mulher com iluminação cinematográfica. Imagem ilustrativa gerada por IA.",
  width: 1672,
  height: 941,
  caption: "Imagem ilustrativa · IA",
};
const sculpture: SiteImage = {
  src: "/images/sculpture-v2.webp",
  alt: "Escultura abstrata de metal fluido. Composição artística ilustrativa gerada por IA.",
  width: 1122,
  height: 1402,
  caption: "Composição artística · IA",
};
const interior: SiteImage = {
  src: "/images/interior-v2.webp",
  alt: "Arquitetura conceitual com pedra escura, metal e luz natural. Imagem gerada por IA, não representa uma clínica real.",
  width: 1672,
  height: 941,
  caption: "Ambiente conceitual · gerado por IA",
};

/** Local assets only. Replace files, descriptions, dimensions and credits together. */
export const media: MediaConfig = {
  brand: { logo: null, favicon: "/brand/icon.svg" },
  hero: portrait,
  philosophy: sculpture,
  booking: sculpture,
  social: interior,
  gallery: [
    { ...interior, title: "Um espaço para desacelerar" },
    { ...sculpture, title: "A beleza dos pequenos detalhes" },
  ],
};
