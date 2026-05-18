import type { Module } from "./types";

export const PLATFORM_TITLE = "MODELAGEM FINANCEIRA";
export const PLATFORM_SUBTITLE = "Plataforma de Estudos";

export const modules: Module[] = [
  {
    id: "mod-01",
    title: "Fundamentos de Contabilidade",
    available: true,
    topics: [
      {
        id: "t01-01",
        title: "Demonstrações Financeiras",
        lessons: [
          { id: "balanco-patrimonial", title: "Balanço Patrimonial", url: "/plataforma/aulas/balanco-patrimonial" },
          { id: "dre", title: "DRE - Demonstração de Resultado", url: "/plataforma/aulas/dre" },
          { id: "fluxo-de-caixa-dfc", title: "Fluxo de Caixa (DFC)", url: "/plataforma/aulas/fluxo-de-caixa-dfc" },
          { id: "dmpl-e-dva", title: "DMPL e DVA", url: "/plataforma/aulas/dmpl-e-dva" },
        ],
      },
      {
        id: "t01-02",
        title: "Regime de Competência vs. Caixa",
        lessons: [
          { id: "principio-competencia", title: "Princípio da Competência", url: "/plataforma/aulas/principio-competencia" },
          { id: "regime-caixa", title: "Regime de Caixa", url: "/plataforma/aulas/regime-caixa" },
          { id: "diferenca-competencia-caixa", title: "Diferenças Práticas e Impacto na Modelagem", url: "/plataforma/aulas/diferenca-competencia-caixa" },
        ],
      },
      {
        id: "t01-03",
        title: "Lançamentos Contábeis e Partidas Dobradas",
        lessons: [
          { id: "debito-credito", title: "Débito e Crédito na Contabilidade", url: "/plataforma/aulas/debito-credito" },
          { id: "razonetes", title: "Razonetes e Livro Razão", url: "/plataforma/aulas/razonetes" },
          { id: "ciclo-contabil", title: "Ciclo Contábil Completo", url: "/plataforma/aulas/ciclo-contabil" },
        ],
      },
    ],
  },
  {
    id: "mod-02",
    title: "Análise de Demonstrações Financeiras",
    available: true,
    topics: [
      {
        id: "t02-01",
        title: "Análise Vertical e Horizontal",
        lessons: [
          { id: "analise-vertical-dre", title: "Análise Vertical da DRE", url: "/plataforma/aulas/analise-vertical-dre" },
          { id: "analise-vertical-balanco", title: "Análise Vertical do Balanço", url: "/plataforma/aulas/analise-vertical-balanco" },
          { id: "analise-horizontal", title: "Análise Horizontal Comparativa", url: "/plataforma/aulas/analise-horizontal" },
        ],
      },
      {
        id: "t02-02",
        title: "Indicadores Financeiros",
        lessons: [
          { id: "indicadores-liquidez", title: "Indicadores de Liquidez", url: "/plataforma/aulas/indicadores-liquidez" },
          { id: "indicadores-rentabilidade", title: "Indicadores de Rentabilidade", url: "/plataforma/aulas/indicadores-rentabilidade" },
          { id: "indicadores-endividamento", title: "Indicadores de Endividamento", url: "/plataforma/aulas/indicadores-endividamento" },
          { id: "indicadores-atividade", title: "Indicadores de Atividade (PMR, PMP, PME)", url: "/plataforma/aulas/indicadores-atividade" },
        ],
      },
      {
        id: "t02-03",
        title: "Análise DuPont",
        lessons: [
          { id: "dupont-3-fatores", title: "Decomposição em 3 Fatores", url: "/plataforma/aulas/dupont-3-fatores" },
          { id: "dupont-5-fatores", title: "Decomposição em 5 Fatores", url: "/plataforma/aulas/dupont-5-fatores" },
          { id: "dupont-interpretacao", title: "Interpretação e Casos Práticos", url: "/plataforma/aulas/dupont-interpretacao" },
        ],
      },
    ],
  },
  {
    id: "mod-03",
    title: "Projeção Financeira",
    available: true,
    topics: [
      {
        id: "t03-01",
        title: "Projeção de Receita",
        lessons: [
          { id: "projecao-top-down", title: "Métodos de Projeção Top-Down", url: "/plataforma/aulas/projecao-top-down" },
          { id: "projecao-bottom-up", title: "Métodos de Projeção Bottom-Up", url: "/plataforma/aulas/projecao-bottom-up" },
          { id: "drivers-receita", title: "Análise de Drivers de Receita", url: "/plataforma/aulas/drivers-receita" },
        ],
      },
      {
        id: "t03-02",
        title: "Projeção de Custos e Despesas",
        lessons: [
          { id: "custos-fixos-variaveis", title: "Custos Fixos vs. Variáveis", url: "/plataforma/aulas/custos-fixos-variaveis" },
          { id: "margem-contribuicao", title: "Margem de Contribuição", url: "/plataforma/aulas/margem-contribuicao" },
          { id: "alavancagem-operacional", title: "Alavancagem Operacional", url: "/plataforma/aulas/alavancagem-operacional" },
        ],
      },
      {
        id: "t03-03",
        title: "Projeção do Capital de Giro",
        lessons: [
          { id: "premissas-pmr-pmp-pme", title: "Premissas de PMR, PMP e PME", url: "/plataforma/aulas/premissas-pmr-pmp-pme" },
          { id: "ncg", title: "Necessidade de Capital de Giro (NCG)", url: "/plataforma/aulas/ncg" },
        ],
      },
      {
        id: "t03-04",
        title: "Projeção do Balanço Patrimonial",
        lessons: [
          { id: "projecao-ativo", title: "Projeção do Ativo", url: "/plataforma/aulas/projecao-ativo" },
          { id: "projecao-passivo", title: "Projeção do Passivo e PL", url: "/plataforma/aulas/projecao-passivo" },
          { id: "balanceamento-modelo", title: "Balanceamento do Modelo (Plug)", url: "/plataforma/aulas/balanceamento-modelo" },
        ],
      },
      {
        id: "t03-05",
        title: "Projeção do Fluxo de Caixa",
        lessons: [
          { id: "fluxo-operacional", title: "Fluxo de Caixa Operacional", url: "/plataforma/aulas/fluxo-operacional" },
          { id: "fluxo-investimento", title: "Fluxo de Investimentos (CAPEX)", url: "/plataforma/aulas/fluxo-investimento" },
          { id: "fluxo-financiamento", title: "Fluxo de Financiamento", url: "/plataforma/aulas/fluxo-financiamento" },
        ],
      },
    ],
  },
  {
    id: "mod-04",
    title: "Valuation - Fluxo de Caixa Descontado (DCF)",
    available: true,
    topics: [
      {
        id: "t04-01",
        title: "Conceitos Fundamentais de Valuation",
        lessons: [
          { id: "valor-dinheiro-tempo", title: "Valor do Dinheiro no Tempo", url: "/plataforma/aulas/valor-dinheiro-tempo" },
          { id: "fcff", title: "Fluxo de Caixa Livre para a Firma (FCFF)", url: "/plataforma/aulas/fcff" },
          { id: "fcfe", title: "Fluxo de Caixa Livre para o Acionista (FCFE)", url: "/plataforma/aulas/fcfe" },
        ],
      },
      {
        id: "t04-02",
        title: "Custo de Capital (WACC)",
        lessons: [
          { id: "capm", title: "CAPM e Custo do Equity", url: "/plataforma/aulas/capm" },
          { id: "custo-divida", title: "Custo da Dívida", url: "/plataforma/aulas/custo-divida" },
          { id: "estrutura-capital", title: "Estrutura de Capital Ótima", url: "/plataforma/aulas/estrutura-capital" },
          { id: "calculo-wacc", title: "Cálculo do WACC", url: "/plataforma/aulas/calculo-wacc" },
        ],
      },
      {
        id: "t04-03",
        title: "Valor Terminal",
        lessons: [
          { id: "perpetuidade-gordon", title: "Perpetuidade com Crescimento (Gordon)", url: "/plataforma/aulas/perpetuidade-gordon" },
          { id: "exit-multiple", title: "Múltiplo de Saída (Exit Multiple)", url: "/plataforma/aulas/exit-multiple" },
        ],
      },
      {
        id: "t04-04",
        title: "Análise de Sensibilidade",
        lessons: [
          { id: "sensibilidade-wacc-g", title: "Tabela de Sensibilidade WACC x g", url: "/plataforma/aulas/sensibilidade-wacc-g" },
          { id: "cenarios", title: "Cenários: Base, Otimista e Pessimista", url: "/plataforma/aulas/cenarios" },
        ],
      },
    ],
  },
  {
    id: "mod-05",
    title: "Valuation por Múltiplos",
    available: true,
    topics: [
      {
        id: "t05-01",
        title: "Múltiplos de Mercado",
        lessons: [
          { id: "ev-ebitda", title: "EV/EBITDA", url: "/plataforma/aulas/ev-ebitda" },
          { id: "pe-preco-lucro", title: "P/E (Preço/Lucro)", url: "/plataforma/aulas/pe-preco-lucro" },
          { id: "ev-receita", title: "EV/Receita", url: "/plataforma/aulas/ev-receita" },
          { id: "p-vpa", title: "P/VPA (Preço/Valor Patrimonial)", url: "/plataforma/aulas/p-vpa" },
        ],
      },
      {
        id: "t05-02",
        title: "Seleção de Empresas Comparáveis",
        lessons: [
          { id: "criterios-comparaveis", title: "Critérios de Seleção de Peers", url: "/plataforma/aulas/criterios-comparaveis" },
          { id: "ajustes-multiplos", title: "Ajustes e Normalização de Múltiplos", url: "/plataforma/aulas/ajustes-multiplos" },
          { id: "football-field", title: "Football Field Chart", url: "/plataforma/aulas/football-field" },
        ],
      },
      {
        id: "t05-03",
        title: "Transações Precedentes",
        lessons: [
          { id: "busca-transacoes", title: "Busca e Seleção de Transações", url: "/plataforma/aulas/busca-transacoes" },
          { id: "premio-controle", title: "Prêmio de Controle", url: "/plataforma/aulas/premio-controle" },
          { id: "analise-transacoes", title: "Análise Comparativa de Transações", url: "/plataforma/aulas/analise-transacoes" },
        ],
      },
    ],
  },
  { id: "mod-06", title: "Modelagem de M&A", available: false, topics: [] },
  { id: "mod-07", title: "LBO (Leveraged Buyout)", available: false, topics: [] },
  { id: "mod-08", title: "Modelagem de Project Finance", available: false, topics: [] },
  { id: "mod-09", title: "Modelagem de Startups e Venture Capital", available: false, topics: [] },
  { id: "mod-10", title: "Boas Práticas em Excel para Modelagem", available: false, topics: [] },
];

/* ── Helper: encontrar aula e navegação (anterior/próxima) ──── */
export function findLessonBySlug(slug: string) {
  const allLessons: { lesson: { id: string; title: string; url: string }; moduleName: string; topicName: string }[] = [];
  for (const mod of modules) {
    for (const topic of mod.topics) {
      for (const lesson of topic.lessons) {
        allLessons.push({ lesson, moduleName: mod.title, topicName: topic.title });
      }
    }
  }
  const idx = allLessons.findIndex((l) => l.lesson.id === slug);
  if (idx === -1) return null;
  return {
    ...allLessons[idx],
    prev: idx > 0 ? allLessons[idx - 1].lesson : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1].lesson : null,
  };
}
