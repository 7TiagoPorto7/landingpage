import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 3: Projeção Financeira
   ═══════════════════════════════════════════════════════════════════ */

export const MOD03_CONTENT: Record<string, () => ReactNode> = {
  "projecao-top-down": () => (<>
    <h2>Projeção Top-Down</h2>
    <p>O método <strong>Top-Down</strong> parte do mercado total e vai afunilando até chegar na receita da empresa.</p>
    <h2>Passo a Passo</h2>
    <ol>
      <li><strong>TAM</strong> (Total Addressable Market) — tamanho total do mercado</li>
      <li><strong>SAM</strong> (Serviceable Addressable Market) — fatia alcançável</li>
      <li><strong>SOM</strong> (Serviceable Obtainable Market) — fatia realista</li>
      <li><strong>Market Share</strong> da empresa × crescimento do mercado</li>
    </ol>
    <div className="lesson-formula">Receita = Tamanho do Mercado × Market Share</div>
    <h2>Quando Usar</h2>
    <ul>
      <li>Empresas em mercados bem dimensionados</li>
      <li>Análises de longo prazo (5-10 anos)</li>
      <li>Validação cruzada com método Bottom-Up</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O Top-Down funciona bem como &quot;reality check&quot;. Se sua projeção Bottom-Up implica market share de 50% em um mercado fragmentado, há algo errado.</div>
  </>),

  "projecao-bottom-up": () => (<>
    <h2>Projeção Bottom-Up</h2>
    <p>O método <strong>Bottom-Up</strong> constrói a receita a partir de unidades operacionais específicas da empresa.</p>
    <h2>Drivers Comuns</h2>
    <ul>
      <li><strong>Varejo:</strong> Número de lojas × Receita por loja × Crescimento SSS</li>
      <li><strong>SaaS:</strong> Clientes × ARPU × Churn × Expansão</li>
      <li><strong>Indústria:</strong> Capacidade instalada × Utilização × Preço médio</li>
      <li><strong>Banco:</strong> Carteira de crédito × Spread × Inadimplência</li>
    </ul>
    <div className="lesson-formula">Receita = Volume × Preço Médio</div>
    <h2>Vantagens</h2>
    <p>É mais preciso para projeções de curto/médio prazo porque se baseia em dados operacionais reais e mensuráveis da empresa.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Sempre projete receita com Bottom-Up e valide com Top-Down. Se os dois convergem, você tem confiança na projeção.</div>
  </>),

  "drivers-receita": () => (<>
    <h2>Análise de Drivers de Receita</h2>
    <p>Identificar os <strong>drivers</strong> (direcionadores) corretos é a etapa mais crítica da projeção. Um driver bem escolhido torna o modelo robusto e auditável.</p>
    <h2>Como Identificar Drivers</h2>
    <ol>
      <li><strong>Decomponha</strong> a receita histórica em componentes (preço × volume)</li>
      <li><strong>Identifique</strong> o que é controlável vs. exógeno</li>
      <li><strong>Teste correlações</strong> com variáveis macroeconômicas (PIB, inflação)</li>
      <li><strong>Valide</strong> com management guidance e relatórios setoriais</li>
    </ol>
    <h2>Exemplos por Setor</h2>
    <ul>
      <li><strong>Energia:</strong> Volume MWh × Tarifa média × Reajuste regulatório</li>
      <li><strong>Telecom:</strong> Assinantes × ARPU × Mix de planos</li>
      <li><strong>Mineração:</strong> Toneladas produzidas × Preço da commodity</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Evite projetar receita apenas como &quot;crescimento de X% ao ano&quot;. Sempre decomponha em drivers — isso torna o modelo mais transparente e permite análises de sensibilidade significativas.</div>
  </>),

  "custos-fixos-variaveis": () => (<>
    <h2>Custos Fixos vs. Variáveis</h2>
    <p>Classificar corretamente os custos é essencial para projetar cenários de receita diferente.</p>
    <h3>Custos Variáveis</h3>
    <p>Variam proporcionalmente ao volume de produção/vendas:</p>
    <ul>
      <li>Matéria-prima e insumos</li>
      <li>Comissões de vendas</li>
      <li>Frete sobre vendas</li>
      <li>Impostos sobre vendas</li>
    </ul>
    <h3>Custos Fixos</h3>
    <p>Permanecem relativamente constantes independente do volume:</p>
    <ul>
      <li>Aluguel e utilities</li>
      <li>Salários administrativos</li>
      <li>Depreciação</li>
      <li>Seguros e licenças</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na modelagem, projete custos variáveis como % da receita e custos fixos em valores absolutos (com correção inflacionária). Isso torna o modelo responsivo a diferentes cenários de receita.</div>
  </>),

  "margem-contribuicao": () => (<>
    <h2>Margem de Contribuição</h2>
    <p>A <strong>Margem de Contribuição</strong> é quanto cada unidade vendida contribui para cobrir os custos fixos e gerar lucro.</p>
    <div className="lesson-formula">MC = Preço de Venda - Custos Variáveis Unitários</div>
    <h2>Margem de Contribuição %</h2>
    <div className="lesson-formula">MC% = MC / Preço de Venda × 100</div>
    <h2>Ponto de Equilíbrio (Break-Even)</h2>
    <div className="lesson-formula">Break-Even = Custos Fixos Totais / MC unitária</div>
    <p>Este é o volume mínimo de vendas para cobrir todos os custos. Abaixo disso, a empresa opera com prejuízo.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Inclua uma análise de break-even no seu modelo. É uma informação valiosa para investidores e gestores entenderem o risco operacional do negócio.</div>
  </>),

  "alavancagem-operacional": () => (<>
    <h2>Alavancagem Operacional</h2>
    <p>A <strong>Alavancagem Operacional</strong> mede como variações na receita impactam o lucro operacional, dado o mix de custos fixos e variáveis.</p>
    <div className="lesson-formula">GAO = Variação % do EBIT / Variação % da Receita</div>
    <h2>Interpretação</h2>
    <ul>
      <li><strong>GAO alto</strong> (ex: 3x): Receita sobe 10% → EBIT sobe 30%. Mas se receita cai 10% → EBIT cai 30%</li>
      <li><strong>GAO baixo</strong> (ex: 1,2x): Receita e EBIT se movem de forma similar</li>
    </ul>
    <h2>O que Determina o GAO?</h2>
    <p>Quanto maior a proporção de custos fixos vs. variáveis, maior a alavancagem operacional. Setores capital-intensivos (aviação, siderurgia) têm GAO alto.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Na análise de cenários, empresas com alto GAO são mais arriscadas — o upside é grande, mas o downside também. Considere isso ao definir taxas de desconto.</div>
  </>),

  "premissas-pmr-pmp-pme": () => (<>
    <h2>Premissas de Capital de Giro</h2>
    <p>Os prazos médios (<strong>PMR, PMP, PME</strong>) são as premissas-chave para projetar as contas operacionais do Balanço.</p>
    <h2>Como Definir Premissas</h2>
    <ol>
      <li><strong>Calcule histórico:</strong> PMR, PMP e PME dos últimos 3-5 anos</li>
      <li><strong>Identifique tendência:</strong> Estão aumentando ou diminuindo?</li>
      <li><strong>Considere o setor:</strong> Compare com pares de mercado</li>
      <li><strong>Ajuste por estratégia:</strong> A empresa pretende mudar condições de pagamento?</li>
    </ol>
    <h2>Projeção das Contas</h2>
    <div className="lesson-formula">Contas a Receber = Receita × (PMR / 360)</div>
    <div className="lesson-formula">Estoques = CPV × (PME / 360)</div>
    <div className="lesson-formula">Fornecedores = Compras × (PMP / 360)</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Mantenha os prazos médios constantes no cenário base, a menos que haja razão específica para alterá-los (ex: renegociação com fornecedores, mudança de política de crédito).</div>
  </>),

  "ncg": () => (<>
    <h2>Necessidade de Capital de Giro (NCG)</h2>
    <p>A <strong>NCG</strong> representa quanto a empresa precisa investir no ciclo operacional antes de receber pelos produtos/serviços vendidos.</p>
    <div className="lesson-formula">NCG = Ativo Operacional Circulante - Passivo Operacional Circulante</div>
    <h2>Componentes</h2>
    <ul>
      <li><strong>Ativo Operacional:</strong> Contas a Receber + Estoques + Adiantamentos</li>
      <li><strong>Passivo Operacional:</strong> Fornecedores + Salários + Impostos operacionais</li>
    </ul>
    <h2>Impacto no Fluxo de Caixa</h2>
    <p>A <strong>variação da NCG</strong> (ΔNCG) impacta diretamente o Fluxo de Caixa Operacional:</p>
    <ul>
      <li><strong>NCG aumenta:</strong> Consome caixa (empresa crescendo precisa financiar mais capital de giro)</li>
      <li><strong>NCG diminui:</strong> Libera caixa</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Empresas em crescimento acelerado podem ter &quot;lucro na DRE e falta de caixa&quot; justamente porque a NCG cresce junto com a receita. Este é um erro comum de modelos que ignoram o capital de giro.</div>
  </>),

  "projecao-ativo": () => (<>
    <h2>Projeção do Ativo</h2>
    <p>A projeção do ativo integra premissas de operação, investimento e capital de giro.</p>
    <h3>Ativo Circulante</h3>
    <ul>
      <li><strong>Caixa:</strong> Resultado do Fluxo de Caixa (plug ou mínimo operacional)</li>
      <li><strong>Contas a Receber:</strong> Receita × (PMR / 360)</li>
      <li><strong>Estoques:</strong> CPV × (PME / 360)</li>
    </ul>
    <h3>Ativo Não Circulante</h3>
    <ul>
      <li><strong>Imobilizado Bruto:</strong> Saldo anterior + CAPEX - Baixas</li>
      <li><strong>(-) Depreciação Acumulada:</strong> Saldo anterior + Depreciação do período</li>
      <li><strong>Intangível:</strong> Saldo anterior + Investimentos - Amortização</li>
    </ul>
    <div className="lesson-formula">Imobilizado Líquido = Imobilizado Bruto - Depreciação Acumulada</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Projete o CAPEX como % da receita (CAPEX de manutenção) ou em valores absolutos (CAPEX de expansão). Separe os dois tipos para melhor análise.</div>
  </>),

  "projecao-passivo": () => (<>
    <h2>Projeção do Passivo e Patrimônio Líquido</h2>
    <h3>Passivo Circulante</h3>
    <ul>
      <li><strong>Fornecedores:</strong> Compras × (PMP / 360)</li>
      <li><strong>Salários a Pagar:</strong> % das despesas com pessoal</li>
      <li><strong>Impostos a Pagar:</strong> % dos impostos do período</li>
      <li><strong>Dívida CP:</strong> Parcelas de LP que vencem no próximo ano</li>
    </ul>
    <h3>Passivo Não Circulante</h3>
    <ul>
      <li><strong>Empréstimos LP:</strong> Saldo anterior + Captações - Amortizações - Reclassificação para CP</li>
    </ul>
    <h3>Patrimônio Líquido</h3>
    <ul>
      <li><strong>Capital Social:</strong> Saldo anterior + Emissões</li>
      <li><strong>Lucros Acumulados:</strong> Saldo anterior + Lucro Líquido - Dividendos</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Construa um schedule de dívida separado para modelar captações, amortizações e juros. Isso alimenta o Passivo e o Resultado Financeiro na DRE.</div>
  </>),

  "balanceamento-modelo": () => (<>
    <h2>Balanceamento do Modelo (Plug)</h2>
    <p>Em um modelo integrado, o Balanço deve sempre fechar: <strong>Ativo = Passivo + PL</strong>. O &quot;plug&quot; é a conta que garante o equilíbrio.</p>
    <h2>Como Funciona o Plug</h2>
    <ol>
      <li>Projete todas as contas independentemente</li>
      <li>Calcule a diferença: Ativo - (Passivo + PL)</li>
      <li>Se sobra caixa → o plug vai para <strong>Caixa</strong> ou <strong>Aplicações Financeiras</strong></li>
      <li>Se falta caixa → o plug vai para <strong>Revolver / Linha de Crédito</strong></li>
    </ol>
    <h2>Circularidade</h2>
    <p>O plug cria circularidade no modelo: mais dívida → mais juros → menos lucro → mais dívida. Para resolver:</p>
    <ul>
      <li>Use iterações do Excel (Arquivo → Opções → Fórmulas → Habilitar cálculo iterativo)</li>
      <li>Ou quebre a circularidade com um macro/switch</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Adicione um &quot;Balance Check&quot; no modelo: <code>=Ativo Total - Passivo Total - PL</code>. Este deve ser sempre zero. Destaque em vermelho se for diferente.</div>
  </>),

  "fluxo-operacional": () => (<>
    <h2>Fluxo de Caixa Operacional</h2>
    <p>O FCO é a geração de caixa pela operação principal do negócio, usando o <strong>método indireto</strong>:</p>
    <ol>
      <li><strong>Lucro Líquido</strong> (da DRE)</li>
      <li>(+) Depreciação e Amortização (não-caixa)</li>
      <li>(+/-) Variação do Capital de Giro</li>
      <li>(+/-) Outros ajustes não-caixa</li>
    </ol>
    <div className="lesson-formula">FCO = Lucro Líquido + D&A + ΔNCG + Outros Ajustes</div>
    <h2>Por que o Método Indireto?</h2>
    <p>Ele reconcilia o lucro contábil (competência) com a geração real de caixa, mostrando exatamente onde o dinheiro &quot;fica preso&quot; — geralmente no capital de giro.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O FCO deve ser positivo e crescente ao longo do tempo para uma empresa saudável. FCO negativo persistente é sinal de alerta mesmo com lucro na DRE.</div>
  </>),

  "fluxo-investimento": () => (<>
    <h2>Fluxo de Investimentos (CAPEX)</h2>
    <p>O fluxo de investimentos registra os gastos com ativos de longo prazo e desinvestimentos.</p>
    <h2>Tipos de CAPEX</h2>
    <ul>
      <li><strong>CAPEX de Manutenção:</strong> Repor ativos depreciados, manter capacidade atual. Geralmente ≈ Depreciação</li>
      <li><strong>CAPEX de Expansão:</strong> Aumentar capacidade, novas plantas, aquisições</li>
    </ul>
    <div className="lesson-formula">CAPEX Total = CAPEX Manutenção + CAPEX Expansão</div>
    <h2>Projeção</h2>
    <ul>
      <li><strong>CAPEX / Receita:</strong> Use a média histórica para manutenção</li>
      <li><strong>CAPEX / Depreciação:</strong> Ratio &gt; 1 indica investimento líquido positivo</li>
      <li><strong>Guidance da empresa:</strong> Muitas empresas divulgam planos de investimento</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No cálculo do Free Cash Flow, o CAPEX de manutenção é essencial (custo de manter o negócio). O CAPEX de expansão pode ser tratado como investimento de crescimento com retorno esperado.</div>
  </>),

  "fluxo-financiamento": () => (<>
    <h2>Fluxo de Financiamento</h2>
    <p>Registra movimentações de capital entre a empresa e seus financiadores (credores e acionistas).</p>
    <h2>Componentes Principais</h2>
    <h3>Entradas (+)</h3>
    <ul>
      <li>Captação de empréstimos e financiamentos</li>
      <li>Emissão de debêntures</li>
      <li>Aumento de capital (emissão de ações)</li>
    </ul>
    <h3>Saídas (-)</h3>
    <ul>
      <li>Amortização de principal da dívida</li>
      <li>Pagamento de dividendos e JCP</li>
      <li>Recompra de ações</li>
    </ul>
    <h2>Conexão com o Modelo</h2>
    <p>O fluxo de financiamento fecha o gap entre a geração operacional de caixa e as necessidades de investimento:</p>
    <div className="lesson-formula">Var. Caixa = FCO + FCI + FCF</div>
    <div className="lesson-tip"><strong>💡 Dica:</strong> No schedule de dívida, projete separadamente cada instrumento (empréstimo, debêntures, revolver). Isso dá precisão ao fluxo de financiamento e às despesas financeiras na DRE.</div>
  </>),
};
