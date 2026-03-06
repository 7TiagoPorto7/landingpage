"use client";

import { motion } from "framer-motion";

const modules = [
    {
        icon: "📝",
        title: "Lançamentos Inteligentes",
        description:
            "Preencha 6 colunas (data, descrição, categoria, valor, conta). As colunas de apoio classificam tudo automaticamente para DRE e Fluxo de Caixa.",
        id: "module-lancamentos",
    },
    {
        icon: "📈",
        title: "DRE Automática",
        description:
            "Demonstração de Resultado completa, mês a mês: Receita Bruta → Receita Líquida → Lucro Bruto → EBIT → Resultado Líquido. Com coluna de total anual.",
        id: "module-dre",
    },
    {
        icon: "💰",
        title: "Fluxo de Caixa Direto",
        description:
            "Separado por Atividades Operacionais, Investimento, Financiamento e Financeiras. Saldo final automático mês a mês.",
        id: "module-fluxo",
    },
    {
        icon: "📊",
        title: "Dashboard com KPIs",
        description:
            "10 métricas principais + 4 gráficos: Receita vs Resultado, Composição de Despesas, Fluxo de Caixa e Evolução de Margens.",
        id: "module-dashboard",
    },
    {
        icon: "✅",
        title: "Conciliação Bancária",
        description:
            "Compare o saldo da planilha com o extrato real. Check automático mostra zero quando está tudo certo — e alerta quando não está.",
        id: "module-conciliacao",
    },
    {
        icon: "📘",
        title: "Guia Passo a Passo",
        description:
            "Aba completa com instruções: configuração inicial, como lançar, exemplos práticos, como conciliar e como interpretar cada relatório.",
        id: "module-guia",
    },
];

export function SKWhatIncludes() {
    return (
        <section id="o-que-inclui" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <p className="text-[#548235] font-semibold uppercase tracking-wider text-sm mb-3">
                        Conteúdo do kit
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F5496] mb-3">
                        Tudo que você precisa. Nada que não precisa.
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        6 módulos integrados que funcionam juntos automaticamente.
                    </p>
                </motion.div>

                {/* Grid 3x2 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-12">
                    {modules.map((mod, i) => (
                        <motion.div
                            key={mod.id}
                            id={mod.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#F2F2F2] hover:bg-[#2F5496] group rounded-2xl p-7 border border-transparent hover:border-[#2F5496] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
                        >
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {mod.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#2F5496] group-hover:text-white mb-3 transition-colors">
                                {mod.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                                {mod.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-[#FFF2CC] border border-[#FFF2CC] rounded-xl px-6 py-4 shadow-sm">
                        <span className="text-2xl">🏷️</span>
                        <p className="text-[#2F5496] font-semibold text-sm md:text-base">
                            44 subcategorias pré-configuradas — de Consultoria a IRPJ, de
                            Aluguel a Amortização de Empréstimos.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
