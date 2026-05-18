import { ReactNode } from "react";
import { MOD01_CONTENT } from "./content/mod01";
import { MOD02_CONTENT } from "./content/mod02";
import { MOD03_CONTENT } from "./content/mod03";
import { MOD04_CONTENT } from "./content/mod04";
import { MOD05_CONTENT } from "./content/mod05";
import { MOD06_CONTENT } from "./content/mod06";
import { MOD07_CONTENT } from "./content/mod07";
import { MOD08_CONTENT } from "./content/mod08";
import { MOD09_CONTENT } from "./content/mod09";
import { MOD10_CONTENT } from "./content/mod10";

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
  ...MOD06_CONTENT,
  ...MOD07_CONTENT,
  ...MOD08_CONTENT,
  ...MOD09_CONTENT,
  ...MOD10_CONTENT,
};
