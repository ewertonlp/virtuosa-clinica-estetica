import { test } from "node:test";
import assert from "node:assert/strict";
import { bookingSchema, localDateString } from "../src/lib/validations/booking";
import { demoBookingAdapter } from "../src/lib/integrations/booking";
import { procedures } from "../src/data/procedures";
const valid = {
  service: "avaliacao" as const,
  date: "2099-12-10",
  period: "manha" as const,
  name: "Maria Exemplo",
  phone: "(11) 90000-0000",
  email: "",
  consent: true,
};
test("accepts demonstration request with optional email omitted", () => {
  assert.equal(bookingSchema.safeParse(valid).success, true);
});
test("rejects past and impossible dates", () => {
  for (const date of ["2020-01-01", "2099-02-30", "2099-13-15", "garbage", ""])
    assert.equal(
      bookingSchema.safeParse({ ...valid, date }).success,
      false,
      date,
    );
});
test("accepts today as a preference without asserting availability", () => {
  assert.equal(
    bookingSchema.safeParse({ ...valid, date: localDateString() }).success,
    true,
  );
});
test("rejects invalid contact fields, unknown categories and missing acknowledgement", () => {
  for (const patch of [
    { phone: "123" },
    { email: "bad" },
    { name: "  " },
    { service: "cirurgia" },
    { period: "noite" },
    { consent: false },
  ])
    assert.equal(
      bookingSchema.safeParse({ ...valid, ...patch }).success,
      false,
    );
});
test("all configured procedure slugs can enter booking", () => {
  for (const p of procedures)
    assert.equal(
      bookingSchema.safeParse({ ...valid, service: p.slug }).success,
      true,
    );
});
test("demo adapter never reports real delivery or a booked appointment", async () => {
  const result = await demoBookingAdapter.submit(valid);
  assert.equal(result.status, "demo");
  assert.match(result.message, /Nenhum dado foi enviado/);
  assert.match(result.message, /nenhum horário foi reservado/);
});
