import { notFound } from "next/navigation";
import { findLessonBySlug, modules } from "@/components/plataforma/data";
import { LessonPageClient } from "@/components/plataforma/lesson-page";

/* Gerar rotas estáticas para todas as aulas */
export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const mod of modules) {
    for (const topic of mod.topics) {
      for (const lesson of topic.lessons) {
        params.push({ slug: lesson.id });
      }
    }
  }
  return params;
}

export default async function AulaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = findLessonBySlug(slug);
  if (!data) notFound();

  return (
    <LessonPageClient
      slug={slug}
      lessonTitle={data.lesson.title}
      moduleName={data.moduleName}
      topicName={data.topicName}
      prevLesson={data.prev}
      nextLesson={data.next}
    />
  );
}
