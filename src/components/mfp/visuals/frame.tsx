import { cn } from "@/lib/utils";

// Moldura comum das ilustrações de produto
export function VisualFrame({ title, note, children, className }: { title: string; note?: string; children: React.ReactNode; className?: string }) {
    return (
        <figure className={cn("overflow-hidden rounded-2xl bg-white text-[13px] shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)] ring-1 ring-[var(--grid)]", className)}>
            <div className="flex items-center gap-3 border-b border-[var(--grid)] bg-[var(--paper-2)] px-4 py-2.5">
                <span aria-hidden className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#d6dbe4]" />
                </span>
                <span className="text-xs text-[var(--ink-2)]">{title}</span>
            </div>
            <div className="p-5">{children}</div>
            {note && <figcaption className="border-t border-[var(--grid)] px-4 py-2.5 text-[11px] text-[var(--ink-3)]">{note}</figcaption>}
        </figure>
    );
}
