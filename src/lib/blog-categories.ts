export function getCategory(slug: string): string {
    const s = slug.toLowerCase();
    if (s.includes("valuation") || s.includes("wacc") || s.includes("intrinseco") || s.includes("ev-ebitda") || s.includes("multiplos")) return "Valuation";
    if (s.includes("dre")) return "DRE";
    if (s.includes("balanco") || s.includes("bp") || s.includes("ativo-total") || s.includes("patrimonial")) return "Balanço";
    if (s.includes("fluxo-de-caixa") || s.includes("dfc") || s.includes("fcf") || s.includes("fcfe") || s.includes("fcff") || s.includes("conversao-de-caixa")) return "Fluxo de Caixa";
    if (s.includes("divida") || s.includes("endividamento") || s.includes("debt") || s.includes("cobertura-de-servico")) return "Endividamento";
    if (s.includes("excel") || s.includes("atalhos")) return "Excel";
    if (s.includes("banking") || s.includes("investment-banking") || s.includes("carreira")) return "Banking";
    if (s.includes("duration") || s.includes("spread") || s.includes("renda-fixa") || s.includes("titulo")) return "Renda Fixa";
    if (s.includes("black-scholes") || s.includes("derivativos") || s.includes("opcao") || s.includes("call")) return "Derivativos";
    if (s.includes("mediana") || s.includes("desvio") || s.includes("estatistica") || s.includes("covariancia")) return "Estatística";
    if (s.includes("cagr") || s.includes("roe") || s.includes("roic") || s.includes("roa") || s.includes("margem") || s.includes("ebitda") || s.includes("ebit") || s.includes("cogs") || s.includes("sga") || s.includes("nopat") || s.includes("noplat")) return "Eficiência";
    if (s.includes("risco") || s.includes("retorno") || s.includes("beta") || s.includes("drawdown") || s.includes("perda-esperada") || s.includes("var")) return "Risco & Retorno";
    return "Modelagem";
}

// "O que é EBITDA (Lucro Antes de ...) e como calcular" -> "EBITDA"
export function getCoverLabel(title: string): string {
    const t = title
        .replace(/^(o que (é|são)|como calcular|analisando|desvendando|entendendo)\s+/i, "")
        .replace(/^(o|a|os|as)\s+/i, "")
        .split(/\s+\(|:|\s+e como|\s+-\s+|\s+–\s+|,/)[0]
        .trim();
    return t.length > 42 ? t.slice(0, 40).trim() + "…" : t;
}
