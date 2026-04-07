"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { joinWaitlist } from "@/lib/waitlist";
import { OwlLogo } from "@/components/ui/owl-logo";

export function Hero() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setError("");

    const result = await joinWaitlist(email.trim());

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || "Something went wrong");
    }

    setLoading(false);
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 via-indigo-50/60 to-indigo-50/30 py-24 md:py-32 px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-center mb-6">
          <OwlLogo width={80} height={80} />
        </div>

        <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
          {t.hero.badge}
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight whitespace-pre-line">
          {t.hero.title}
        </h1>

        <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg mx-auto">
          {t.hero.subtitle}
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-xl border border-green-200 font-semibold animate-fade-in">
            <span>✓</span> {t.cta.success}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.cta.placeholder}
              disabled={loading}
              className="flex-1 px-5 py-3.5 rounded-xl border-2 border-indigo-100 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder:text-gray-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-800 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-900 transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "..." : t.hero.cta}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-sm text-red-500">{error}</p>
        )}

        <a
          href="#funcionalidades"
          className="inline-block mt-6 text-gray-500 hover:text-gray-700 text-base font-medium transition-colors"
        >
          {t.hero.explore}
        </a>
      </div>
    </section>
  );
}
