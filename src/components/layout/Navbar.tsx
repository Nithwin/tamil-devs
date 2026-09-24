"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/constants";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { DiscordIcon } from "@/components/ui/Icons";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Roles", href: "#roles" },
    { label: "Channels", href: "#channels" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#090a0f]/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xs">
            <Image
              src="/logo.jpg"
              alt="Tamil Devs Logo"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <span>{SITE_CONFIG.name}</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              தமிழ் Tech
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={SITE_CONFIG.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-discord px-4 py-2 text-xs sm:text-sm font-semibold shadow-xs"
          >
            <DiscordIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Join Discord</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#090a0f] px-6 py-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={SITE_CONFIG.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-semibold py-1 text-sm"
              >
                <span className="flex items-center gap-2">
                  <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
                  Join Discord Community
                </span>
                <span>→</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
