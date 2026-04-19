"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";

interface Pergunta {
  id: string;
  numero: number;
  cotacao: number;
}

interface Student {
  id: string;
  numero: number;
  name: string;
}

const perguntas: Pergunta[] = [
  { id: "p1", numero: 1, cotacao: 30 },
  { id: "p2", numero: 2, cotacao: 20 },
  { id: "p3", numero: 3, cotacao: 20 },
  { id: "p4", numero: 4, cotacao: 15 },
  { id: "p5", numero: 5, cotacao: 15 },
];

const COTACAO_TOTAL = 100;

const students: Student[] = [
  { id: "1", numero: 1, name: "Ana Silva" },
  { id: "2", numero: 2, name: "Bruno Costa" },
  { id: "3", numero: 3, name: "Carlos Mendes" },
  { id: "4", numero: 4, name: "Diana Ferreira" },
];

type NotasMap = Record<string, Record<string, number | null>>;

const initialNotas: NotasMap = {
  "1": { p1: 27, p2: 18, p3: 16, p4: 13, p5: 12 },
  "2": { p1: 18, p2: 12, p3: 10, p4: 8, p5: 9 },
  "3": { p1: 22, p2: 15, p3: 14, p4: 11, p5: 10 },
  "4": { p1: null, p2: null, p3: null, p4: null, p5: null },
};

type TabView = "pergunta" | "aluno" | "grelha";

function converterParaEscala(pontos: number, total: number): number {
  return (pontos / total) * 20;
}

function getStudentTotal(notas: NotasMap, studentId: string): number {
  const studentNotas = notas[studentId];
  if (!studentNotas) return 0;
  return Object.values(studentNotas).reduce((sum: number, v) => sum + (v ?? 0), 0);
}

function isStudentComplete(notas: NotasMap, studentId: string): boolean {
  const studentNotas = notas[studentId];
  if (!studentNotas) return false;
  return Object.values(studentNotas).every((v) => v !== null);
}

function countCorrected(notas: NotasMap): number {
  return students.filter((s) => isStudentComplete(notas, s.id)).length;
}

export function AvaliacaoDemo() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<TabView>("pergunta");
  const [notas, setNotas] = useState<NotasMap>(initialNotas);
  const [selectedPergunta, setSelectedPergunta] = useState(0);
  const [selectedAluno, setSelectedAluno] = useState(0);

  function updateNota(studentId: string, perguntaId: string, valor: number | null) {
    setNotas((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [perguntaId]: valor,
      },
    }));
  }

  function handleNotaInput(studentId: string, perguntaId: string, raw: string, maxCotacao: number) {
    if (raw === "") {
      updateNota(studentId, perguntaId, null);
      return;
    }
    const valor = parseFloat(raw);
    if (isNaN(valor) || valor < 0) return;
    updateNota(studentId, perguntaId, Math.min(valor, maxCotacao));
  }

  const corrected = countCorrected(notas);

  const tabs: { key: TabView; label: string }[] = [
    { key: "pergunta", label: t.avaliacao.tabPergunta },
    { key: "aluno", label: t.avaliacao.tabAluno },
    { key: "grelha", label: t.avaliacao.tabGrelha },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-line shadow-[0_8px_32px_rgba(31,42,46,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif font-semibold text-base text-ink">{t.avaliacao.testInfo}</h3>
          <p className="text-xs text-ink3 mt-0.5">{t.avaliacao.testMeta}</p>
        </div>
        <div className="bg-sage-bg text-sage-ink px-3 py-1.5 rounded-lg text-xs font-semibold">
          {corrected}/{students.length} {t.avaliacao.corrected}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 bg-paper2 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activeTab === tab.key
                ? "bg-white text-ink shadow-sm"
                : "text-ink3 hover:text-ink2"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "pergunta" && (
        <VistaPorPergunta
          notas={notas}
          selectedIndex={selectedPergunta}
          onSelectIndex={setSelectedPergunta}
          onNotaInput={handleNotaInput}
        />
      )}
      {activeTab === "aluno" && (
        <VistaPorAluno
          notas={notas}
          selectedIndex={selectedAluno}
          onSelectIndex={setSelectedAluno}
          onNotaInput={handleNotaInput}
        />
      )}
      {activeTab === "grelha" && (
        <VistaGrelha notas={notas} onNotaInput={handleNotaInput} />
      )}

      <p className="mt-4 text-center text-xs text-ink3 italic">
        {t.avaliacao.interactiveHint}
      </p>
    </div>
  );
}

/* ── Vista Por Pergunta ── */

function VistaPorPergunta({
  notas,
  selectedIndex,
  onSelectIndex,
  onNotaInput,
}: {
  notas: NotasMap;
  selectedIndex: number;
  onSelectIndex: (i: number) => void;
  onNotaInput: (studentId: string, perguntaId: string, raw: string, max: number) => void;
}) {
  const pergunta = perguntas[selectedIndex];

  const isQuestionComplete = (pId: string) =>
    students.every((s) => notas[s.id]?.[pId] !== null && notas[s.id]?.[pId] !== undefined);

  return (
    <div>
      {/* Question selector */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {perguntas.map((p, i) => {
          const isSelected = i === selectedIndex;
          const isComplete = isQuestionComplete(p.id);

          let cls = "border border-line bg-white text-ink2";
          if (isSelected) cls = "bg-accent text-white border border-accent";
          else if (isComplete) cls = "bg-sage-bg text-sage-ink border border-sage-dot/50";

          return (
            <button
              key={p.id}
              onClick={() => onSelectIndex(i)}
              className={`w-9 h-9 rounded-lg font-semibold text-sm flex items-center justify-center transition-all cursor-pointer ${cls}`}
            >
              {p.numero}
            </button>
          );
        })}
        <span className="text-[11px] text-ink3 flex items-center ml-2">
          P{pergunta.numero} · {pergunta.cotacao} pts
        </span>
      </div>

      {/* Student rows */}
      <div className="space-y-1.5">
        {students.map((student) => {
          const val = notas[student.id]?.[pergunta.id];
          const hasValue = val !== null && val !== undefined;

          return (
            <div
              key={student.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all ${
                hasValue
                  ? "border-line bg-white"
                  : "border-amber-bg bg-amber-bg/30"
              }`}
            >
              <span className="w-6 text-xs text-ink3 font-medium">{student.numero}</span>
              <span className="flex-1 text-sm text-ink font-medium">{student.name}</span>
              <input
                type="number"
                min={0}
                max={pergunta.cotacao}
                step="any"
                value={val ?? ""}
                onChange={(e) => onNotaInput(student.id, pergunta.id, e.target.value, pergunta.cotacao)}
                className={`w-[52px] rounded-lg border px-1.5 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent ${
                  hasValue ? "border-line bg-sage-bg/40" : "border-amber-dot/60 bg-white"
                }`}
                placeholder="—"
              />
              <span className="text-xs text-ink3">/ {pergunta.cotacao}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Vista Por Aluno ── */

function VistaPorAluno({
  notas,
  selectedIndex,
  onSelectIndex,
  onNotaInput,
}: {
  notas: NotasMap;
  selectedIndex: number;
  onSelectIndex: (i: number) => void;
  onNotaInput: (studentId: string, perguntaId: string, raw: string, max: number) => void;
}) {
  const student = students[selectedIndex];
  const total = getStudentTotal(notas, student.id);
  const nota20 = converterParaEscala(total, COTACAO_TOTAL);
  const complete = isStudentComplete(notas, student.id);

  return (
    <div>
      {/* Student selector */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {students.map((s, i) => {
          const isSelected = i === selectedIndex;
          const isDone = isStudentComplete(notas, s.id);

          let cls = "border border-line bg-white text-ink2";
          if (isSelected) cls = "bg-accent text-white border border-accent";
          else if (isDone) cls = "bg-sage-bg text-sage-ink border border-sage-dot/50";

          return (
            <button
              key={s.id}
              onClick={() => onSelectIndex(i)}
              className={`px-3 h-9 rounded-lg font-semibold text-xs flex items-center justify-center transition-all cursor-pointer gap-1 ${cls}`}
            >
              {s.name.split(" ")[0]}
              {isDone && !isSelected && <span>✓</span>}
            </button>
          );
        })}
      </div>

      {/* Questions for selected student */}
      <div className="space-y-1.5">
        {perguntas.map((p) => {
          const val = notas[student.id]?.[p.id];
          const hasValue = val !== null && val !== undefined;

          return (
            <div
              key={p.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all ${
                hasValue ? "border-line bg-white" : "border-amber-bg bg-amber-bg/30"
              }`}
            >
              <span className="w-14 text-xs text-ink3 font-medium">P{p.numero}</span>
              <span className="flex-1 text-xs text-ink3">{p.cotacao} pts</span>
              <input
                type="number"
                min={0}
                max={p.cotacao}
                step="any"
                value={val ?? ""}
                onChange={(e) => onNotaInput(student.id, p.id, e.target.value, p.cotacao)}
                className={`w-[52px] rounded-lg border px-1.5 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent ${
                  hasValue ? "border-line bg-sage-bg/40" : "border-amber-dot/60 bg-white"
                }`}
                placeholder="—"
              />
              <span className="text-xs text-ink3">/ {p.cotacao}</span>
            </div>
          );
        })}
      </div>

      {/* Total bar */}
      <div
        className={`mt-3 flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold ${
          complete
            ? nota20 >= 10
              ? "bg-sage-bg text-sage-ink"
              : "bg-terra-bg text-terra-ink"
            : "bg-paper2 text-ink2"
        }`}
      >
        <span>Total: {total} / {COTACAO_TOTAL} pts</span>
        <span>→ {nota20.toFixed(1)} val</span>
      </div>
    </div>
  );
}

/* ── Vista Grelha ── */

function VistaGrelha({
  notas,
  onNotaInput,
}: {
  notas: NotasMap;
  onNotaInput: (studentId: string, perguntaId: string, raw: string, max: number) => void;
}) {
  const avgPerQuestion = useMemo(() => {
    return perguntas.map((p) => {
      const values = students
        .map((s) => notas[s.id]?.[p.id])
        .filter((v): v is number => v !== null && v !== undefined);
      return values.length > 0 ? values.reduce((sum, v) => sum + v, 0) / values.length : 0;
    });
  }, [notas]);

  const avgTotal = useMemo(() => {
    const totals = students.map((s) => getStudentTotal(notas, s.id));
    return totals.reduce((s, v) => s + v, 0) / students.length;
  }, [notas]);

  const avgNota = converterParaEscala(avgTotal, COTACAO_TOTAL);

  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-paper">
            <th className="sticky left-0 z-10 bg-paper border border-line px-2 py-2 text-left font-medium text-ink2 min-w-[100px]">
              Aluno
            </th>
            {perguntas.map((p) => (
              <th key={p.id} className="border border-line px-1 py-1.5 text-center font-medium text-ink2 min-w-[46px]">
                <div>P{p.numero}</div>
                <div className="text-[10px] font-normal text-ink3">{p.cotacao}</div>
              </th>
            ))}
            <th className="border border-line px-2 py-2 text-center font-medium bg-sage-bg text-sage-ink min-w-[44px]">
              Tot
            </th>
            <th className="border border-line px-2 py-2 text-center font-medium bg-sage-bg text-sage-ink min-w-[44px]">
              Nota
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const total = getStudentTotal(notas, student.id);
            const nota20 = converterParaEscala(total, COTACAO_TOTAL);
            const isPositive = nota20 >= 10;
            const complete = isStudentComplete(notas, student.id);

            return (
              <tr key={student.id} className="hover:bg-paper/50">
                <td className="sticky left-0 z-10 bg-white border border-line px-2 py-1 truncate text-ink font-medium min-w-[100px]">
                  {student.name}
                </td>
                {perguntas.map((p) => {
                  const val = notas[student.id]?.[p.id];
                  return (
                    <td key={p.id} className="border border-line p-0">
                      <input
                        type="number"
                        min={0}
                        max={p.cotacao}
                        step="any"
                        value={val ?? ""}
                        onChange={(e) =>
                          onNotaInput(student.id, p.id, e.target.value, p.cotacao)
                        }
                        className="w-full px-1 py-1.5 text-center text-xs border-none focus:outline-none focus:ring-1 focus:ring-accent bg-transparent"
                        placeholder="—"
                      />
                    </td>
                  );
                })}
                <td className="border border-line px-1 py-1 text-center font-bold bg-sage-bg text-sage-ink">
                  {total}
                </td>
                <td
                  className={`border border-line px-1 py-1 text-center font-bold ${
                    complete
                      ? isPositive
                        ? "text-sage-ink bg-sage-bg/60"
                        : "text-terra-ink bg-terra-bg/60"
                      : "text-ink3 bg-paper"
                  }`}
                >
                  {nota20.toFixed(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-paper2 font-medium">
            <td className="sticky left-0 z-10 bg-paper2 border border-line px-2 py-2 text-ink2">
              Média
            </td>
            {avgPerQuestion.map((avg, i) => (
              <td key={perguntas[i].id} className="border border-line px-1 py-2 text-center text-ink2">
                {avg.toFixed(1)}
              </td>
            ))}
            <td className="border border-line px-1 py-2 text-center bg-sage-bg font-bold text-green-800">
              {avgTotal.toFixed(1)}
            </td>
            <td className="border border-line px-1 py-2 text-center bg-sage-bg font-bold text-green-800">
              {avgNota.toFixed(1)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
