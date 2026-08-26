-- AlterTable
ALTER TABLE "SiteSettings" ADD COLUMN     "heroCtaLabel" TEXT NOT NULL DEFAULT 'Solicitar diagnóstico gratuito',
ADD COLUMN     "heroSecondaryCtaLabel" TEXT NOT NULL DEFAULT 'Conhecer serviços',
ADD COLUMN     "ctaEyebrow" TEXT NOT NULL DEFAULT 'Solicite um diagnóstico técnico',
ADD COLUMN     "ctaText" TEXT NOT NULL DEFAULT 'Não espere receber uma notificação ambiental para agir. Nossa equipe está pronta para analisar seu empreendimento e indicar a melhor solução.',
ADD COLUMN     "ctaButtonLabel" TEXT NOT NULL DEFAULT 'Falar com um especialista';
