"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white dark:bg-neutral-100 dark:border-neutral-200 dark:text-neutral-600 dark:hover:text-black hover:border-primary/20 dark:hover:border-primary/45 transition-all cursor-pointer flex items-center justify-center"
            aria-label="Alternar Tema"
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
            ) : (
                <Moon className="w-4 h-4 text-slate-800" />
            )}
        </button>
    );
}
