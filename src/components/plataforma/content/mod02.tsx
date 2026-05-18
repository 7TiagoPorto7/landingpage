import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 2: Análise de Demonstrações Financeiras
   ═══════════════════════════════════════════════════════════════════ */

export const MOD02_CONTENT: Record<string, () => ReactNode> = {
  "analise-vertical-dre": () => (<>
    <h2>O que é Análise Vertical?</h2>
    <p>A <strong>Análise Vertical</strong> expressa cada linha da DRE como percentual de uma base — geralmente a <strong>Receita Líquida</strong>. Isso permite comparar empresas de tamanhos diferentes.</p>
    <h2>Como Calcular</h2>
    <div className="lesson-formula">% AV = (Valor da Linha / Receita Líquida) × 100</div>
    <h2>Interpretação</h2>
    <ul>
      <li><strong>CPV / Receita:</strong> Quanto menor, mais eficiente a produção</li>
      <li><strong>SG&A / Receita:</strong> Eficiência operacional e administrativa</li>
      <li><strong>EBIT / Receita:</strong> Margem operacional do negócio</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na modelagem, a análise vertical histórica é a base para projetar custos e despesas como % da receita — o método mais comum e robusto de projeção.</div>
  </>),

  "analise-vertical-balanco": () => (<>
    <h2>Análise Vertical do Balanço</h2>
    <p>No Balanço, a base da Análise Vertical é o <strong>Ativo Total</strong> (ou Passivo + PL Total).</p>
    <h2>O que Analisar</h2>
    <ul>
      <li><strong>Caixa / Ativo Total:</strong> Nível de liquidez imediata</li>
      <li><strong>Estoques / Ativo Total:</strong> Peso dos estoques na estrutura</li>
      <li><strong>Imobilizado / Ativo Total:</strong> Intensidade de capital do negócio</li>
      <li><strong>Dívida / Passivo+PL:</strong> Grau de alavancagem financeira</li>
    </ul>
    <h2>Comparação Setorial</h2>
    <p>A análise vertical do Balanço é especialmente útil para comparar a estrutura de capital entre empresas do mesmo setor, identificando quais são mais intensivas em capital ou mais alavancadas.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Empresas de tecnologia tendem a ter mais intangíveis e menos imobilizado. Empresas industriais têm padrão oposto. Use a AV para validar se suas premissas de CAPEX estão coerentes.</div>
  </>),

  "analise-horizontal": () => (<>
    <h2>O que é Análise Horizontal?</h2>
    <p>A <strong>Análise Horizontal (AH)</strong> compara a evolução de cada linha ao longo do tempo, usando um período base como referência.</p>
    <div className="lesson-formula">Variação % = ((Valor Atual / Valor Base) - 1) × 100</div>
    <h2>Tipos de AH</h2>
    <ul>
      <li><strong>Base fixa:</strong> Compara todos os períodos com o primeiro ano (ex: 2020 = 100%)</li>
      <li><strong>Base móvel (YoY):</strong> Compara cada período com o anterior</li>
      <li><strong>CAGR:</strong> Taxa de crescimento anual composta para períodos longos</li>
    </ul>
    <h2>Aplicação na Modelagem</h2>
    <p>A AH revela tendências de crescimento e ajuda a definir premissas de projeção. Se a receita cresceu 15% ao ano nos últimos 5 anos, esta é uma referência para a projeção futura.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Combine AV e AH na mesma análise. A AV mostra a estrutura; a AH mostra a tendência. Juntas, revelam se a empresa está melhorando ou piorando suas margens ao longo do tempo.</div>
  </>),

  "indicadores-liquidez": () => (<>
    <h2>Indicadores de Liquidez</h2>
    <p>Medem a capacidade da empresa de honrar suas obrigações de curto prazo.</p>
    <h3>Liquidez Corrente</h3>
    <div className="lesson-formula">LC = Ativo Circulante / Passivo Circulante</div>
    <p>Indica quantos reais em ativos de curto prazo a empresa tem para cada R$ 1 de obrigação. Ideal: &gt; 1,0.</p>
    <h3>Liquidez Seca</h3>
    <div className="lesson-formula">LS = (Ativo Circulante - Estoques) / Passivo Circulante</div>
    <p>Exclui estoques por serem menos líquidos. Mais conservador que a LC.</p>
    <h3>Liquidez Imediata</h3>
    <div className="lesson-formula">LI = Disponibilidades / Passivo Circulante</div>
    <p>Considera apenas caixa e equivalentes. Útil para analisar situações de stress.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na modelagem, monitore estes indicadores no output do modelo para garantir que a empresa projetada mantém liquidez saudável ao longo do horizonte de projeção.</div>
  </>),

  "indicadores-rentabilidade": () => (<>
    <h2>Indicadores de Rentabilidade</h2>
    <p>Medem o retorno gerado pela empresa em relação a diferentes bases.</p>
    <h3>ROE (Return on Equity)</h3>
    <div className="lesson-formula">ROE = Lucro Líquido / Patrimônio Líquido</div>
    <p>Retorno sobre o capital dos acionistas. Quanto a empresa gera de lucro para cada R$ 1 investido pelos sócios.</p>
    <h3>ROA (Return on Assets)</h3>
    <div className="lesson-formula">ROA = Lucro Líquido / Ativo Total</div>
    <p>Eficiência do uso de todos os ativos para gerar lucro.</p>
    <h3>ROIC (Return on Invested Capital)</h3>
    <div className="lesson-formula">ROIC = NOPAT / Capital Investido</div>
    <p>O indicador mais relevante em valuation. Compara o retorno operacional com o capital total investido (equity + dívida líquida).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Se ROIC &gt; WACC, a empresa cria valor. Se ROIC &lt; WACC, destrói valor. Este é o conceito central de EVA (Economic Value Added).</div>
  </>),

  "indicadores-endividamento": () => (<>
    <h2>Indicadores de Endividamento</h2>
    <p>Avaliam o nível de alavancagem financeira e a capacidade de pagamento de dívida.</p>
    <h3>Dívida Líquida / EBITDA</h3>
    <div className="lesson-formula">DL / EBITDA = (Dívida Bruta - Caixa) / EBITDA</div>
    <p>Indica em quantos anos a empresa pagaria sua dívida usando o EBITDA. Referências: &lt; 2x (saudável), 2-3x (moderado), &gt; 3x (alavancado).</p>
    <h3>Cobertura de Juros</h3>
    <div className="lesson-formula">ICR = EBITDA / Despesa de Juros</div>
    <p>Quantas vezes o EBITDA cobre os juros da dívida. Ideal: &gt; 3x.</p>
    <h3>Debt-to-Equity</h3>
    <div className="lesson-formula">D/E = Dívida Total / Patrimônio Líquido</div>
    <p>Proporção entre capital de terceiros e capital próprio.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Covenants bancários geralmente exigem DL/EBITDA &lt; 3x e ICR &gt; 2x. No seu modelo, verifique se estas métricas são respeitadas nas projeções.</div>
  </>),

  "indicadores-atividade": () => (<>
    <h2>Indicadores de Atividade</h2>
    <p>Medem a eficiência operacional da empresa em converter ativos/passivos em caixa.</p>
    <h3>PMR — Prazo Médio de Recebimento</h3>
    <div className="lesson-formula">PMR = (Contas a Receber / Receita) × 360</div>
    <p>Em quantos dias, em média, a empresa recebe de seus clientes.</p>
    <h3>PMP — Prazo Médio de Pagamento</h3>
    <div className="lesson-formula">PMP = (Fornecedores / Compras) × 360</div>
    <p>Em quantos dias a empresa paga seus fornecedores.</p>
    <h3>PME — Prazo Médio de Estocagem</h3>
    <div className="lesson-formula">PME = (Estoques / CPV) × 360</div>
    <p>Em quantos dias o estoque gira completamente.</p>
    <h3>Ciclo de Caixa</h3>
    <div className="lesson-formula">Ciclo de Caixa = PMR + PME - PMP</div>
    <p>Quanto menor o ciclo, menos capital de giro a empresa precisa.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> PMR, PMP e PME são as premissas-chave para projetar o Capital de Giro no modelo financeiro. Use a média histórica ou tendência como base.</div>
  </>),

  "dupont-3-fatores": () => (<>
    <h2>Decomposição DuPont em 3 Fatores</h2>
    <p>A <strong>Análise DuPont</strong> decompõe o ROE em três componentes multiplicativos, revelando as fontes do retorno:</p>
    <div className="lesson-formula">ROE = Margem Líquida × Giro do Ativo × Alavancagem</div>
    <h2>Os 3 Fatores</h2>
    <ol>
      <li><strong>Margem Líquida</strong> (Lucro Líquido / Receita) → eficiência de custos</li>
      <li><strong>Giro do Ativo</strong> (Receita / Ativo Total) → eficiência no uso de ativos</li>
      <li><strong>Alavancagem Financeira</strong> (Ativo Total / PL) → uso de capital de terceiros</li>
    </ol>
    <h2>Interpretação</h2>
    <p>Uma empresa pode ter ROE alto por diferentes caminhos: margens elevadas (luxo), alto giro (varejo), ou alta alavancagem (bancos). A DuPont mostra qual caminho está sendo utilizado.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Ao projetar, verifique se o ROE implícito do seu modelo é consistente com o perfil da empresa. Um ROE de 30% em uma empresa industrial capital-intensiva pode indicar premissas otimistas demais.</div>
  </>),

  "dupont-5-fatores": () => (<>
    <h2>Decomposição DuPont em 5 Fatores</h2>
    <p>A versão estendida adiciona o impacto de juros e impostos:</p>
    <div className="lesson-formula">ROE = Carga Tributária × Carga de Juros × Margem EBIT × Giro × Alavancagem</div>
    <h2>Os 5 Fatores</h2>
    <ol>
      <li><strong>Carga Tributária:</strong> Lucro Líquido / EBT — quanto sobra após impostos</li>
      <li><strong>Carga de Juros:</strong> EBT / EBIT — impacto da dívida no resultado</li>
      <li><strong>Margem EBIT:</strong> EBIT / Receita — eficiência operacional pura</li>
      <li><strong>Giro do Ativo:</strong> Receita / Ativo Total</li>
      <li><strong>Alavancagem:</strong> Ativo Total / PL</li>
    </ol>
    <p>Esta versão isola melhor o efeito operacional vs. financeiro vs. fiscal, sendo mais útil para comparações entre empresas com estruturas de capital diferentes.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Use a DuPont 5 fatores para entender se uma queda no ROE foi causada por piora operacional ou por aumento da carga de juros.</div>
  </>),

  "dupont-interpretacao": () => (<>
    <h2>Interpretação Prática da DuPont</h2>
    <p>A verdadeira utilidade da análise DuPont está na <strong>comparação</strong> — ao longo do tempo e entre empresas.</p>
    <h2>Caso Prático: Varejistas</h2>
    <p>Compare duas empresas com ROE = 20%:</p>
    <ul>
      <li><strong>Empresa A:</strong> Margem 2% × Giro 5x × Alavancagem 2x = 20% → Alto volume, baixa margem</li>
      <li><strong>Empresa B:</strong> Margem 10% × Giro 1x × Alavancagem 2x = 20% → Alta margem, baixo giro</li>
    </ul>
    <p>Mesmo ROE, mas riscos completamente diferentes. A Empresa A depende de volume; a B, de pricing power.</p>
    <h2>Aplicação na Modelagem</h2>
    <ol>
      <li>Calcule a DuPont histórica para entender o perfil</li>
      <li>Projete os componentes individualmente</li>
      <li>Verifique se o ROE implícito faz sentido com o setor</li>
    </ol>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Se no seu modelo o ROE projetado muda significativamente vs. histórico, decomponha pela DuPont para entender qual fator está causando a mudança e se é realista.</div>
  </>),
};
