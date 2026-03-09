import { Check, X } from 'lucide-react';

export function Audience() {
    const isForYou = [
        "Usa Excel no trabalho e quer cortar tempo pela metade",
        "Quer aprender IA de forma prática, não teórica",
        "Precisa entregar modelos financeiros profissionais",
        "Quer se destacar na carreira com skill rara",
        "É empreendedor e precisa de planilhas que funcionem"
    ];

    const notForYou = [
        "Nunca abriu o Excel na vida",
        "Quer curso de 40 horas com vídeo-aula (isso é uma ferramenta)",
        "Acha que IA é modismo e prefere fazer tudo manual"
    ];

    return (
        <section className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Para quem é <span className="text-accent">(e não é)</span> este Guia?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Seremos transparentes: não queremos seu dinheiro se este produto não for transformar sua rotina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* É PRA VOCÊ */}
                    <div className="bg-green-500/10 border border-green-500/20 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/40 transition-colors">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                <Check className="w-6 h-6 text-green-500" strokeWidth={3} />
                            </span>
                            É pra você se:
                        </h3>

                        <ul className="space-y-6">
                            {isForYou.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-300 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NÃO É PRA VOCÊ */}
                    <div className="bg-destructive/10 border border-destructive/20 rounded-3xl p-8 relative overflow-hidden group hover:border-destructive/40 transition-colors">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-destructive/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                                <X className="w-6 h-6 text-red-500" strokeWidth={3} />
                            </span>
                            NÃO é pra você se:
                        </h3>

                        <ul className="space-y-6">
                            {notForYou.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-300 text-lg opacity-80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
