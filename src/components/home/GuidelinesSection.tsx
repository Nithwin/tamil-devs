"use client";

import React from "react";
import { HeartHandshake, ShieldCheck, MessageSquareCode, Languages } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Guideline {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  glowColor: string;
  iconColor: string;
  iconBg: string;
}

const GUIDELINES: Guideline[] = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Zero Gatekeeping",
    desc: "Whether you wrote your first 'Hello World' yesterday or you lead an engineering org, everyone is treated with equal respect. No question is ever 'too basic'.",
    glowColor: "from-rose-500/10 via-pink-500/5 to-transparent",
    iconColor: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-50 dark:bg-rose-950/50 border-rose-200/60 dark:border-rose-800/50",
  },
  {
    number: "02",
    icon: MessageSquareCode,
    title: "Constructive Feedback",
    desc: "Critique the code, never the person. Feedback in resume reviews and pull requests should be actionable, clear, honest, and delivered with empathy.",
    glowColor: "from-blue-500/10 via-indigo-500/5 to-transparent",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/50 border-blue-200/60 dark:border-blue-800/50",
  },
  {
    number: "03",
    icon: Languages,
    title: "Speak Your Mind",
    desc: "Chat comfortably in Tamil, Tanglish, or English. What matters is solving problems and learning together, not grammatical perfection.",
    glowColor: "from-teal-500/10 via-cyan-500/5 to-transparent",
    iconColor: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-teal-50 dark:bg-teal-950/50 border-teal-200/60 dark:border-teal-800/50",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Privacy & Respect",
    desc: "Always redact phone numbers and personal addresses before sharing documents. Harassment, spam, and unsolicited promotional DMs are strictly prohibited.",
    glowColor: "from-violet-500/10 via-purple-500/5 to-transparent",
    iconColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-50 dark:bg-violet-950/50 border-violet-200/60 dark:border-violet-800/50",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function GuidelinesSection() {
  return (
    <section id="guidelines" className="scroll-mt-20 py-20 md:py-28 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-500/10 px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Community Standards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 leading-tight">
            How we work together
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our community thrives because members prioritize empathy, honesty, and mutual respect.
          </p>
        </motion.div>

        {/* 2x2 Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {GUIDELINES.map((g) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm p-6 sm:p-7 overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-colors"
              >
                {/* Subtle gradient glow on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${g.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${g.iconBg} ${g.iconColor} shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider">
                        {g.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                      {g.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
