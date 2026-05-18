"use client";

import { useState } from "react";
import { PlatformHeader } from "@/components/plataforma/header";
import { AccordionModule } from "@/components/plataforma/accordion-module";
import { Sidebar } from "@/components/plataforma/sidebar";
import { modules, PLATFORM_TITLE, PLATFORM_SUBTITLE } from "@/components/plataforma/data";

/* ═══════════════════════════════════════════════════════════════════ */

export default function PlataformaPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  const toggleModule = (id: string) => {
    if (openModuleId === id) {
      setOpenModuleId(null);
      setOpenTopicId(null);
    } else {
      setOpenModuleId(id);
      setOpenTopicId(null);
    }
  };

  const toggleTopic = (id: string) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div className="platform-page">
      <PlatformHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        modules={modules}
        onModuleClick={(id) => {
          toggleModule(id);
          setSidebarOpen(false);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      <main className="platform-main">
        <div className="platform-title-section">
          <p className="platform-subtitle">{PLATFORM_SUBTITLE}</p>
          <h1 className="platform-title">{PLATFORM_TITLE}</h1>
        </div>

        <div className="modules-list">
          {modules.map((mod) => (
            <AccordionModule
              key={mod.id}
              module={mod}
              isOpen={openModuleId === mod.id}
              openTopicId={openTopicId}
              onToggle={() => toggleModule(mod.id)}
              onTopicToggle={toggleTopic}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
