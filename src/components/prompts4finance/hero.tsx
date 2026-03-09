import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            Lançamento Oficial
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Pare de perder horas no Excel. 100 prompts prontos para <span className="text-gradient-primary">fazer a IA trabalhar por você.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                            120+ fórmulas documentadas. Do básico ao Black-Scholes. Copie, cole e veja o resultado em segundos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
                            <Link
                                href="https://pay.hotmart.com/P104814631L?off=8b3uxx2o"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 group"
                            >
                                QUERO MEU GUIA — R$ 29,90
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-col items-center lg:items-start gap-3">
                            <div className="flex items-center gap-1 text-primary">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">
                                Baseado em metodologias usadas por Goldman Sachs, McKinsey e Harvard
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image/Mockup */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        {/* Decorative elements behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 opacity-50 blur-2xl rounded-[2rem] -z-10"></div>

                        <div className="glass rounded-xl p-2 border border-white/10 shadow-2xl relative">
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                            {/* Fake Browser/Excel Header */}
                            <div className="flex items-center px-3 py-2 border-b border-white/5 bg-black/20 rounded-t-lg">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="mx-auto text-xs text-muted-foreground font-medium flex items-center gap-2">
                                    <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M21.17 3.25q.33 0 .59.25q.24.26.24.59v15.82q0 .33-.24.59q-.26.25-.59.25H2.83q-.33 0-.59-.25q-.24-.26-.24-.59V4.09q0-.33.24-.59q.26-.25.59-.25h18.34M7.48 10.64h-3.4v3.4h3.4v-3.4m4.84 0H8.92v3.4h3.4v-3.4m4.84 0h-3.4v3.4h3.4v-3.4m4.84 0h-3.4v3.4h3.4v-3.4M7.48 6.06h-3.4v3.13h3.4V6.06m4.84 0H8.92v3.13h3.4V6.06m4.84 0h-3.4v3.13h3.4V6.06m4.84 0h-3.4v3.13h3.4V6.06M7.48 15.48h-3.4v3.13h3.4v-3.13m4.84 0H8.92v3.13h3.4v-3.13m4.84 0h-3.4v3.13h3.4v-3.13m4.84 0h-3.4v3.13h3.4v-3.13Z" /></svg>
                                    100_Prompts_Excel_Avancado.xlsx
                                </div>
                            </div>

                            {/* Spreadsheet Content Mockup */}
                            <div className="bg-slate-900/80 rounded-b-lg overflow-hidden flex flex-col font-mono text-[10px] sm:text-xs">
                                {/* Header Row */}
                                <div className="grid grid-cols-12 bg-slate-800/80 text-slate-300 py-2 border-b border-slate-700/50">
                                    <div className="col-span-1 px-2 text-center border-r border-slate-700/50">A</div>
                                    <div className="col-span-3 px-2 border-r border-slate-700/50 font-semibold">Prompt Pronto</div>
                                    <div className="col-span-3 px-2 border-r border-slate-700/50 font-semibold">O que Você Recebe</div>
                                    <div className="col-span-2 px-2 border-r border-slate-700/50 font-semibold">Fórmulas</div>
                                    <div className="col-span-2 px-2 border-r border-slate-700/50 font-semibold">Insight Estratégico</div>
                                    <div className="col-span-1 px-2 text-center font-semibold">Nível</div>
                                </div>

                                {/* Row 1 */}
                                <div className="grid grid-cols-12 border-b border-slate-800/50 bg-slate-800/20 py-2 hover:bg-slate-800/40 transition-colors">
                                    <div className="col-span-1 px-2 text-center text-slate-500 border-r border-slate-800/50">1</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-amber-400 capitalize truncate">"Atue como um analista de M&A..."</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-slate-300 truncate">Avaliação de DCF completa...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-blue-400 truncate">=VPL(), =TIR()...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-slate-400 truncate">Reduz o tempo de modelagem...</div>
                                    <div className="col-span-1 px-2 text-center text-purple-400 font-bold">Expert</div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-12 border-b border-slate-800/50 py-2 hover:bg-slate-800/40 transition-colors">
                                    <div className="col-span-1 px-2 text-center text-slate-500 border-r border-slate-800/50">2</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-amber-400 truncate">"Crie uma macro para consolidar..."</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-slate-300 truncate">Script VBA comentado...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-blue-400 truncate">VBA, =INDIRETO()...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-slate-400 truncate">Evita erros humanos em...</div>
                                    <div className="col-span-1 px-2 text-center text-red-400 font-bold">Avançado</div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-12 border-b border-slate-800/50 bg-slate-800/20 py-2 hover:bg-slate-800/40 transition-colors">
                                    <div className="col-span-1 px-2 text-center text-slate-500 border-r border-slate-800/50">3</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-amber-400 truncate">"Gere uma matriz RFM para..."</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-slate-300 truncate">Segmentação de clientes...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-blue-400 truncate">=ÍNDICE(), =CORRESP()...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-slate-400 truncate">Aumenta LTV identificando...</div>
                                    <div className="col-span-1 px-2 text-center text-orange-400 font-bold">Intermed.</div>
                                </div>

                                {/* Row 4 */}
                                <div className="grid grid-cols-12 border-b border-slate-800/50 py-2 hover:bg-slate-800/40 transition-colors">
                                    <div className="col-span-1 px-2 text-center text-slate-500 border-r border-slate-800/50">4</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-amber-400 truncate">"Formate este Trial Balance..."</div>
                                    <div className="col-span-3 px-2 border-r border-slate-800/50 text-slate-300 truncate">Balancete pronto pra aud...</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-blue-400 truncate">=SOMASES(), =SE()</div>
                                    <div className="col-span-2 px-2 border-r border-slate-800/50 text-slate-400 truncate">Padrão Big4 de apres...</div>
                                    <div className="col-span-1 px-2 text-center text-green-400 font-bold">Básico</div>
                                </div>

                                <div className="py-4 text-center text-slate-500 italic bg-slate-900/50">
                                    +96 linhas detalhadas...
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-border rounded-xl p-4 shadow-xl glass animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-green-500/20 p-2 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium">Economia Média</p>
                                    <p className="text-lg font-bold text-foreground">4 horas / dia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
