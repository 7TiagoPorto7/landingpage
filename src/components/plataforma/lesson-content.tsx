import { ReactNode } from "react";
import { MOD01_CONTENT } from "./content/mod01";
import { MOD02_CONTENT } from "./content/mod02";
import { MOD03_CONTENT } from "./content/mod03";
import { MOD04_CONTENT } from "./content/mod04";
import { MOD05_CONTENT } from "./content/mod05";

/* ═══════════════════════════════════════════════════════════════════
   CONTEÚDO DAS AULAS — Centralizado
   
   Para adicionar conteúdo a uma aula:
   1. Encontre o arquivo do módulo em ./content/modXX.tsx
   2. Adicione a entrada com o slug da aula
   ═══════════════════════════════════════════════════════════════════ */

export const LESSON_CONTENT: Record<string, () => ReactNode> = {
  ...MOD01_CONTENT,
  ...MOD02_CONTENT,
  ...MOD03_CONTENT,
  ...MOD04_CONTENT,
  ...MOD05_CONTENT,
};
