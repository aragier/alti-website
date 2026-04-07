"use client";

import { I18nProvider } from "@/components/providers/i18n-provider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeatureSection } from "@/components/sections/feature-section";
import { TurmasDemo } from "@/components/interactive/turmas-demo";
import { AssiduidadeDemo } from "@/components/interactive/assiduidade-demo";
import { AvaliacaoDemo } from "@/components/interactive/avaliacao-demo";
import { CalendarioDemo } from "@/components/interactive/calendario-demo";
import { OfflineSection } from "@/components/sections/offline-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { useI18n } from "@/lib/i18n";

function PageContent() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />

      <Hero />

      {/*
        FLUID TRANSITIONS: Each section's background gradient starts where the
        previous one ended. No dividers, no lines — just continuous color flow.
      */}

      {/* Transition: Hero blue → Cool green */}
      <div className="h-10 bg-gradient-to-b from-indigo-50/30 to-emerald-50/30" />

      {/* CALENDARIO */}
      <FeatureSection
        id="funcionalidades"
        badge={t.calendario.badge}
        badgeColor="bg-amber-50 text-amber-700"
        title={t.calendario.title}
        description={t.calendario.description}
        checks={[...t.calendario.checks]}
        className="bg-emerald-50/30"
      >
        <CalendarioDemo />
      </FeatureSection>

      {/* Transition: Cool green → White */}
      <div className="h-16 bg-gradient-to-b from-emerald-50/30 to-white" />

      {/* TURMAS */}
      <FeatureSection
        badge={t.turmas.badge}
        badgeColor="bg-blue-50 text-blue-700"
        title={t.turmas.title}
        description={t.turmas.description}
        checks={[...t.turmas.checks]}
        reversed
      >
        <TurmasDemo />
      </FeatureSection>

      {/* Transition: White → Warm cream */}
      <div className="h-16 bg-gradient-to-b from-white via-orange-50/20 to-orange-50/40" />

      {/* ASSIDUIDADE */}
      <FeatureSection
        badge={t.assiduidade.badge}
        badgeColor="bg-red-50 text-red-600"
        title={t.assiduidade.title}
        description={t.assiduidade.description}
        checks={[...t.assiduidade.checks]}
        className="bg-orange-50/40"
      >
        <AssiduidadeDemo />
      </FeatureSection>

      {/* Transition: Warm cream → Purple tint */}
      <div className="h-16 bg-gradient-to-b from-orange-50/40 via-purple-50/20 to-purple-50/40" />

      {/* AVALIAÇÃO */}
      <FeatureSection
        badge={t.avaliacao.badge}
        badgeColor="bg-purple-50 text-purple-700"
        title={t.avaliacao.title}
        description={t.avaliacao.description}
        checks={[...t.avaliacao.checks]}
        reversed
        className="bg-purple-50/40"
      >
        <AvaliacaoDemo />
      </FeatureSection>

      {/* Transition: Cool green → Dark */}
      <div
        className="h-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(236,253,245,0.3) 0%, #8a90a0 30%, #2d3348 60%, #131828 100%)",
        }}
      />

      {/* OFFLINE */}
      <OfflineSection />

      {/* Transition: Dark → White */}
      <div
        className="h-20"
        style={{
          background:
            "linear-gradient(180deg, #131828 0%, #2d3654 15%, #6b7599 35%, #c5cad6 55%, #eef0f4 75%, white 100%)",
        }}
      />

      {/* CTA */}
      <CtaSection />

      {/* Footer */}
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
