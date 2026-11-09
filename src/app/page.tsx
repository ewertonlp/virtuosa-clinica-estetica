import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Procedures } from "@/components/sections/procedures";
import { Experience } from "@/components/sections/experience";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";
import { BookingCTA } from "@/components/sections/booking-cta";
export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Procedures />
      <Experience />
      <Team />
      <FAQ />
      <BookingCTA />
    </>
  );
}
