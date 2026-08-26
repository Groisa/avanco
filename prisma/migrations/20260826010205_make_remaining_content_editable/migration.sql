-- AlterTable
ALTER TABLE "SiteSettings"
ADD COLUMN     "headerLogoDark" TEXT NOT NULL DEFAULT '/brand/logo-dark.png',
ADD COLUMN     "headerLogoLight" TEXT NOT NULL DEFAULT '/brand/logo-white.png',
ADD COLUMN     "headerCtaLabel" TEXT NOT NULL DEFAULT 'Fale com especialista',
ADD COLUMN     "painPointsHeadline" TEXT NOT NULL DEFAULT 'Enquanto você cuida do seu negócio, nós cuidamos da sua regularização ambiental.',
ADD COLUMN     "painPointsLabel" TEXT NOT NULL DEFAULT 'Problemas ambientais podem gerar:',
ADD COLUMN     "painPointsText" TEXT NOT NULL DEFAULT 'Nossa equipe acompanha todo o processo junto aos órgãos ambientais para que sua empresa continue crescendo de forma segura.',
ADD COLUMN     "painPointsImage" TEXT NOT NULL DEFAULT '/images/campo-retroescavadeira.jpg',
ADD COLUMN     "pillarsEyebrow" TEXT NOT NULL DEFAULT 'Especialidades',
ADD COLUMN     "pillarsHeadline" TEXT NOT NULL DEFAULT 'Somos especialistas em soluções ambientais',
ADD COLUMN     "blocksEyebrow" TEXT NOT NULL DEFAULT 'Serviços de campo',
ADD COLUMN     "blocksHeadline" TEXT NOT NULL DEFAULT 'Investigação, execução e precisão em cada etapa',
ADD COLUMN     "sectorsEyebrow" TEXT NOT NULL DEFAULT 'Segmentos',
ADD COLUMN     "sectorsHeadline" TEXT NOT NULL DEFAULT 'Atendemos diversos segmentos',
ADD COLUMN     "clientsHeadline" TEXT NOT NULL DEFAULT 'Empresas e produtores que confiam na Avanço Ambiental',
ADD COLUMN     "whyUsEyebrow" TEXT NOT NULL DEFAULT 'Por que escolher a Avanço Ambiental?',
ADD COLUMN     "whyUsHeadline" TEXT NOT NULL DEFAULT 'Uma equipe técnica próxima do seu projeto, do início ao fim',
ADD COLUMN     "whyUsImage" TEXT NOT NULL DEFAULT '/images/equipe-campo-01.jpg',
ADD COLUMN     "processEyebrow" TEXT NOT NULL DEFAULT 'Nosso método',
ADD COLUMN     "processHeadline" TEXT NOT NULL DEFAULT 'Método de trabalho',
ADD COLUMN     "gainsHeadline" TEXT NOT NULL DEFAULT 'O que nossos clientes ganham',
ADD COLUMN     "galleryEyebrow" TEXT NOT NULL DEFAULT 'Galeria',
ADD COLUMN     "galleryHeadline" TEXT NOT NULL DEFAULT 'O nosso trabalho, visto do chão e do alto',
ADD COLUMN     "faqEyebrow" TEXT NOT NULL DEFAULT 'Perguntas frequentes',
ADD COLUMN     "faqHeadline" TEXT NOT NULL DEFAULT 'Dúvidas frequentes',
ADD COLUMN     "faqImage" TEXT NOT NULL DEFAULT '/images/campo-viveiro-mudas.jpg',
ADD COLUMN     "teamEyebrow" TEXT NOT NULL DEFAULT 'Equipe',
ADD COLUMN     "teamHeadline" TEXT NOT NULL DEFAULT 'Formações multidisciplinares, presentes em campo',
ADD COLUMN     "teamText" TEXT NOT NULL DEFAULT 'Nossa equipe reúne profissionais de diferentes formações técnicas, trabalhando juntos para viabilizar o seu projeto do início ao fim.',
ADD COLUMN     "contactEyebrow" TEXT NOT NULL DEFAULT 'Contato',
ADD COLUMN     "contactHeadline" TEXT NOT NULL DEFAULT 'Vamos avançar juntos com o seu projeto',
ADD COLUMN     "contactText" TEXT NOT NULL DEFAULT 'Fale com a nossa equipe e receba uma proposta sob medida para a sua demanda ambiental.';

-- CreateTable
CREATE TABLE "NavItem" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroChecklistItem" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "HeroChecklistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PainPoint" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PainPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Differential" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Differential_pkey" PRIMARY KEY ("id")
);
