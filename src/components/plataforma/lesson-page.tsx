"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlatformHeader } from "./header";
import { Sidebar } from "./sidebar";
import { modules } from "./data";
import { LESSON_CONTENT } from "./lesson-content";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

interface LessonPageClientProps {
  slug: string;
  lessonTitle: string;
  moduleName: string;
  topicName: string;
  prevLesson: { id: string; title: string; url: string } | null;
  nextLesson: { id: string; title: string; url: string } | null;
}

export function LessonPageClient({
  slug,
  lessonTitle,
  moduleName,
  topicName,
  prevLesson,
  nextLesson,
}: LessonPageClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const ContentRenderer = LESSON_CONTENT[slug];
  const hasContent = !!ContentRenderer;

  return (
    <div className="platform-page">
      <PlatformHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        modules={modules}
        onModuleClick={(id) => {
          setSidebarOpen(false);
          router.push(`/plataforma#${id}`);
        }}
      />

      <main className="lesson-main">
        {/* Navegação entre aulas */}
        <div className="lesson-nav">
          {prevLesson ? (
            <Link href={prevLesson.url} className="lesson-nav-btn">
              <ArrowLeft size={16} /> Anterior
            </Link>
          ) : (
            <span />
          )}
          <Link href="/plataforma" className="lesson-nav-btn lesson-nav-home">
            <BookOpen size={16} /> Módulos
          </Link>
          {nextLesson ? (
            <Link href={nextLesson.url} className="lesson-nav-btn">
              Próxima <ArrowRight size={16} />
            </Link>
          ) : (
            <span />
          )}
        </div>

        {/* Breadcrumb */}
        <div className="lesson-breadcrumb">
          <span>{moduleName}</span>
          <span className="lesson-breadcrumb-sep">›</span>
          <span>{topicName}</span>
        </div>

        {/* Título */}
        <h1 className="lesson-title">{lessonTitle}</h1>

        {/* Área de conteúdo */}
        <div className={`lesson-content ${hasContent ? "lesson-content-filled" : ""}`}>
          {hasContent ? (
            <ContentRenderer />
          ) : (
            <div className="lesson-placeholder">
              <BookOpen size={48} strokeWidth={1} />
              <h2>Conteúdo em construção</h2>
              <p>
                O conteúdo desta aula será adicionado em breve.
                Volte à <Link href="/plataforma">página de módulos</Link> para ver outras aulas disponíveis.
              </p>
            </div>
          )}
        </div>

        {/* Navegação inferior */}
        <div className="lesson-nav lesson-nav-bottom">
          {prevLesson ? (
            <Link href={prevLesson.url} className="lesson-nav-card">
              <span className="lesson-nav-card-label"><ArrowLeft size={14} /> Anterior</span>
              <span className="lesson-nav-card-title">{prevLesson.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link href={nextLesson.url} className="lesson-nav-card lesson-nav-card-next">
              <span className="lesson-nav-card-label">Próxima <ArrowRight size={14} /></span>
              <span className="lesson-nav-card-title">{nextLesson.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
    </div>
  );
}
