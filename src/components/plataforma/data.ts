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
  {
    id: "mod-06",
    title: "Modelagem de M&A",
    available: true,
    topics: [
      {
        id: "t06-01",
        title: "Fundamentos de M&A",
        lessons: [
          { id: "tipos-ma", title: "Tipos de Transações (Fusão, Aquisição, Incorporação)", url: "/plataforma/aulas/tipos-ma" },
          { id: "motivacoes-ma", title: "Motivações Estratégicas e Sinergias", url: "/plataforma/aulas/motivacoes-ma" },
          { id: "processo-ma", title: "O Processo de M&A Passo a Passo", url: "/plataforma/aulas/processo-ma" },
        ],
      },
      {
        id: "t06-02",
        title: "Análise de Sinergias",
        lessons: [
          { id: "sinergias-receita", title: "Sinergias de Receita", url: "/plataforma/aulas/sinergias-receita" },
          { id: "sinergias-custo", title: "Sinergias de Custo", url: "/plataforma/aulas/sinergias-custo" },
          { id: "sinergias-financeiras", title: "Sinergias Financeiras e Fiscais", url: "/plataforma/aulas/sinergias-financeiras" },
        ],
      },
      {
        id: "t06-03",
        title: "Accretion/Dilution Analysis",
        lessons: [
          { id: "accretion-dilution", title: "Conceito de Accretion e Dilution", url: "/plataforma/aulas/accretion-dilution" },
          { id: "modelo-accretion", title: "Construção do Modelo Accretion/Dilution", url: "/plataforma/aulas/modelo-accretion" },
          { id: "goodwill-ppa", title: "Goodwill e Purchase Price Allocation (PPA)", url: "/plataforma/aulas/goodwill-ppa" },
        ],
      },
    ],
  },
  {
    id: "mod-07",
    title: "LBO (Leveraged Buyout)",
    available: true,
    topics: [
      {
        id: "t07-01",
        title: "Fundamentos de LBO",
        lessons: [
          { id: "o-que-e-lbo", title: "O que é um LBO?", url: "/plataforma/aulas/o-que-e-lbo" },
          { id: "perfil-empresa-lbo", title: "Perfil de Empresa Ideal para LBO", url: "/plataforma/aulas/perfil-empresa-lbo" },
          { id: "estrutura-financiamento-lbo", title: "Estrutura de Financiamento", url: "/plataforma/aulas/estrutura-financiamento-lbo" },
        ],
      },
      {
        id: "t07-02",
        title: "Construção do Modelo LBO",
        lessons: [
          { id: "sources-uses", title: "Sources & Uses of Funds", url: "/plataforma/aulas/sources-uses" },
          { id: "debt-schedule-lbo", title: "Debt Schedule e Cascata de Pagamento", url: "/plataforma/aulas/debt-schedule-lbo" },
          { id: "retorno-irr-moic", title: "Cálculo de Retorno: IRR e MOIC", url: "/plataforma/aulas/retorno-irr-moic" },
        ],
      },
      {
        id: "t07-03",
        title: "Análise de Retorno",
        lessons: [
          { id: "drivers-retorno-lbo", title: "Drivers de Retorno no LBO", url: "/plataforma/aulas/drivers-retorno-lbo" },
          { id: "sensibilidade-lbo", title: "Sensibilidade: Alavancagem vs. Múltiplo de Saída", url: "/plataforma/aulas/sensibilidade-lbo" },
        ],
      },
    ],
  },
  {
    id: "mod-08",
    title: "Modelagem de Project Finance",
    available: true,
    topics: [
      {
        id: "t08-01",
        title: "Fundamentos de Project Finance",
        lessons: [
          { id: "o-que-e-pf", title: "O que é Project Finance?", url: "/plataforma/aulas/o-que-e-pf" },
          { id: "spe-non-recourse", title: "SPE e Financiamento Non-Recourse", url: "/plataforma/aulas/spe-non-recourse" },
          { id: "setores-pf", title: "Setores: Energia, Infraestrutura e Concessões", url: "/plataforma/aulas/setores-pf" },
        ],
      },
      {
        id: "t08-02",
        title: "Modelo de Project Finance",
        lessons: [
          { id: "premissas-operacionais-pf", title: "Premissas Operacionais e Regulatórias", url: "/plataforma/aulas/premissas-operacionais-pf" },
          { id: "dscr-llcr", title: "DSCR, LLCR e Indicadores de Cobertura", url: "/plataforma/aulas/dscr-llcr" },
          { id: "sculpting-divida", title: "Debt Sculpting e Amortização", url: "/plataforma/aulas/sculpting-divida" },
        ],
      },
    ],
  },
  {
    id: "mod-09",
    title: "Modelagem de Startups e Venture Capital",
    available: true,
    topics: [
      {
        id: "t09-01",
        title: "Valuation de Startups",
        lessons: [
          { id: "desafios-valuation-startup", title: "Desafios do Valuation Pré-Receita", url: "/plataforma/aulas/desafios-valuation-startup" },
          { id: "metodo-vc", title: "Método Venture Capital", url: "/plataforma/aulas/metodo-vc" },
          { id: "scorecard-berkus", title: "Scorecard e Berkus Method", url: "/plataforma/aulas/scorecard-berkus" },
        ],
      },
      {
        id: "t09-02",
        title: "Modelagem Financeira para Startups",
        lessons: [
          { id: "unit-economics", title: "Unit Economics: CAC, LTV e Payback", url: "/plataforma/aulas/unit-economics" },
          { id: "cohort-analysis", title: "Cohort Analysis e Churn", url: "/plataforma/aulas/cohort-analysis" },
          { id: "runway-cash-burn", title: "Runway e Cash Burn Rate", url: "/plataforma/aulas/runway-cash-burn" },
        ],
      },
      {
        id: "t09-03",
        title: "Cap Table e Rodadas",
        lessons: [
          { id: "cap-table", title: "Construção da Cap Table", url: "/plataforma/aulas/cap-table" },
          { id: "diluicao-rodadas", title: "Diluição nas Rodadas de Investimento", url: "/plataforma/aulas/diluicao-rodadas" },
        ],
      },
    ],
  },
  {
    id: "mod-10",
    title: "Boas Práticas em Excel para Modelagem",
    available: true,
    topics: [
      {
        id: "t10-01",
        title: "Estrutura e Organização",
        lessons: [
          { id: "arquitetura-modelo", title: "Arquitetura de um Modelo Profissional", url: "/plataforma/aulas/arquitetura-modelo" },
          { id: "convencoes-formatacao", title: "Convenções de Formatação e Cores", url: "/plataforma/aulas/convencoes-formatacao" },
          { id: "navegacao-auditoria", title: "Navegação e Trilha de Auditoria", url: "/plataforma/aulas/navegacao-auditoria" },
        ],
      },
      {
        id: "t10-02",
        title: "Fórmulas e Funções Avançadas",
        lessons: [
          { id: "index-match", title: "INDEX/MATCH e Referências Dinâmicas", url: "/plataforma/aulas/index-match" },
          { id: "funcoes-financeiras", title: "Funções Financeiras (XNPV, XIRR, PMT)", url: "/plataforma/aulas/funcoes-financeiras" },
          { id: "data-tables-cenarios", title: "Data Tables e Gerenciador de Cenários", url: "/plataforma/aulas/data-tables-cenarios" },
        ],
      },
      {
        id: "t10-03",
        title: "Controle de Erros",
        lessons: [
          { id: "error-checks", title: "Error Checks e Balance Checks", url: "/plataforma/aulas/error-checks" },
          { id: "circularidade", title: "Tratamento de Circularidade", url: "/plataforma/aulas/circularidade" },
        ],
      },
    ],
  },
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
