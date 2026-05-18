"use client";

import { X, BookOpen, ExternalLink } from "lucide-react";
import type { Module } from "./types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  modules: Module[];
  onModuleClick: (id: string) => void;
}

const NAV_LINKS = [
  { label: "Módulos", href: "/plataforma", icon: BookOpen },
  { label: "Dicas Gerais", href: "#", icon: BookOpen },
  { label: "YouTube", href: "https://www.youtube.com/@Modelagemfinanceiranapratica", icon: ExternalLink, external: true },
];

export function Sidebar({ isOpen, onClose, modules, onModuleClick }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Navegação</span>
          <button className="sidebar-close" onClick={onClose} aria-label="Fechar menu">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sidebar-link"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <link.icon size={16} />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-divider" />

        <div className="sidebar-modules">
          <p className="sidebar-section-title">Módulos</p>
          {modules.map((mod) => (
            <button
              key={mod.id}
              className={`sidebar-module-btn ${!mod.available ? "disabled" : ""}`}
              onClick={() => mod.available && onModuleClick(mod.id)}
              disabled={!mod.available}
            >
              <span className="sidebar-module-dot" />
              {mod.title}
              {!mod.available && <span className="sidebar-soon">em breve</span>}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
