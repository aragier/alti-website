"use client";

import { createContext, useContext } from "react";

export type Locale = "pt" | "en";

export const dictionaries = {
  pt: {
    nav: {
      features: "Funcionalidades",
      howItWorks: "Como Funciona",
      about: "Sobre",
      cta: "Inscrever na lista de espera",
    },
    hero: {
      badge: "Organizar o ensino não precisa de ser difícil",
      title: "A sua sala de aula,\norganizada digitalmente",
      subtitle:
        "Gestão de turmas, assiduidade, planeamento e calendário. Funciona offline. Experimente as funcionalidades abaixo — e entre na lista de espera para ser dos primeiros a usar.",
      cta: "Inscrever na lista de espera",
      explore: "↓ Explorar",
    },
    turmas: {
      badge: "Gestão de Turmas",
      title: "Todas as suas turmas\nnum só lugar",
      description:
        "Crie turmas, adicione alunos, defina disciplinas e escalas de avaliação. Alterne entre vista de cards e tabela.",
      checks: [
        "Vista em cards e tabela",
        "Filtros por ano e disciplina",
        "Perfil detalhado de cada aluno",
      ],
      myClasses: "Minhas Turmas",
      newClass: "+ Nova Turma",
      students: "alunos",
      attendance: "assid.",
      addPlaceholder: "Adicionar Turma",
      addHint: "experimente clicar",
      interactiveHint: "👆 Interativo — experimente clicar e explorar",
      formTitle: "Nova Turma",
      formName: "Nome da Turma",
      formNamePlaceholder: "ex: 9ºC",
      formSubject: "Disciplina",
      formSubjectPlaceholder: "ex: Português",
      formCancel: "Cancelar",
      formAdd: "Adicionar",
      math: "Matemática",
    },
    assiduidade: {
      badge: "Assiduidade",
      title: "Registo de faltas\nem segundos",
      description:
        "Marque presenças e faltas com um toque. Justificadas, injustificadas, atrasos — tudo registado e contabilizado automaticamente.",
      checks: [
        "Um toque por aluno",
        "Justificada, injustificada, atraso",
        "Estatísticas por turma e aluno",
      ],
      classInfo: "7ºA — Matemática",
      dateInfo: "4 Abril 2026 · 10:30",
      present: "Presente",
      absent: "Falta",
      late: "Atraso",
      interactiveHint: "👆 Clique para alternar o estado",
    },
    avaliacao: {
      badge: "Avaliação",
      title: "Notas lançadas\nem segundos",
      description:
        "Crie instrumentos de avaliação com perguntas, lance notas por pergunta, por aluno ou em grelha. Tudo calculado automaticamente na escala definida.",
      checks: [
        "Vista por pergunta, aluno e grelha",
        "Cálculo automático na escala 0-20",
        "Progresso de correção em tempo real",
      ],
      testInfo: "Teste 1 — Matemática",
      testMeta: "7ºA · 100 pts · Escala 0-20",
      corrected: "corrigidos",
      tabPergunta: "Por Pergunta",
      tabAluno: "Por Aluno",
      tabGrelha: "Grelha",
      interactiveHint: "👆 Interativo — mude de tab, edite notas e explore",
    },
    calendario: {
      badge: "Calendário",
      title: "Tudo organizado\nno tempo",
      description:
        "Aulas, reuniões, atividades e períodos letivos. Visualize tudo num calendário e nunca perca uma data importante.",
      checks: [
        "Vista mensal com eventos",
        "Períodos letivos e férias",
        "Contagem de aulas dadas/restantes",
      ],
      weekdays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      months: [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
      ],
      lessons: "Aulas",
      meetings: "Reuniões",
      activities: "Atividades",
    },
    offline: {
      title: "Funciona Offline",
      description:
        "Sem internet? Sem problema. Todas as funcionalidades disponíveis offline. Os dados sincronizam automaticamente quando voltar a ter ligação.",
      stat1: "Funcional Offline",
      stat2: "Sincronização",
      stat3: "Instalável",
    },
    cta: {
      title: "Seja dos primeiros\na experimentar",
      subtitle: "Estamos a preparar tudo. Deixe o seu email e avisamos assim que estiver disponível.",
      button: "Inscrever na lista de espera",
      placeholder: "O seu email",
      success: "Está na lista! 🎉",
      successSub: "Avisamos assim que o Profeli estiver disponível.",
      count: "professores já na lista",
    },
    footer: {
      description: "Ferramenta digital para professores em Portugal. Gestão simplificada de turmas, assiduidade e planeamento.",
      product: "Produto",
      features: "Funcionalidades",
      pricing: "Preços",
      demo: "Demo",
      support: "Suporte",
      help: "Centro de Ajuda",
      contact: "Contacto",
      privacy: "Privacidade",
      legal: "Legal",
      terms: "Termos de Uso",
      privacyPolicy: "Política de Privacidade",
      cookies: "Cookies",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      about: "About",
      cta: "Join Waitlist",
    },
    hero: {
      badge: "Organized teaching does not need to be hard",
      title: "Your classroom,\ndigitally organized",
      subtitle:
        "Class management, attendance, planning and calendar. Works offline. Try the features below — and join the waitlist to be among the first to use it.",
      cta: "Join Waitlist",
      explore: "↓ Explore",
    },
    turmas: {
      badge: "Class Management",
      title: "All your classes\nin one place",
      description:
        "Create classes, add students, set subjects and grading scales. Switch between card and table views.",
      checks: [
        "Card and table views",
        "Filter by year and subject",
        "Detailed student profiles",
      ],
      myClasses: "My Classes",
      newClass: "+ New Class",
      students: "students",
      attendance: "attend.",
      addPlaceholder: "Add Class",
      addHint: "try clicking",
      interactiveHint: "👆 Interactive — try clicking and exploring",
      formTitle: "New Class",
      formName: "Class Name",
      formNamePlaceholder: "e.g. 9C",
      formSubject: "Subject",
      formSubjectPlaceholder: "e.g. Portuguese",
      formCancel: "Cancel",
      formAdd: "Add",
      math: "Mathematics",
    },
    assiduidade: {
      badge: "Attendance",
      title: "Record absences\nin seconds",
      description:
        "Mark attendance with a single tap. Justified, unjustified, late — everything recorded and counted automatically.",
      checks: [
        "One tap per student",
        "Justified, unjustified, late",
        "Stats by class and student",
      ],
      classInfo: "7A — Mathematics",
      dateInfo: "April 4, 2026 · 10:30 AM",
      present: "Present",
      absent: "Absent",
      late: "Late",
      interactiveHint: "👆 Click to toggle state",
    },
    avaliacao: {
      badge: "Grading",
      title: "Grades entered\nin seconds",
      description:
        "Create assessment instruments with questions, enter grades by question, by student, or in a grid. Everything calculated automatically in the defined scale.",
      checks: [
        "View by question, student, and grid",
        "Automatic calculation on 0-20 scale",
        "Real-time grading progress",
      ],
      testInfo: "Test 1 — Mathematics",
      testMeta: "7A · 100 pts · Scale 0-20",
      corrected: "graded",
      tabPergunta: "By Question",
      tabAluno: "By Student",
      tabGrelha: "Grid",
      interactiveHint: "👆 Interactive — switch tabs, edit grades and explore",
    },
    calendario: {
      badge: "Calendar",
      title: "Everything organized\nin time",
      description:
        "Lessons, meetings, activities and school periods. View everything on a calendar and never miss an important date.",
      checks: [
        "Monthly view with events",
        "School periods and holidays",
        "Lesson count (given/remaining)",
      ],
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      lessons: "Lessons",
      meetings: "Meetings",
      activities: "Activities",
    },
    offline: {
      title: "Works Offline",
      description:
        "No internet? No problem. All features available offline. Data syncs automatically when you reconnect.",
      stat1: "Fully Offline",
      stat2: "Auto Sync",
      stat3: "Installable",
    },
    cta: {
      title: "Be among the first\nto try it",
      subtitle: "We're getting everything ready. Leave your email and we'll let you know as soon as it's available.",
      button: "Join Waitlist",
      placeholder: "Your email",
      success: "You're on the list! 🎉",
      successSub: "We'll let you know as soon as Profeli is available.",
      count: "teachers already on the list",
    },
    footer: {
      description: "Digital tool for teachers in Portugal. Simplified management of classes, attendance and planning.",
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      demo: "Demo",
      support: "Support",
      help: "Help Center",
      contact: "Contact",
      privacy: "Privacy",
      legal: "Legal",
      terms: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      cookies: "Cookies",
      rights: "All rights reserved.",
    },
  },
};

export type Dictionary = {
  nav: { features: string; howItWorks: string; about: string; cta: string };
  hero: { badge: string; title: string; subtitle: string; cta: string; explore: string };
  turmas: {
    badge: string; title: string; description: string; checks: string[];
    myClasses: string; newClass: string; students: string; attendance: string;
    addPlaceholder: string; addHint: string; interactiveHint: string;
    formTitle: string; formName: string; formNamePlaceholder: string;
    formSubject: string; formSubjectPlaceholder: string;
    formCancel: string; formAdd: string; math: string;
  };
  assiduidade: {
    badge: string; title: string; description: string; checks: string[];
    classInfo: string; dateInfo: string;
    present: string; absent: string; late: string; interactiveHint: string;
  };
  avaliacao: {
    badge: string; title: string; description: string; checks: string[];
    testInfo: string; testMeta: string; corrected: string;
    tabPergunta: string; tabAluno: string; tabGrelha: string;
    interactiveHint: string;
  };
  calendario: {
    badge: string; title: string; description: string; checks: string[];
    weekdays: string[]; months: string[];
    lessons: string; meetings: string; activities: string;
  };
  offline: { title: string; description: string; stat1: string; stat2: string; stat3: string };
  cta: {
    title: string; subtitle: string; button: string;
    placeholder: string; success: string; successSub: string; count: string;
  };
  footer: {
    description: string; product: string; features: string; pricing: string;
    demo: string; support: string; help: string; contact: string;
    privacy: string; legal: string; terms: string; privacyPolicy: string;
    cookies: string; rights: string;
  };
};

export const I18nContext = createContext<{
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}>({
  locale: "pt",
  t: dictionaries.pt,
  setLocale: () => {},
});

export function useI18n() {
  return useContext(I18nContext);
}
