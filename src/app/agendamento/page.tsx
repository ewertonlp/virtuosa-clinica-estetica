import { content } from "@/config/content";
import type { Metadata } from "next";
import Image from "next/image";
import { media } from "@/config/media";
import { BookingForm } from "@/components/booking/booking-form";
const copy = content.bookingPage;

export const metadata: Metadata = {
  title: copy.agendeSeuPrimeiroEncontro,
  description: copy.experimenteOAgendamentoDemonstrativoElaraEm,
};
export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ servico?: string }>;
}) {
  const { servico } = await searchParams;
  return (
    <div className="container booking-page">
      <div className="booking-aside">
        <p className="eyebrow">{copy.seuPrimeiroEncontro}</p>
        <h1>
          {copy.umTempo}
          <br />
          {copy.paraCuidar}
          <br />
          <em>{copy.deVoce}</em>
        </h1>
        <p>
          {copy.comeceComUmaEscolha}
          <br />
          {copy.oProximoPassoAconteceNoSeu}
        </p>
        <div className="booking-aside-image">
          <Image
            src={media.booking.src}
            alt={media.booking.alt}
            fill
            sizes="(max-width: 767px) 90vw, 35vw"
            className="object-cover"
          />
          <span className="image-disclosure">{media.booking.caption}</span>
        </div>
      </div>
      <BookingForm initialService={servico} />
    </div>
  );
}
