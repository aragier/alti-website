"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { OwlLogo } from "@/components/ui/owl-logo";

export function Navbar() {
  const { locale, t, setLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-serif font-semibold text-ink">
          <OwlLogo width={32} height={32} />
          Profeli
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#funcionalidades" className="text-sm text-ink2 hover:text-ink transition-colors">
            {t.nav.features}
          </a>
          <a href="#como-funciona" className="text-sm text-ink2 hover:text-ink transition-colors">
            {t.nav.howItWorks}
          </a>
          <a href="#sobre" className="text-sm text-ink2 hover:text-ink transition-colors">
            {t.nav.about}
          </a>

          {/* Language toggle */}
          <div className="flex gap-1 bg-paper2 rounded-lg p-0.5 border border-line">
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                locale === "en"
                  ? "bg-accent text-white shadow-sm"
                  : "text-ink3 hover:text-ink2"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                locale === "pt"
                  ? "bg-accent text-white shadow-sm"
                  : "text-ink3 hover:text-ink2"
              }`}
            >
              PT
            </button>
          </div>

          <a
            href="#cta"
            className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-strong transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-4 space-y-4">
          <a
            href="#funcionalidades"
            className="block text-sm text-ink2 hover:text-ink"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.features}
          </a>
          <a
            href="#como-funciona"
            className="block text-sm text-ink2 hover:text-ink"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.howItWorks}
          </a>
          <a
            href="#sobre"
            className="block text-sm text-ink2 hover:text-ink"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.about}
          </a>

          <div className="flex gap-1 bg-paper2 rounded-lg p-0.5 w-fit border border-line">
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                locale === "en" ? "bg-accent text-white" : "text-ink3"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                locale === "pt" ? "bg-accent text-white" : "text-ink3"
              }`}
            >
              PT
            </button>
          </div>

          <a
            href="#cta"
            className="block bg-accent text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
