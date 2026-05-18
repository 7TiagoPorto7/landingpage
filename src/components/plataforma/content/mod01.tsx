import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   CONTEÚDO DAS AULAS — MÓDULO 1: Fundamentos de Contabilidade
   ═══════════════════════════════════════════════════════════════════ */

export const MOD01_CONTENT: Record<string, () => ReactNode> = {
  "balanco-patrimonial": () => (<>
    <h2>O que é o Balanço Patrimonial?</h2>
    <p>O <strong>Balanço Patrimonial</strong> é a demonstração financeira que apresenta a posição patrimonial e financeira de uma empresa em uma data específica. Ele segue a equação fundamental da contabilidade:</p>
    <div className="lesson-formula">Ativo = Passivo + Patrimônio Líquido</div>
    <p>Em modelagem financeira, o Balanço é a peça central que conecta a DRE ao Fluxo de Caixa. Qualquer erro de balanceamento indica inconsistência no modelo — por isso, garantir que <strong>Ativo = Passivo + PL</strong> é o principal teste de integridade.</p>
    <h2>Estrutura do Balanço</h2>
    <h3>1. Ativo (lado esquerdo)</h3>
    <p>Representa todos os bens e direitos da empresa, organizados por ordem de liquidez:</p>
    <ul>
      <li><strong>Ativo Circulante:</strong> Caixa, contas a receber, estoques, aplicações de curto prazo</li>
      <li><strong>Ativo Não Circulante:</strong> Imobilizado, intangível, investimentos de longo prazo</li>
    </ul>
    <h3>2. Passivo (lado direito)</h3>
    <ul>
      <li><strong>Passivo Circulante:</strong> Fornecedores, salários a pagar, empréstimos CP, impostos</li>
      <li><strong>Passivo Não Circulante:</strong> Financiamentos LP, debêntures, provisões</li>
    </ul>
    <h3>3. Patrimônio Líquido</h3>
    <ul>
      <li><strong>Capital Social:</strong> Recursos investidos pelos sócios</li>
      <li><strong>Reservas de Lucros:</strong> Lucros retidos na empresa</li>
      <li><strong>Lucros/Prejuízos Acumulados:</strong> Resultado ainda não distribuído</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica de modelagem:</strong> Sempre construa um check automático no Excel que calcule <code>Ativo - (Passivo + PL)</code> e exiba o resultado. Se for diferente de zero, há um erro a ser corrigido.</div>
  </>),

  "dre": () => (<>
    <h2>O que é a DRE?</h2>
    <p>A <strong>Demonstração do Resultado do Exercício (DRE)</strong> apresenta receitas, custos e despesas de uma empresa durante um período, culminando no <strong>Lucro Líquido</strong>.</p>
    <p>Diferente do Balanço (que é uma &quot;foto&quot;), a DRE é um &quot;filme&quot; — mostra o que aconteceu ao longo de um período.</p>
    <h2>Estrutura da DRE</h2>
    <ol>
      <li><strong>Receita Bruta</strong> → ponto de partida</li>
      <li>(-) Deduções → impostos sobre vendas</li>
      <li>= <strong>Receita Líquida</strong></li>
      <li>(-) CPV / CMV → custos diretos de produção</li>
      <li>= <strong>Lucro Bruto</strong></li>
      <li>(-) Despesas Operacionais (SG&A)</li>
      <li>(-) Depreciação e Amortização</li>
      <li>= <strong>EBIT (Lucro Operacional)</strong></li>
      <li>(+/-) Resultado Financeiro</li>
      <li>= <strong>EBT (Lucro antes de IR)</strong></li>
      <li>(-) IR e CSLL</li>
      <li>= <strong>Lucro Líquido</strong></li>
    </ol>
    <h2>Margens Importantes</h2>
    <ul>
      <li><strong>Margem Bruta:</strong> Lucro Bruto / Receita Líquida</li>
      <li><strong>Margem EBIT:</strong> EBIT / Receita Líquida</li>
      <li><strong>Margem Líquida:</strong> Lucro Líquido / Receita Líquida</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na projeção financeira, as margens históricas são os principais drivers para projetar custos. Analise a tendência dos últimos 3-5 anos antes de definir premissas.</div>
  </>),

  "fluxo-de-caixa-dfc": () => (<>
    <h2>O que é a DFC?</h2>
    <p>A <strong>Demonstração do Fluxo de Caixa (DFC)</strong> mostra todas as entradas e saídas de caixa da empresa em um período, divididas em três atividades.</p>
    <h2>As 3 Atividades</h2>
    <h3>1. Atividades Operacionais</h3>
    <p>Fluxos gerados pela operação principal do negócio. Parte do Lucro Líquido e ajusta itens não-caixa:</p>
    <ul>
      <li>(+) Depreciação e Amortização (não afetam caixa)</li>
      <li>(+/-) Variação do Capital de Giro (contas a receber, estoques, fornecedores)</li>
      <li>(+/-) Provisões e outros ajustes</li>
    </ul>
    <h3>2. Atividades de Investimento</h3>
    <ul>
      <li>(-) CAPEX — compra de ativos imobilizados</li>
      <li>(+) Venda de ativos</li>
      <li>(-) Aquisições de empresas</li>
    </ul>
    <h3>3. Atividades de Financiamento</h3>
    <ul>
      <li>(+) Captação de empréstimos / emissão de ações</li>
      <li>(-) Amortização de dívidas</li>
      <li>(-) Pagamento de dividendos</li>
    </ul>
    <div className="lesson-formula">Variação de Caixa = Operacional + Investimento + Financiamento</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No modelo integrado, a DFC é a última peça a ser construída. Ela serve como &quot;verificação&quot; — o saldo final de caixa deve bater com o caixa no Balanço Patrimonial.</div>
  </>),

  "dmpl-e-dva": () => (<>
    <h2>DMPL — Demonstração das Mutações do PL</h2>
    <p>A <strong>DMPL</strong> detalha todas as movimentações que ocorreram no Patrimônio Líquido durante o exercício:</p>
    <ul>
      <li>Lucro/Prejuízo do exercício</li>
      <li>Distribuição de dividendos</li>
      <li>Aumento de capital</li>
      <li>Ajustes de avaliação patrimonial</li>
      <li>Constituição de reservas</li>
    </ul>
    <h2>DVA — Demonstração do Valor Adicionado</h2>
    <p>A <strong>DVA</strong> mostra a riqueza gerada pela empresa e como ela foi distribuída entre os stakeholders:</p>
    <ul>
      <li><strong>Empregados:</strong> Salários, benefícios, FGTS</li>
      <li><strong>Governo:</strong> Impostos e contribuições</li>
      <li><strong>Financiadores:</strong> Juros sobre dívida</li>
      <li><strong>Acionistas:</strong> Dividendos e lucros retidos</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na modelagem financeira, a DMPL é essencial para reconciliar o PL entre períodos. A DVA é menos usada em modelos, mas importante para análises setoriais e ESG.</div>
  </>),

  "principio-competencia": () => (<>
    <h2>O que é o Regime de Competência?</h2>
    <p>O <strong>Princípio da Competência</strong> determina que receitas e despesas devem ser reconhecidas no período em que ocorrem, independentemente de quando o dinheiro é efetivamente recebido ou pago.</p>
    <h2>Exemplos Práticos</h2>
    <ul>
      <li><strong>Venda a prazo em dezembro:</strong> A receita é reconhecida em dezembro (DRE), mesmo que o cliente pague apenas em janeiro (impacto no caixa)</li>
      <li><strong>Aluguel pago adiantado:</strong> Mesmo pagando 12 meses de uma vez, a despesa é reconhecida mensalmente</li>
      <li><strong>Depreciação:</strong> A máquina foi comprada à vista, mas o custo é distribuído ao longo da vida útil</li>
    </ul>
    <div className="lesson-formula">Receita na DRE ≠ Dinheiro no Caixa</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A diferença entre competência e caixa é exatamente o que gera a necessidade de Capital de Giro. Entender isso é fundamental para projetar o Balanço Patrimonial.</div>
  </>),

  "regime-caixa": () => (<>
    <h2>O que é o Regime de Caixa?</h2>
    <p>O <strong>Regime de Caixa</strong> reconhece receitas e despesas somente quando há efetiva movimentação de dinheiro — entrada ou saída do caixa.</p>
    <h2>Quando Usar?</h2>
    <ul>
      <li><strong>Micro e pequenas empresas:</strong> Simplificação contábil</li>
      <li><strong>Fluxo de caixa direto:</strong> Registra entradas e saídas reais</li>
      <li><strong>Planejamento financeiro:</strong> Para gestão de liquidez no dia a dia</li>
    </ul>
    <h2>Limitações</h2>
    <p>O regime de caixa não reflete a realidade econômica da empresa — uma empresa pode parecer saudável no caixa, mas estar acumulando prejuízos operacionais (ou vice-versa).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Em modelagem financeira, utilizamos sempre o regime de competência para a DRE e o Balanço, mas construímos a DFC para reconciliar com o regime de caixa.</div>
  </>),

  "diferenca-competencia-caixa": () => (<>
    <h2>Competência vs. Caixa na Prática</h2>
    <p>A principal diferença é o <strong>timing</strong> do reconhecimento. Veja como a mesma transação aparece em cada regime:</p>
    <h3>Exemplo: Venda de R$ 100.000 com prazo de 60 dias</h3>
    <ul>
      <li><strong>Competência (DRE):</strong> Receita registrada no mês da venda</li>
      <li><strong>Caixa (DFC):</strong> Entrada registrada 60 dias depois</li>
      <li><strong>Balanço:</strong> Contas a Receber aumenta em R$ 100.000</li>
    </ul>
    <h2>Impacto na Modelagem</h2>
    <p>Essa diferença temporal cria as variações de Capital de Giro que precisam ser modeladas:</p>
    <ol>
      <li><strong>Contas a Receber:</strong> Receita reconhecida, mas dinheiro ainda não recebido</li>
      <li><strong>Estoques:</strong> Produto comprado, mas ainda não vendido</li>
      <li><strong>Fornecedores:</strong> Produto recebido, mas ainda não pago</li>
    </ol>
    <div className="lesson-formula">NCG = Contas a Receber + Estoques - Fornecedores</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> A variação do Capital de Giro é um dos itens mais esquecidos em modelos financeiros. Uma empresa pode ter lucro na DRE e ainda assim ter problemas de caixa.</div>
  </>),

  "debito-credito": () => (<>
    <h2>Débito e Crédito na Contabilidade</h2>
    <p>Na contabilidade, <strong>débito</strong> e <strong>crédito</strong> não significam &quot;entrou&quot; e &quot;saiu&quot;. São convenções que indicam o lado do lançamento:</p>
    <ul>
      <li><strong>Débito:</strong> Aumenta Ativos e Despesas / Diminui Passivos e Receitas</li>
      <li><strong>Crédito:</strong> Aumenta Passivos e Receitas / Diminui Ativos e Despesas</li>
    </ul>
    <h2>Regra de Ouro</h2>
    <div className="lesson-formula">Total de Débitos = Total de Créditos (sempre)</div>
    <h2>Exemplo Prático</h2>
    <p>Venda de mercadoria por R$ 10.000 à vista com custo de R$ 6.000:</p>
    <ol>
      <li>D: Caixa R$ 10.000 / C: Receita de Vendas R$ 10.000</li>
      <li>D: CMV R$ 6.000 / C: Estoques R$ 6.000</li>
    </ol>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Entender débito e crédito ajuda a interpretar como cada transação impacta as demonstrações financeiras — essencial para construir modelos sem erros.</div>
  </>),

  "razonetes": () => (<>
    <h2>O que são Razonetes?</h2>
    <p>O <strong>Razonete</strong> (ou conta T) é uma representação gráfica simplificada de uma conta contábil, em formato de &quot;T&quot;:</p>
    <ul>
      <li><strong>Lado esquerdo:</strong> Débitos</li>
      <li><strong>Lado direito:</strong> Créditos</li>
    </ul>
    <h2>Livro Razão</h2>
    <p>O <strong>Livro Razão</strong> é o registro completo de todas as movimentações por conta contábil. Cada conta tem seu histórico de débitos e créditos com saldos acumulados.</p>
    <h2>Aplicação na Modelagem</h2>
    <p>Embora não usemos razonetes diretamente em modelos financeiros, entender a mecânica é crucial para:</p>
    <ol>
      <li>Saber como uma transação afeta múltiplas linhas do modelo</li>
      <li>Debugar erros de balanceamento</li>
      <li>Interpretar dados contábeis reais de empresas</li>
    </ol>
  </>),

  "ciclo-contabil": () => (<>
    <h2>Ciclo Contábil Completo</h2>
    <p>O ciclo contábil é o processo completo de registro, classificação e apresentação das transações financeiras de uma empresa:</p>
    <ol>
      <li><strong>Identificação</strong> do fato contábil</li>
      <li><strong>Lançamento</strong> no Diário (débito e crédito)</li>
      <li><strong>Transferência</strong> para o Razão</li>
      <li><strong>Balancete</strong> de verificação</li>
      <li><strong>Ajustes</strong> de encerramento (depreciação, provisões)</li>
      <li><strong>Apuração</strong> do resultado (DRE)</li>
      <li><strong>Elaboração</strong> das demonstrações financeiras</li>
      <li><strong>Encerramento</strong> das contas de resultado</li>
    </ol>
    <h2>Relevância para Modelagem</h2>
    <p>Um modelo financeiro simula este ciclo de forma simplificada. As premissas alimentam a DRE, que alimenta o Balanço, que alimenta o Fluxo de Caixa — reproduzindo o ciclo contábil de forma integrada.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Ao analisar demonstrações reais de empresas listadas, preste atenção às notas explicativas — elas detalham os critérios contábeis que podem impactar suas premissas de modelagem.</div>
  </>),
};
