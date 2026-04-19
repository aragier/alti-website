"use client";

import { useI18n } from "@/lib/i18n";

interface Turma {
  id: string;
  name: string;
  subject: string;
  students: number;
  attendance: number;
}

export function TurmasDemo() {
  const { t } = useI18n();

  const turmas: Turma[] = [
    { id: "1", name: "7ºA", subject: t.turmas.math, students: 28, attendance: 94 },
    { id: "2", name: "8ºB", subject: t.turmas.math, students: 25, attendance: 87 },
    { id: "3", name: "9ºC", subject: t.turmas.math, students: 22, attendance: 91 },
    { id: "4", name: "10ºA", subject: t.turmas.math, students: 30, attendance: 96 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-line shadow-[0_8px_32px_rgba(31,42,46,0.04)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif font-semibold text-base text-ink">{t.turmas.myClasses}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {turmas.map((turma) => (
          <div
            key={turma.id}
            className="bg-paper rounded-xl p-4 border border-line transition-all duration-200 hover:shadow-md hover:border-accent/40"
          >
            <p className="font-semibold text-sm text-ink">{turma.name}</p>
            <p className="text-xs text-accent mt-0.5">{turma.subject}</p>
            <div className="mt-3">
              <span className="text-xs text-ink3">
                {turma.students} {t.turmas.students}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
