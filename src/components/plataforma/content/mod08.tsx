import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MÓDULO 8: Modelagem de Project Finance
   ═══════════════════════════════════════════════════════════════════ */

export const MOD08_CONTENT: Record<string, () => ReactNode> = {
  "o-que-e-pf": () => (<>
    <h2>O que é Project Finance?</h2>
    <p><strong>Project Finance</strong> é uma modalidade de financiamento onde o empréstimo é pago exclusivamente pelo fluxo de caixa gerado pelo próprio projeto, sem recurso aos acionistas (non-recourse).</p>
    <h2>Características Principais</h2>
    <ul>
      <li><strong>SPE (Sociedade de Propósito Específico):</strong> O projeto é isolado em uma entidade jurídica separada</li>
      <li><strong>Non-recourse:</strong> Se o projeto falhar, o credor não pode acessar outros ativos do sponsor</li>
      <li><strong>Contratos de longo prazo:</strong> PPAs (energia), concessões (infraestrutura), offtake (mineração)</li>
      <li><strong>Alta alavancagem:</strong> 70-80% dívida / 20-30% equity</li>
    </ul>
    <h2>Diferença do Corporate Finance</h2>
    <p>No corporate finance, o credor analisa a empresa como um todo. No project finance, analisa apenas o projeto e seu fluxo de caixa isolado.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O modelo de project finance é o mais detalhado de todos — projeta fluxos mensais/trimestrais por 20-30 anos, incluindo premissas técnicas, regulatórias e macro.</div>
  </>),

  "spe-non-recourse": () => (<>
    <h2>SPE e Financiamento Non-Recourse</h2>
    <h3>SPE — Sociedade de Propósito Específico</h3>
    <p>A <strong>SPE</strong> é uma entidade jurídica criada exclusivamente para abrigar o projeto. Isso:</p>
    <ul>
      <li>Isola os riscos do projeto dos demais ativos dos sponsors</li>
      <li>Facilita a estruturação do financiamento</li>
      <li>Permite governança específica para o projeto</li>
    </ul>
    <h3>Non-Recourse vs. Limited Recourse</h3>
    <ul>
      <li><strong>Non-recourse:</strong> Garantia é apenas o fluxo de caixa e ativos do projeto</li>
      <li><strong>Limited recourse:</strong> Sponsor dá garantias parciais (completion guarantee, cost overrun)</li>
    </ul>
    <h2>Implicações na Modelagem</h2>
    <p>Como a dívida depende 100% do projeto, o modelo precisa demonstrar capacidade de pagamento sob stress. Os credores exigem DSCR mínimo e reservas de caixa.</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O modelo de PF deve ter cenários de stress (P90 de receita, atrasos de construção, aumento de custos) para demonstrar robustez aos credores.</div>
  </>),

  "setores-pf": () => (<>
    <h2>Setores de Project Finance</h2>
    <h3>Energia</h3>
    <ul>
      <li><strong>Eólica e Solar:</strong> Contratos PPA de 15-20 anos, receita previsível</li>
      <li><strong>Hidrelétricas:</strong> Concessões de 30-35 anos</li>
      <li><strong>Termelétricas:</strong> Contratos de disponibilidade</li>
    </ul>
    <h3>Infraestrutura</h3>
    <ul>
      <li><strong>Rodovias:</strong> Concessões com pedágio, tráfego mínimo garantido (TMA)</li>
      <li><strong>Aeroportos e Portos:</strong> Concessões com cláusulas de equilíbrio econômico-financeiro</li>
      <li><strong>Saneamento:</strong> Contratos de PPP de 30+ anos</li>
    </ul>
    <h3>Óleo e Gás / Mineração</h3>
    <ul>
      <li>Contratos de offtake com compradores internacionais</li>
      <li>Reservas provadas como garantia</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Cada setor tem premissas regulatórias específicas (ANEEL, ANTT, ANP). O modelo deve refletir fielmente o marco regulatório — reajustes tarifários, revisões, indenizações.</div>
  </>),

  "premissas-operacionais-pf": () => (<>
    <h2>Premissas Operacionais e Regulatórias</h2>
    <p>O modelo de Project Finance exige premissas muito mais detalhadas que um modelo corporativo:</p>
    <h3>Premissas Técnicas</h3>
    <ul>
      <li><strong>Capacidade instalada:</strong> MW, km, m³/s</li>
      <li><strong>Fator de capacidade:</strong> % de utilização efetiva (ex: eólica ~40%)</li>
      <li><strong>Degradação:</strong> Perda de eficiência ao longo dos anos</li>
      <li><strong>CAPEX de construção:</strong> Cronograma físico-financeiro detalhado</li>
    </ul>
    <h3>Premissas Regulatórias</h3>
    <ul>
      <li><strong>Tarifa base e reajustes:</strong> IPCA, IGP-M ou fórmula específica</li>
      <li><strong>Prazo de concessão:</strong> 20-35 anos (com indenização de ativos ao final)</li>
      <li><strong>Tributos setoriais:</strong> TUST/TUSD, encargos setoriais</li>
    </ul>
    <h3>Premissas Macroeconômicas</h3>
    <ul>
      <li>Inflação, câmbio, taxa de juros de longo prazo</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> Projete receita e custos em termos reais, depois inflacione. Isso facilita a análise e torna o modelo mais transparente.</div>
  </>),

  "dscr-llcr": () => (<>
    <h2>DSCR, LLCR e Indicadores de Cobertura</h2>
    <p>Os indicadores de cobertura são o coração da análise de project finance — determinam se o projeto consegue pagar a dívida.</p>
    <h3>DSCR — Debt Service Coverage Ratio</h3>
    <div className="lesson-formula">DSCR = CFADS / Serviço da Dívida (Juros + Amortização)</div>
    <p>Mede a capacidade de pagamento período a período. Mínimo exigido: geralmente 1,2-1,4x.</p>
    <h3>LLCR — Loan Life Coverage Ratio</h3>
    <div className="lesson-formula">LLCR = VP(CFADS até o fim da dívida) / Saldo Devedor</div>
    <p>Visão acumulada: o VP de todo o caixa restante cobre o saldo da dívida? Mínimo: 1,3-1,5x.</p>
    <h3>PLCR — Project Life Coverage Ratio</h3>
    <p>Similar ao LLCR, mas considera o fluxo de caixa de toda a vida do projeto (além do prazo da dívida).</p>
    <div className="lesson-tip"><strong>💡 Dica:</strong> CFADS = Cash Flow Available for Debt Service = EBITDA - Impostos - CAPEX Manutenção - ΔNCG. É o fluxo real disponível para pagar a dívida.</div>
  </>),

  "sculpting-divida": () => (<>
    <h2>Debt Sculpting e Amortização</h2>
    <p>O <strong>Debt Sculpting</strong> é a técnica de moldar o perfil de amortização da dívida para que o serviço da dívida acompanhe a geração de caixa do projeto.</p>
    <h2>Como Funciona</h2>
    <ol>
      <li>Projete o CFADS (Cash Flow Available for Debt Service) para cada período</li>
      <li>Defina o DSCR alvo (ex: 1,3x)</li>
      <li>Calcule: Serviço da Dívida = CFADS / DSCR alvo</li>
      <li>A amortização é a diferença: Serviço - Juros</li>
    </ol>
    <div className="lesson-formula">Amortização = (CFADS / DSCR alvo) - Juros do Período</div>
    <h2>Vantagens do Sculpting</h2>
    <ul>
      <li>Maximiza a capacidade de endividamento do projeto</li>
      <li>DSCR constante ao longo do tempo (menos risco para o credor)</li>
      <li>Evita períodos de stress no serviço da dívida</li>
    </ul>
    <div className="lesson-tip"><strong>💡 Dica:</strong> O sculpting é o padrão de mercado em project finance. Use Goal Seek ou Solver no Excel para calibrar o tamanho da dívida dado um DSCR mínimo.</div>
  </>),
};
