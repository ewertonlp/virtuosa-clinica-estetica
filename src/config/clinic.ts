import type { Clinic } from "@/types/clinic";
const name = "Élara";
export const clinic: Clinic = {
  id: "elara-concept",
  name,
  tagline: "ESTÉTICA & BEM-ESTAR",
  description: `Um olhar sensível para a sua individualidade. Conheça o conceito ${name} de estética e bem-estar.`,
  demo: true,
  showDemoBadge: true,
  contact: {
    phone: null,
    whatsapp: null,
    email: null,
    address: null,
    mapUrl: null,
    instagram: null,
  },
  openingHours: [],
  team: [
    {
      slug: "responsavel-tecnico",
      name: "Responsável técnico",
      role: "Perfil a ser apresentado",
      biography:
        "Este espaço receberá o nome, a fotografia autorizada, a formação e os registros verificados do profissional responsável. Nenhum profissional real está vinculado a esta demonstração.",
      placeholder: true,
    },
    {
      slug: "equipe-de-cuidado",
      name: "Equipe de cuidado",
      role: "Perfil a ser apresentado",
      biography:
        "Um espaço dedicado aos profissionais que farão parte da clínica. Especialidades, qualificações e registros serão apresentados após verificação e autorização.",
      placeholder: true,
    },
  ],
};
