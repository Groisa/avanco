// The admin sidebar mirrors the real page order, so finding "the bit I want to
// change" means scrolling the menu the same way you'd scroll the site.
export type SectionMeta = {
  slug: string;
  label: string;
  description: string;
};

export const SECTIONS: SectionMeta[] = [
  { slug: "cabecalho", label: "Cabeçalho", description: "Logo, menu e botão no topo do site." },
  { slug: "capa", label: "Capa", description: "A primeira tela: título, foto de fundo, botões e checklist." },
  { slug: "cards-topo", label: "Cards abaixo da capa", description: "Os 4 cards brancos logo abaixo da capa." },
  { slug: "riscos", label: "Riscos ambientais", description: "Multas, embargos e demais riscos, com foto e textos." },
  { slug: "quem-somos", label: "Quem somos", description: "Apresentação da empresa, com duas fotos e dois números." },
  { slug: "especialidades", label: "Especialidades", description: "Os ícones de 'Somos especialistas em soluções ambientais'." },
  { slug: "servicos", label: "Serviços", description: "Catálogo de serviços em cards com foto." },
  { slug: "servicos-campo", label: "Serviços de campo", description: "Blocos detalhados: sondagem, execução, topografia." },
  { slug: "segmentos", label: "Segmentos", description: "Setores atendidos: indústrias, mineração, etc." },
  { slug: "clientes", label: "Clientes", description: "Carrossel de logos de clientes e parceiros." },
  { slug: "por-que-nos", label: "Por que nos escolher", description: "Lista de motivos, com foto ao lado." },
  { slug: "metodo", label: "Método de trabalho", description: "As etapas numeradas do processo." },
  { slug: "ganhos", label: "O que o cliente ganha", description: "Os ícones com os ganhos do cliente." },
  { slug: "galeria", label: "Galeria", description: "Mosaico de fotos de campo e aéreas." },
  { slug: "duvidas", label: "Dúvidas frequentes", description: "Perguntas e respostas, com foto ao lado." },
  { slug: "destaques", label: "Faixa de destaques", description: "A faixa escura com 5 imagens e títulos." },
  { slug: "equipe", label: "Equipe", description: "Formações da equipe, com foto e textos." },
  { slug: "quadro-contato", label: "Quadro de contato", description: "A faixa verde com o botão do WhatsApp." },
  { slug: "contato", label: "Contato", description: "Dados de contato e formulário do WhatsApp." },
  { slug: "rodape", label: "Rodapé", description: "Logo, menu e slogan no fim da página." },
];

export const findSection = (slug: string) => SECTIONS.find((s) => s.slug === slug);
