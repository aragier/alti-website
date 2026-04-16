"use client";

import { useI18n } from "@/lib/i18n";
import { Download } from "lucide-react";

export function TestesDemo() {
  const { t } = useI18n();

  return (
    <div className="relative">
      {/* Floating PDF chip */}
      <div className="absolute -top-3 -right-2 z-10 flex items-center gap-1.5 bg-rose-600 text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-lg">
        <Download size={12} />
        PDF
      </div>

      {/* Subtle backdrop paper sheet (sibling, behind) */}
      <div
        className="absolute inset-0 translate-x-2 translate-y-2 bg-white/70 rounded-sm border border-gray-200 -z-10"
        aria-hidden
      />

      {/* Paper-like A4 document (serif for print feel) */}
      <div
        className="bg-white rounded-sm shadow-[0_12px_40px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.04)] font-serif text-gray-900"
        style={{ aspectRatio: "1 / 1.25" }}
      >
        <div className="h-full flex flex-col px-6 py-5">
          {/* Header: School grouping */}
          <div className="text-center pb-2 border-b border-gray-900">
            <div className="text-[10px] font-bold tracking-wider">
              {t.testes.headerSchool}
            </div>
            <div className="text-[9px] italic text-gray-700 mt-0.5">
              {t.testes.headerSub}
            </div>
          </div>

          {/* Identification block */}
          <div className="mt-3">
            <div className="text-center text-[12px] font-bold leading-snug">
              {t.testes.docTitle}
            </div>
            <div className="text-center text-[10px] font-bold mt-1">
              {t.testes.docYear}
            </div>

            {/* Form fields with underlines */}
            <div className="mt-3 space-y-1.5 text-[10px]">
              <div className="flex items-end gap-2">
                <span>{t.testes.fieldName}</span>
                <span className="flex-1 border-b border-gray-800 h-3" />
                <span>{t.testes.fieldNumber}</span>
                <span className="w-8 border-b border-gray-800 h-3" />
                <span>{t.testes.fieldClass}</span>
                <span className="w-10 border-b border-gray-800 h-3" />
              </div>
              <div className="flex items-end gap-2">
                <span className="flex-1 border-b border-gray-800 h-3 pl-1 italic text-gray-600">
                  {t.testes.fieldTeacher}
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="flex-1 border-b border-gray-800 h-3 pl-1 italic text-gray-600">
                  {t.testes.fieldDateDuration}
                </span>
              </div>
            </div>
          </div>

          {/* Heavy divider */}
          <div className="border-b-[1.5px] border-gray-900 mt-3" />

          {/* Grupo I */}
          <div className="mt-4">
            <div className="text-center text-[11px] font-bold">
              {t.testes.groupTitle}
            </div>
            <div className="text-center text-[9px] italic text-gray-600 border border-gray-300 px-2 py-1 mt-1.5">
              {t.testes.groupDesc}
            </div>
          </div>

          {/* Questions */}
          <div className="mt-3 space-y-3 flex-1">
            <PdfQuestion num={1} points={30} text={t.testes.q1} domain={t.testes.q1Domain} />
            <PdfQuestion num={2} points={20} text={t.testes.q2} domain={t.testes.q2Domain} showLetters />
            <PdfQuestion num={3} points={20} text={t.testes.q3} domain={t.testes.q3Domain} />
          </div>

          {/* Closing */}
          <div className="text-center text-[11px] font-bold italic mt-2">
            {t.testes.closing}
          </div>

          {/* Footer */}
          <div className="mt-2 pt-1.5 border-t border-gray-400 flex items-center justify-between text-[8px] text-gray-600">
            <span>{t.testes.footerYear}</span>
            <span>{t.testes.footerPage}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-gray-400 italic font-sans">
        {t.testes.previewHint}
      </p>
    </div>
  );
}

function PdfQuestion({
  num,
  points,
  text,
  domain,
  showLetters = false,
}: {
  num: number;
  points: number;
  text: string;
  domain: string;
  showLetters?: boolean;
}) {
  return (
    <div className="text-[10px] leading-snug">
      <div className="flex gap-1.5">
        <span className="font-bold">{num}.</span>
        <div className="flex-1">
          <p className="text-gray-900">{text}</p>
          {showLetters && (
            <div className="mt-1 ml-2 flex gap-4 text-gray-700">
              <span>A. ___</span>
              <span>B. ___</span>
              <span>C. ___</span>
            </div>
          )}
          <p className="text-right text-[8px] italic text-gray-500 mt-0.5">
            {domain}
          </p>
        </div>
        <span className="font-bold text-gray-700 whitespace-nowrap">
          ({points} pts)
        </span>
      </div>
    </div>
  );
}
