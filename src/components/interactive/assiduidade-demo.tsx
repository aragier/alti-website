"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type Status = "present" | "absent" | "late";

interface Student {
  id: string;
  name: string;
  status: Status;
}

const initialStudents: Student[] = [
  { id: "1", name: "Ana Silva", status: "present" },
  { id: "2", name: "Bruno Costa", status: "absent" },
  { id: "3", name: "Carlos Mendes", status: "late" },
  { id: "4", name: "Diana Ferreira", status: "present" },
];

const statusCycle: Status[] = ["present", "absent", "late"];

const statusConfig: Record<Status, { bg: string; border: string; icon: string; iconBg: string; textColor: string }> = {
  present: {
    bg: "bg-sage-bg",
    border: "border-sage-bg",
    icon: "✓",
    iconBg: "bg-sage-dot",
    textColor: "text-sage-ink",
  },
  absent: {
    bg: "bg-terra-bg",
    border: "border-terra-bg",
    icon: "✗",
    iconBg: "bg-terra-dot",
    textColor: "text-terra-ink",
  },
  late: {
    bg: "bg-amber-bg",
    border: "border-amber-bg",
    icon: "⏰",
    iconBg: "bg-amber-dot",
    textColor: "text-amber-ink",
  },
};

export function AssiduidadeDemo() {
  const { t } = useI18n();
  const [students, setStudents] = useState<Student[]>(initialStudents);

  function toggleStatus(id: string) {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const currentIndex = statusCycle.indexOf(s.status);
        const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];
        return { ...s, status: nextStatus };
      })
    );
  }

  function getStatusLabel(status: Status): string {
    switch (status) {
      case "present":
        return t.assiduidade.present;
      case "absent":
        return t.assiduidade.absent;
      case "late":
        return t.assiduidade.late;
    }
  }

  const presentCount = students.filter((s) => s.status === "present").length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-line shadow-[0_8px_32px_rgba(31,42,46,0.04)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif font-semibold text-base text-ink">{t.assiduidade.classInfo}</h3>
          <p className="text-xs text-ink3 mt-0.5">{t.assiduidade.dateInfo}</p>
        </div>
        <div className="bg-sage-bg text-sage-ink px-3 py-1.5 rounded-lg text-xs font-semibold">
          {presentCount}/{students.length}
        </div>
      </div>

      <div className="space-y-2">
        {students.map((student) => {
          const config = statusConfig[student.status];
          return (
            <button
              key={student.id}
              onClick={() => toggleStatus(student.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-sm ${config.bg} ${config.border}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 ${config.iconBg} rounded-full text-white flex items-center justify-center text-xs font-bold`}
                >
                  {config.icon}
                </div>
                <span className="text-sm text-ink font-medium">{student.name}</span>
              </div>
              <span className={`text-xs font-semibold ${config.textColor}`}>
                {getStatusLabel(student.status)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-ink3 italic">
        {t.assiduidade.interactiveHint}
      </p>
    </div>
  );
}
