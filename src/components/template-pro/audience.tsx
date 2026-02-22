"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Target, Sparkles } from "lucide-react";

const forWhom = [
    "Analistas e estagiários de Investment Banking, Equity Research, FP&A ou M&A que querem dominar modelagem integrada",
    "Profissionais de finanças migrando para análise quantitativa (Python + Excel)",
    "Estudantes de Economia, Administração ou Engenharia preparando-se para processos seletivos em bancos e consultorias",
    "Qualquer pessoa que quer entender como um modelo financeiro profissional funciona de verdade — não em slides, mas na prática",
];

const notForWhom = [
    "Quem quer um modelo pronto pra plugar dados reais e gerar um report amanhã (este é didático, com empresa fictícia)",
    "Quem não tem paciência pra abrir fórmulas e entender o que está por trás",
    "Quem já domina modelagem integrada + DCF + análise quantitativa de risco",
];

const outcomes = [
    "Como integrar DRE + BP + DFC num sistema circular que se auto-verifica",
    "Como construir um DCF completo (FCFF → Valor Terminal → Bridge → Sensibilidade)",
    "Como calcular e interpretar múltiplos, comps, IRR, MOIC e Rule of 40",
    "Como rodar 10.000 simulações Monte Carlo e interpretar a distribuição",
    "Como medir risco com VaR, CVaR, correlação e margem de segurança",
    "Como apresentar um valuation no formato equity research (Resumo + Football Field)",
    "Como usar Python para destravar análises impossíveis no Excel puro",
];

export function TemplateAudience() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                {/* For Whom / Not For Whom */}
                <div className="max-w-5xl mx-auto mb-24">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                            <Target className="w-4 h-4" />
                            <span>Público-Alvo</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight md:text-4xl"
                        >
                            Para quem é este modelo?
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* For */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20"
                        >
                            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" />
                                Para quem É
                            </h3>
                            <ul className="space-y-4">
                                {forWhom.map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Not for */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-red-500/[0.03] border border-red-500/20"
                        >
                            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                <XCircle className="w-6 h-6" />
                                Para quem NÃO é
                            </h3>
                            <ul className="space-y-4">
                                {notForWhom.map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Outcomes */}
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Resultado</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight md:text-4xl mb-4"
                        >
                            O que você sai sabendo
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 hover:bg-amber-500/[0.02] transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground text-sm leading-relaxed">{outcome}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
