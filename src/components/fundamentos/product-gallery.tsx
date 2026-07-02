"use client";

import { motion } from "framer-motion";
import { Layers, FileSpreadsheet, Sparkles, CheckCircle2, ShieldCheck, Download, Zap } from "lucide-react";

interface Deliverable {
    title: string;
    badge: string;
    highlight: string;
    description: string;
    features: string[];
    gradient: string;
    iconBg: string;
    icon: any;
}

const deliverables: Deliverable[] = [
    {
        title: "Aulas Práticas & Objetivas",
        badge: "Vídeo HD",
        highlight: "Acesso Vitalício",
        description: "Assista onde e quando quiser. Explicações direto ao ponto sem jargões desnecessários.",
        features: [
            "Conexão completa entre DRE, Balanço e DFC",
            "Lógica do Capital de Giro e Caixa",
            "Acesso liberado no celular e computador",
        ],
        gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
        iconBg: "bg-teal-500/20 text-teal-300 border-teal-500/40",
        icon: Layers,
    },
    {
        title: "Template do Modelo Integrado",
        badge: "Excel Pronto",
        highlight: "100% Editável",
        description: "Planilha profissional com a estrutura onde os três demonstrativos se conectam perfeitamente.",
        features: [
            "Checagem automática de erro e fechamento do Balanço",
            "Estruturação limpa e padronizada de mercado",
            "Pronta para adaptar e usar nos seus projetos",
        ],
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
        iconBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
        icon: FileSpreadsheet,
    },
    {
        title: "Prompts de IA para Finanças",
        badge: "Bônus Exclusivo",
        description: "Comandos testados e validados de inteligência artificial para acelerar suas análises diárias.",
        highlight: "Economize Horas",
        features: [
            "Prompts para análise rápida de DRE e relatórios",
            "Automação de resumos executivos financeiros",
            "Instruções passo a passo para ChatGPT e Claude",
        ],
        gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        iconBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
        icon: Sparkles,
    },
];

export function FundamentosOQueVoceRecebe() {
    return (
        <section id="o-que-voce-recebe" className="py-24 bg-[#070D1B] text-white relative overflow-hidden border-t border-slate-800/80">
            {/* Background Accent Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30 mb-3"
                    >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Pacote Completo</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white mb-4"
                    >
                        O que você recebe ao se matricular
                    </motion.h2>
                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
                        Tudo o que você precisa para dominar a lógica da modelagem sem perder tempo.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl bg-[#0D1935] border border-slate-700/80 overflow-hidden shadow-2xl hover:border-teal-400/50 transition-all flex flex-col justify-between relative group hover:-translate-y-1"
                        >
                            {/* Top Card Visual Banner */}
                            <div className={`p-8 bg-gradient-to-br ${item.gradient} border-b border-slate-800/80 relative overflow-hidden`}>
                                <div className="flex items-center justify-between gap-3 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.iconBg} shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <span className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full bg-slate-900/90 text-amber-300 border border-amber-400/30 shadow-sm">
                                        {item.highlight}
                                    </span>
                                </div>

                                <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                                    {item.badge}
                                </span>
                                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                            </div>

                            {/* Info & Bullet Features */}
                            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                                    {item.description}
                                </p>

                                <ul className="space-y-3 pt-4 border-t border-slate-800/80">
                                    {item.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
