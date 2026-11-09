import { media } from "@/config/media";
import type { Procedure } from "@/types/clinic";
const faq = [
  {
    category: "Procedimentos",
    question: "Como saber se este cuidado é adequado para mim?",
    answer:
      "Somente uma avaliação individual com um profissional habilitado pode esclarecer indicação, alternativas e contraindicações. O site não faz recomendações clínicas.",
  },
  {
    category: "Procedimentos",
    question: "Posso agendar este procedimento pelo site?",
    answer:
      "Nesta demonstração, você pode simular uma solicitação de avaliação. Nenhum procedimento ou horário é reservado.",
  },
];
export const procedures: Procedure[] = [
  {
    slug: "cuidado-facial",
    name: "Cuidado facial",
    category: "Facial",
    description: "Um novo olhar para o cuidado com a sua pele.",
    image: media.hero,
    imagePosition: "80% 50%",
    intro:
      "Uma proposta de escuta e atenção à individualidade da pele. Esta categoria ilustra como os cuidados faciais poderão ser apresentados na clínica.",
    considerations:
      "Nenhuma técnica está sendo oferecida nesta demonstração. Indicações, contraindicações, possíveis reações e cuidados deverão ser descritos e aprovados pelo profissional responsável quando os serviços reais forem cadastrados.",
    faq,
  },
  {
    slug: "harmonia-corporal",
    name: "Harmonia corporal",
    category: "Corporal",
    description: "Respeito ao seu corpo, à sua essência e ao seu tempo.",
    image: media.philosophy,
    imagePosition: "50% 50%",
    intro:
      "Um espaço para conversar sobre expectativas e possibilidades de cuidado corporal, sempre a partir de uma avaliação profissional. Categoria ilustrativa do template.",
    considerations:
      "Não há procedimento corporal específico cadastrado ou resultado prometido. A descrição de técnicas, limitações, riscos e recuperação depende da verificação dos serviços da clínica e de revisão profissional.",
    faq,
  },
  {
    slug: "bem-estar-integral",
    name: "Bem-estar integral",
    category: "Bem-estar",
    description: "Uma pausa para se reconectar com o que importa.",
    image: media.gallery[0],
    imagePosition: "38% 50%",
    intro:
      "Acolhimento, presença e tempo para você. Uma categoria conceitual para apresentar a experiência de bem-estar que poderá fazer parte de uma clínica real.",
    considerations:
      "Esta experiência é fictícia e não representa serviço de saúde disponível. Atividades, equipe habilitada e orientações devem ser confirmadas antes da publicação comercial.",
    faq,
  },
];
