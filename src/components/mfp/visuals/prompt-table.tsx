import { cn } from "@/lib/utils";
import { VisualFrame } from "./frame";

// Linhas reais da planilha de prompts
const ROWS = [
    { n: 87, prompt: "Atue como um analista de FP&A sênior. Calcule o LTV/CAC e construa uma coorte...", out: "Coorte com LTV/CAC dinâmico e retenção mensal", f: "=PROCV(), =SOMARPRODUTO()", level: "Avançado" },
    { n: 42, prompt: "Analise essa base de vendas. Identifique sazonalidade e aplique Pareto (80/20)...", out: "Curva ABC e mapa de sazonalidade", f: "=SOMASES(), =ÍNDICE()", level: "Intermediário" },
    { n: 12, prompt: "Crie uma formatação condicional que destaque em vermelho as linhas onde a DRE < 0...", out: "DRE destacando prejuízos automaticamente", f: "Formatação condicional", level: "Básico" },
    { n: 99, prompt: "Configure um modelo de Black-Scholes para precificar calls e puts...", out: "Calculadora com d1, d2, N(d1), N(d2) e preço", f: "=DIST.NORM.N(), =EXP()", level: "Expert" },
];

const LEVEL: Record<string, string> = {
    Básico: "bg-[#e8f4ee] text-[var(--ok)]",
    Intermediário: "bg-[#e7effd] text-[var(--blue-2)]",
    Avançado: "bg-[#fdf1dc] text-[#b45309]",
    Expert: "bg-[var(--navy)] text-white",
};

export function PromptTable() {
    return (
        <VisualFrame title="100_Prompts_Excel_IA.xlsx" note="Trechos reais da planilha">
            <ul className="space-y-3">
                {ROWS.map((r) => (
                    <li key={r.n} className="rounded-xl bg-[var(--paper-2)] p-3.5">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-[11px] font-semibold text-[var(--ink-3)]">Prompt {r.n}</span>
                            <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold", LEVEL[r.level])}>{r.level}</span>
                        </div>
                        <p className="mt-1.5 leading-snug text-[var(--ink)]">“{r.prompt}”</p>
                        <p className="mt-1.5 text-[12px] text-[var(--ink-2)]">
                            <span className="font-semibold">Você recebe:</span> {r.out}
                            <span className="ml-2 font-mono text-[11px] text-[var(--ink-3)]">{r.f}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </VisualFrame>
    );
}
