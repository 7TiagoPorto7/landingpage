import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 7: LBO (Leveraged Buyout)
   ═══════════════════════════════════════════════════════════════════ */

export const MOD07_CONTENT: Record<string, () => ReactNode> = {
  "o-que-e-lbo": () => (<>
    <h2>O que é um LBO?</h2>
    <p>Um <strong>Leveraged Buyout (LBO)</strong> é a aquisição de uma empresa utilizando uma proporção significativa de dívida para financiar a compra. Tipicamente realizado por fundos de Private Equity.</p>
    <h2>Estrutura Típica</h2>
    <ul>
      <li><strong>Equity (30-40%):</strong> Capital do fundo de PE</li>
      <li><strong>Dívida (60-70%):</strong> Empréstimos bancários, bonds, mezzanine</li>
    </ul>
    <h2>Lógica do LBO</h2>
    <div className="lesson-formula">Retorno = f(Alavancagem, Crescimento, Expansão de Múltiplo, Paydown de Dívida)</div>
    <p>A dívida é paga com o fluxo de caixa da própria empresa adquirida. O fundo investe pouco capital próprio e busca retornos de 20-25% ao ano (IRR).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O LBO funciona como uma &quot;hipoteca corporativa&quot; — o fundo dá a entrada (equity) e a empresa paga as parcelas (dívida) com seu próprio caixa.</div>
  </>),

  "perfil-empresa-lbo": () => (<>
    <h2>Perfil de Empresa Ideal para LBO</h2>
    <p>Nem toda empresa é candidata a um LBO. As características ideais são:</p>
    <h3>Fluxo de Caixa Estável</h3>
    <ul>
      <li>EBITDA previsível e recorrente</li>
      <li>Baixa ciclicidade — precisa pagar dívida em qualquer cenário</li>
      <li>Contratos de longo prazo ou receita recorrente</li>
    </ul>
    <h3>Baixo CAPEX de Manutenção</h3>
    <ul>
      <li>Alta conversão de EBITDA em Free Cash Flow</li>
      <li>Negócios asset-light são preferíveis</li>
    </ul>
    <h3>Outras Características</h3>
    <ul>
      <li><strong>Posição de mercado forte:</strong> Líder ou top 3 no setor</li>
      <li><strong>Oportunidades de melhoria:</strong> Corte de custos, profissionalização, crescimento</li>
      <li><strong>Ativos como colateral:</strong> Para garantir o financiamento</li>
      <li><strong>Gestão competente:</strong> Ou que possa ser melhorada</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No modelo LBO, teste o downside case: se a receita cair 20%, a empresa ainda consegue pagar a dívida? Se não, o deal é arriscado demais.</div>
  </>),

  "estrutura-financiamento-lbo": () => (<>
    <h2>Estrutura de Financiamento</h2>
    <p>A dívida em um LBO é organizada em camadas (tranches) com diferentes prioridades, custos e prazos:</p>
    <h3>Dívida Sênior (mais barata, mais segura)</h3>
    <ul>
      <li><strong>Revolving Credit Facility:</strong> Linha rotativa para capital de giro</li>
      <li><strong>Term Loan A:</strong> Amortização regular, bancos comerciais</li>
      <li><strong>Term Loan B:</strong> Bullet, investidores institucionais</li>
    </ul>
    <h3>Dívida Subordinada</h3>
    <ul>
      <li><strong>High Yield Bonds:</strong> Títulos com juros altos, sem amortização até vencimento</li>
      <li><strong>Mezzanine:</strong> Híbrido entre dívida e equity, juros altíssimos + warrants</li>
    </ul>
    <h3>Equity</h3>
    <p>Capital do sponsor (fundo de PE), management rollover e co-investidores.</p>
    <div className="lesson-formula">Alavancagem Total = Dívida Total / EBITDA (tipicamente 4-6x)</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Monte o debt schedule com cada tranche separadamente — cada uma tem taxa, prazo e amortização diferente. Isso é essencial para calcular o FCF disponível para paydown.</div>
  </>),

  "sources-uses": () => (<>
    <h2>Sources &amp; Uses of Funds</h2>
    <p>A tabela <strong>Sources &amp; Uses</strong> é o ponto de partida do modelo LBO. Mostra de onde vem o dinheiro e para onde vai.</p>
    <h2>Sources (Fontes)</h2>
    <ul>
      <li>Term Loan A / B</li>
      <li>High Yield Bonds</li>
      <li>Mezzanine</li>
      <li>Equity do Sponsor</li>
      <li>Management Rollover</li>
    </ul>
    <h2>Uses (Usos)</h2>
    <ul>
      <li>Enterprise Value do target (preço de compra)</li>
      <li>Refinanciamento da dívida existente do target</li>
      <li>Taxas de transação (advisory, legal, financing fees)</li>
      <li>Caixa mínimo para operação</li>
    </ul>
    <div className="lesson-formula">Total Sources = Total Uses (sempre)</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> As taxas de transação normalmente representam 3-5% do deal value. Não as ignore — elas aumentam o equity check do sponsor e reduzem o retorno.</div>
  </>),

  "debt-schedule-lbo": () => (<>
    <h2>Debt Schedule e Cascata de Pagamento</h2>
    <p>O <strong>Debt Schedule</strong> projeta saldo, juros e amortização de cada tranche de dívida ao longo do holding period.</p>
    <h2>Cascata de Pagamento (Waterfall)</h2>
    <ol>
      <li><strong>EBITDA</strong></li>
      <li>(-) Impostos (sobre EBIT)</li>
      <li>(-) CAPEX</li>
      <li>(-) Variação de Capital de Giro</li>
      <li>= <strong>Free Cash Flow</strong></li>
      <li>(-) Juros obrigatórios</li>
      <li>(-) Amortização obrigatória</li>
      <li>= <strong>Cash Flow para Paydown Voluntário</strong></li>
    </ol>
    <p>O excesso de caixa é usado para amortizar a dívida mais cara primeiro (cash sweep), reduzindo o custo de financiamento ao longo do tempo.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No Excel, modele o mandatory repayment primeiro. Depois, aplique o cash sweep na dívida mais cara. Use <code>MIN(Caixa Disponível, Saldo da Tranche)</code> para evitar pagar mais do que o saldo devedor.</div>
  </>),

  "retorno-irr-moic": () => (<>
    <h2>Cálculo de Retorno: IRR e MOIC</h2>
    <h3>IRR — Internal Rate of Return</h3>
    <p>A <strong>TIR</strong> é a taxa que iguala o valor presente dos fluxos ao investimento inicial. Meta típica de PE: 20-25%.</p>
    <div className="lesson-formula">IRR: Σ FCF / (1+IRR)ⁿ = Investimento Inicial</div>
    <h3>MOIC — Multiple on Invested Capital</h3>
    <div className="lesson-formula">MOIC = Valor de Saída do Equity / Equity Investido</div>
    <p>Quantas vezes o fundo multiplicou seu investimento. Meta típica: 2-3x em 5 anos.</p>
    <h2>Relação IRR × MOIC</h2>
    <ul>
      <li><strong>2x em 3 anos</strong> ≈ 26% IRR</li>
      <li><strong>2x em 5 anos</strong> ≈ 15% IRR</li>
      <li><strong>3x em 5 anos</strong> ≈ 25% IRR</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O MOIC ignora o tempo; o IRR penaliza. Um deal 3x em 10 anos tem MOIC alto, mas IRR baixo. Fundos avaliam ambas as métricas conjuntamente.</div>
  </>),

  "drivers-retorno-lbo": () => (<>
    <h2>Drivers de Retorno no LBO</h2>
    <p>O retorno do sponsor em um LBO vem de três fontes principais:</p>
    <h3>1. Crescimento do EBITDA</h3>
    <p>Aumento orgânico (receita e margens) e inorgânico (add-on acquisitions). Tipicamente contribui com 30-50% do retorno total.</p>
    <h3>2. Paydown de Dívida (Deleveraging)</h3>
    <p>À medida que a dívida é paga, a fatia do equity no Enterprise Value aumenta. Contribui com 20-40% do retorno.</p>
    <h3>3. Expansão de Múltiplo</h3>
    <p>Se o múltiplo de saída for maior que o de entrada, há ganho adicional. É o driver mais incerto e que o sponsor tem menos controle.</p>
    <div className="lesson-formula">Equity na Saída = EV na Saída - Dívida Remanescente</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Modele o caso conservador sem expansão de múltiplo (saída = entrada). Se o deal ainda gera 15%+ IRR neste cenário, é um investimento robusto.</div>
  </>),

  "sensibilidade-lbo": () => (<>
    <h2>Sensibilidade: Alavancagem vs. Múltiplo de Saída</h2>
    <p>A tabela de sensibilidade do LBO testa o IRR sob diferentes combinações de premissas.</p>
    <h2>Variáveis Comuns</h2>
    <ul>
      <li><strong>Eixo X:</strong> Múltiplo de saída EV/EBITDA (ex: 5x a 8x)</li>
      <li><strong>Eixo Y:</strong> Alavancagem de entrada (ex: 3x a 6x DL/EBITDA)</li>
    </ul>
    <h2>Outras Sensibilidades Úteis</h2>
    <ul>
      <li>IRR vs. crescimento de EBITDA × múltiplo de saída</li>
      <li>MOIC vs. preço de entrada × margem EBITDA</li>
      <li>Máximo preço pagável para atingir IRR mínimo de 20%</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O &quot;preço máximo de entrada&quot; (maximum bid price) é calculado inversamente: dado IRR alvo de 20%, qual o máximo que posso pagar? Esta é a pergunta que o fundo faz na prática.</div>
  </>),
};
