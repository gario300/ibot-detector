"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface Section {
  id: number;
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

export default function EstudiosAccordion({
  sections,
}: {
  sections: Section[];
}) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {sections.map((section) => {
        const isOpen = openId === section.id;
        return (
          <div key={section.id}>
            <button
              onClick={() => toggle(section.id)}
              className={`w-full flex items-center gap-3 px-5 py-4 bg-card border rounded-xl cursor-pointer transition-colors text-left ${
                isOpen
                  ? "border-brand/30 rounded-b-none"
                  : "border-card-border hover:border-brand/20"
              }`}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand/20 text-brand shrink-0 font-mono text-xs font-bold">
                {section.id}
              </span>
              <span className="flex items-center gap-2.5 text-sm text-gray-200">
                {section.icon}
                <span className="font-semibold">{section.title}</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-muted ml-auto shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 py-6 bg-black/30 border border-t-0 border-brand/30 rounded-b-xl">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
