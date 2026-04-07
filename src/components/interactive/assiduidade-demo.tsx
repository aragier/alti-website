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
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "✓",
    iconBg: "bg-green-500",
    textColor: "text-green-600",
  },
  absent: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "✗",
    iconBg: "bg-red-500",
    textColor: "text-red-600",
  },
  late: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "⏰",
    iconBg: "bg-amber-500",
    textColor: "text-amber-600",
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
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base text-gray-900">{t.assiduidade.classInfo}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{t.assiduidade.dateInfo}</p>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
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
                <span className="text-sm text-gray-900 font-medium">{student.name}</span>
              </div>
              <span className={`text-xs font-semibold ${config.textColor}`}>
                {getStatusLabel(student.status)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-gray-400 italic">
        {t.assiduidade.interactiveHint}
      </p>
    </div>
  );
}
