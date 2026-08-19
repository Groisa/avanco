export const site = {
  name: "Avanço Ambiental",
  tagline: "Consultoria ambiental com disponibilidade, proximidade e eficiência",
  phone1: "(31) 9 8105-2292",
  phone2: "(31) 3939-9776",
  whatsapp: "https://wa.me/553181052292",
  whatsappNumberDisplay: "(31) 9 8105-2292",
  email: "avancoambiental@outlook.com",
  address: {
    line1: "Av. Pref. Telesforo C. de Rezende, 881, sl 404",
    line2: "Centro, Conselheiro Lafaiete - MG, 36.400-056",
  },
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

// Hero
export const heroChecklist = [
  "Atendimento Especializado",
  "Engenharia Ambiental",
  "Acompanhamento completo do processo",
  "Soluções personalizadas",
];

// These are drawn straight from real data below (services.length,
// formations.length) instead of invented stats.
export const heroBadges = [
  { label: "Formações técnicas na equipe", icon: "team" },
  { label: "Serviços ambientais prestados", icon: "check" },
  { label: "Atendimento em Minas Gerais", icon: "pin" },
];

// Pain points
export const painPoints = [
  "Multas",
  "Embargos",
  "Paralisação da obra",
  "Perda de contratos",
  "Dificuldade para financiamento",
];

// Quick-glance pillars (icon grid) shown above the detailed services list
export const pillars = [
  { title: "Licenciamento Ambiental", icon: "license" },
  { title: "Intervenção Ambiental", icon: "leaf" },
  { title: "Outorga de Recursos Hídricos", icon: "drop" },
  { title: "Geoprocessamento e SIG", icon: "map" },
  { title: "Levantamentos com Drone", icon: "drone" },
  { title: "EIV · PCA · PRAD · PTRF", icon: "document" },
  { title: "Gestão Ambiental", icon: "gear" },
  { title: "Processos Minerários", icon: "pickaxe" },
  { title: "CAR e Regularização Rural", icon: "field" },
  { title: "Gestão de Resíduos", icon: "recycle" },
];

// Full-detail spotlight blocks — verbatim headlines, intros and complete
// service checklists for the three specialized field service lines.
export const specializedBlocks = [
  {
    title: "Sondagem de Solo",
    headline: "Conhecer o solo é o primeiro passo para tomar decisões mais seguras.",
    intro:
      "Realizamos investigações do subsolo para obter informações que apoiam projetos, obras, estudos ambientais e decisões de engenharia.",
    image: "/images/campo-sondagem-solo.jpg",
    groups: [
      {
        subtitle: undefined as string | undefined,
        items: [
          "Sondagem de solo",
          "Investigação geotécnica",
          "Sondagem para caracterização do subsolo",
          "Identificação das camadas do terreno",
          "Determinação do nível d'água, quando aplicável",
          "Coleta de informações para projetos de engenharia",
          "Apoio à implantação de obras e estruturas",
          "Apoio a estudos e projetos ambientais",
        ],
      },
    ],
  },
  {
    title: "Execução Ambiental",
    headline: "Soluções realizadas diretamente em campo.",
    intro:
      "Os serviços são executados de acordo com as características de cada área e observando as autorizações, licenças e requisitos ambientais aplicáveis.",
    image: "/images/campo-motosserra-03.jpg",
    groups: [
      {
        subtitle: "Revegetação, Recuperação e Proteção Ambiental",
        items: [
          "Plantio de Mudas",
          "Recuperação de Margens",
          "Implantação de Cercamentos e Estruturas de Proteção Ambiental",
        ],
      },
      {
        subtitle: "Limpeza e Manejo de Áreas",
        items: [
          "Limpeza de Áreas",
          "Roçada",
          "Capina",
          "Manutenção de Áreas Verdes",
          "Poda de Árvores",
          "Romaneio de Madeiras",
        ],
      },
      {
        subtitle: "Serviços em Recursos Hídricos",
        items: [
          "Abertura de Lagoas",
          "Limpeza de Lagoas",
          "Limpeza de Áreas no Entorno de Corpos Hídricos",
        ],
      },
      {
        subtitle: "Gestão de Resíduos",
        items: ["Inventário de Resíduos"],
      },
      {
        subtitle: "Educação e Capacitação Ambiental",
        items: ["Educação Ambiental", "Treinamento Ambiental", "Palestra Ambiental"],
      },
    ],
  },
  {
    title: "Topografia",
    headline: "Levantamentos que dão precisão às decisões de campo.",
    intro:
      "Serviços topográficos para subsidiar projetos ambientais, obras, recuperação de áreas e planejamento de intervenções.",
    image: "/images/campo-marco-georreferenciamento.jpg",
    groups: [
      {
        subtitle: undefined as string | undefined,
        items: [
          "Levantamento topográfico",
          "Levantamento planialtimétrico",
          "Levantamento cadastral",
          "Locação de pontos e estruturas",
          "Levantamento e demarcação de áreas",
          "Apoio topográfico para projetos ambientais",
          "Levantamento de áreas para recuperação ambiental",
          "Acompanhamento e controle topográfico de intervenções",
        ],
      },
    ],
  },
];

export const services = [
  {
    title: "Licenciamento Ambiental",
    description:
      "Condução completa de LP, LI e LO junto aos órgãos ambientais, com segurança jurídica e agilidade em cada etapa do processo.",
    image: "/images/campo-retroescavadeira.jpg",
  },
  {
    title: "Estudo de Impacto Ambiental (EIA/RIMA)",
    description:
      "Estudos de impacto ambiental e relatórios de impacto para empreendimentos de médio e grande porte, do diagnóstico à audiência pública.",
    image: "/images/drone-afloramento-rochoso.jpg",
  },
  {
    title: "Outorga de Recursos Hídricos",
    description:
      "Regularização de poços artesianos, captações e demais usos da água, do estudo hidrogeológico à emissão da outorga.",
    image: "/images/campo-poco-artesiano.jpg",
  },
  {
    title: "Plano de Gerenciamento de Resíduos Sólidos (PGRS)",
    description:
      "Planos de gerenciamento de resíduos e acompanhamento de processos produtivos para destinação correta e conformidade legal.",
    image: "/images/campo-carvao-pilha.jpg",
  },
  {
    title: "Recuperação de Área Degradada (PRAD)",
    description:
      "Projetos técnicos de PRAD, produção de mudas nativas e monitoramento de reflorestamento até a plena regeneração da área.",
    image: "/images/campo-viveiro-mudas.jpg",
  },
  {
    title: "Monitoramento Ambiental",
    description:
      "Medições de ruído, qualidade do ar e água, e acompanhamento periódico das condicionantes de licenças já emitidas.",
    image: "/images/campo-medicao-ruido-01.jpg",
  },
  {
    title: "Cadastro Ambiental Rural (CAR)",
    description:
      "Georreferenciamento, regularização fundiária e documentação ambiental para produtores rurais e propriedades no campo.",
    image: "/images/campo-marco-georreferenciamento.jpg",
  },
  {
    title: "Auditoria Ambiental",
    description:
      "Diagnóstico de passivos e conformidade ambiental para aquisições, financiamentos e certificações do seu negócio.",
    image: "/images/campo-amostra-solo-02.jpg",
  },
  {
    title: "Direito Minerário e Fechamento de Mina",
    description:
      "Gerenciamento de processos minerários, plano de aproveitamento econômico (PAE) e plano de fechamento de mina (PFM).",
    image: "/images/campo-fornos-carvao.jpg",
  },
  {
    title: "Plano de Controle Ambiental (PCA)",
    description:
      "Detalhamento das medidas de controle e mitigação de impactos definidas na fase de licenciamento prévio do empreendimento.",
    image: "/images/drone-clareira.jpg",
  },
  {
    title: "Plano de Gerenciamento de Riscos (PGR)",
    description:
      "Identificação, análise e gestão de riscos ambientais e operacionais ao longo de todo o ciclo produtivo.",
    image: "/images/campo-medicao-ruido-02.jpg",
  },
  {
    title: "Plano de Contingência e Emergência Ambiental",
    description:
      "Protocolos de resposta a emergências ambientais, com ações de contenção, mitigação e comunicação aos órgãos competentes.",
    image: "/images/campo-barragem-construcao.jpg",
  },
  {
    title: "Relatórios Ambientais Simplificados (RAP/EAS/RAS)",
    description:
      "Estudos simplificados para empreendimentos de menor impacto, agilizando a análise junto ao órgão ambiental.",
    image: "/images/drone-represa-01.jpg",
  },
  {
    title: "Estudo e Relatório de Impacto de Vizinhança (EIV/RIV)",
    description:
      "Avaliação dos efeitos de empreendimentos urbanos sobre a qualidade de vida da população do entorno.",
    image: "/images/drone-cidade.jpg",
  },
  {
    title: "Projeto Técnico de Reconstituição da Flora (PTRF)",
    description:
      "Plano técnico para compensação e reposição florestal exigido em processos de supressão de vegetação.",
    image: "/images/drone-reflorestamento-fileiras.jpg",
  },
  {
    title: "Resíduos da Construção Civil (PGRCC)",
    description:
      "Gerenciamento de resíduos gerados em obras, com plano de destinação e conformidade junto à legislação municipal.",
    image: "/images/madeira-estoque-02.jpg",
  },
  {
    title: "Projeto de Compostagem",
    description:
      "Implantação de sistemas de compostagem para destinação sustentável de resíduos orgânicos.",
    image: "/images/campo-amostra-solo-01.jpg",
  },
  {
    title: "Consultoria para Coleta Seletiva",
    description:
      "Estruturação de programas de coleta seletiva e logística reversa para empresas e condomínios.",
    image: "/images/madeira-estoque-01.jpg",
  },
  {
    title: "Elaboração de Mapas Georreferenciados",
    description:
      "Mapeamento e georreferenciamento de áreas rurais e urbanas com precisão técnica para fins de regularização.",
    image: "/images/drone-divisa-lavoura.jpg",
  },
  {
    title: "Educação Ambiental e Treinamentos",
    description:
      "Palestras, treinamentos e programas de educação ambiental voltados a equipes e comunidades envolvidas no empreendimento.",
    image: "/images/drone-formigueiro.jpg",
  },
  {
    title: "Sistema de Gestão Ambiental (SGA)",
    description:
      "Implantação de sistemas de gestão ambiental para manter a operação em conformidade contínua com a legislação.",
    image: "/images/drone-represa-02.jpg",
  },
  {
    title: "Sondagem de Solo",
    description:
      "Investigação geotécnica do subsolo: identificação das camadas do terreno e do nível d'água, com dados que apoiam projetos de engenharia, obras e estudos ambientais.",
    image: "/images/campo-sondagem-solo.jpg",
  },
  {
    title: "Revegetação, Recuperação e Proteção Ambiental",
    description:
      "Plantio de mudas, recuperação de margens e implantação de cercamentos e estruturas de proteção para áreas em processo de restauração.",
    image: "/images/drone-fazenda-arvore.jpg",
  },
  {
    title: "Limpeza e Manejo de Áreas",
    description:
      "Limpeza, roçada, capina, poda e manutenção de áreas verdes, incluindo romaneio de madeiras em intervenções autorizadas.",
    image: "/images/campo-motosserra-01.jpg",
  },
  {
    title: "Serviços em Recursos Hídricos",
    description:
      "Abertura e limpeza de lagoas, e limpeza de áreas no entorno de corpos hídricos, preservando a qualidade e a conservação dos recursos hídricos.",
    image: "/images/drone-represa-03.jpg",
  },
  {
    title: "Gestão de Resíduos: Inventário",
    description:
      "Levantamento e inventário de resíduos gerados na operação, base para o planejamento de destinação e conformidade legal.",
    image: "/images/madeira-pilha-serra.jpg",
  },
  {
    title: "Topografia",
    description:
      "Levantamento topográfico, planialtimétrico e cadastral, com locação de pontos e apoio ao controle de obras, projetos ambientais e recuperação de áreas.",
    image: "/images/drone-represa-serra.jpg",
  },
];

export const sectors = [
  {
    title: "Indústrias",
    description:
      "Auditorias, outorgas e monitoramento contínuo para manter a operação industrial em conformidade legal.",
    image: "/images/campo-canalizacao-poco.jpg",
    icon: "factory",
  },
  {
    title: "Mineração",
    description:
      "Licenciamento, monitoramento e planos de recuperação de áreas degradadas para todo o ciclo de vida da mina.",
    image: "/images/campo-fornos-carvao.jpg",
    icon: "pickaxe",
  },
  {
    title: "Construção Civil",
    description:
      "Estudos de viabilidade, EIV e controle ambiental de obras, da terraplanagem à entrega do empreendimento.",
    image: "/images/campo-retroescavadeira.jpg",
    icon: "crane",
  },
  {
    title: "Produtores Rurais",
    description:
      "CAR, outorgas de irrigação, documentação florestal e manejo sustentável para propriedades rurais.",
    image: "/images/drone-divisa-lavoura.jpg",
    icon: "leaf",
  },
  {
    title: "Empreendimentos Imobiliários",
    description:
      "Estudos de viabilidade e impacto de vizinhança para loteamentos e empreendimentos residenciais e comerciais.",
    image: "/images/drone-cidade.jpg",
    icon: "building",
  },
  {
    title: "Postos de Combustíveis",
    description:
      "Monitoramento de solo e água subterrânea, e regularização ambiental para operação segura de postos e tanques.",
    image: "/images/campo-poco-artesiano.jpg",
    icon: "fuel",
  },
  {
    title: "Prefeituras",
    description:
      "Apoio técnico a órgãos públicos em regularização ambiental, cadastros e planos de gestão territorial.",
    image: "/images/campo-represa-colinas.jpg",
    icon: "gov",
  },
];

// Placeholder client logo slots — swap the label (or add a `logo` image path)
// for each real client logo once they're available.
export const clients: { name: string; logo: string | null }[] = [
  { name: "Cliente 01", logo: null },
  { name: "Cliente 02", logo: null },
  { name: "Cliente 03", logo: null },
  { name: "Cliente 04", logo: null },
  { name: "Cliente 05", logo: null },
  { name: "Cliente 06", logo: null },
  { name: "Cliente 07", logo: null },
  { name: "Cliente 08", logo: null },
];

// Educational backgrounds represented on the team, instead of naming
// individual staff members.
export const formations = [
  "Engenharia Ambiental",
  "Engenharia Florestal",
  "Engenharia Civil",
  "Engenharia de Produção",
  "Engenharia Cartográfica e de Agrimensura",
  "Engenharia de Segurança do Trabalho",
  "Geologia",
  "Biologia",
  "Engenharia Agronômica",
  "Arquitetura e Urbanismo",
];

export const whyUs = [
  "Ampla experiência técnica multidisciplinar",
  "Atendimento próximo ao cliente",
  "Equipe multidisciplinar",
  "Projetos personalizados",
  "Agilidade na condução dos processos",
  "Transparência em todas as etapas",
  "Soluções focadas em resultado",
  "Atendimento em Minas Gerais e demais regiões, conforme demanda",
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entendemos seu empreendimento e identificamos todas as exigências legais.",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Definimos a melhor estratégia para a regularização.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Produzimos estudos, projetos e documentos técnicos.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Protocolamos e acompanhamos o processo junto aos órgãos competentes.",
  },
  {
    step: "05",
    title: "Suporte",
    description: "Continuamos auxiliando sua empresa após a emissão da licença.",
  },
];

export const clientGains = [
  "Segurança Jurídica",
  "Economia de Tempo",
  "Redução de Riscos",
  "Atendimento Humanizado",
  "Equipe Especializada",
  "Menor Burocracia",
  "Acompanhamento Completo",
];

export const faq = [
  {
    question: "Quanto tempo demora um licenciamento?",
    answer:
      "Depende da atividade e do órgão ambiental, mas acompanhamos todo o processo até sua conclusão.",
  },
  {
    question: "Vocês atendem apenas Minas Gerais?",
    answer:
      "Atendemos principalmente Minas Gerais, podendo desenvolver projetos em outras localidades conforme a necessidade do cliente.",
  },
  {
    question: "Fazem somente licenciamento?",
    answer:
      "Não. Também desenvolvemos estudos ambientais, geoprocessamento, regularização rural, monitoramentos, processos minerários e diversos outros projetos ambientais.",
  },
];

export const featureStrip = [
  { title: "Tecnologia e Inovação", image: "/images/drone-afloramento-rochoso.jpg" },
  { title: "Presença em Campo", image: "/images/campo-motosserra-02.jpg" },
  { title: "Coleta e Monitoramento", image: "/images/campo-medicao-ruido-02.jpg" },
  { title: "Fiscalização e Acompanhamento", image: "/images/campo-marco-georreferenciamento.jpg" },
  { title: "Mapeamentos e Geoprocessamento", image: "/images/drone-divisa-lavoura.jpg" },
];

export const galleryImages = [
  { src: "/images/drone-represa-serra.jpg", alt: "Vista aérea de represa e serra em Minas Gerais" },
  { src: "/images/drone-reflorestamento-fileiras.jpg", alt: "Fileiras de reflorestamento vistas do alto" },
  { src: "/images/campo-sondagem-solo.jpg", alt: "Sondagem e coleta de amostra de solo em campo" },
  { src: "/images/drone-cidade.jpg", alt: "Vista aérea da cidade ao entardecer" },
  { src: "/images/campo-viveiro-mudas.jpg", alt: "Viveiro de mudas nativas" },
  { src: "/images/drone-fazenda-arvore.jpg", alt: "Área rural monitorada vista do alto" },
  { src: "/images/campo-fornos-carvao.jpg", alt: "Fornos de carvão vegetal monitorados" },
  { src: "/images/drone-afloramento-rochoso.jpg", alt: "Afloramento rochoso em área de cerrado" },
  { src: "/images/campo-retroescavadeira.jpg", alt: "Retroescavadeira em obra monitorada" },
  { src: "/images/drone-represa-02.jpg", alt: "Represa e área de preservação vistas do alto" },
  { src: "/images/drone-formigueiro.jpg", alt: "Padrão de formigueiros vistos do alto" },
  { src: "/images/campo-poco-artesiano.jpg", alt: "Perfuração de poço artesiano" },
];
