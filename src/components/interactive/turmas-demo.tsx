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
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base text-gray-900">{t.turmas.myClasses}</h3>
      </div>

      {/* Turma cards */}
      <div className="grid grid-cols-2 gap-3">
        {turmas.map((turma) => (
          <div
            key={turma.id}
            className="bg-gray-50 rounded-xl p-4 border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-blue-200"
          >
            <p className="font-semibold text-sm text-gray-900">{turma.name}</p>
            <p className="text-xs text-blue-600 mt-0.5">{turma.subject}</p>
            <div className="mt-3">
              <span className="text-xs text-gray-500">
                {turma.students} {t.turmas.students}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
