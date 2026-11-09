import { clinic } from "./clinic";
export type NavigationLink = { href: `/${string}`; label: string };
export const navigation: NavigationLink[] = [
  { href: "/sobre", label: `A ${clinic.name}` },
  { href: "/procedimentos", label: "Cuidados" },
  { href: "/#experiencia", label: "A experiência" },
  { href: "/#equipe", label: "Nossa equipe" },
  { href: "/contato", label: "Contato" },
];
