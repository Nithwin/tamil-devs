"use client";

import React, { useState } from "react";
import { Tag } from "lucide-react";

interface RoleItem {
  label: string;
  category: "experience" | "stack";
}

const ROLES: RoleItem[] = [
  { label: "Tech Lead / Staff", category: "experience" },
  { label: "Senior Engineer", category: "experience" },
  { label: "Mid / Junior Developer", category: "experience" },
  { label: "Fresher / Looking for Work", category: "experience" },
  { label: "Student / Self-Taught", category: "experience" },
  { label: "Full-Stack Dev", category: "stack" },
  { label: "Frontend & UI", category: "stack" },
  { label: "Backend & Systems", category: "stack" },
  { label: "Cloud & DevOps", category: "stack" },
  { label: "Mobile Dev (iOS / Android)", category: "stack" },
  { label: "AI & Machine Learning", category: "stack" },
  { label: "Open Source Contributor", category: "stack" },
];

export function RolesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "experience" | "stack">("all");

  const filteredRoles =
    activeTab === "all" ? ROLES : ROLES.filter((r) => r.category === activeTab);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-1 mb-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            Discord Roles
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Pick your roles, find your peers
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Assign yourself roles when you enter the Discord server to unlock channel discussions and connect with developers in your domain.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {(
            [
              { id: "all", label: "All Roles" },
              { id: "experience", label: "Experience Levels" },
              { id: "stack", label: "Tech Stacks" },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950"
                    : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Role Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
          {filteredRoles.map((r) => (
            <div
              key={r.label}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 shadow-2xs"
            >
              <Tag className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
