"use client";

import { useI18n } from "@/lib/i18n";

export function OfflineSection() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="relative py-24 md:py-32 px-6 text-center bg-[#131828]">
      <div className="mx-auto max-w-2xl">
        <div className="text-5xl mb-6">📶</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {t.offline.title}
        </h2>
        <p className="text-base text-gray-400 leading-relaxed max-w-md mx-auto">
          {t.offline.description}
        </p>

        <div className="flex justify-center gap-12 md:gap-16 mt-10">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-blue-400">100%</div>
            <div className="text-xs text-gray-500 mt-1">{t.offline.stat1}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-green-400">Auto</div>
            <div className="text-xs text-gray-500 mt-1">{t.offline.stat2}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-amber-400">PWA</div>
            <div className="text-xs text-gray-500 mt-1">{t.offline.stat3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
