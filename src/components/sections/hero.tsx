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
    <section className="bg-paper py-24 md:py-32 px-6 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="flex justify-center mb-6">
          <OwlLogo width={80} height={80} />
        </div>

        <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-4">
          {t.hero.badge}
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight whitespace-pre-line">
          {t.hero.title}
        </h1>

        <p className="mt-6 text-lg text-ink2 leading-relaxed max-w-lg mx-auto">
          {t.hero.subtitle}
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-sage-bg text-sage-ink px-6 py-3 rounded-xl border border-line font-semibold animate-fade-in">
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
              className="flex-1 px-5 py-3.5 rounded-xl border border-line bg-white text-base text-ink focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all placeholder:text-ink3 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-accent-strong transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {loading ? "..." : t.hero.cta}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-sm text-terra-ink">{error}</p>
        )}

        <a
          href="#funcionalidades"
          className="inline-block mt-6 text-ink3 hover:text-ink2 text-base font-medium transition-colors"
        >
          {t.hero.explore}
        </a>
      </div>
    </section>
  );
}
