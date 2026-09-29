// Ano 1 da mesma empresa-exemplo da planilha (projection.ts). Só o prazo de recebimento muda:
// o lucro fica igual, o caixa não. É a ideia central do curso.
export const RECEITA = 1000;
export const CUSTOS = 600;
export const DESPESAS = 200;
export const DEPRECIACAO = 50;
export const CAPEX = 60;
export const IMPOSTOS = 0.3;
export const PRAZO_FORNECEDOR = 30;
export const CAIXA_INICIAL = 100;
export const IMOBILIZADO_INICIAL = 500;
export const PL_INICIAL = 600;

export function cashModel(prazoClientes: number) {
    const ebit = RECEITA - CUSTOS - DESPESAS - DEPRECIACAO;
    const impostos = ebit * IMPOSTOS;
    const lucro = ebit - impostos;
    const receber = (RECEITA * prazoClientes) / 360;
    const fornecedores = (CUSTOS * PRAZO_FORNECEDOR) / 360;
    const caixaOperacional = lucro + DEPRECIACAO - receber + fornecedores;
    const caixa = CAIXA_INICIAL + caixaOperacional - CAPEX;
    const imobilizado = IMOBILIZADO_INICIAL + CAPEX - DEPRECIACAO;
    const ativo = caixa + receber + imobilizado;
    const pl = PL_INICIAL + lucro;
    return { ebit, impostos, lucro, receber, fornecedores, caixaOperacional, caixa, imobilizado, ativo, pl, passivoPl: fornecedores + pl };
}
