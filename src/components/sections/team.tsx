import { content } from "@/config/content";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Reveal } from "@/components/motion/reveal";
const copy = content.team;

export function Team() {
  return (
    <section className="section" id="equipe">
      <div className="container team-grid">
        <Reveal>
          <p className="eyebrow">{copy.pessoasQueCuidamDePessoas}</p>
          <h2>
            {copy.presencaEscuta}
            <br />
            <em>{copy.eConexao}</em>
          </h2>
          <p className="section-description">
            {copy.porTrasDeCadaCuidadoExiste}
          </p>
          <span className="small-note">
            {copy.equipeDemonstrativaPerfisAindaNaoCadastrados}
          </span>
        </Reveal>
        <div className="team-profiles">
          {clinic.team.map((person) => (
            <Reveal key={person.slug}>
              <Link href={`/equipe/${person.slug}`} className="team-card">
                <div className="team-avatar">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={90}
                      height={110}
                    />
                  ) : (
                    <UserRound strokeWidth={0.8} size={40} />
                  )}
                </div>
                <div>
                  <p className="eyebrow">
                    {person.placeholder
                      ? copy.espacoParaPerfilReal
                      : person.role}
                  </p>
                  <h3>{person.name}</h3>
                  <span>{person.role}</span>
                  {person.crm && (
                    <small>
                      {copy.crm}
                      {person.crm} {person.rqe ? `· RQE ${person.rqe}` : ""}
                    </small>
                  )}
                </div>
                <ArrowUpRight className="ml-auto shrink-0" size={20} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
