-- AlterTable
ALTER TABLE "SiteSettings" ADD COLUMN     "aboutEyebrow" TEXT NOT NULL DEFAULT 'Quem somos',
ADD COLUMN     "aboutHeadline" TEXT NOT NULL DEFAULT 'Consultoria ambiental próxima, técnica e comprometida com resultado',
ADD COLUMN     "aboutText1" TEXT NOT NULL DEFAULT 'A Avanço Ambiental reúne profissionais experientes para viabilizar projetos socioambientais multidisciplinares. Para cada segmento econômico, entendemos as demandas específicas do seu negócio e construímos soluções sob medida — sempre com uma relação próxima e transparente com clientes e parceiros.',
ADD COLUMN     "aboutText2" TEXT NOT NULL DEFAULT 'Do estudo técnico ao acompanhamento em campo, conduzimos cada etapa com agilidade, buscando resultados rápidos e efetivos que impulsionam seu negócio com práticas ambientais sustentáveis.',
ADD COLUMN     "aboutStat1Value" TEXT NOT NULL DEFAULT '4',
ADD COLUMN     "aboutStat1Label" TEXT NOT NULL DEFAULT 'Especialistas multidisciplinares',
ADD COLUMN     "aboutStat2Value" TEXT NOT NULL DEFAULT 'MG',
ADD COLUMN     "aboutStat2Label" TEXT NOT NULL DEFAULT 'Atendimento em todo o estado',
ADD COLUMN     "aboutImage1" TEXT NOT NULL DEFAULT '/images/campo-sondagem-solo.jpg',
ADD COLUMN     "aboutImage2" TEXT NOT NULL DEFAULT '/images/campo-viveiro-mudas.jpg';
