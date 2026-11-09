import { content } from "@/config/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const copy = content.notFound;

export default function NotFound() {
  return (
    <div className="container not-found">
      <p className="eyebrow">{copy.textUmPequenoDesvio}</p>
      <h1>
        {copy.vamosEncontrar}
        <br />
        <em>{copy.umNovoCaminho}</em>
      </h1>
      <p>{copy.aPaginaQueVoceProcuraNao}</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft /> {copy.voltarParaAElara}
        </Link>
      </Button>
    </div>
  );
}
