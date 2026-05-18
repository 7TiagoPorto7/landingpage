import { ReactNode } from "react";

export const MOD09_CONTENT: Record<string, () => ReactNode> = {
  "desafios-valuation-startup": () => (<>
    <h2>Desafios do Valuation Pré-Receita</h2>
    <p>Avaliar startups é diferente de empresas maduras: sem histórico, alta incerteza e crescimento não-linear.</p>
    <ul>
      <li><strong>Sem histórico financeiro:</strong> Pouca ou nenhuma receita</li>
      <li><strong>Alta incerteza:</strong> Taxa de mortalidade de 90%+</li>
      <li><strong>Crescimento não-linear:</strong> Curva J</li>
    </ul>
    <p>O DCF não funciona bem para early-stage — a taxa de desconto deveria ser 40-60%.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Para early-stage, use Scorecard, Berkus ou Método VC. DCF só funciona a partir de Series B/C.</div>
  </>),

  "metodo-vc": () => (<>
    <h2>Método Venture Capital</h2>
    <p>Parte do valor futuro esperado e traz a VP pela taxa de retorno exigida pelo investidor.</p>
    <ol>
      <li>Estimar valor terminal: Receita ano 5 × múltiplo</li>
      <li>Definir retorno exigido (10-30x)</li>
      <li>Post-money = Valor Terminal / Retorno Alvo</li>
      <li>Pre-money = Post-money - Investimento</li>
    </ol>
    <div className="lesson-formula">Post-Money = Valor Terminal Esperado / Retorno Alvo</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O retorno alvo embute a taxa de mortalidade do portfólio. 1 em 10 precisa retornar 30x+.</div>
  </>),

  "scorecard-berkus": () => (<>
    <h2>Scorecard e Berkus Method</h2>
    <h3>Scorecard</h3>
    <p>Ajusta o valuation médio da região/estágio por fatores qualitativos:</p>
    <ul>
      <li><strong>Equipe (30%):</strong> Experiência e track record</li>
      <li><strong>Mercado (25%):</strong> Tamanho e crescimento</li>
      <li><strong>Produto (15%):</strong> Estágio e IP</li>
      <li><strong>Concorrência (10%):</strong> Barreiras de entrada</li>
    </ul>
    <h3>Berkus</h3>
    <p>Atribui até R$ 500K-1M por milestone: ideia, protótipo, equipe, tração, vendas.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Estes métodos servem para Seed/Pre-Seed. A partir do Series A, migre para múltiplos de receita.</div>
  </>),

  "unit-economics": () => (<>
    <h2>Unit Economics: CAC, LTV e Payback</h2>
    <div className="lesson-formula">CAC = Gastos Marketing + Vendas / Novos Clientes</div>
    <div className="lesson-formula">LTV = ARPU × Margem Bruta / Churn Rate</div>
    <div className="lesson-formula">LTV / CAC ≥ 3x (ideal)</div>
    <h3>Payback do CAC</h3>
    <div className="lesson-formula">Payback = CAC / (ARPU × Margem Bruta)</div>
    <p>Ideal: &lt; 12 meses para recuperar o custo de aquisição.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No modelo, projete aquisição de clientes com base no orçamento de marketing e CAC. Receita = Clientes × ARPU × (1 - Churn).</div>
  </>),

  "cohort-analysis": () => (<>
    <h2>Cohort Analysis e Churn</h2>
    <p>Agrupa clientes pelo mês de aquisição e acompanha seu comportamento ao longo do tempo.</p>
    <h3>Métricas por Cohort</h3>
    <ul>
      <li><strong>Retention Rate:</strong> % de clientes ativos mês a mês</li>
      <li><strong>Revenue Retention:</strong> % da receita retida (pode ser &gt; 100% com upsell)</li>
      <li><strong>Net Dollar Retention:</strong> NDR &gt; 100% é excelente</li>
    </ul>
    <div className="lesson-formula">Churn Rate = Clientes Perdidos / Clientes no Início do Mês</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Construa uma matriz de cohorts no modelo para projetar receita recorrente com precisão.</div>
  </>),

  "runway-cash-burn": () => (<>
    <h2>Runway e Cash Burn Rate</h2>
    <div className="lesson-formula">Burn Rate = Despesas Totais - Receitas</div>
    <div className="lesson-formula">Runway (meses) = Caixa Atual / Net Burn Mensal</div>
    <p>Comece a captar quando o runway chegar a 6-9 meses.</p>
    <ul>
      <li>Projete o cash burn mensal com granularidade</li>
      <li>Identifique o mês do break-even</li>
      <li>Calcule quanto capital precisa captar e quando</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Investidores olham o runway pós-investimento. Se R$ 5M dá apenas 12 meses, precisa chegar ao break-even antes.</div>
  </>),

  "cap-table": () => (<>
    <h2>Construção da Cap Table</h2>
    <p>A Cap Table registra a estrutura acionária: quem detém quanto do equity.</p>
    <ul>
      <li><strong>Ações Ordinárias:</strong> Fundadores e investidores convertidos</li>
      <li><strong>Ações Preferenciais:</strong> Investidores (com liquidation preference)</li>
      <li><strong>ESOP:</strong> Pool para funcionários (10-20%)</li>
      <li><strong>SAFEs/Conversíveis:</strong> Convertem no próximo round</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Atualize a cap table a cada evento: rodada, exercício de options, conversão.</div>
  </>),

  "diluicao-rodadas": () => (<>
    <h2>Diluição nas Rodadas</h2>
    <div className="lesson-formula">Diluição = Investimento / Post-Money Valuation</div>
    <p>Exemplo: Round de R$ 5M a R$ 20M post-money → investidor recebe 25%, fundador é diluído para 75%.</p>
    <p>Após múltiplas rodadas, fundadores ficam com 10-20% no exit. Mas 15% de R$ 1B &gt; 100% de R$ 5M.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Monte a cap table projetada com rodadas futuras para alinhar expectativas dos fundadores.</div>
  </>),
};
