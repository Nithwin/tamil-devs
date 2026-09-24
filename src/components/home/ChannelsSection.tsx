"use client";

import React, { useState } from "react";
import { channelCategories } from "@/data/communityData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ChannelsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = channelCategories
    .map((category) => {
      if (!searchQuery.trim()) return category;
      const lower = searchQuery.toLowerCase();
      const matchingItems = category.items.filter((item) =>
        item.toLowerCase().includes(lower)
      );
      if (
        category.cat.toLowerCase().includes(lower) ||
        matchingItems.length > 0
      ) {
        return {
          ...category,
          items:
            matchingItems.length > 0 ? matchingItems : category.items,
        };
      }
      return null;
    })
    .filter(Boolean) as typeof channelCategories;

  return (
    <section id="channels" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Server Layout"
          titleLight="30+ Organized"
          titleHighlight="channels"
          subtitle="No noise, no spam. Every conversation has its dedicated home from code review to mock interviews."
        />

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels (e.g. resume, ai, jobs, dsa)..."
              className="w-full pl-10 pr-4 py-3 bg-[#0d1424] border border-cyan-500/20 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.cat}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-cyan-500/10 hover:border-cyan-500/30"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-cyan-400 tracking-wide uppercase">
                    {cat.cat}
                  </h3>
                </div>
                {cat.description && (
                  <p className="text-xs text-slate-400 mb-4">{cat.description}</p>
                )}

                <div className="space-y-1.5 mt-2">
                  {cat.items.map((ch) => {
                    const isVoice = ch.includes("🔊");
                    const isPinned = ch.includes("📌");

                    return (
                      <div
                        key={ch}
                        className="channel-item flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-cyan-500/10 transition-colors duration-150 cursor-pointer"
                      >
                        <span className="truncate">{ch.replace("🔊", "").replace("📌", "")}</span>
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          {isVoice && (
                            <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                              Voice
                            </span>
                          )}
                          {isPinned && (
                            <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded">
                              Forum
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No channels found matching &ldquo;{searchQuery}&rdquo;. Try another keyword!
          </div>
        )}
      </div>
    </section>
  );
}
