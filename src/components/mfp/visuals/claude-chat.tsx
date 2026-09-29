import { VisualFrame } from "./frame";

// Conversa ilustrativa com um dos prompts do guia
export function ClaudeChat() {
    return (
        <VisualFrame title="Claude  |  Análise financeira" note="Ilustração com dados de exemplo">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[var(--navy)] p-3.5 leading-snug text-white">
                Analise a DRE dos últimos 12 meses e identifique as 3 maiores variações de margem, com a causa provável.
            </div>
            <div className="mt-4 rounded-2xl rounded-bl-md bg-[var(--paper-2)] p-4 leading-relaxed">
                <p className="font-semibold">As 3 maiores variações de margem bruta:</p>
                <table className="mt-3 w-full text-[12.5px]">
                    <thead>
                        <tr className="border-b border-[var(--grid)] text-left text-[var(--ink-3)]">
                            <th className="pb-1.5 font-medium">Mês</th>
                            <th className="pb-1.5 text-right font-medium">Variação</th>
                            <th className="pb-1.5 pl-3 font-medium">Causa provável</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["Mar", "−3,1 p.p.", "Reajuste de insumos sem repasse"],
                            ["Jul", "+2,4 p.p.", "Mix com mais serviços"],
                            ["Nov", "−1,8 p.p.", "Descontos da Black Friday"],
                        ].map(([m, v, c]) => (
                            <tr key={m} className="border-b border-[var(--grid)] last:border-b-0">
                                <td className="py-1.5">{m}</td>
                                <td className={`py-1.5 text-right font-semibold ${v.startsWith("−") ? "text-[var(--pen)]" : "text-[var(--ok)]"}`}>{v}</td>
                                <td className="py-1.5 pl-3 text-[var(--ink-2)]">{c}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-3 text-[var(--ink-2)]">Sugestão: revisar a política de repasse de preço antes do próximo reajuste.</p>
            </div>
        </VisualFrame>
    );
}
