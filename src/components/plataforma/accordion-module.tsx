"use client";

import { ChevronDown, Lock } from "lucide-react";
import type { Module } from "./types";

interface AccordionModuleProps {
  module: Module;
  isOpen: boolean;
  openTopicId: string | null;
  onToggle: () => void;
  onTopicToggle: (id: string) => void;
}

export function AccordionModule({
  module,
  isOpen,
  openTopicId,
  onToggle,
  onTopicToggle,
}: AccordionModuleProps) {
  const hasContent = module.available && module.topics.length > 0;

  return (
    <div className="accordion-module" id={module.id}>
      {/* Module Header */}
      <button
        className={`module-header ${isOpen ? "active" : ""} ${!module.available ? "unavailable" : ""}`}
        onClick={() => module.available && onToggle()}
        disabled={!module.available}
        aria-expanded={isOpen}
      >
        <span className="module-title">
          {module.title}
          {!module.available && <span className="module-soon">(em breve)</span>}
        </span>
        {module.available ? (
          <ChevronDown
            size={18}
            className={`module-chevron ${isOpen ? "rotated" : ""}`}
          />
        ) : (
          <Lock size={16} className="module-lock" />
        )}
      </button>

      {/* Module Content — Topics */}
      {hasContent && (
        <div className={`module-content ${isOpen ? "expanded" : ""}`}>
          <div className="module-content-inner">
            {module.topics.map((topic) => (
              <div key={topic.id} className="topic-block">
                {/* Topic Header */}
                <button
                  className={`topic-header ${openTopicId === topic.id ? "active" : ""}`}
                  onClick={() => topic.lessons.length > 0 && onTopicToggle(topic.id)}
                  aria-expanded={openTopicId === topic.id}
                >
                  <span>{topic.title}</span>
                  {topic.lessons.length > 0 && (
                    <ChevronDown
                      size={15}
                      className={`topic-chevron ${openTopicId === topic.id ? "rotated" : ""}`}
                    />
                  )}
                </button>

                {/* Lessons list */}
                {topic.lessons.length > 0 && (
                  <div
                    className={`lessons-list ${openTopicId === topic.id ? "expanded" : ""}`}
                  >
                    <div className="lessons-list-inner">
                      {topic.lessons.map((lesson) => (
                        <a
                          key={lesson.id}
                          href={lesson.url}
                          className="lesson-link"
                        >
                          {lesson.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
