import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 5: Valuation por Múltiplos
   ═══════════════════════════════════════════════════════════════════ */

export const MOD05_CONTENT: Record<string, () => ReactNode> = {
  "ev-ebitda": () => (<>
    <h2>EV/EBITDA</h2>
    <p>O <strong>EV/EBITDA</strong> é o múltiplo mais utilizado em valuation. Compara o valor total da empresa (Enterprise Value) com sua geração operacional de caixa.</p>
    <div className="lesson-formula">EV/EBITDA = Enterprise Value / EBITDA</div>
    <h2>Enterprise Value (EV)</h2>
    <div className="lesson-formula">EV = Market Cap + Dívida Líquida + Minoritários</div>
    <h2>Por que é Popular?</h2>
    <ul>
      <li>Não é afetado por estrutura de capital (diferente do P/E)</li>
      <li>Não é afetado por depreciação (comparável entre empresas com políticas diferentes)</li>
      <li>Proxy razoável de geração de caixa operacional</li>
    </ul>
    <h2>Referências por Setor</h2>
    <ul>
      <li><strong>Utilities / Infraestrutura:</strong> 6-8x</li>
      <li><strong>Indústria / Varejo:</strong> 7-10x</li>
      <li><strong>Tecnologia / SaaS:</strong> 15-30x</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre use o EBITDA forward (próximos 12 meses), não o trailing. O mercado precifica expectativas futuras, não resultados passados.</div>
  </>),

  "pe-preco-lucro": () => (<>
    <h2>P/E — Preço/Lucro</h2>
    <p>O <strong>P/E</strong> (Price-to-Earnings) indica quantos anos de lucro atual o mercado está disposto a pagar pela empresa.</p>
    <div className="lesson-formula">P/E = Preço da Ação / Lucro por Ação (LPA)</div>
    <h2>Interpretação</h2>
    <ul>
      <li><strong>P/E alto:</strong> Mercado espera crescimento forte dos lucros</li>
      <li><strong>P/E baixo:</strong> Empresa madura ou mercado cético</li>
    </ul>
    <h2>Limitações</h2>
    <ul>
      <li>Não funciona com lucro negativo</li>
      <li>Afetado por estrutura de capital e política tributária</li>
      <li>Lucro pode ser manipulado contabilmente</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O P/E é mais útil para comparar empresas do mesmo setor, com estrutura de capital similar. Para comparações cross-sector, prefira EV/EBITDA.</div>
  </>),

  "ev-receita": () => (<>
    <h2>EV/Receita</h2>
    <p>O <strong>EV/Receita</strong> é usado quando a empresa ainda não tem EBITDA positivo (startups, empresas em crescimento acelerado).</p>
    <div className="lesson-formula">EV/Revenue = Enterprise Value / Receita Líquida</div>
    <h2>Quando Usar</h2>
    <ul>
      <li>Empresas de tecnologia pre-profit</li>
      <li>Empresas em turnaround</li>
      <li>Setores com margens muito uniformes</li>
    </ul>
    <h2>A Regra dos 40 (SaaS)</h2>
    <p>Para empresas SaaS, a &quot;Rule of 40&quot; diz que a soma de crescimento + margem EBITDA deve ser ≥ 40%. Empresas que atingem esse patamar geralmente negociam a múltiplos EV/Revenue mais altos.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> EV/Receita ignora completamente a rentabilidade. Duas empresas com mesma receita mas margens de 5% e 30% terão o mesmo EV/Receita. Sempre analise junto com margens.</div>
  </>),

  "p-vpa": () => (<>
    <h2>P/VPA — Preço/Valor Patrimonial</h2>
    <p>O <strong>P/VPA</strong> (ou P/BV — Price-to-Book Value) compara o preço de mercado com o valor contábil do patrimônio líquido.</p>
    <div className="lesson-formula">P/VPA = Preço da Ação / Valor Patrimonial por Ação</div>
    <h2>Interpretação</h2>
    <ul>
      <li><strong>P/VPA &gt; 1:</strong> Mercado acredita que a empresa gera valor acima do custo de capital</li>
      <li><strong>P/VPA &lt; 1:</strong> Empresa negocia abaixo do valor contábil (possível oportunidade ou armadilha de valor)</li>
      <li><strong>P/VPA = 1:</strong> Retorno = custo de capital</li>
    </ul>
    <h2>Relação com ROE</h2>
    <div className="lesson-formula">P/VPA ≈ (ROE - g) / (Ke - g)</div>
    <p>Empresas com ROE alto sustentável negociam a P/VPA mais altos. Se ROE = Ke, então P/VPA = 1.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> P/VPA é especialmente útil para bancos e seguradoras, onde os ativos são majoritariamente financeiros e o valor contábil é uma boa aproximação do valor real.</div>
  </>),

  "criterios-comparaveis": () => (<>
    <h2>Critérios de Seleção de Peers</h2>
    <p>A qualidade da análise por múltiplos depende diretamente da qualidade dos <strong>peers</strong> (empresas comparáveis) selecionados.</p>
    <h2>Critérios Principais</h2>
    <ol>
      <li><strong>Setor e subsetor:</strong> Mesma indústria e modelo de negócio</li>
      <li><strong>Tamanho:</strong> Receita e market cap similares</li>
      <li><strong>Geografia:</strong> Mesma região ou mercado</li>
      <li><strong>Crescimento:</strong> Taxas de crescimento comparáveis</li>
      <li><strong>Margem:</strong> Rentabilidade em faixa similar</li>
      <li><strong>Risco:</strong> Alavancagem e perfil de risco similares</li>
    </ol>
    <h2>Quantas Empresas?</h2>
    <p>Idealmente 5-10 peers. Menos que 3 é estatisticamente fraco. Mais que 15 pode diluir a análise com empresas pouco comparáveis.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Quando não há peers perfeitos no Brasil, use comparáveis internacionais, mas ajuste por risco país e câmbio. Sempre justifique a seleção de cada peer.</div>
  </>),

  "ajustes-multiplos": () => (<>
    <h2>Ajustes e Normalização de Múltiplos</h2>
    <p>Para comparação justa, os múltiplos precisam ser <strong>normalizados</strong> — removendo efeitos não-recorrentes e diferenças contábeis.</p>
    <h2>Ajustes Comuns</h2>
    <ul>
      <li><strong>Itens não-recorrentes:</strong> Remova ganhos/perdas extraordinários do EBITDA</li>
      <li><strong>Stock-based compensation:</strong> Inclua ou exclua de forma consistente</li>
      <li><strong>Leases (IFRS 16):</strong> Ajuste para comparabilidade entre empresas</li>
      <li><strong>Excesso de caixa:</strong> Remova do EV se não for operacional</li>
    </ul>
    <h2>Medidas de Tendência Central</h2>
    <ul>
      <li><strong>Mediana:</strong> Preferível (menos sensível a outliers)</li>
      <li><strong>Média:</strong> Use com cautela, excluindo outliers</li>
      <li><strong>Range interquartil:</strong> P25 a P75 dá um range robusto</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre use a mediana dos múltiplos dos peers, não a média. Um único outlier pode distorcer completamente a média e gerar uma avaliação errada.</div>
  </>),

  "football-field": () => (<>
    <h2>Football Field Chart</h2>
    <p>O <strong>Football Field</strong> é a visualização-padrão de valuation no mercado financeiro. Apresenta ranges de valor de múltiplas metodologias lado a lado.</p>
    <h2>Componentes Típicos</h2>
    <ol>
      <li><strong>52-Week Range:</strong> Mínima e máxima do preço da ação</li>
      <li><strong>Consenso de Analistas:</strong> Target price min/max</li>
      <li><strong>DCF:</strong> Range da análise de sensibilidade</li>
      <li><strong>EV/EBITDA:</strong> Range usando múltiplos de peers</li>
      <li><strong>Transações Precedentes:</strong> Range de múltiplos pagos</li>
    </ol>
    <h2>Como Construir no Excel</h2>
    <p>Use gráfico de barras empilhadas horizontais. A barra &quot;invisível&quot; posiciona o início do range; a barra visível mostra o range de valores.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O Football Field é obrigatório em pitchbooks de M&A e equity research. A zona de convergência entre os métodos indica o range de fair value mais confiável.</div>
  </>),

  "busca-transacoes": () => (<>
    <h2>Busca e Seleção de Transações</h2>
    <p>A análise de <strong>transações precedentes</strong> utiliza múltiplos pagos em M&A como referência de valor.</p>
    <h2>Fontes de Dados</h2>
    <ul>
      <li><strong>Bloomberg:</strong> Tela MA (Mergers & Acquisitions)</li>
      <li><strong>Capital IQ:</strong> Base mais completa de transações</li>
      <li><strong>MergerMarket:</strong> Foco em deal intelligence</li>
      <li><strong>Relatórios setoriais:</strong> KPMG, PwC, Deloitte</li>
    </ul>
    <h2>Critérios de Seleção</h2>
    <ol>
      <li><strong>Setor similar:</strong> Mesma indústria e subsetor</li>
      <li><strong>Período:</strong> Últimos 3-5 anos (condições de mercado comparáveis)</li>
      <li><strong>Tamanho:</strong> Deal size na mesma ordem de grandeza</li>
      <li><strong>Tipo:</strong> Controle (100%) vs. minoritário</li>
    </ol>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Transações precedentes incluem prêmio de controle, portanto os múltiplos tendem a ser mais altos que múltiplos de trading. Leve isso em conta na comparação.</div>
  </>),

  "premio-controle": () => (<>
    <h2>Prêmio de Controle</h2>
    <p>O <strong>prêmio de controle</strong> é o valor adicional que um comprador paga para adquirir o controle de uma empresa, além do valor de mercado.</p>
    <div className="lesson-formula">Prêmio de Controle = (Preço da Transação / Preço de Mercado) - 1</div>
    <h2>Faixas Típicas</h2>
    <ul>
      <li><strong>Média global:</strong> 20-40% sobre o preço de mercado</li>
      <li><strong>Brasil:</strong> 30-50% (mercado menos líquido, controlador forte)</li>
      <li><strong>Empresas em dificuldade:</strong> Pode ser menor ou até negativo</li>
    </ul>
    <h2>Por que Existe?</h2>
    <ul>
      <li>Poder de decisão sobre estratégia e dividendos</li>
      <li>Captura de sinergias</li>
      <li>Eliminação de agência (conflito acionista-gestor)</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Ao usar transações precedentes para valuation, considere se o cenário analisado envolve troca de controle ou não. Se não, ajuste os múltiplos removendo o prêmio implícito.</div>
  </>),

  "analise-transacoes": () => (<>
    <h2>Análise Comparativa de Transações</h2>
    <p>Após coletar as transações, é necessário organizar e analisar os dados de forma estruturada.</p>
    <h2>Tabela de Transações</h2>
    <p>Para cada transação, registre:</p>
    <ul>
      <li>Data, comprador, alvo, vendedor</li>
      <li>Deal value (Enterprise Value da transação)</li>
      <li>Múltiplos pagos (EV/EBITDA, EV/Receita)</li>
      <li>Prêmio sobre cotação pré-anúncio</li>
      <li>% adquirido e tipo de transação</li>
    </ul>
    <h2>Análise</h2>
    <ol>
      <li><strong>Mediana e range</strong> dos múltiplos</li>
      <li><strong>Tendência temporal:</strong> Múltiplos estão subindo ou caindo?</li>
      <li><strong>Outliers:</strong> Transações com sinergias especiais ou distressed</li>
      <li><strong>Aplicação:</strong> Multiplique pela métrica da empresa analisada</li>
    </ol>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre documente e justifique a inclusão ou exclusão de cada transação. Um deal de private equity distressed tem perfil diferente de uma aquisição estratégica — misturar os dois distorce a análise.</div>
  </>),
};
