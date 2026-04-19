"use client";

import { Check } from "lucide-react";
import { type ReactNode } from "react";

interface FeatureSectionProps {
  id?: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  checks: string[];
  reversed?: boolean;
  className?: string;
  children: ReactNode;
}

export function FeatureSection({
  id,
  badge,
  badgeColor,
  title,
  description,
  checks,
  reversed = false,
  className = "",
  children,
}: FeatureSectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 px-6 ${className}`}>
      {/* Badge */}
      <div className="text-center mb-8 md:mb-10">
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${badgeColor}`}>
          {badge}
        </span>
      </div>

      {/* Content */}
      <div
        className={`mx-auto max-w-5xl flex flex-col gap-10 md:gap-16 items-center ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text side */}
        <div className="flex-1 max-w-md">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink leading-tight whitespace-pre-line">
            {title}
          </h2>
          <p className="mt-4 text-base text-ink2 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 space-y-3">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-primary" />
                </div>
                <span className="text-sm text-ink2">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive component */}
        <div className="flex-1 w-full max-w-md md:max-w-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
