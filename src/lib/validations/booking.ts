import { z } from "zod";
import { procedures } from "@/data/procedures";
export function localDateString(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export const bookingSchema = z.object({
  service: z
    .string()
    .refine(
      (value) =>
        value === "avaliacao" ||
        procedures.some((procedure) => procedure.slug === value),
      "Escolha um cuidado para continuar.",
    ),
  date: z
    .string()
    .refine(
      (value) =>
        /^\d{4}-\d{2}-\d{2}$/.test(value) &&
        !Number.isNaN(Date.parse(value)) &&
        new Date(`${value}T12:00:00`).getDate() === Number(value.slice(8)) &&
        value >= localDateString(),
      "Escolha uma data válida a partir de hoje.",
    ),
  period: z.enum(["manha", "tarde"], { error: "Selecione um período." }),
  name: z
    .string()
    .trim()
    .min(3, "Informe um nome com pelo menos 3 caracteres.")
    .max(80, "Use até 80 caracteres."),
  phone: z
    .string()
    .refine(
      (value) => /^\d{10,11}$/.test(value.replace(/\D/g, "")),
      "Informe um telefone com DDD (10 ou 11 dígitos).",
    ),
  email: z.union([z.literal(""), z.email("Informe um e-mail válido.")]),
  consent: z
    .boolean()
    .refine((value) => value, "Confirme que está usando dados fictícios."),
});
export type BookingValues = z.infer<typeof bookingSchema>;
