"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useState, useEffect, Suspense } from "react";

function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("search") || "");

    useEffect(() => {
        setQuery(searchParams.get("search") || "");
    }, [searchParams]);

    function handleSearch(val: string) {
        setQuery(val);
        const params = new URLSearchParams(searchParams.toString());
        if (val) {
            params.set("search", val);
        } else {
            params.delete("search");
        }
        router.push(`/forum?${params.toString()}`);
    }

    return (
        <div className="flex-1 max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
            <input
                type="text"
                placeholder="Buscar discussões..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-800/60 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:bg-slate-800 transition-all"
            />
        </div>
    );
}

export function HeaderSearch() {
    return (
        <Suspense fallback={
            <div className="flex-1 max-w-xl mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
                <input
                    type="text"
                    disabled
                    placeholder="Carregando busca..."
                    className="w-full pl-9 pr-4 py-2 text-sm bg-slate-800/60 border border-slate-700 rounded-lg text-slate-200 opacity-50"
                />
            </div>
        }>
            <SearchInput />
        </Suspense>
    );
}
