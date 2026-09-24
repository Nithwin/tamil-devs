import React from "react";
import { features } from "@/data/communityData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Why Tamil Devs?"
          titleLight="Everything you need to"
          titleHighlight="level up"
          subtitle="Built by Tamil developers, for Tamil developers worldwide. Dedicated support, high-signal engineering discussions, and peer growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:border-cyan-400/40 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${f.color}, transparent)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 inline-block shadow-inner">
                    {f.icon}
                  </div>
                  {f.badge && (
                    <span
                      className="text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: `${f.color}15`,
                        color: f.color,
                        border: `1px solid ${f.color}35`,
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2.5 text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div
                className="mt-6 h-0.5 rounded-full w-12 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: f.color, opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
