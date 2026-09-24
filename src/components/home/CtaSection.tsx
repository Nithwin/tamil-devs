import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export function CtaSection() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.08) 35%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="float mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto pulse-glow border-2 border-cyan-400/50 shadow-2xl">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Logo"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
          <span className="gradient-text">வணக்கம்!</span>
          <br />
          <span className="text-slate-100">Ready to join the crew?</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Over 30 dedicated channels, 20+ specialized roles, resume roast forums, live mock interview stages, and an active, zero-gatekeeping community of Tamil engineers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-10 py-5 text-lg sm:text-xl font-bold shadow-2xl shadow-purple-600/30 justify-center"
          >
            <span>🎮</span>
            <span>Join Tamil Devs — Free Forever</span>
          </a>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-slate-400 font-medium">
          No spam. No gatekeeping. Just passionate Tamil developers helping each other grow.
        </p>
      </div>
    </section>
  );
}
