export type ConversionEvent =
  "booking_started" | "booking_demo_completed" | "concierge_opened";
// Local event only; deliberately excludes personal information and third-party tracking.
export function track(event: ConversionEvent) {
  if (typeof window !== "undefined")
    window.dispatchEvent(
      new CustomEvent("clinicsite:event", { detail: { event } }),
    );
}
