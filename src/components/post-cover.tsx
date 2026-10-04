import Image from "next/image";
import { getCoverLabel } from "@/lib/blog-categories";

interface PostCoverProps {
    title: string;
    category: string;
    /** Versão pequena para listas: só o termo, sem categoria */
    compact?: boolean;
    /** Foto do post; sem ela, usa a capa tipográfica */
    image?: string;
    alt?: string;
    sizes?: string;
}

// Capa tipográfica no lugar de foto de banco de imagens: fundo de planilha, categoria e o termo do post.
export function PostCover({ title, category, compact = false, image, alt, sizes = "(min-width: 1024px) 33vw, 100vw" }: PostCoverProps) {
    if (image) {
        return (
            <div className="absolute inset-0 overflow-hidden bg-[#0b1220]">
                <Image
                    src={image}
                    alt={alt || title}
                    fill
                    sizes={sizes}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {!compact && (
                    <>
                        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#070d24]/70 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-4 rounded-md bg-[#070d24]/80 px-2 py-0.5 text-xs font-semibold text-amber-300">
                            {category}
                        </span>
                    </>
                )}
            </div>
        );
    }

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
            {!compact && <span className="relative text-xs font-semibold text-amber-300/90">{category}</span>}
            <span className={`relative font-extrabold leading-tight tracking-tight line-clamp-2 ${compact ? "mt-auto text-sm" : "text-2xl"}`}>
                {getCoverLabel(title)}
            </span>
        </div>
    );
}
