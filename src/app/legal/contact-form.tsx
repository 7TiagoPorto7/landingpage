"use client";

const CONTACT_EMAIL = "tl.araujoporto@gmail.com";

// Sem backend de e-mail: monta a mensagem e abre o cliente de e-mail da pessoa.
export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = `Contato pelo site: ${data.get("name")}`;
        const body = `${data.get("message")}\n\n${data.get("name")} <${data.get("email")}>`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-2xl bg-card border-white/10">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-3 py-2 rounded-md bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 font-bold text-black rounded-lg bg-primary hover:bg-primary/90 transition-colors"
            >
                Abrir no meu e-mail
            </button>
        </form>
    );
}
