import { ReactNode } from "react";

export const MOD10_CONTENT: Record<string, () => ReactNode> = {
  "arquitetura-modelo": () => (<>
    <h2>Arquitetura de um Modelo Profissional</h2>
    <p>Um modelo financeiro bem estruturado segue a regra das <strong>abas separadas por função</strong>:</p>
    <ol>
      <li><strong>Cover:</strong> Título, data, autor, versão e disclaimer</li>
      <li><strong>Assumptions:</strong> Todas as premissas em um só lugar</li>
      <li><strong>Income Statement:</strong> DRE projetada</li>
      <li><strong>Balance Sheet:</strong> Balanço projetado</li>
      <li><strong>Cash Flow:</strong> Fluxo de caixa projetado</li>
      <li><strong>Schedules:</strong> Dívida, depreciação, capital de giro (abas de suporte)</li>
      <li><strong>Valuation:</strong> DCF, múltiplos, sensibilidade</li>
      <li><strong>Output:</strong> Dashboard com indicadores e gráficos</li>
    </ol>
    <h2>Regra de Ouro</h2>
    <div className="lesson-formula">Inputs → Cálculos → Outputs (fluxo unidirecional)</div>
    <p>Nunca misture inputs (premissas) com cálculos. Cada célula deve ser facilmente auditável.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O modelo deve funcionar como um &quot;painel de controle&quot; — altere as premissas e todas as demonstrações se atualizam automaticamente.</div>
  </>),

  "convencoes-formatacao": () => (<>
    <h2>Convenções de Formatação e Cores</h2>
    <p>O padrão de mercado (investment banking) para formatação de modelos:</p>
    <h3>Cores de Fonte</h3>
    <ul>
      <li><strong>Azul:</strong> Inputs/premissas (valores digitados manualmente)</li>
      <li><strong>Preto:</strong> Fórmulas e cálculos</li>
      <li><strong>Verde:</strong> Links de outras abas</li>
      <li><strong>Vermelho:</strong> Links de outros arquivos ou error checks</li>
    </ul>
    <h3>Formatação de Números</h3>
    <ul>
      <li>Números negativos entre parênteses: (1.500) em vez de -1.500</li>
      <li>Separador de milhar: 1.500.000 ou 1,500,000</li>
      <li>Percentuais com 1 casa decimal: 12,5%</li>
      <li>Múltiplos com 1 casa: 8,5x</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A consistência é mais importante que a escolha em si. Defina o padrão no início e siga rigorosamente em todas as abas.</div>
  </>),

  "navegacao-auditoria": () => (<>
    <h2>Navegação e Trilha de Auditoria</h2>
    <p>Um modelo profissional deve ser <strong>navegável e auditável</strong> por qualquer pessoa, sem precisar do autor.</p>
    <h3>Boas Práticas de Navegação</h3>
    <ul>
      <li>Índice na primeira aba com hyperlinks para cada seção</li>
      <li>Cabeçalhos consistentes em todas as abas (empresa, data, unidade)</li>
      <li>Atalhos: <code>Ctrl+[</code> para rastrear precedentes de fórmulas</li>
      <li>Named ranges para premissas-chave</li>
    </ul>
    <h3>Trilha de Auditoria</h3>
    <ul>
      <li><strong>Uma fórmula por coluna:</strong> Nunca mude a fórmula entre colunas da mesma linha</li>
      <li><strong>Sem hardcodes:</strong> Valores fixos apenas na aba de premissas</li>
      <li><strong>Sem circular references:</strong> Ou tratadas com switch explícito</li>
      <li><strong>Comentários:</strong> Em células com lógica complexa ou fontes de dados</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Teste: apague a aba de premissas e veja se todas as fórmulas quebram (bom sinal — significa que tudo está referenciado corretamente).</div>
  </>),

  "index-match": () => (<>
    <h2>INDEX/MATCH e Referências Dinâmicas</h2>
    <p>O <strong>INDEX/MATCH</strong> é superior ao VLOOKUP/HLOOKUP em modelos financeiros por ser mais flexível e robusto.</p>
    <div className="lesson-formula">=INDEX(coluna_resultado, MATCH(valor_buscado, coluna_busca, 0))</div>
    <h2>Vantagens sobre VLOOKUP</h2>
    <ul>
      <li>Busca para a esquerda (VLOOKUP não faz)</li>
      <li>Não quebra ao inserir/remover colunas</li>
      <li>Mais rápido em grandes bases de dados</li>
    </ul>
    <h2>Outras Funções Úteis</h2>
    <ul>
      <li><strong>OFFSET + MATCH:</strong> Referências dinâmicas para séries temporais</li>
      <li><strong>INDIRECT:</strong> Montar referências a outras abas dinamicamente</li>
      <li><strong>SUMPRODUCT:</strong> Somas condicionais sem arrays</li>
      <li><strong>CHOOSE:</strong> Switch entre cenários</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Use <code>=CHOOSE(cenário, valor_base, valor_otimista, valor_pessimista)</code> para alternar entre cenários com um único input.</div>
  </>),

  "funcoes-financeiras": () => (<>
    <h2>Funções Financeiras</h2>
    <h3>XNPV — Valor Presente com Datas</h3>
    <div className="lesson-formula">=XNPV(taxa, fluxos, datas)</div>
    <p>Diferente do NPV, considera datas exatas — essencial quando os fluxos não são igualmente espaçados.</p>
    <h3>XIRR — TIR com Datas</h3>
    <div className="lesson-formula">=XIRR(fluxos, datas)</div>
    <p>Calcula a TIR considerando as datas reais dos fluxos.</p>
    <h3>PMT — Parcela de Financiamento</h3>
    <div className="lesson-formula">=PMT(taxa, nper, pv)</div>
    <p>Calcula a parcela constante de um empréstimo (sistema Price/SAC).</p>
    <h3>Outras Úteis</h3>
    <ul>
      <li><strong>PPMT / IPMT:</strong> Separar principal e juros da parcela</li>
      <li><strong>RATE:</strong> Calcular taxa implícita</li>
      <li><strong>NPER:</strong> Número de parcelas necessárias</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre use XNPV e XIRR em vez de NPV e IRR. As versões com X são mais precisas porque consideram datas reais.</div>
  </>),

  "data-tables-cenarios": () => (<>
    <h2>Data Tables e Gerenciador de Cenários</h2>
    <h3>Data Table (Tabela de Dados)</h3>
    <p>Ferramenta nativa do Excel para criar tabelas de sensibilidade automaticamente:</p>
    <ol>
      <li>Monte a estrutura com uma variável no eixo X e outra no Y</li>
      <li>A célula de interseção aponta para o output (ex: valor por ação)</li>
      <li>Selecione o range → Dados → Tabela de Dados</li>
      <li>Indique as células de input para linha e coluna</li>
    </ol>
    <h3>Gerenciador de Cenários</h3>
    <p>Salva conjuntos de premissas nomeados (Base, Otimista, Pessimista) e alterna entre eles.</p>
    <h3>CHOOSE + Switch</h3>
    <p>Alternativa mais flexível: use uma célula de switch (1, 2, 3) com CHOOSE para alternar cenários automaticamente em todas as fórmulas.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Data Tables recalculam a cada mudança no modelo, podendo torná-lo lento. Desative o cálculo automático de Data Tables em Fórmulas → Opções de Cálculo.</div>
  </>),

  "error-checks": () => (<>
    <h2>Error Checks e Balance Checks</h2>
    <p>Todo modelo profissional deve ter uma seção dedicada a verificação de erros.</p>
    <h2>Checks Obrigatórios</h2>
    <ul>
      <li><strong>Balance Check:</strong> Ativo - (Passivo + PL) = 0</li>
      <li><strong>Cash Flow Check:</strong> Variação de caixa = Caixa final - Caixa inicial</li>
      <li><strong>Lucro Acumulado:</strong> Saldo anterior + LL - Dividendos = Saldo atual</li>
      <li><strong>Dívida:</strong> Saldo anterior + Captação - Amortização = Saldo atual</li>
    </ul>
    <h2>Implementação</h2>
    <p>Crie uma aba &quot;Checks&quot; com semáforo visual:</p>
    <ul>
      <li>✅ Verde: Check OK (diferença &lt; 0,01)</li>
      <li>❌ Vermelho: Erro detectado</li>
    </ul>
    <div className="lesson-formula">=IF(ABS(check) &lt; 0,01, &quot;OK&quot;, &quot;ERRO&quot;)</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Use formatação condicional para destacar erros automaticamente. Um bom modelo tem 10-20 checks independentes.</div>
  </>),

  "circularidade": () => (<>
    <h2>Tratamento de Circularidade</h2>
    <p>Circularidade ocorre quando uma fórmula referencia a si mesma, direta ou indiretamente. Em modelos financeiros, é comum no cálculo de juros.</p>
    <h2>Exemplo Clássico</h2>
    <p>Juros dependem do saldo de caixa → Caixa depende do lucro → Lucro depende dos juros → Circular!</p>
    <h2>Soluções</h2>
    <h3>1. Cálculo Iterativo do Excel</h3>
    <p>Arquivo → Opções → Fórmulas → Habilitar cálculo iterativo. O Excel resolve a circularidade por iteração.</p>
    <h3>2. Circuit Breaker (Switch)</h3>
    <p>Crie uma célula switch (0 ou 1). Quando = 0, a circularidade é quebrada (juros = 0). Quando = 1, calcula normalmente.</p>
    <div className="lesson-formula">=IF(switch=1, fórmula_circular, 0)</div>
    <h3>3. Copy-Paste Values</h3>
    <p>Calcule com iterativo ligado, depois cole como valores para eliminar a circularidade.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O método do switch é o mais profissional. Muitos bancos de investimento proíbem cálculo iterativo nos modelos — o switch é a alternativa aceita.</div>
  </>),
};
