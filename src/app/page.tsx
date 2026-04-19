"use client";

import { I18nProvider } from "@/components/providers/i18n-provider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { TestesDemo } from "@/components/interactive/testes-demo";
import { TurmasDemo } from "@/components/interactive/turmas-demo";
import { AssiduidadeDemo } from "@/components/interactive/assiduidade-demo";
import { AvaliacaoDemo } from "@/components/interactive/avaliacao-demo";
import { CalendarioDemo } from "@/components/interactive/calendario-demo";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { useI18n } from "@/lib/i18n";

const pill = {
  amber: "bg-amber-bg text-amber-ink",
  sage: "bg-sage-bg text-sage-ink",
  terra: "bg-terra-bg text-terra-ink",
  plum: "bg-plum-bg text-plum-ink",
} as const;

function PageContent() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />

      <Hero />

      {/* TESTES */}
      <FeatureSection
        id="funcionalidades"
        badge={t.testes.badge}
        badgeColor={pill.amber}
        title={t.testes.title}
        description={t.testes.description}
        checks={[...t.testes.checks]}
        className="bg-paper2"
      >
        <TestesDemo />
      </FeatureSection>

      {/* CALENDARIO */}
      <FeatureSection
        badge={t.calendario.badge}
        badgeColor={pill.sage}
        title={t.calendario.title}
        description={t.calendario.description}
        checks={[...t.calendario.checks]}
        reversed
        className="bg-paper"
      >
        <CalendarioDemo />
      </FeatureSection>

      {/* TURMAS */}
      <FeatureSection
        badge={t.turmas.badge}
        badgeColor={pill.plum}
        title={t.turmas.title}
        description={t.turmas.description}
        checks={[...t.turmas.checks]}
        className="bg-paper2"
      >
        <TurmasDemo />
      </FeatureSection>

      {/* ASSIDUIDADE */}
      <FeatureSection
        badge={t.assiduidade.badge}
        badgeColor={pill.terra}
        title={t.assiduidade.title}
        description={t.assiduidade.description}
        checks={[...t.assiduidade.checks]}
        reversed
        className="bg-paper"
      >
        <AssiduidadeDemo />
      </FeatureSection>

      {/* AVALIAÇÃO */}
      <FeatureSection
        badge={t.avaliacao.badge}
        badgeColor={pill.amber}
        title={t.avaliacao.title}
        description={t.avaliacao.description}
        checks={[...t.avaliacao.checks]}
        className="bg-paper2"
      >
        <AvaliacaoDemo />
      </FeatureSection>

      <CtaSection />
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  );
}
