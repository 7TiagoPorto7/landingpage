"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header / Back Button */}
            <div className="container px-4 py-8 mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para a Home
                </Link>
            </div>

            <div className="container max-w-4xl px-4 pb-24 mx-auto space-y-24">
                {/* Terms of Use */}
                <section id="terms" className="scroll-mt-24">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl text-gradient-primary">
                        Termos de Uso
                    </h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p>
                            Bem-vindo ao Modelagem Financeira na Prática. Ao acessar nosso site e adquirir nossos cursos, você concorda com os seguintes termos e condições:
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">1. Uso do Conteúdo</h3>
                        <p>
                            Todo o conteúdo disponibilizado neste curso (vídeos, planilhas, documentos) é de propriedade exclusiva do Modelagem Financeira na Prática. O acesso é pessoal e intransferível. É estritamente proibido compartilhar, revender ou distribuir o material sem autorização expressa.
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">2. Acesso ao Curso</h3>
                        <p>
                            O acesso ao curso é garantido pelo período contratado. Nos reservamos o direito de revogar o acesso em caso de violação destes termos ou comportamento inadequado na comunidade.
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">3. Garantia e Reembolso</h3>
                        <p>
                            Oferecemos uma garantia incondicional de 7 dias. Caso não esteja satisfeito com o conteúdo, você pode solicitar o reembolso integral dentro deste prazo.
                        </p>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section id="privacy" className="scroll-mt-24">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl text-gradient-primary">
                        Política de Privacidade
                    </h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p>
                            Sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">1. Coleta de Dados</h3>
                        <p>
                            Coletamos informações como nome, e-mail e dados de pagamento apenas para processar sua inscrição e fornecer acesso ao curso. Não vendemos seus dados para terceiros.
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">2. Cookies</h3>
                        <p>
                            Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Você pode desativar os cookies nas configurações do seu navegador.
                        </p>
                        <h3 className="text-foreground mt-6 mb-2 font-semibold">3. Segurança</h3>
                        <p>
                            Adotamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado, alteração ou divulgação.
                        </p>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-24">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl text-gradient-primary">
                        Contato
                    </h1>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <p className="text-muted-foreground">
                                Tem alguma dúvida ou precisa de suporte? Entre em contato conosco através dos canais abaixo ou preencha o formulário.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>suporte@modelagemfinanceira.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>(11) 99999-9999</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span>São Paulo, SP - Brasil</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4 p-6 border rounded-2xl bg-card border-white/10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Seu nome"
                                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Como podemos ajudar?"
                                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 font-bold text-black rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}
