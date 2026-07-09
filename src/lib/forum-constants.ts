// Constantes compartilhadas entre server e client components do fórum

export const FORUM_TAGS = [
    "Valuation", "Modelagem", "DRE", "Balanço", "Fluxo de Caixa",
    "Endividamento", "Eficiência", "Risco & Retorno", "Renda Fixa",
    "Derivativos", "Real Estate", "Banking", "Estatística", "Excel",
] as const;

export type ForumTag = typeof FORUM_TAGS[number];

export const TAG_COLORS: Record<string, string> = {
    Valuation: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    Modelagem: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    DRE: "bg-green-500/15 text-green-300 border-green-500/30",
    "Balanço": "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    "Fluxo de Caixa": "bg-amber-500/15 text-amber-300 border-amber-500/30",
    Endividamento: "bg-red-500/15 text-red-300 border-red-500/30",
    "Eficiência": "bg-orange-500/15 text-orange-300 border-orange-500/30",
    "Risco & Retorno": "bg-pink-500/15 text-pink-300 border-pink-500/30",
    "Renda Fixa": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    Derivativos: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    "Real Estate": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    Banking: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    Estatística: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    Excel: "bg-lime-500/15 text-lime-300 border-lime-500/30",
};
