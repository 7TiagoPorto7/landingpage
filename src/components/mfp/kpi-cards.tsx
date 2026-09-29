import { cn } from "@/lib/utils";
import { fmt } from "@/components/mfp/ui";
import { projetar } from "@/components/mfp/projection";

// Cartões de indicadores do topo, com os números do mesmo modelo da planilha interativa
const a = projetar(1)[0];

function Card({ label, value, note, bar, className, tone = "ink" }: { label: string; value: string; note: string; bar: number; className?: string; tone?: "ink" | "ok" | "blue" }) {
    const barColor = tone === "ok" ? "bg-[var(--ok)]" : tone === "blue" ? "bg-[var(--blue)]" : "bg-[var(--navy)]";
    return (
        <div className={cn("w-60 rounded-2xl bg-white p-5 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.45)] ring-1 ring-[var(--grid)]", className)}>
            <p className="text-[13px] text-[var(--ink-3)]">{label}</p>
            <p className={cn("mt-1 text-3xl font-semibold tracking-[-0.02em]", tone === "ok" && "text-[var(--ok)]")}>{value}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--paper-2)]">
                <div className={cn("h-full rounded-full", barColor)} style={{ width: `${bar}%` }} />
            </div>
            <p className="mt-2 text-[13px] text-[var(--ink-2)]">{note}</p>
        </div>
    );
}

export function KpiCards() {
    const margem = (a.lucro / a.receita) * 100;
    return (
        <div aria-label="Indicadores do modelo-exemplo do curso" className="relative mx-auto h-[25rem] w-full max-w-md">
            <Card label="DRE, ano 1" value={`R$ ${fmt(a.lucro)} mil`} note={`Lucro líquido, margem de ${margem.toFixed(1).replace(".", ",")}%`} bar={margem * 5} className="absolute right-2 top-0" />
            <Card label="Fluxo de Caixa, ano 1" value={`R$ ${fmt(a.caixa)} mil`} note="Caixa final, depois do capital de giro" bar={62} tone="blue" className="absolute left-0 top-[8.5rem]" />
            <Card label="Checagem do Balanço" value="0 ✓" note={`Ativo de ${fmt(a.ativo)} = passivo + PL`} bar={100} tone="ok" className="absolute bottom-0 right-6" />
        </div>
    );
}
