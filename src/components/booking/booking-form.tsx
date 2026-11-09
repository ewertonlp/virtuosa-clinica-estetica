"use client";
import { content } from "@/config/content";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  bookingSchema,
  localDateString,
  type BookingValues,
} from "@/lib/validations/booking";
import { demoBookingAdapter } from "@/lib/integrations/booking";
import { procedures } from "@/data/procedures";
import { track } from "@/lib/analytics";
const copy = content.booking;

const steps = [copy.seuCuidado, copy.seuTempo, copy.sobreVoce, copy.revisao];
const services = [
  {
    slug: "avaliacao",
    name: copy.primeiraAvaliacao,
    description: copy.umPrimeiroEncontroParaEscutarVoce,
  },
  ...procedures,
];
export function BookingForm({ initialService }: { initialService?: string }) {
  const validService = services.find((s) => s.slug === initialService)?.slug as
    BookingValues["service"] | undefined;
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: validService ?? "avaliacao",
      date: "",
      name: "",
      phone: "",
      email: "",
      consent: false,
    },
    shouldFocusError: true,
  });
  useEffect(() => {
    if (step > 0) heading.current?.focus({ preventScroll: true });
  }, [step]);
  const move = (value: number) => {
    setStep(value);
  };
  const next = async () => {
    const fields: (keyof BookingValues)[][] = [
      ["service"],
      ["date", "period"],
      ["name", "phone", "email", "consent"],
    ];
    if (await trigger(fields[step], { shouldFocus: true })) {
      if (step === 0) track("booking_started");
      move(step + 1);
    }
  };
  const submit = handleSubmit(async (values) => {
    setSubmitError("");
    try {
      await demoBookingAdapter.submit(values);
      track("booking_demo_completed");
      setDone(true);
      reset();
    } catch {
      setSubmitError(copy.naoFoiPossivelConcluirASimulacao);
    }
  });
  if (done)
    return (
      <div className="booking-success" role="status">
        <CheckCircle2 size={48} strokeWidth={1} />
        <p className="eyebrow">{copy.experienciaConcluida}</p>
        <h2>
          {copy.umPrimeiroPasso}
          <br />
          <em>{copy.noSeuTempo}</em>
        </h2>
        <p>{copy.suaSimulacaoFoiConcluida}</p>
        <div className="notice">{copy.nenhumDadoFoiEnviadoENenhum}</div>
        <Button
          onClick={() => {
            setDone(false);
            move(0);
          }}
        >
          {copy.fazerUmaNovaSimulacao}
          <ArrowRight />
        </Button>
        <Link href="/" className="text-link">
          {copy.voltarAoInicio}
        </Link>
      </div>
    );
  const values = getValues();
  return (
    <div className="booking-form">
      <ol className="booking-steps" aria-label={copy.etapasDoAgendamento}>
        {steps.map((label, i) => (
          <li
            key={label}
            aria-current={step === i ? "step" : undefined}
            className={i <= step ? "active" : ""}
          >
            <span>{i < step ? <Check size={14} /> : i + 1}</span>
            <small>{label}</small>
          </li>
        ))}
      </ol>
      <div className="notice mb-7">
        <ShieldCheck size={18} />
        <span>{copy.modoDemonstracaoUseDadosFicticiosNada}</span>
      </div>
      <h2 ref={heading} tabIndex={-1} className="form-heading">
        {
          [
            copy.comoPodemosCuidarDeVoce,
            copy.qualEOMelhorMomento,
            copy.comoPodemosChamarVoce,
            copy.tudoDoSeuJeito,
          ][step]
        }
      </h2>
      <p className="form-subtitle">
        {
          [
            copy.selecioneUmaCategoriaParaExplorarA,
            copy.escolhaUmaPreferenciaEstaNaoE,
            copy.soOEssencialParaExperimentarO,
            copy.confiraSuasPreferenciasAntesDeConcluir,
          ][step]
        }
      </p>
      <form
        onSubmit={(event) => {
          if (step < 3) {
            event.preventDefault();
            void next();
          } else {
            void submit(event);
          }
        }}
        noValidate
      >
        {step === 0 && (
          <fieldset>
            <legend className="sr-only">{copy.selecioneOServico}</legend>
            <div className="service-options">
              {services.map((service) => (
                <label className="service-option" key={service.slug}>
                  <input
                    type="radio"
                    value={service.slug}
                    {...register("service")}
                  />
                  <span>
                    <strong>{service.name}</strong>
                    <small>{service.description}</small>
                  </span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="field-error" role="alert">
                {errors.service.message}
              </p>
            )}
          </fieldset>
        )}
        {step === 1 && (
          <div className="form-fields">
            <div>
              <label htmlFor="date">{copy.dataDePreferencia}</label>
              <input
                id="date"
                type="date"
                min={localDateString()}
                {...register("date")}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? "date-error" : undefined}
              />
              {errors.date && (
                <p id="date-error" className="field-error" role="alert">
                  {errors.date.message}
                </p>
              )}
            </div>
            <fieldset>
              <legend>{copy.periodoDePreferencia}</legend>
              <div className="period-options">
                {[
                  { value: "manha", label: copy.manha, time: copy.antesDas12h },
                  { value: "tarde", label: "Tarde", time: copy.aposAs12h },
                ].map((period) => (
                  <label className="service-option" key={period.value}>
                    <input
                      type="radio"
                      value={period.value}
                      {...register("period")}
                    />
                    <span>
                      <strong>{period.label}</strong>
                      <small>{period.time}</small>
                    </span>
                  </label>
                ))}
              </div>
              {errors.period && (
                <p className="field-error" role="alert">
                  {errors.period.message}
                </p>
              )}
            </fieldset>
            <p className="small-note">
              {copy.preferenciasIlustrativasSujeitasAConfirmacaoEm}
            </p>
          </div>
        )}
        {step === 2 && (
          <div className="form-fields">
            <div>
              <label htmlFor="name">{copy.nomeFicticio}</label>
              <input
                id="name"
                placeholder={copy.exMariaExemplo}
                autoComplete="off"
                maxLength={80}
                {...register("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="field-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone">{copy.telefoneFicticioComDdd}</label>
              <input
                id="phone"
                type="tel"
                placeholder={copy.text}
                autoComplete="off"
                {...register("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="field-error" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email">
                {copy.eMailFicticio}
                <span className="text-muted">{copy.opcional}</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder={copy.nomeExampleCom}
                autoComplete="off"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="field-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <label className="checkbox-label">
              <input type="checkbox" {...register("consent")} />
              <span>
                {copy.estouUsandoDadosFicticiosEEntendo}{" "}
                <Link
                  href="/politica-de-privacidade"
                  target="_blank"
                  className="underline"
                >
                  {copy.conhecerAPrivacidade}
                </Link>
                {copy.text2}
              </span>
            </label>
            {errors.consent && (
              <p className="field-error" role="alert">
                {errors.consent.message}
              </p>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="review">
            <dl>
              {[
                [
                  "Cuidado",
                  services.find((s) => s.slug === values.service)?.name,
                ],
                [
                  copy.dataDePreferencia,
                  values.date
                    ? new Date(`${values.date}T12:00:00`).toLocaleDateString(
                        "pt-BR",
                      )
                    : "",
                ],
                [
                  copy.periodo,
                  values.period === "manha" ? copy.manha : "Tarde",
                ],
                ["Nome", values.name],
                ["Telefone", values.phone],
                ["E-mail", values.email || copy.naoInformado],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="small-note mt-5">
              {copy.aoConcluirVoceVeraApenasUma}
            </p>
          </div>
        )}
        {submitError && (
          <p className="field-error" role="alert">
            {submitError}
          </p>
        )}
        <div className="form-actions">
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={() => move(step - 1)}
              disabled={isSubmitting}
            >
              <ArrowLeft /> {copy.voltar}
            </Button>
          ) : (
            <span className="small-note">{copy.etapa1De4}</span>
          )}
          {step < 3 ? (
            <Button type="button" onClick={next}>
              {copy.continuar}
              <ArrowRight />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? copy.concluindo : copy.concluirSimulacao}
              <Check size={16} />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
