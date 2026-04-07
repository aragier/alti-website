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
    <section id="cta" className="py-24 md:py-32 px-6 text-center bg-white">
      <div className="mx-auto max-w-xl">
        {submitted ? (
          <div className="animate-fade-in">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {t.cta.success}
            </h2>
            <p className="mt-4 text-base text-gray-500">
              {t.cta.successSub}
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 whitespace-pre-line leading-tight">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-base text-gray-500">
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
                className="flex-1 px-5 py-3.5 rounded-xl border-2 border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all placeholder:text-gray-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-800 text-white px-8 py-3.5 rounded-xl text-base font-bold hover:bg-blue-900 transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {loading ? "..." : t.cta.button}
              </button>
            </form>

            {error && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}

            <p className="mt-4 text-sm text-gray-400">
              <span className="font-semibold text-blue-600">{count}+</span>{" "}
              {t.cta.count}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
