import React from "react";
import { stats } from "@/data/communityData";

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {stats.map((s) => (
        <div
          key={s.label}
          className="clean-card rounded-xl p-5 text-center flex flex-col justify-center items-center"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {s.number}
          </div>
          <div className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
            {s.label}
          </div>
          {s.detail && (
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              {s.detail}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
