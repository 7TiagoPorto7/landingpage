/* ═══════════════════════════════════════════════════════
   Tipos da Plataforma de Modelagem Financeira
   ═══════════════════════════════════════════════════════ */

export interface Lesson {
  id: string;
  title: string;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  title: string;
  available: boolean;
  topics: Topic[];
}
