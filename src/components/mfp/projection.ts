// Modelo integrado de 3 anos da empresa-exemplo. Sem dívida e sem dividendos para ficar didático.
// O Balanço fecha por construção: o caixa vem do Fluxo de Caixa e o PL acumula o lucro.

export const PREMISSAS = {
    receitaAno1: 1000,
    crescimento: 0.1,
    custosPctReceita: 0.6,
    despesasPctReceita: 0.2,
    depreciacao: 50,
    capex: 60,
    aliquotaIR: 0.3,
    prazoClientes: 30,
    prazoFornecedores: 30,
    caixaInicial: 100,
    imobilizadoInicial: 500,
    plInicial: 600,
};

export interface Ano {
    receita: number;
    custos: number;
    despesas: number;
    depreciacao: number;
    ebit: number;
    impostos: number;
    lucro: number;
    receber: number;
    fornecedores: number;
    varReceber: number;
    varFornecedores: number;
    caixaOperacional: number;
    capex: number;
    variacaoCaixa: number;
    caixaInicial: number;
    caixa: number;
    imobilizado: number;
    ativo: number;
    pl: number;
    passivoPl: number;
    checagem: number;
}

export function projetar(anos = 3, p = PREMISSAS): Ano[] {
    const out: Ano[] = [];
    let caixa = p.caixaInicial;
    let imobilizado = p.imobilizadoInicial;
    let pl = p.plInicial;
    let receberAnt = 0;
    let fornecedoresAnt = 0;

    for (let t = 0; t < anos; t++) {
        const receita = p.receitaAno1 * Math.pow(1 + p.crescimento, t);
        const custos = receita * p.custosPctReceita;
        const despesas = receita * p.despesasPctReceita;
        const ebit = receita - custos - despesas - p.depreciacao;
        const impostos = ebit * p.aliquotaIR;
        const lucro = ebit - impostos;

        const receber = (receita * p.prazoClientes) / 360;
        const fornecedores = (custos * p.prazoFornecedores) / 360;
        const varReceber = receber - receberAnt;
        const varFornecedores = fornecedores - fornecedoresAnt;

        const caixaOperacional = lucro + p.depreciacao - varReceber + varFornecedores;
        const variacaoCaixa = caixaOperacional - p.capex;
        const caixaInicial = caixa;
        caixa += variacaoCaixa;
        imobilizado += p.capex - p.depreciacao;
        pl += lucro;

        const ativo = caixa + receber + imobilizado;
        const passivoPl = fornecedores + pl;

        out.push({
            receita,
            custos,
            despesas,
            depreciacao: p.depreciacao,
            ebit,
            impostos,
            lucro,
            receber,
            fornecedores,
            varReceber,
            varFornecedores,
            caixaOperacional,
            capex: p.capex,
            variacaoCaixa,
            caixaInicial,
            caixa,
            imobilizado,
            ativo,
            pl,
            passivoPl,
            checagem: ativo - passivoPl,
        });

        receberAnt = receber;
        fornecedoresAnt = fornecedores;
    }
    return out;
}
