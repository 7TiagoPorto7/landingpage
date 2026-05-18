import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 6: Modelagem de M&A
   ═══════════════════════════════════════════════════════════════════ */

export const MOD06_CONTENT: Record<string, () => ReactNode> = {
  "tipos-ma": () => (<>
    <h2>Tipos de Transações</h2>
    <p>No universo de M&A, existem diferentes estruturas de combinação empresarial:</p>
    <h3>Fusão</h3>
    <p>Duas empresas se combinam para formar uma nova entidade. As duas empresas originais deixam de existir juridicamente.</p>
    <h3>Aquisição</h3>
    <p>Uma empresa (acquirer) compra outra (target). A empresa adquirida pode continuar existindo como subsidiária ou ser incorporada.</p>
    <h3>Incorporação</h3>
    <p>A empresa incorporada é absorvida pela incorporadora, que mantém sua personalidade jurídica. Muito comum no Brasil.</p>
    <h2>Formas de Pagamento</h2>
    <ul>
      <li><strong>Cash Deal:</strong> Pagamento 100% em dinheiro — mais simples, sem diluição</li>
      <li><strong>Stock Deal:</strong> Pagamento em ações da adquirente — sem saída de caixa, mas dilui acionistas</li>
      <li><strong>Misto:</strong> Combinação de cash e ações — mais comum na prática</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A forma de pagamento impacta diretamente a análise accretion/dilution. Em stock deals, o número de ações em circulação muda, afetando o LPA.</div>
  </>),

  "motivacoes-ma": () => (<>
    <h2>Motivações Estratégicas</h2>
    <p>As principais razões que levam empresas a realizar transações de M&A:</p>
    <ol>
      <li><strong>Crescimento inorgânico:</strong> Expandir receita e market share rapidamente</li>
      <li><strong>Sinergias operacionais:</strong> Redução de custos pela eliminação de redundâncias</li>
      <li><strong>Diversificação:</strong> Entrar em novos mercados ou segmentos</li>
      <li><strong>Consolidação setorial:</strong> Reduzir competição e ganhar escala</li>
      <li><strong>Aquisição de tecnologia/talento:</strong> Acqui-hire e IP</li>
    </ol>
    <h2>Sinergias como Motor de Valor</h2>
    <div className="lesson-formula">Valor da Sinergia = Valor Combinado - (Valor A + Valor B)</div>
    <p>A transação só cria valor se as sinergias capturadas forem maiores que o prêmio pago sobre o valor de mercado do target.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Estudos mostram que ~60-70% das transações de M&A destroem valor para o comprador. O excesso de otimismo nas sinergias é a principal causa. Seja conservador na modelagem.</div>
  </>),

  "processo-ma": () => (<>
    <h2>O Processo de M&A</h2>
    <ol>
      <li><strong>Estratégia e Screening:</strong> Definir critérios e identificar targets potenciais</li>
      <li><strong>Abordagem Inicial:</strong> NDA e troca de informações preliminares</li>
      <li><strong>Due Diligence:</strong> Análise detalhada financeira, legal, operacional e fiscal</li>
      <li><strong>Valuation:</strong> DCF, múltiplos e transações precedentes do target</li>
      <li><strong>Negociação:</strong> Preço, estrutura, condições precedentes e garantias</li>
      <li><strong>Documentação:</strong> SPA (Share Purchase Agreement) e contratos</li>
      <li><strong>Aprovação Regulatória:</strong> CADE no Brasil, antitrust em outros países</li>
      <li><strong>Closing e Integração:</strong> Transferência efetiva e captura de sinergias</li>
    </ol>
    <h2>Papel do Modelo Financeiro</h2>
    <p>O modelo é utilizado em praticamente todas as etapas: desde o screening até a negociação de preço e a projeção de sinergias pós-integração.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Em transações competitivas (auction), o modelo precisa ser flexível para testar rapidamente diferentes cenários de preço e sinergias.</div>
  </>),

  "sinergias-receita": () => (<>
    <h2>Sinergias de Receita</h2>
    <p>As <strong>sinergias de receita</strong> representam o aumento de faturamento que a empresa combinada pode gerar vs. as duas empresas separadas.</p>
    <h2>Fontes Comuns</h2>
    <ul>
      <li><strong>Cross-selling:</strong> Vender produtos da Empresa A para clientes da B (e vice-versa)</li>
      <li><strong>Expansão geográfica:</strong> Usar a rede de distribuição da adquirida</li>
      <li><strong>Pricing power:</strong> Maior participação de mercado permite reajustes</li>
      <li><strong>Novos produtos:</strong> Combinação de P&D cria produtos complementares</li>
    </ul>
    <h2>Modelagem</h2>
    <p>Sinergias de receita são mais difíceis de quantificar e mais incertas que sinergias de custo. Aplique um fator de probabilidade e um timeline realista (2-3 anos para captura completa).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O mercado geralmente aplica um desconto de 50-70% nas sinergias de receita apresentadas. Seja conservador — modele apenas sinergias com alta probabilidade de captura.</div>
  </>),

  "sinergias-custo": () => (<>
    <h2>Sinergias de Custo</h2>
    <p>As <strong>sinergias de custo</strong> são reduções de despesas pela eliminação de redundâncias após a combinação.</p>
    <h2>Fontes Principais</h2>
    <ul>
      <li><strong>Headcount:</strong> Eliminação de posições duplicadas (RH, financeiro, jurídico)</li>
      <li><strong>Facilities:</strong> Consolidação de escritórios e fábricas</li>
      <li><strong>Procurement:</strong> Poder de barganha com fornecedores pelo volume combinado</li>
      <li><strong>Tecnologia:</strong> Unificação de sistemas e licenças</li>
      <li><strong>Marketing:</strong> Consolidação de campanhas e branding</li>
    </ul>
    <h2>Timeline de Captura</h2>
    <ul>
      <li><strong>Ano 1:</strong> 25-40% das sinergias (quick wins)</li>
      <li><strong>Ano 2:</strong> 60-80% das sinergias</li>
      <li><strong>Ano 3:</strong> 100% (run-rate completo)</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Não esqueça de modelar os custos de integração (restructuring charges). Demissões, mudanças de sistema e consultorias de integração custam dinheiro upfront.</div>
  </>),

  "sinergias-financeiras": () => (<>
    <h2>Sinergias Financeiras e Fiscais</h2>
    <h3>Sinergias Financeiras</h3>
    <ul>
      <li><strong>Custo de dívida:</strong> Empresa maior/mais diversificada → menor spread de crédito</li>
      <li><strong>Capacidade de endividamento:</strong> Fluxos de caixa mais estáveis permitem mais alavancagem</li>
      <li><strong>Otimização de caixa:</strong> Cash pooling entre subsidiárias</li>
    </ul>
    <h3>Sinergias Fiscais</h3>
    <ul>
      <li><strong>Aproveitamento de prejuízo fiscal:</strong> Usar base negativa de uma empresa para compensar lucro da outra</li>
      <li><strong>Planejamento tributário:</strong> Reestruturação para otimizar a carga fiscal</li>
      <li><strong>Amortização de ágio:</strong> No Brasil, ágio com fundamentação econômica pode ser amortizado fiscalmente</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A amortização fiscal do ágio (goodwill) no Brasil é um driver relevante de retorno em M&A. Modele esse benefício separadamente e com acompanhamento jurídico-tributário.</div>
  </>),

  "accretion-dilution": () => (<>
    <h2>Accretion/Dilution — Conceito</h2>
    <p>A análise <strong>accretion/dilution</strong> avalia se a transação aumenta (accretive) ou diminui (dilutive) o Lucro por Ação (LPA/EPS) do comprador.</p>
    <div className="lesson-formula">Novo EPS = Lucro Combinado / Ações em Circulação (pós-deal)</div>
    <ul>
      <li><strong>Accretive:</strong> Novo EPS &gt; EPS do comprador pré-deal → cria valor por ação</li>
      <li><strong>Dilutive:</strong> Novo EPS &lt; EPS do comprador pré-deal → destrói valor por ação</li>
    </ul>
    <h2>Drivers de Accretion/Dilution</h2>
    <ul>
      <li><strong>P/E relativo:</strong> Se o buyer tem P/E maior que o target, tende a ser accretive</li>
      <li><strong>Forma de pagamento:</strong> Cash deals são mais accretive (sem diluição de ações)</li>
      <li><strong>Sinergias:</strong> Quanto maiores, mais accretive a transação</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Accretion/dilution é apenas um dos critérios de decisão. Uma transação pode ser dilutive no curto prazo, mas criar valor significativo no longo prazo pelas sinergias.</div>
  </>),

  "modelo-accretion": () => (<>
    <h2>Construção do Modelo Accretion/Dilution</h2>
    <h3>Passo 1 — Premissas do Deal</h3>
    <ul>
      <li>Preço de aquisição e prêmio sobre mercado</li>
      <li>Forma de pagamento (cash, stock ou misto)</li>
      <li>Custo de financiamento se cash deal</li>
    </ul>
    <h3>Passo 2 — Lucro Combinado</h3>
    <ol>
      <li>Lucro do Buyer + Lucro do Target</li>
      <li>(+) Sinergias após impostos</li>
      <li>(-) Custos de financiamento (juros da dívida nova)</li>
      <li>(-) Custo de oportunidade do caixa usado</li>
      <li>(+/-) Amortização de intangíveis (PPA)</li>
    </ol>
    <h3>Passo 3 — Novo Share Count</h3>
    <p>Se stock deal: ações do buyer + novas ações emitidas para os acionistas do target.</p>
    <h3>Passo 4 — Cálculo</h3>
    <div className="lesson-formula">Accretion/Dilution % = (Novo EPS / EPS pré-deal) - 1</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Monte o modelo com switches para alternar entre cash, stock e misto. Isso permite testar rapidamente a estrutura ótima de pagamento.</div>
  </>),

  "goodwill-ppa": () => (<>
    <h2>Goodwill e Purchase Price Allocation</h2>
    <p>O <strong>Goodwill</strong> é a diferença entre o preço pago e o valor justo dos ativos líquidos adquiridos.</p>
    <div className="lesson-formula">Goodwill = Preço de Aquisição - Valor Justo dos Ativos Líquidos</div>
    <h2>PPA — Purchase Price Allocation</h2>
    <p>O PPA é o processo de alocar o preço de compra entre os ativos e passivos adquiridos a valor justo:</p>
    <ul>
      <li><strong>Ativos tangíveis:</strong> Reavaliados a fair value (pode diferir do contábil)</li>
      <li><strong>Intangíveis identificáveis:</strong> Marca, carteira de clientes, tecnologia, contratos</li>
      <li><strong>Passivos assumidos:</strong> Contingências e obrigações a valor justo</li>
      <li><strong>Goodwill residual:</strong> O que sobra após alocar tudo acima</li>
    </ul>
    <h2>Impairment</h2>
    <p>O goodwill não é amortizado (IFRS), mas deve ser testado anualmente para <strong>impairment</strong>. Se o valor recuperável for menor que o contábil, há baixa (write-off).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No modelo, os intangíveis do PPA são amortizados (gerando despesa não-caixa). Isso impacta o lucro, mas não o fluxo de caixa — importante na análise accretion/dilution.</div>
  </>),
};
