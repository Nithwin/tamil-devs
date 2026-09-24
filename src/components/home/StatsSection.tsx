import React from "react";
import { stats } from "@/data/communityData";

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto mt-8">
      {stats.map((s) => (
        <div
          key={s.label}
          className="glass-card rounded-2xl p-5 text-center flex flex-col justify-center items-center group"
        >
          <div className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight group-hover:scale-105 transition-transform duration-300">
            {s.number}
          </div>
          <div className="text-sm font-semibold text-slate-200 mt-1">{s.label}</div>
          {s.detail && (
            <div className="text-xs text-slate-400 mt-0.5">{s.detail}</div>
          )}
        </div>
      ))}
    </div>
  );
}
