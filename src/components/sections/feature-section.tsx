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
        <span className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-0 ${badgeColor}`}>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight whitespace-pre-line">
            {title}
          </h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 space-y-3">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-700">{check}</span>
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
