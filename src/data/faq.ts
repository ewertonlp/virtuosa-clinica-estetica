import { procedures } from "@/data/procedures";
import { clinic } from "@/config/clinic";
import type { FAQ } from "@/types/clinic";
const locationAnswer = clinic.contact.address
  ? `${clinic.contact.address}. ${clinic.openingHours.join(" · ") || "Horários a confirmar com a equipe."}`
  : `Endereço e horários da ${clinic.name} ainda não foram cadastrados nesta demonstração.`;
export const faqs: FAQ[] = [
  {
    category: "Primeiro encontro",
    question: "Como funciona a primeira avaliação?",
    answer: `Na proposta ${clinic.name}, o primeiro encontro é um momento de escuta para conhecer suas expectativas e esclarecer dúvidas com o profissional. O atendimento real, seu formato e valores serão definidos pela clínica. Aqui, você pode experimentar uma simulação de solicitação.`,
  },
  {
    category: "Agendamento",
    question: "Como posso solicitar um agendamento?",
    answer:
      "Clique em “Agendar avaliação”, escolha uma categoria de interesse, uma data e um período de preferência. Use dados fictícios na simulação. Ao concluir, você verá um resumo demonstrativo: nada será enviado e nenhum horário será reservado.",
  },
  {
    category: "Cuidados",
    question: "Qual cuidado é o mais indicado para mim?",
    answer:
      "Essa orientação depende de uma avaliação individual por um profissional habilitado. O concierge e o site apresentam apenas informações sobre a experiência, sem diagnósticos, prescrições ou recomendações personalizadas.",
  },
  {
    category: "A clínica",
    question: `Onde fica a ${clinic.name} e quais são os horários?`,
    answer: locationAnswer,
  },
  {
    category: "Privacidade",
    question: "Meus dados são enviados nesta demonstração?",
    answer:
      "Não. Os formulários funcionam somente na memória desta página. Não usamos banco de dados, cookies de análise ou APIs de atendimento. Use apenas dados fictícios; as informações são descartadas ao sair ou recarregar a página.",
  },
];
export const conciergeQuestions = [
  {
    id: "services",
    label: "Quero conhecer os cuidados",
    answer: `Conheça os cuidados apresentados nesta proposta: ${procedures.map((procedure) => procedure.name).join(", ")}. As informações devem ser validadas pela clínica antes da publicação comercial.`,
    href: "/procedimentos",
    action: "Explorar cuidados",
  },
  {
    id: "booking",
    label: "Como agendar uma avaliação?",
    answer:
      "Vamos começar pelo que você procura? A simulação tem quatro etapas rápidas. Você escolhe suas preferências e revisa tudo ao final. Nenhum agendamento real é realizado.",
    href: "/agendamento",
    action: "Simular avaliação",
  },
  {
    id: "location",
    label: "Localização e horários",
    answer: locationAnswer,
    href: "/contato",
    action: "Ver informações de contato",
  },
  {
    id: "human",
    label: "Quero falar com a equipe",
    answer: clinic.contact.whatsapp
      ? "O WhatsApp informado pela clínica está disponível na página de contato. O formulário deste site permanece demonstrativo e não envia mensagens."
      : "O WhatsApp oficial ainda não foi informado. Por enquanto, você pode testar o formulário de contato. A simulação não envia mensagens.",
    href: "/contato",
    action: "Abrir contato demonstrativo",
  },
  {
    id: "clinical",
    label: "Tenho uma dúvida clínica",
    answer:
      "Questões sobre sintomas, medicamentos, riscos ou indicação de procedimentos precisam ser avaliadas por um profissional habilitado. Não consigo diagnosticar ou recomendar tratamentos.",
    href: "/agendamento",
    action: "Conhecer o fluxo de avaliação",
  },
];
