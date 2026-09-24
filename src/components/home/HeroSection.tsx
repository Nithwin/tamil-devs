import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import { Badge } from "@/components/ui/Badge";
import { DiscordIcon, GitHubIcon } from "@/components/ui/Icons";
import { StatsSection } from "./StatsSection";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-[var(--bg-primary)]">
      {/* Subtle, clean dot texture */}
      <div className="absolute inset-0 subtle-dots pointer-events-none opacity-60" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Top Status Pill */}
        <div className="mb-6">
          <Badge variant="default" className="py-1 px-3.5 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Community Live — Join Tamil Devs</span>
          </Badge>
        </div>

        {/* Community Avatar / Logo */}
        <div className="mb-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-md mx-auto">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Logo"
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Clean, Strong Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-6">
          The Tamil <br />
          <span className="text-blue-600 dark:text-blue-400">Developer Hub</span>
        </h1>

        <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Where Tamil software engineers, freshers, students, and indie hackers connect,
          collaborate, and level up together.{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">வணக்கம்!</span>
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-16">
          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold shadow-xs"
          >
            <DiscordIcon className="w-5 h-5" />
            <span>Join Discord — It&apos;s Free</span>
          </a>

          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold"
          >
            <GitHubIcon className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Stats Section with proper clearance */}
        <div className="w-full">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
