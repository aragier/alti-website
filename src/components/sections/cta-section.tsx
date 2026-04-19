"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { joinWaitlist } from "@/lib/waitlist";

export function CtaSection() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count] = useState(187);

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
    <section id="cta" className="py-24 md:py-32 px-6 text-center bg-paper">
      <div className="mx-auto max-w-xl">
        {submitted ? (
          <div className="animate-fade-in">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink">
              {t.cta.success}
            </h2>
            <p className="mt-4 text-base text-ink2">
              {t.cta.successSub}
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink whitespace-pre-line leading-tight">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-base text-ink2">
              {t.cta.subtitle}
            </p>

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
                {loading ? "..." : t.cta.button}
              </button>
            </form>

            {error && (
              <p className="mt-3 text-sm text-terra-ink">{error}</p>
            )}

            <p className="mt-4 text-sm text-ink3">
              <span className="font-semibold text-accent">{count}+</span>{" "}
              {t.cta.count}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
