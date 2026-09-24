"use client";

import React from "react";
import { HeartHandshake, ShieldCheck, MessageSquareCode, Languages } from "lucide-react";
import { motion } from "framer-motion";

const GUIDELINES = [
  {
    icon: HeartHandshake,
    title: "Zero Gatekeeping",
    desc: "Whether you wrote your first line of Python yesterday or you're a staff engineer, everyone is treated with equal respect. No question is 'too basic'.",
  },
  {
    icon: MessageSquareCode,
    title: "Constructive Feedback",
    desc: "Critique the code, not the person. Feedback in resume roasts and PR reviews must be actionable, honest, and helpful.",
  },
  {
    icon: Languages,
    title: "Speak Your Mind",
    desc: "Chat comfortably in Tamil, Tanglish, or English. What matters is solving problems and learning together, not language perfection.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Respect",
    desc: "Always redact phone numbers and private addresses before sharing documents. Harassment, spam, and unsolicited DMs are strictly prohibited.",
  },
];

export function GuidelinesSection() {
  return (
    <section id="guidelines" className="scroll-mt-20 py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-3 py-1 mb-3 text-xs font-medium text-zinc-600 dark:text-zinc-400 shadow-2xs">
            Community Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            How we work together
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our community thrives because members prioritize empathy, honesty, and mutual respect.
          </p>
        </motion.div>

        {/* 2x2 Grid with In-View Stagger */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {GUIDELINES.map((g, index) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
