"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-extrabold text-blue-800 mb-3">📚 ApProf</div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t.footer.product}</h4>
            <div className="space-y-3">
              <a href="#funcionalidades" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.features}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.pricing}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.demo}
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t.footer.support}</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.help}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.contact}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t.footer.legal}</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {t.footer.cookies}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © {year} ApProf. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
