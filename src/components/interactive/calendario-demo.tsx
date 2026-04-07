"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface CalendarEvent {
  day: number;
  month: number;
  year: number;
  type: "lesson" | "meeting" | "activity";
}

const initialEvents: CalendarEvent[] = [
  { day: 7, month: 3, year: 2026, type: "lesson" },
  { day: 9, month: 3, year: 2026, type: "meeting" },
  { day: 10, month: 3, year: 2026, type: "lesson" },
  { day: 14, month: 3, year: 2026, type: "activity" },
  { day: 15, month: 3, year: 2026, type: "lesson" },
  { day: 17, month: 3, year: 2026, type: "lesson" },
  { day: 21, month: 3, year: 2026, type: "lesson" },
  { day: 23, month: 3, year: 2026, type: "meeting" },
  { day: 24, month: 3, year: 2026, type: "lesson" },
  { day: 28, month: 3, year: 2026, type: "activity" },
  { day: 5, month: 4, year: 2026, type: "lesson" },
  { day: 8, month: 4, year: 2026, type: "meeting" },
  { day: 12, month: 4, year: 2026, type: "lesson" },
  { day: 15, month: 4, year: 2026, type: "activity" },
];

const eventColors: Record<string, string> = {
  lesson: "bg-green-500",
  meeting: "bg-red-500",
  activity: "bg-amber-500",
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export function CalendarioDemo() {
  const { t } = useI18n();
  const [month, setMonth] = useState(3); // April (0-indexed)
  const [year, setYear] = useState(2026);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const isCurrentMonth = month === 3 && year === 2026;

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
    setSelectedDay(null);
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
    setSelectedDay(null);
  }

  function getEventsForDay(day: number) {
    return events.filter(
      (e) => e.day === day && e.month === month && e.year === year
    );
  }

  function handleDayClick(day: number) {
    setSelectedDay(selectedDay === day ? null : day);
  }

  function addEvent(day: number, type: CalendarEvent["type"]) {
    setEvents([...events, { day, month, year, type }]);
  }

  // Build calendar grid
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-base text-gray-900">
          {t.calendario.months[month]} {year}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextMonth}
            className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {t.calendario.weekdays.map((day) => (
          <div key={day} className="text-xs font-semibold text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="py-2" />;
          }

          const dayEvents = getEventsForDay(day);
          const isToday = isCurrentMonth && day === 4;
          const isSelected = selectedDay === day;

          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`relative py-2 rounded-lg text-xs transition-all cursor-pointer ${
                isToday
                  ? "bg-blue-800 text-white font-bold"
                  : isSelected
                  ? "bg-blue-100 text-blue-800 font-semibold"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              {day}
              {dayEvents.length > 0 && (
                <div className="flex gap-0.5 justify-center mt-0.5">
                  {dayEvents.map((e, j) => (
                    <div
                      key={j}
                      className={`w-1.5 h-1.5 rounded-full ${eventColors[e.type]}`}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected day popup */}
      {selectedDay !== null && (
        <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
          <p className="text-xs font-semibold text-gray-900 mb-2">
            {selectedDay} {t.calendario.months[month]}
          </p>
          {getEventsForDay(selectedDay).length > 0 ? (
            <div className="space-y-1">
              {getEventsForDay(selectedDay).map((e, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <div className={`w-2 h-2 rounded-full ${eventColors[e.type]}`} />
                  {e.type === "lesson" && t.calendario.lessons}
                  {e.type === "meeting" && t.calendario.meetings}
                  {e.type === "activity" && t.calendario.activities}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 mb-2">—</p>
          )}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => addEvent(selectedDay, "lesson")}
              className="text-[10px] px-2 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
            >
              + {t.calendario.lessons}
            </button>
            <button
              onClick={() => addEvent(selectedDay, "meeting")}
              className="text-[10px] px-2 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
            >
              + {t.calendario.meetings}
            </button>
            <button
              onClick={() => addEvent(selectedDay, "activity")}
              className="text-[10px] px-2 py-1 bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200 transition-colors"
            >
              + {t.calendario.activities}
            </button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex gap-5 justify-center mt-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          {t.calendario.lessons}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          {t.calendario.meetings}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          {t.calendario.activities}
        </div>
      </div>
    </div>
  );
}
