"use client";

import { useI18n } from "@/lib/i18n";
import { OwlLogo } from "@/components/ui/owl-logo";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper2 border-t border-line py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-lg font-serif font-semibold text-ink mb-3">
              <OwlLogo width={24} height={24} />
              Profeli
            </div>
            <p className="text-sm text-ink2 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">{t.footer.product}</h4>
            <div className="space-y-3">
              <a href="#funcionalidades" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.features}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.pricing}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.demo}
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">{t.footer.support}</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.help}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.contact}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">{t.footer.legal}</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="block text-sm text-ink2 hover:text-ink transition-colors">
                {t.footer.cookies}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line text-center text-sm text-ink3">
          © {year} Profeli. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
