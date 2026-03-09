import { X } from 'lucide-react';

export function Problem() {
    const painPoints = [
        "Gasta horas formatando planilhas que ninguém lê direito",
        "Cria fórmulas na tentativa e erro até funcionar",
        "Sabe que a IA pode ajudar mas não sabe O QUE pedir",
        "Entrega relatórios sem visual profissional",
        "Vê colegas fazendo em 10 minutos o que você leva 2 horas",
        "Quer usar Claude no Excel mas os resultados saem genéricos"
    ];

    return (
        <section className="py-20 bg-slate-900/50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Isso aqui é você?
                    </h2>
                    <div className="w-20 h-1 bg-destructive/50 mx-auto rounded-full"></div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
                    {/* Subtle destructive gradient in the corner */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                    <ul className="space-y-6 relative z-10">
                        {painPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                                        <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-lg text-slate-300">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto leading-relaxed">
                        <span className="text-primary font-bold">O problema nunca foi o Excel.</span> É não saber pedir certo para a IA.
                    </p>
                </div>

            </div>
        </section>
    );
}
