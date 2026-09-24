"use client";

import React from "react";
import { FileText, Mic, GitPullRequest, Briefcase } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Feature {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  badge: string;
  glowColor: string;
  iconColor: string;
  iconBg: string;
}

const COMMUNITY_FEATURES: Feature[] = [
  {
    number: "01",
    icon: FileText,
    title: "Resume & Portfolio Reviews",
    desc: "Post your resume in our dedicated forum to get honest, line-by-line feedback from working developers on formatting, impact metrics, and project bullets.",
    badge: "Career",
    glowColor: "from-blue-500/10 via-indigo-500/5 to-transparent",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/50 border-blue-200/60 dark:border-blue-800/50",
  },
  {
    number: "02",
    icon: Mic,
    title: "Peer Mock Interviews",
    desc: "Hop into live voice channels to run practice DSA, frontend architecture, and system design interviews with peers preparing for technical rounds.",
    badge: "Prep",
    glowColor: "from-violet-500/10 via-purple-500/5 to-transparent",
    iconColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-50 dark:bg-violet-950/50 border-violet-200/60 dark:border-violet-800/50",
  },
  {
    number: "03",
    icon: GitPullRequest,
    title: "Code & Architecture Feedback",
    desc: "Drop your GitHub PR or repo link when you're stuck on a tricky bug, library choice, database indexing, or cloud performance bottleneck.",
    badge: "Code",
    glowColor: "from-emerald-500/10 via-teal-500/5 to-transparent",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200/60 dark:border-emerald-800/50",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Referrals & Hiring",
    desc: "Verified job openings, employee referrals, and freelance contracts posted directly by community members across top product companies and startups.",
    badge: "Network",
    glowColor: "from-amber-500/10 via-orange-500/5 to-transparent",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/50 border-amber-200/60 dark:border-amber-800/50",
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

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/10 px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 leading-tight">
            Real peer learning, zero gatekeeping
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No paid courses, no marketing hype. Just developers helping each other grow every day.
          </p>
        </motion.div>

        {/* 2x2 Grid with Framer Motion stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
        >
          {COMMUNITY_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm p-6 sm:p-7 overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-colors"
              >
                {/* Subtle gradient glow on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Icon + Number/Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${item.iconBg} ${item.iconColor} shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
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
