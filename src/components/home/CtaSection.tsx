"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-2xl mx-auto overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 p-8 sm:p-12 text-center shadow-lg shadow-zinc-200/50 dark:shadow-none"
      >
        {/* Glow orbs in background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md mb-6 ring-4 ring-blue-500/10 dark:ring-white/5">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Logo"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3">
            Ready to join the community?
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed mb-8">
            Hop into our Discord server to introduce yourself, get code feedback, or just hang out with fellow Tamil developers.
          </p>

          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 h-11 px-7 rounded-full bg-[#5865F2] hover:bg-[#4752c4] text-white text-sm font-semibold transition-colors shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30"
          >
            <DiscordIcon className="w-4 h-4 text-white" />
            <span>Join Tamil Devs on Discord</span>
            <ArrowRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
