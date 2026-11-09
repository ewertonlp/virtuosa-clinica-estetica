"use client";
import { content } from "@/config/content";

import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
const copy = content.errorPage;

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container not-found">
      <p className="eyebrow">{copy.vamosTentarNovamente}</p>
      <h1>
        {copy.umaPequenaPausa}
        <br />
        <em>{copy.noCaminho}</em>
      </h1>
      <p>{copy.naoFoiPossivelCarregarEstaPagina}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={reset}>
          <RotateCcw /> {copy.tentarNovamente}
        </Button>
        <Button asChild variant="outline">
          <Link href="/">{copy.voltarAoInicio}</Link>
        </Button>
      </div>
    </div>
  );
}
