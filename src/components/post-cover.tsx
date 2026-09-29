import { getCoverLabel } from "@/lib/blog-categories";

interface PostCoverProps {
    title: string;
    category: string;
}

// Capa tipográfica no lugar de foto de banco de imagens: fundo de planilha, categoria e o termo do post.
export function PostCover({ title, category }: PostCoverProps) {
    return (
        <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[#0b1220] text-white overflow-hidden">
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "64px 24px",
                }}
            />
            <span className="relative font-mono text-[10px] uppercase tracking-[0.18em] text-amber-300/90">
                {category}
            </span>
            <span className="relative text-2xl font-extrabold leading-tight tracking-tight line-clamp-2">
                {getCoverLabel(title)}
            </span>
        </div>
    );
}
