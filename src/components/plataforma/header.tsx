"use client";

import { Menu } from "lucide-react";

interface PlatformHeaderProps {
  onMenuToggle: () => void;
}

export function PlatformHeader({ onMenuToggle }: PlatformHeaderProps) {
  return (
    <header className="platform-header">
      <button
        className="platform-menu-btn"
        onClick={onMenuToggle}
        aria-label="Abrir menu"
      >
        <Menu size={22} />
      </button>

      <div className="platform-logo">
        <span className="platform-logo-brand">TIAGO PORTO</span>
        <span className="platform-logo-separator">|</span>
        <span className="platform-logo-tagline">MODELAGEM FINANCEIRA NA PRÁTICA</span>
      </div>
    </header>
  );
}
