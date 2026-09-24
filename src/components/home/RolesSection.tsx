"use client";

import React, { useState } from "react";
import { roles, Role } from "@/data/communityData";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FilterTab = "all" | "experience" | "domain" | "emerging";

export function RolesSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filterTabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: "All Roles" },
    { id: "experience", label: "Experience & Career" },
    { id: "domain", label: "Engineering Domains" },
    { id: "emerging", label: "AI & Emerging Tech" },
  ];

  const filteredRoles =
    activeTab === "all" ? roles : roles.filter((r) => r.category === activeTab);

  return (
    <section id="roles" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090d1a]/60 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Community Roles"
          titleLight="Pick your"
          titleHighlight="identity"
          subtitle="Select your career stage and tech domain roles upon joining our Discord. Connect instantly with peers in your exact niche."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-md shadow-cyan-500/10"
                    : "text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Roles List */}
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {filteredRoles.map((r: Role) => (
            <div
              key={r.label}
              className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2.5 text-xs sm:text-sm font-semibold transition-all hover:scale-105 cursor-default"
              style={{
                borderColor: `${r.color}35`,
                color: r.color,
                backgroundColor: `${r.color}08`,
              }}
            >
              <span className="text-base">{r.emoji}</span>
              <span>{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
