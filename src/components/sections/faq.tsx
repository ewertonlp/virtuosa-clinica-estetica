import { content } from "@/config/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import type { FAQ as FAQType } from "@/types/clinic";
import { Reveal } from "@/components/motion/reveal";
const copy = content.faq;

export function FAQ({ items = faqs }: { items?: FAQType[] }) {
  return (
    <section className="section faq-section on-dark" id="duvidas">
      <div className="container faq-grid">
        <Reveal>
          <p className="eyebrow on-dark">{copy.podemosAjudar}</p>
          <h2>
            {copy.clarezaTambem}
            <br />
            <em>{copy.eCuidado}</em>
          </h2>
          <p className="section-description">
            {copy.respostasParaVoceDarOProximo}
            <br />
            {copy.comTranquilidade}
          </p>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible>
            {items.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger>
                  <span>
                    <small className="faq-category">{item.category}</small>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
