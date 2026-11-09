import { content } from "@/config/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
const copy = content.navigation;

export function PageIntro({
  eyebrow,
  title,
  italic,
  description,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
}) {
  return (
    <div className="container page-intro">
      <Link className="back-link" href="/">
        <ArrowLeft size={14} /> {copy.inicio}
      </Link>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {italic && (
            <>
              <br />
              <em>{italic}</em>
            </>
          )}
        </h1>
        <p>{description}</p>
      </Reveal>
    </div>
  );
}
