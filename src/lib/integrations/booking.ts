import type { BookingValues } from "@/lib/validations/booking";
export type BookingResult = { status: "demo"; message: string };
export interface BookingAdapter {
  submit: (request: BookingValues) => Promise<BookingResult>;
}
export const demoBookingAdapter: BookingAdapter = {
  async submit() {
    return {
      status: "demo",
      message:
        "Simulação concluída. Nenhum dado foi enviado e nenhum horário foi reservado.",
    };
  },
};
