// Faixa rolante com fatos do produto. O conteúdo é duplicado para o loop não ter emenda.
export function Marquee({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
    const row = (hidden?: boolean) => (
        <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-10 pr-10">
            {items.map((item) => (
                <li key={item} className="flex items-center gap-10 whitespace-nowrap">
                    <span>{item}</span>
                    <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-[var(--amber)]" />
                </li>
            ))}
        </ul>
    );

    return (
        <div
            className={
                tone === "light"
                    ? "marquee overflow-hidden border-y border-[var(--grid)] bg-white py-4 text-[15px] font-medium text-[var(--ink)]/80"
                    : "marquee overflow-hidden border-y border-white/10 bg-[var(--navy)] py-4 text-[15px] font-medium text-white/85"
            }
        >
            <div className="marquee-track flex w-max">
                {row()}
                {row(true)}
            </div>
        </div>
    );
}
