import type { MetadataRoute } from "next";
import { procedures } from "@/data/procedures";
import { clinic } from "@/config/clinic";
export default function sitemap(): MetadataRoute.Sitemap {
  if (clinic.demo) return [];
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    "",
    "/sobre",
    "/procedimentos",
    "/contato",
    "/agendamento",
    "/politica-de-privacidade",
    ...procedures.map((p) => `/procedimentos/${p.slug}`),
    ...clinic.team.map((p) => `/equipe/${p.slug}`),
  ].map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
