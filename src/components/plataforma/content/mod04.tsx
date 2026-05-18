import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 4: Valuation — Fluxo de Caixa Descontado (DCF)
   ═══════════════════════════════════════════════════════════════════ */

export const MOD04_CONTENT: Record<string, () => ReactNode> = {
  "valor-dinheiro-tempo": () => (<>
    <h2>Valor do Dinheiro no Tempo</h2>
    <p>O conceito fundamental de valuation: <strong>R$ 1 hoje vale mais que R$ 1 amanhã</strong>, porque pode ser investido e gerar retorno.</p>
    <h2>Valor Presente</h2>
    <div className="lesson-formula">VP = VF / (1 + r)ⁿ</div>
    <p>Onde <strong>r</strong> = taxa de desconto e <strong>n</strong> = número de períodos.</p>
    <h2>Aplicação no DCF</h2>
    <p>O valuation por DCF é a aplicação direta deste conceito: trazemos todos os fluxos de caixa futuros a valor presente, usando o custo de capital como taxa de desconto.</p>
    <div className="lesson-formula">Valor da Empresa = Σ FCF / (1 + WACC)ⁿ</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A taxa de desconto embute três componentes: valor do tempo (taxa livre de risco), risco do negócio (prêmio de risco), e risco país. Entender cada componente é essencial.</div>
  </>),

  "fcff": () => (<>
    <h2>Fluxo de Caixa Livre para a Firma (FCFF)</h2>
    <p>O <strong>FCFF</strong> representa o caixa disponível para todos os provedores de capital (acionistas e credores) após investimentos.</p>
    <div className="lesson-formula">FCFF = EBIT × (1 - t) + D&A - CAPEX - ΔNCG</div>
    <h2>Componentes</h2>
    <ul>
      <li><strong>EBIT × (1-t):</strong> NOPAT — lucro operacional após impostos teóricos</li>
      <li><strong>D&A:</strong> Adicionamos de volta (não-caixa)</li>
      <li><strong>CAPEX:</strong> Investimentos em ativos fixos</li>
      <li><strong>ΔNCG:</strong> Variação do capital de giro operacional</li>
    </ul>
    <h2>Por que FCFF e não Lucro?</h2>
    <p>O lucro é contábil e pode ser manipulado. O FCFF mostra o dinheiro real gerado, independente da estrutura de capital (não considera juros).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O FCFF é descontado pelo WACC (custo médio ponderado de capital) para chegar ao Enterprise Value. Para chegar ao Equity Value, subtraia a dívida líquida.</div>
  </>),

  "fcfe": () => (<>
    <h2>Fluxo de Caixa Livre para o Acionista (FCFE)</h2>
    <p>O <strong>FCFE</strong> é o caixa disponível exclusivamente para os acionistas, após pagar credores.</p>
    <div className="lesson-formula">FCFE = Lucro Líquido + D&A - CAPEX - ΔNCG + Emissão Dívida - Amortização Dívida</div>
    <h2>FCFF vs. FCFE</h2>
    <ul>
      <li><strong>FCFF:</strong> Para todos os provedores de capital → desconta pelo WACC → Enterprise Value</li>
      <li><strong>FCFE:</strong> Só para acionistas → desconta pelo Ke (custo do equity) → Equity Value direto</li>
    </ul>
    <h2>Quando Usar Cada Um?</h2>
    <ul>
      <li><strong>FCFF:</strong> Preferível na maioria dos casos (mais estável, não depende da estrutura de capital)</li>
      <li><strong>FCFE:</strong> Útil para bancos e instituições financeiras onde a dívida é parte da operação</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Em 90% dos casos de modelagem financeira, use FCFF + WACC. O FCFE é mais volátil porque inclui movimentações de dívida.</div>
  </>),

  "capm": () => (<>
    <h2>CAPM — Capital Asset Pricing Model</h2>
    <p>O <strong>CAPM</strong> calcula o custo do equity (Ke) — o retorno mínimo exigido pelos acionistas.</p>
    <div className="lesson-formula">Ke = Rf + β × (Rm - Rf) + Risco País</div>
    <h2>Componentes</h2>
    <ul>
      <li><strong>Rf:</strong> Taxa livre de risco (Treasury 10Y dos EUA ≈ 4-5%)</li>
      <li><strong>β (Beta):</strong> Sensibilidade da ação ao mercado. β = 1 → risco igual ao mercado</li>
      <li><strong>Rm - Rf:</strong> Prêmio de risco do mercado (histórico ≈ 5-6%)</li>
      <li><strong>Risco País:</strong> CDS ou EMBI+ do Brasil (≈ 2-3%)</li>
    </ul>
    <h2>Beta Alavancado vs. Desalavancado</h2>
    <div className="lesson-formula">βL = βU × [1 + (1-t) × (D/E)]</div>
    <p>O beta desalavancado (βU) reflete apenas o risco operacional. Ao re-alavancar com a estrutura de capital alvo, obtemos o beta do equity.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Use o beta de empresas comparáveis, desalavanque pela estrutura delas, e re-alavanque pela estrutura alvo da empresa analisada.</div>
  </>),

  "custo-divida": () => (<>
    <h2>Custo da Dívida (Kd)</h2>
    <p>O <strong>Kd</strong> é a taxa efetiva que a empresa paga por seu financiamento de terceiros.</p>
    <div className="lesson-formula">Kd após impostos = Kd bruto × (1 - t)</div>
    <h2>Como Obter o Kd</h2>
    <ul>
      <li><strong>Despesa Financeira / Dívida Média:</strong> Kd implícito histórico</li>
      <li><strong>Yield to Maturity:</strong> De bonds/debêntures no mercado</li>
      <li><strong>Spread de crédito:</strong> Taxa base + spread pelo rating da empresa</li>
    </ul>
    <h2>Benefício Fiscal da Dívida</h2>
    <p>Juros são dedutíveis de impostos, gerando o <strong>tax shield</strong>. Por isso usamos Kd × (1-t) no WACC — a dívida é &quot;mais barata&quot; do que parece devido ao benefício fiscal.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No Brasil, considere IR/CSLL de 34% no tax shield. Para empresas no Simples ou Lucro Presumido, o benefício fiscal pode ser diferente.</div>
  </>),

  "estrutura-capital": () => (<>
    <h2>Estrutura de Capital Ótima</h2>
    <p>A <strong>estrutura de capital</strong> é a proporção entre dívida e equity que a empresa utiliza para financiar suas operações.</p>
    <h2>Trade-off</h2>
    <ul>
      <li><strong>Mais dívida:</strong> Menor WACC (dívida é mais barata + tax shield), MAS maior risco de default</li>
      <li><strong>Menos dívida:</strong> Menor risco financeiro, MAS maior WACC (equity é mais caro)</li>
    </ul>
    <h2>No Modelo DCF</h2>
    <p>Use a <strong>estrutura de capital alvo</strong> (target capital structure) no WACC, não a estrutura atual:</p>
    <ul>
      <li>Empresas maduras: Use a média histórica ou média do setor</li>
      <li>Empresas em transição: Use a estrutura para onde a empresa está convergindo</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Evite usar a estrutura de capital de um único momento. Ela pode estar distorcida por eventos pontuais (aquisição recente, emissão de ações). Use a média de 3-5 anos ou a estrutura alvo declarada pela gestão.</div>
  </>),

  "calculo-wacc": () => (<>
    <h2>Cálculo do WACC</h2>
    <p>O <strong>WACC</strong> (Weighted Average Cost of Capital) é a taxa que reflete o custo médio de todas as fontes de capital.</p>
    <div className="lesson-formula">WACC = Ke × (E / V) + Kd × (1-t) × (D / V)</div>
    <h2>Variáveis</h2>
    <ul>
      <li><strong>Ke:</strong> Custo do equity (CAPM)</li>
      <li><strong>Kd:</strong> Custo da dívida bruto</li>
      <li><strong>t:</strong> Alíquota efetiva de impostos</li>
      <li><strong>E:</strong> Valor de mercado do equity</li>
      <li><strong>D:</strong> Valor de mercado da dívida</li>
      <li><strong>V:</strong> E + D (valor total)</li>
    </ul>
    <h2>Exemplo Prático</h2>
    <p>Ke = 14%, Kd = 10%, t = 34%, E/V = 60%, D/V = 40%:</p>
    <div className="lesson-formula">WACC = 14% × 0,6 + 10% × (1-0,34) × 0,4 = 8,4% + 2,64% = 11,04%</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O WACC deve ser em termos reais se os fluxos são reais, e nominal se os fluxos são nominais. No Brasil, é mais comum trabalhar com fluxos nominais.</div>
  </>),

  "perpetuidade-gordon": () => (<>
    <h2>Perpetuidade com Crescimento (Gordon Growth)</h2>
    <p>O <strong>Valor Terminal</strong> captura o valor da empresa após o período de projeção explícita, assumindo crescimento constante perpetuamente.</p>
    <div className="lesson-formula">TV = FCF último ano × (1 + g) / (WACC - g)</div>
    <h2>A Taxa de Crescimento (g)</h2>
    <ul>
      <li>Deve ser ≤ crescimento de longo prazo da economia (PIB nominal ≈ 3-5%)</li>
      <li>Nenhuma empresa cresce mais que a economia para sempre</li>
      <li>Empresas maduras: g = inflação (2-3%)</li>
    </ul>
    <h2>Cuidado</h2>
    <p>O Valor Terminal geralmente representa 60-80% do Enterprise Value total. Pequenas mudanças em g ou WACC causam grandes variações no valor.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre faça análise de sensibilidade WACC × g no Valor Terminal. Se o valor muda drasticamente com pequenas variações, o modelo é muito sensível a premissas incertas.</div>
  </>),

  "exit-multiple": () => (<>
    <h2>Múltiplo de Saída (Exit Multiple)</h2>
    <p>Alternativa à perpetuidade: assumimos que a empresa será vendida ao final do período de projeção por um múltiplo de mercado.</p>
    <div className="lesson-formula">TV = EBITDA último ano × Múltiplo EV/EBITDA de saída</div>
    <h2>Qual Múltiplo Usar?</h2>
    <ul>
      <li>Múltiplo atual de empresas comparáveis</li>
      <li>Múltiplo médio histórico do setor</li>
      <li>Múltiplo de transações precedentes</li>
    </ul>
    <h2>Perpetuidade vs. Exit Multiple</h2>
    <ul>
      <li><strong>Perpetuidade:</strong> Mais fundamentalista, mas sensível a g</li>
      <li><strong>Exit Multiple:</strong> Mais prático, mas depende de market conditions</li>
    </ul>
    <p>Na prática, analistas calculam ambos e apresentam um range de valores.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Use o exit multiple como cross-check da perpetuidade. Se os dois métodos dão valores muito diferentes, investigue qual premissa está causando a divergência.</div>
  </>),

  "sensibilidade-wacc-g": () => (<>
    <h2>Tabela de Sensibilidade WACC × g</h2>
    <p>A <strong>análise de sensibilidade</strong> mostra como o valor da empresa muda quando você varia duas premissas-chave simultaneamente.</p>
    <h2>Como Construir</h2>
    <ol>
      <li>No eixo X: varie o WACC (ex: 9% a 13%, em incrementos de 0,5%)</li>
      <li>No eixo Y: varie a taxa g (ex: 1% a 5%, em incrementos de 0,5%)</li>
      <li>Cada célula mostra o valor por ação resultante</li>
      <li>Destaque o cenário base no centro da tabela</li>
    </ol>
    <h2>No Excel</h2>
    <p>Use a ferramenta <strong>Tabela de Dados</strong> (Data Table) com duas variáveis de entrada. É a forma mais eficiente de gerar a matriz automaticamente.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A tabela de sensibilidade é obrigatória em qualquer apresentação de valuation. Ela mostra ao investidor o range de valores possíveis e a sensibilidade do modelo.</div>
  </>),

  "cenarios": () => (<>
    <h2>Cenários: Base, Otimista e Pessimista</h2>
    <p>A <strong>análise de cenários</strong> cria visões completas do negócio sob diferentes conjunturas econômicas e operacionais.</p>
    <h2>Como Estruturar</h2>
    <h3>Cenário Base (probabilidade ~50-60%)</h3>
    <ul>
      <li>Premissas baseadas em guidance e consenso de mercado</li>
      <li>Crescimento moderado, margens estáveis</li>
    </ul>
    <h3>Cenário Otimista (probabilidade ~20-25%)</h3>
    <ul>
      <li>Crescimento acima do esperado</li>
      <li>Melhoria de margens, novos produtos/mercados</li>
    </ul>
    <h3>Cenário Pessimista (probabilidade ~20-25%)</h3>
    <ul>
      <li>Desaceleração econômica, perda de market share</li>
      <li>Compressão de margens, aumento de custos</li>
    </ul>
    <h2>Valor Ponderado</h2>
    <div className="lesson-formula">Valor Esperado = P(base) × V(base) + P(oti) × V(oti) + P(pess) × V(pess)</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Mude premissas operacionais nos cenários (receita, margens, CAPEX), não apenas o WACC. Cenários devem contar uma &quot;história&quot; coerente sobre o futuro da empresa.</div>
  </>),
};
