import { clinic } from "./clinic";

/** Brand references follow clinic.name automatically. Plain text only; never HTML. */
function brand(value: string): string {
  return value
    .replaceAll("{{nameUpper}}", clinic.name.toUpperCase())
    .replaceAll("{{nameLower}}", clinic.name.toLowerCase())
    .replaceAll("{{name}}", clinic.name);
}

/** Edit the text for each page/section here. Layout and line breaks stay in the components. */
export const content = {
  bookingPage: {
    agendeSeuPrimeiroEncontro: "Agende seu primeiro encontro",
    experimenteOAgendamentoDemonstrativoElaraEm: brand(
      "Experimente o agendamento demonstrativo {{name}} em quatro etapas. Nenhum dado é enviado ou horário reservado.",
    ),
    seuPrimeiroEncontro: "SEU PRIMEIRO ENCONTRO",
    umTempo: "Um tempo",
    paraCuidar: "para cuidar",
    deVoce: "de você.",
    comeceComUmaEscolha: "Comece com uma escolha.",
    oProximoPassoAconteceNoSeu: "O próximo passo acontece no seu ritmo.",
  },
  contactPage: {
    vamosConversar: "Vamos conversar",
    exploreOsCanaisDeContatoDo: brand(
      "Explore os canais de contato do website conceitual {{name}}. Formulário demonstrativo sem envio de mensagens.",
    ),
    estamosPorAqui: "ESTAMOS POR AQUI",
    todaConexaoComeca: "Toda conexão começa",
    comUmOla: "com um olá.",
    umEspacoParaSuasPrimeirasPerguntas: brand(
      "Um espaço para suas primeiras perguntas. Experimente a proposta de contato da {{name}} nesta demonstração.",
    ),
  },
  professionalPage: {
    perfilNaoEncontrado: "Perfil não encontrado",
    nossaEquipe: " Nossa equipe",
    perfilDemonstrativo: "PERFIL DEMONSTRATIVO",
    nossaEquipe2: "NOSSA EQUIPE",
    crm: "CRM ",
    nomeFotografiaFormacaoERegistrosProfissionais:
      "Nome, fotografia, formação e registros profissionais pendentes de verificação. Nenhuma credencial foi inventada.",
  },
  errorPage: {
    vamosTentarNovamente: "VAMOS TENTAR NOVAMENTE",
    umaPequenaPausa: "Uma pequena pausa",
    noCaminho: "no caminho.",
    naoFoiPossivelCarregarEstaPagina:
      "Não foi possível carregar esta página. Você pode tentar novamente.",
    tentarNovamente: " Tentar novamente",
    voltarAoInicio: "Voltar ao início",
  },
  seo: {
    title: brand("{{name}} — Sua essência. Outra dimensão."),
    titleTemplate: brand("%s | {{name}}"),
    esteticaEquilibrioEUmCuidadoQue:
      "Estética, equilíbrio e um cuidado que respeita a sua essência. Website conceitual demonstrativo.",
    pularParaOConteudo: "Pular para o conteúdo",
  },
  notFound: {
    textUmPequenoDesvio: "404 · UM PEQUENO DESVIO",
    vamosEncontrar: "Vamos encontrar",
    umNovoCaminho: "um novo caminho?",
    aPaginaQueVoceProcuraNao: "A página que você procura não está por aqui.",
    voltarParaAElara: brand(" Voltar para a {{name}}"),
  },
  privacy: {
    privacidadeNaDemonstracao: "Privacidade na demonstração",
    clarezaERespeito: "CLAREZA E RESPEITO",
    seuCuidadoComeca: "Seu cuidado começa",
    comPrivacidade: "com privacidade.",
    estasInformacoesDescrevemOFuncionamentoDesta:
      "Estas informações descrevem o funcionamento desta demonstração conceitual, sem cadastro de pacientes ou atendimento real.",
    umaExperienciaDemonstrativa: "Uma experiência demonstrativa",
    elaraEUmaMarcaFicticiaOs: brand(
      "{{name}} é uma marca fictícia. Os formulários de agendamento e contato servem apenas para testar a navegação. Use somente nomes, telefones e e-mails fictícios. Não informe histórico médico, sintomas ou outras informações de saúde.",
    ),
    oQueAconteceComAsInformacoes: "O que acontece com as informações",
    osCamposPermanecemTemporariamenteNaMemoria:
      "Os campos permanecem temporariamente na memória do navegador. Não são enviados a um servidor, armazenados em banco de dados, cookies ou armazenamento local. Os dados do formulário são apagados ao concluir a simulação, sair da página ou recarregá-la.",
    conciergeENavegacao: "Concierge e navegação",
    oConciergeUtilizaPerguntasERespostas:
      "O concierge utiliza perguntas e respostas pré-definidas, sem modelo de IA, APIs externas ou armazenamento de conversa. Eventos de interação são emitidos apenas no navegador e não contêm dados pessoais. Não há ferramentas de analytics, publicidade ou cookies de rastreamento.",
    imagensFontesEInfraestrutura: "Imagens, fontes e infraestrutura",
    imagensIlustrativasEFontesSaoServidas:
      "Imagens ilustrativas e fontes são servidas pelo próprio projeto. Se este site for hospedado, o provedor de hospedagem poderá processar informações técnicas de acesso, como IP e logs. As condições do provedor deverão ser documentadas pelo responsável antes da publicação comercial.",
    antesDeUmAtendimentoReal: "Antes de um atendimento real",
    umaClinicaRealDeveraInformarO:
      "Uma clínica real deverá informar o controlador dos dados, canal de privacidade, finalidades, bases legais, prazos de retenção, compartilhamento e procedimentos para exercício de direitos. Essa política deverá ser revisada por responsáveis técnicos e jurídicos antes da ativação de qualquer coleta ou integração.",
    contato: "Contato",
    naoHaUmControladorClinicoNem:
      "Não há um controlador clínico nem canal real de atendimento cadastrado nesta demonstração. Esses dados serão preenchidos quando o template for personalizado para uma clínica verificada.",
  },
  proceduresPage: {
    nossosCuidados: "Nossos cuidados",
    exploreAsCategoriasIlustrativasDeCuidado: brand(
      "Explore as categorias ilustrativas de cuidado facial, corporal e bem-estar do conceito {{name}}.",
    ),
    possibilidadesDeCuidado: "POSSIBILIDADES DE CUIDADO",
    oSeuCuidado: "O seu cuidado.",
    aSuaEscolha: "A sua escolha.",
    exploreNossasCategoriasConceituaisOsProcedimentos:
      "Explore nossas categorias conceituais. Os procedimentos reais, suas indicações e seus riscos serão apresentados após a validação do profissional responsável.",
  },
  procedurePage: {
    cuidadoNaoEncontrado: "Cuidado não encontrado",
    todosOsCuidados: " Todos os cuidados",
    categoriaIlustrativa: " · CATEGORIA ILUSTRATIVA",
    umCuidadoComecaComInformacao: "Um cuidado começa com informação.",
    solicitarUmaAvaliacao: "Solicitar uma avaliação ",
    simulacaoSemEnvioDeDadosOu:
      "Simulação sem envio de dados ou confirmação de agenda.",
  },
  aboutPage: {
    nossaEssencia: "Nossa essência",
    conhecaAFilosofiaDeCuidadoDo: brand(
      "Conheça a filosofia de cuidado do conceito {{name}}. Marca fictícia demonstrativa.",
    ),
    aEssenciaElara: brand("A ESSÊNCIA {{nameUpper}}"),
    cadaPessoaUmaHistoria: "Cada pessoa, uma história.",
    cadaCuidadoUmEncontro: "Cada cuidado, um encontro.",
    umConceitoDeEsteticaQueValoriza: brand(
      "Um conceito de estética que valoriza a individualidade. A {{name}} é uma marca fictícia criada para apresentar uma nova experiência digital de cuidado.",
    ),
  },
  booking: {
    seuCuidado: "Seu cuidado",
    seuTempo: "Seu tempo",
    sobreVoce: "Sobre você",
    revisao: "Revisão",
    primeiraAvaliacao: "Primeira avaliação",
    umPrimeiroEncontroParaEscutarVoce:
      "Um primeiro encontro para escutar você.",
    naoFoiPossivelConcluirASimulacao:
      "Não foi possível concluir a simulação. Tente novamente.",
    experienciaConcluida: "EXPERIÊNCIA CONCLUÍDA",
    umPrimeiroPasso: "Um primeiro passo.",
    noSeuTempo: "No seu tempo.",
    suaSimulacaoFoiConcluida: "Sua simulação foi concluída.",
    nenhumDadoFoiEnviadoENenhum:
      "Nenhum dado foi enviado e nenhum horário foi reservado. Em uma clínica real, a equipe precisaria confirmar a solicitação.",
    fazerUmaNovaSimulacao: "Fazer uma nova simulação ",
    voltarAoInicio: "Voltar ao início",
    etapasDoAgendamento: "Etapas do agendamento",
    modoDemonstracaoUseDadosFicticiosNada:
      "Modo demonstração. Use dados fictícios. Nada será enviado.",
    comoPodemosCuidarDeVoce: "Como podemos cuidar de você?",
    qualEOMelhorMomento: "Qual é o melhor momento?",
    comoPodemosChamarVoce: "Como podemos chamar você?",
    tudoDoSeuJeito: "Tudo do seu jeito?",
    selecioneUmaCategoriaParaExplorarA:
      "Selecione uma categoria para explorar a experiência.",
    escolhaUmaPreferenciaEstaNaoE:
      "Escolha uma preferência. Esta não é uma agenda de disponibilidade.",
    soOEssencialParaExperimentarO:
      "Só o essencial para experimentar o próximo passo.",
    confiraSuasPreferenciasAntesDeConcluir:
      "Confira suas preferências antes de concluir a simulação.",
    selecioneOServico: "Selecione o serviço",
    dataDePreferencia: "Data de preferência",
    periodoDePreferencia: "Período de preferência",
    manha: "Manhã",
    antesDas12h: "Antes das 12h",
    aposAs12h: "Após as 12h",
    preferenciasIlustrativasSujeitasAConfirmacaoEm:
      "Preferências ilustrativas, sujeitas à confirmação em um atendimento real.",
    nomeFicticio: "Nome fictício",
    exMariaExemplo: "Ex.: Maria Exemplo",
    telefoneFicticioComDdd: "Telefone fictício com DDD",
    text: "(11) 90000-0000",
    eMailFicticio: "E-mail fictício ",
    opcional: "(opcional)",
    nomeExampleCom: "nome@example.com",
    estouUsandoDadosFicticiosEEntendo:
      "Estou usando dados fictícios e entendo que esta é uma simulação.",
    conhecerAPrivacidade: "Conhecer a privacidade",
    text2: ".",
    periodo: "Período",
    naoInformado: "Não informado",
    aoConcluirVoceVeraApenasUma:
      "Ao concluir, você verá apenas uma confirmação da simulação. As informações serão descartadas.",
    voltar: " Voltar",
    etapa1De4: "Etapa 1 de 4",
    continuar: "Continuar ",
    concluindo: "Concluindo…",
    concluirSimulacao: "Concluir simulação",
  },
  concierge: {
    abrirConciergeElara: brand("Abrir concierge {{name}}"),
    podemosAjudar: "Podemos ajudar?",
    conciergeElara: brand("Concierge {{name}}"),
    umPrimeiroAcolhimentoAssistenteDemonstrativo:
      "Um primeiro acolhimento · assistente demonstrativo",
    olaQueBomTerVoceAqui: "Olá, que bom ter você aqui.",
    comoPossoAjudarNoSeuProximo: "Como posso ajudar no seu próximo passo?",
    fazerOutraPergunta: " Fazer outra pergunta",
    respostasGuiadasSemIaOuAtendimento:
      "Respostas guiadas, sem IA ou atendimento humano. Não realiza avaliação clínica. Nenhuma conversa é armazenada.",
    whatsappOficial: "WhatsApp oficial ",
    agendarMinhaAvaliacao: "Agendar minha avaliação ",
  },
  footer: {
    suaEssenciaSeuTempo: "Sua essência. Seu tempo.",
    umCuidadoQueComecaEmVoce: "Um cuidado que começa em você.",
    explore: "EXPLORE",
    aElara: brand("A {{name}}"),
    nossosCuidados: "Nossos cuidados",
    aExperiencia: "A experiência",
    nossaEquipe: "Nossa equipe",
    estamosPorAqui: "ESTAMOS POR AQUI",
    agendarAvaliacao: "Agendar avaliação ",
    faleComAElara: brand("Fale com a {{name}}"),
    duvidasFrequentes: "Dúvidas frequentes",
    privacidade: "Privacidade",
    umConceitoDeCuidado: "UM CONCEITO DE CUIDADO",
    marcaEExperienciaFicticias: "Marca e experiência fictícias.",
    enderecoERegistrosProfissionais: "Endereço e registros profissionais",
    aguardamDadosVerificados: "aguardam dados verificados.",
    demonstracaoConceitual: "Demonstração conceitual",
    elara: brand("{{nameLower}}®"),
    text: "© ",
    elaraProjetoConceitual: brand(" {{name}} · Projeto conceitual"),
    imagensIlustrativasGeradasPorIaNao:
      "Imagens ilustrativas geradas por IA. Não representam pacientes ou instalações reais.",
    designQueAcolhe: "Design que acolhe.",
  },
  header: {
    text: "®",
    navegacaoPrincipal: "Navegação principal",
    agendarAvaliacao: "Agendar avaliação ",
    abrirMenu: "Abrir menu",
    exploreAElara: brand("Explore a {{name}}"),
    cuidadoEmCadaDetalhe: "Cuidado em cada detalhe.",
    menuMobile: "Menu mobile",
    agendarAvaliacao2: "Agendar avaliação",
  },
  navigation: {
    inicio: " Início",
  },
  bookingCta: {
    seuProximoMovimento: "[ SEU PRÓXIMO MOVIMENTO ]",
    reserveUmTempoParaVoce: "RESERVE UM TEMPO PARA VOCÊ.",
    oProximo: "O próximo",
    passoE: "passo é ",
    seu: "seu.",
    umaConversaPodeAbrir: "Uma conversa pode abrir",
    umaNovaPerspectiva: "uma nova perspectiva.",
    agendarMinhaAvaliacao: "Agendar minha avaliação ",
    agendamentoDemonstrativo: "Agendamento demonstrativo.",
    semEnvioDeDadosOuReserva: "Sem envio de dados ou reserva real.",
  },
  contact: {
    informeUmNomeFicticioComPelo:
      "Informe um nome fictício com pelo menos 3 caracteres.",
    informeUmEMailValido: "Informe um e-mail válido.",
    confirmeOUsoDeDadosFicticios: "Confirme o uso de dados fictícios.",
    nossoEndereco: "Nosso endereço",
    umNovoEnderecoDeCuidadoEm: "Um novo endereço de cuidado, em breve.",
    obterDirecoes: "Obter direções ",
    enderecoRealAindaNaoCadastrado: "Endereço real ainda não cadastrado.",
    tempoParaVoce: "Tempo para você",
    text: " · ",
    horariosDeAtendimentoAConfirmar: "Horários de atendimento a confirmar.",
    estaDemonstracaoNaoPossuiUmaAgenda:
      "Esta demonstração não possui uma agenda real.",
    umaConversaAcolhedora: "Uma conversa acolhedora",
    conversarNoWhatsapp: "Conversar no WhatsApp ",
    whatsappOficialAindaNaoCadastrado: "WhatsApp oficial ainda não cadastrado.",
    instagramOficial: "Instagram oficial",
    vocePodeExplorarOConciergeDemonstrativo:
      "Você pode explorar o concierge demonstrativo.",
    seuLugarDeCuidado: "Seu lugar de cuidado.",
    oMapaSeraApresentadoQuandoHouver: "O mapa será apresentado quando houver",
    umEnderecoVerificado: "um endereço verificado.",
    simulacaoConcluida: "Simulação concluída.",
    nenhumaMensagemFoiEnviadaNenhumDado:
      "Nenhuma mensagem foi enviada. Nenhum dado foi armazenado.",
    testarNovamente: "Testar novamente",
    vamosConversar: "VAMOS CONVERSAR",
    oPrimeiroPasso: "O primeiro passo",
    eUmaConversa: "é uma conversa.",
    formularioDemonstrativoUseSomenteDadosFicticios:
      "Formulário demonstrativo. Use somente dados fictícios.",
    nomeFicticio: "Nome fictício",
    mariaExemplo: "Maria Exemplo",
    eMailFicticio: "E-mail fictício",
    nomeExampleCom: "nome@example.com",
    comoPodemosAjudar: "Como podemos ajudar?",
    informacoesSobreAClinica: "Informações sobre a clínica",
    conhecerOAtendimento: "Conhecer o atendimento",
    duvidasSobreAgendamento: "Dúvidas sobre agendamento",
    confirmoOUsoDeDadosFicticios: "Confirmo o uso de dados fictícios. Li as",
    informacoesDePrivacidade: "informações de privacidade",
    text2: ".",
    simularContato: "Simular contato ",
    naoIncluaInformacoesDeSaudeEsta:
      "Não inclua informações de saúde. Esta simulação não envia mensagens.",
  },
  experience: {
    aExperienciaElara: brand("A EXPERIÊNCIA {{nameUpper}}"),
    oCuidadoComeca: "O cuidado começa",
    antesDoPrimeiroEncontro: "antes do primeiro encontro.",
    nosDetalhesNaAtmosferaNoTempo:
      "Nos detalhes, na atmosfera, no tempo dedicado a você.",
    conhecaAInspiracaoPorTrasDo:
      "Conheça a inspiração por trás do nosso espaço.",
    umaVisaoConceitualDeAcolhimento: "Uma visão conceitual de acolhimento.",
    imagemAnterior: "Imagem anterior",
    proximaImagem: "Próxima imagem",
  },
  faq: {
    podemosAjudar: "PODEMOS AJUDAR?",
    clarezaTambem: "Clareza também",
    eCuidado: "é cuidado.",
    respostasParaVoceDarOProximo: "Respostas para você dar o próximo passo",
    comTranquilidade: "com tranquilidade.",
  },
  hero: {
    headline: ["sua essência.", "outra", "dimensão."] as [
      string,
      string,
      string,
    ],
    esteticaIdentidadeEvolucao: " ESTÉTICA. IDENTIDADE. EVOLUÇÃO.",
    umNovoOlharElara: brand("UM NOVO OLHAR / {{nameUpper}}"),
    umNovoOlharSobreAEstetica: "Um novo olhar sobre a estética.",
    umCuidadoQueComecaEmQuem: "Um cuidado que começa em quem você é.",
    comeceASuaExperiencia: "Comece a sua experiência",
    explore: "EXPLORE",
    osCuidados: "OS CUIDADOS",
    textIndividualidade: "01 — INDIVIDUALIDADE",
    exploreOutraPerspectiva: "EXPLORE OUTRA PERSPECTIVA",
    conceitoDemonstrativoMarcaFicticia:
      "CONCEITO DEMONSTRATIVO · MARCA FICTÍCIA",
    scrollToDiscover: "SCROLL TO DISCOVER ↘",
  },
  philosophy: {
    suaEssenciaEOPontoDe:
      "Sua essência é o ponto de partida. O cuidado abre novas possibilidades.",
    textAEssencia: "[ 01 — A ESSÊNCIA ]",
    humanaPorNaturezaContemporaneaPorEscolha:
      "HUMANA POR NATUREZA. CONTEMPORÂNEA POR ESCOLHA.",
    esteticaComIntencao: "Estética com intenção.",
    escolhasComConsciencia: "Escolhas com consciência.",
    cuidadoComPresenca: "Cuidado com presença.",
    form001: "FORM / 001",
    aBelezaDeNaoSerIgual: "A BELEZA DE NÃO SER IGUAL",
    naoExiste: "Não existe",
    outraVersao: "outra versão",
    deVoce: "de você.",
    aElaraEUmConceitoDe: brand(
      "A {{name}} é um conceito de cuidado que coloca a sua individualidade no centro. Espaço para ouvir. Tempo para compreender. Liberdade para escolher.",
    ),
    entreNoUniversoElara: brand("Entre no universo {{name}} "),
  },
  procedures: {
    todosOsCuidados: "Todos os cuidados",
    umCuidadoParaCadaMomento: "UM CUIDADO PARA CADA MOMENTO",
    suaEssencia: "Sua essência.",
    nossasPossibilidades: "Nossas possibilidades.",
    caminhosDeCuidadoQueComecamCom:
      "Caminhos de cuidado que começam com a escuta e respeitam a sua individualidade.",
    categoriasIlustrativasServicosAValidar:
      "Categorias ilustrativas · serviços a validar",
    filtrarCuidados: "Filtrar cuidados",
    text: "0",
    conhecerOCuidado: "Conhecer o cuidado ",
  },
  team: {
    pessoasQueCuidamDePessoas: "PESSOAS QUE CUIDAM DE PESSOAS",
    presencaEscuta: "Presença, escuta",
    eConexao: "e conexão.",
    porTrasDeCadaCuidadoExiste:
      "Por trás de cada cuidado, existe alguém que escuta. Este espaço será dedicado à apresentação da equipe e de suas qualificações verificadas.",
    equipeDemonstrativaPerfisAindaNaoCadastrados:
      "Equipe demonstrativa · perfis ainda não cadastrados",
    espacoParaPerfilReal: "ESPAÇO PARA PERFIL REAL",
    crm: "CRM ",
  },
};

export type SiteContent = typeof content;
