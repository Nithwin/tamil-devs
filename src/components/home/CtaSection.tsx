import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-sm mx-auto mb-6">
          <Image
            src="/logo.jpg"
            alt="Tamil Devs Logo"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
          Ready to join the community?
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed mb-8">
          Hop into our Discord server to introduce yourself, get code feedback, or just hang out with fellow Tamil developers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 w-full sm:w-auto rounded-full bg-[#5865F2] hover:bg-[#4752c4] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <DiscordIcon className="w-4 h-4 text-white" />
            <span>Join Tamil Devs on Discord</span>
          </a>
        </div>
      </div>
    </section>
  );
}
