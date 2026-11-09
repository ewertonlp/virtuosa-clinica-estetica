import type { Clinic } from "@/types/clinic";
const name = "Virtuosa";
export const clinic: Clinic = {
  id: "virtuosa-mogi-das-cruzes",
  name,
  tagline: "CLÍNICA DE ESTÉTICA",
  description: `${name} Clínica de Estética, no Centro de Mogi das Cruzes. Conheça esta proposta de website e consulte os dados de contato da clínica.`,
  demo: true,
  showDemoBadge: true,
  contact: {
    phone: "+55 11 98581-9552",
    whatsapp: null,
    email: null,
    address:
      "R. Dr. Ricardo Vilela, 1380 — Centro, Mogi das Cruzes — SP, CEP 08780-060, Brasil",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Virtuosa%20Cl%C3%ADnica%20de%20Est%C3%A9tica&query_place_id=ChIJMwnwMf3ZzZQRlVkRnLePJyg",
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
