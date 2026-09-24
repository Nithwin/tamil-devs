import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/10 bg-[#06080f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-500/30">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-slate-300 text-sm sm:text-base">
            {SITE_CONFIG.name} |{" "}
            <span className="text-cyan-400 font-medium">{SITE_CONFIG.tamilName}</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Discord
          </a>
        </div>

        {/* Tagline / Copyright */}
        <p className="text-xs sm:text-sm text-slate-500 text-center md:text-right">
          © {currentYear} Tamil Devs. Built with ❤️ for Tamil developers worldwide.
        </p>
      </div>
    </footer>
  );
}
