import { X } from "lucide-react";

export function CFProblem() {
    const painPoints = [
        "Passa horas copiando dados entre planilhas e relatórios manualmente",
        "Tenta usar ChatGPT mas os outputs são genéricos e cheios de erros",
        "Sabe que a IA pode acelerar seu trabalho, mas não sabe COMO aplicar",
        "Faz análises financeiras no braço que poderiam ser automatizadas",
        "Perde tempo explicando conceitos financeiros para IAs que não entendem",
        "Não confia na IA porque ela inventa números e fórmulas erradas",
    ];

    return (
        <section className="py-20 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Isso acontece com você?
                    </h2>
                    <div className="w-20 h-1 bg-destructive/50 mx-auto rounded-full" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
                    {/* Destructive gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                    <ul className="space-y-6 relative z-10">
                        {painPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                                        <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-lg text-slate-300">{point}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto leading-relaxed">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400 font-bold">
                            O problema não é a IA.
                        </span>{" "}
                        É usar a IA errada, do jeito errado.
                    </p>
                </div>
            </div>
        </section>
    );
}
