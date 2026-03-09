export function Numbers() {
    const kpis = [
        { value: "100", label: "Prompts Reais" },
        { value: "120+", label: "Fórmulas Únicas" },
        { value: "10", label: "Categorias" },
        { value: "4", label: "Níveis (Bas a Exp)" }
    ];

    const institutions = [
        "MIT", "Harvard", "McKinsey", "BCG", "SEBRAE", "Deloitte", "PMI"
    ];

    return (
        <section className="py-20 relative bg-background overflow-hidden">
            {/* Decorative gradient sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Números que falam por si
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {kpis.map((kpi, idx) => (
                        <div key={idx} className="text-center group">
                            <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-2 group-hover:scale-105 transition-transform duration-300">
                                {kpi.value}
                            </p>
                            <p className="text-sm md:text-base font-medium text-primary tracking-widest uppercase">
                                {kpi.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-2xl rounded-full" />

                    <p className="text-lg md:text-xl text-slate-300 font-medium mb-8 relative z-10">
                        Insights e táticas baseados em metodologias validadas por:
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 relative z-10">
                        {institutions.map((inst, idx) => (
                            <span key={idx} className="text-xl md:text-3xl font-bold text-slate-600 grayscale hover:grayscale-0 hover:text-slate-300 transition-all cursor-default">
                                {inst}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
