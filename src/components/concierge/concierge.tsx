"use client";
import { content } from "@/config/content";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles, RotateCcw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { conciergeQuestions } from "@/data/faq";
import { track } from "@/lib/analytics";
import { clinic } from "@/config/clinic";
const copy = content.concierge;

export function Concierge() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const answer = conciergeQuestions.find((q) => q.id === selected);
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (value) track("concierge_opened");
        }}
      >
        <DialogTrigger asChild>
          <button
            className="concierge-trigger"
            aria-label={copy.abrirConciergeElara}
          >
            <MessageCircle size={20} strokeWidth={1.5} />
            <span>{copy.podemosAjudar}</span>
            <span className="concierge-dot" />
          </button>
        </DialogTrigger>
        <DialogContent className="concierge-panel on-dark">
          <div className="concierge-heading">
            <span className="concierge-symbol">
              <Sparkles size={24} strokeWidth={1} />
            </span>
            <div>
              <DialogTitle className="font-serif text-3xl">
                {copy.conciergeElara}
              </DialogTitle>
              <DialogDescription className="mt-1 text-xs text-muted">
                {copy.umPrimeiroAcolhimentoAssistenteDemonstrativo}
              </DialogDescription>
            </div>
          </div>
          <div className="concierge-welcome">
            {copy.olaQueBomTerVoceAqui}
            <br />
            {copy.comoPossoAjudarNoSeuProximo}
          </div>
          {answer ? (
            <div aria-live="polite">
              <div className="chat-question">{answer.label}</div>
              <div className="chat-answer">{answer.answer}</div>
              <Button asChild className="mt-4 w-full">
                <Link href={answer.href} onClick={() => setOpen(false)}>
                  {answer.action} <ArrowUpRight />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="mt-3 w-full"
                onClick={() => setSelected(null)}
              >
                <RotateCcw /> {copy.fazerOutraPergunta}
              </Button>
            </div>
          ) : (
            <div className="concierge-options">
              {conciergeQuestions.map((q) => (
                <button key={q.id} onClick={() => setSelected(q.id)}>
                  {q.label}
                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          )}
          <p className="concierge-disclaimer">
            {copy.respostasGuiadasSemIaOuAtendimento}
          </p>
        </DialogContent>
      </Dialog>
      {clinic.contact.whatsapp && (
        <a
          className="whatsapp-link"
          href={`https://wa.me/${clinic.contact.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.whatsappOficial}
          <ArrowUpRight size={15} />
        </a>
      )}
      <Link href="/agendamento" className="mobile-booking-bar">
        {copy.agendarMinhaAvaliacao}
        <ArrowUpRight size={17} />
      </Link>
    </>
  );
}
