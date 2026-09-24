import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";
import { Badge } from "@/components/ui/Badge";
import { StatsSection } from "./StatsSection";

export function HeroSection() {
  return (
    <section className="relative grid-bg overflow-hidden pt-12 pb-24 md:py-28">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(124,58,237,0.18) 0%, transparent 50%), radial-gradient(circle at 65% 55%, rgba(6,182,212,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        {/* Status Badge */}
        <div className="fade-in-up">
          <Badge className="py-1.5 px-4 text-xs font-bold border-cyan-400/40 shadow-sm shadow-cyan-500/20">
            <span>🚀 Now Live</span>
            <span className="text-slate-400">•</span>
            <span>Join Tamil Devs Today!</span>
          </Badge>
        </div>

        {/* Floating Community Logo */}
        <div className="float my-2">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden pulse-glow mx-auto border-3 border-cyan-400/50 shadow-2xl">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Community Avatar"
              fill
              sizes="(max-width: 768px) 112px, 144px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main Headline */}
        <div className="fade-in-up space-y-4 max-w-4xl" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
            <span className="text-slate-100">The Tamil</span>
            <br />
            <span className="gradient-text">Developer Hub</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Where Tamil engineers, students, and indie hackers connect, build, and level up together.{" "}
            <span className="text-cyan-400 font-semibold inline-block">வணக்கம்!</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold shadow-xl shadow-purple-500/25 justify-center"
          >
            <span>🎮</span>
            <span>Join Discord — It&apos;s Free!</span>
          </a>

          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 border border-cyan-500/30 text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 hover:border-cyan-400/50 flex items-center justify-center gap-2"
          >
            <span>⭐</span>
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="w-full fade-in-up" style={{ animationDelay: "0.3s" }}>
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
