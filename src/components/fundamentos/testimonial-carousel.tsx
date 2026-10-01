"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "./content";

// Cores das iniciais, para os cartões não ficarem todos iguais
const AVATAR = ["#f59e0b", "#3b82f6", "#10b981", "#8b5cf6", "#06b6d4", "#f43f5e"];

function Card({ t, i, exemplo }: { t: Testimonial; i: number; exemplo: boolean }) {
    const cor = AVATAR[i % AVATAR.length];
    return (
        <figure
            className={cn(
                "flex flex-col rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(7,13,36,0.06),0_12px_32px_-16px_rgba(7,13,36,0.18)] ring-1 ring-[var(--grid)]",
                exemplo && "border-2 border-dashed border-[var(--amber)]/60",
            )}
        >
            {exemplo && <p className="mb-3 text-xs font-semibold text-[#b45309]">Exemplo, não aparece no site publicado</p>}

            <figcaption className="flex items-center gap-3">
                <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
                    style={{ backgroundColor: cor }}
                >
                    {t.name.trim().charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                    <span className="block font-semibold leading-tight text-[var(--ink)]">{t.name}</span>
                    {t.role && <span className="block text-sm text-[var(--ink-2)]">{t.role}</span>}
                </span>
                <Quotes aria-hidden weight="fill" className="ml-auto h-7 w-7 shrink-0 text-[var(--amber)]/80" />
            </figcaption>

            {t.highlight && <p className="mt-6 text-xl font-semibold leading-snug tracking-[-0.01em] text-[var(--ink)]">“{t.highlight}”</p>}

            {t.image && (
                <Image
                    src={t.image.src}
                    width={t.image.width}
                    height={t.image.height}
                    alt={t.image.alt}
                    className="mt-5 h-auto w-full rounded-xl ring-1 ring-[var(--grid)]"
                />
            )}

            {t.text && <blockquote className="mt-4 text-[15.5px] leading-[1.7] text-[var(--ink-2)]">{t.text}</blockquote>}
        </figure>
    );
}

// Carrossel de depoimentos: arrasta no celular, setas e bolinhas no computador, avança sozinho devagar
export function TestimonialCarousel({ items, exemplo = false }: { items: Testimonial[]; exemplo?: boolean }) {
    const track = useRef<HTMLUListElement>(null);
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const goTo = useCallback((i: number) => {
        const el = track.current;
        const card = el?.children[i] as HTMLElement | undefined;
        if (!el || !card) return;
        el.scrollTo({ left: card.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: "smooth" });
    }, []);

    // Marca a bolinha do cartão mais visível
    useEffect(() => {
        const el = track.current;
        if (!el) return;
        const onScroll = () => {
            const cards = [...el.children] as HTMLElement[];
            const left = el.scrollLeft;
            let best = 0;
            cards.forEach((c, i) => {
                if (Math.abs(c.offsetLeft - el.offsetLeft - left) < Math.abs(cards[best].offsetLeft - el.offsetLeft - left)) best = i;
            });
            setActive(best);
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    // Avança a cada 7 segundos enquanto a pessoa não está interagindo
    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            const el = track.current;
            if (!el) return;
            const fim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
            goTo(fim ? 0 : active + 1);
        }, 7000);
        return () => clearInterval(id);
    }, [active, paused, goTo]);

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onFocusCapture={() => setPaused(true)}
            aria-roledescription="carrossel"
            aria-label="Depoimentos de alunos"
        >
            <ul
                ref={track}
                className="-mx-4 flex snap-x snap-mandatory scroll-px-4 items-start gap-5 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
            >
                {items.map((t, i) => (
                    <li key={t.name} className="w-[85%] shrink-0 snap-start sm:w-[24rem]" aria-label={`${i + 1} de ${items.length}`}>
                        <Card t={t} i={i} exemplo={exemplo} />
                    </li>
                ))}
            </ul>

            <div className="mt-8 flex items-center justify-center gap-5">
                <button
                    type="button"
                    onClick={() => goTo(Math.max(0, active - 1))}
                    aria-label="Depoimento anterior"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--ink)] ring-1 ring-[var(--grid)] transition-colors hover:bg-[var(--navy)] hover:text-white"
                >
                    <CaretLeft weight="bold" className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
                    {items.map((t, i) => (
                        <button
                            key={t.name}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Ir para o depoimento ${i + 1}`}
                            aria-current={active === i}
                            className={cn(
                                "h-2.5 rounded-full transition-all duration-300",
                                active === i ? "w-7 bg-[var(--amber)]" : "w-2.5 bg-[var(--ink-3)]/30 hover:bg-[var(--ink-3)]/60",
                            )}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => goTo(Math.min(items.length - 1, active + 1))}
                    aria-label="Próximo depoimento"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--ink)] ring-1 ring-[var(--grid)] transition-colors hover:bg-[var(--navy)] hover:text-white"
                >
                    <CaretRight weight="bold" className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
