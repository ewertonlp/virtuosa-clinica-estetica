"use client";
import { content } from "@/config/content";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock3,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clinic } from "@/config/clinic";
import { Button } from "@/components/ui/button";
const copy = content.contact;

const schema = z.object({
  name: z.string().trim().min(3, copy.informeUmNomeFicticioComPelo),
  email: z.email(copy.informeUmEMailValido),
  subject: z.enum(["atendimento", "agendamento", "informacoes"]),
  consent: z.boolean().refine((v) => v, copy.confirmeOUsoDeDadosFicticios),
});
export function Contact() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { subject: "informacoes", consent: false },
  });
  return (
    <section className="section pt-0">
      <div className="container contact-grid">
        <div>
          <div className="contact-item">
            <MapPin size={22} strokeWidth={1.2} />
            <div>
              <h3>{copy.nossoEndereco}</h3>
              <p>{clinic.contact.address ?? copy.umNovoEnderecoDeCuidadoEm}</p>
              {clinic.contact.mapUrl ? (
                <a
                  className="text-link"
                  href={clinic.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.obterDirecoes}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <small>{copy.enderecoRealAindaNaoCadastrado}</small>
              )}
            </div>
          </div>
          <div className="contact-item">
            <Clock3 size={22} strokeWidth={1.2} />
            <div>
              <h3>{copy.tempoParaVoce}</h3>
              <p>
                {clinic.openingHours.length
                  ? clinic.openingHours.join(copy.text)
                  : copy.horariosDeAtendimentoAConfirmar}
              </p>
              <small>{copy.estaDemonstracaoNaoPossuiUmaAgenda}</small>
            </div>
          </div>
          <div className="contact-item">
            <MessageCircle size={22} strokeWidth={1.2} />
            <div>
              <h3>{copy.umaConversaAcolhedora}</h3>
              {clinic.contact.whatsapp ? (
                <a
                  className="text-link"
                  href={`https://wa.me/${clinic.contact.whatsapp.replace(/\D/g, "")}`}
                >
                  {copy.conversarNoWhatsapp}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <p>{copy.whatsappOficialAindaNaoCadastrado}</p>
              )}
              {clinic.contact.phone && (
                <a href={`tel:${clinic.contact.phone}`}>
                  {clinic.contact.phone}
                </a>
              )}
              {clinic.contact.email && (
                <a href={`mailto:${clinic.contact.email}`}>
                  {clinic.contact.email}
                </a>
              )}
              {clinic.contact.instagram && (
                <a
                  href={clinic.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.instagramOficial}
                </a>
              )}
              <small>{copy.vocePodeExplorarOConciergeDemonstrativo}</small>
            </div>
          </div>
          <div className="location-concept on-dark">
            <MapPin size={32} strokeWidth={1} />
            <span>{copy.seuLugarDeCuidado}</span>
            <p>
              {copy.oMapaSeraApresentadoQuandoHouver}
              <br />
              {copy.umEnderecoVerificado}
            </p>
          </div>
        </div>
        <div className="contact-form-panel on-grid">
          {done ? (
            <div className="booking-success" role="status">
              <CheckCircle2 size={40} strokeWidth={1} />
              <h2>{copy.simulacaoConcluida}</h2>
              <p>{copy.nenhumaMensagemFoiEnviadaNenhumDado}</p>
              <Button
                onClick={() => {
                  reset();
                  setDone(false);
                }}
              >
                {copy.testarNovamente}
              </Button>
            </div>
          ) : (
            <>
              <p className="eyebrow on-dark">{copy.vamosConversar}</p>
              <h2>
                {copy.oPrimeiroPasso}
                <br />
                <em className="on-dark">{copy.eUmaConversa}</em>
              </h2>
              <p className="form-subtitle">
                {copy.formularioDemonstrativoUseSomenteDadosFicticios}
              </p>
              <form
                className="form-fields on-dark"
                noValidate
                onSubmit={handleSubmit(() => {
                  setDone(true);
                  reset();
                })}
              >
                <div>
                  <label htmlFor="contact-name">{copy.nomeFicticio}</label>
                  <input
                    id="contact-name"
                    {...register("name")}
                    autoComplete="off"
                    placeholder={copy.mariaExemplo}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p role="alert" className="field-error">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email">{copy.eMailFicticio}</label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    autoComplete="off"
                    placeholder={copy.nomeExampleCom}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p role="alert" className="field-error">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject">{copy.comoPodemosAjudar}</label>
                  <select id="subject" {...register("subject")}>
                    <option value="informacoes">
                      {copy.informacoesSobreAClinica}
                    </option>
                    <option value="atendimento">
                      {copy.conhecerOAtendimento}
                    </option>
                    <option value="agendamento">
                      {copy.duvidasSobreAgendamento}
                    </option>
                  </select>
                </div>
                <label className="checkbox-label">
                  <input type="checkbox" {...register("consent")} />
                  <span>
                    {copy.confirmoOUsoDeDadosFicticios}{" "}
                    <Link href="/politica-de-privacidade" className="underline">
                      {copy.informacoesDePrivacidade}
                    </Link>
                    {copy.text2}
                  </span>
                </label>
                {errors.consent && (
                  <p role="alert" className="field-error">
                    {errors.consent.message}
                  </p>
                )}
                <Button type="submit">
                  {copy.simularContato}
                  <ArrowUpRight />
                </Button>
                <p className="small-note">
                  {copy.naoIncluaInformacoesDeSaudeEsta}
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
