import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { RolesSection } from "@/components/home/RolesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RolesSection />
      </main>

      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-zinc-200/60 dark:border-zinc-800/60">
        Tamil Devs • Built for Tamil developers worldwide.
      </footer>
    </div>
  );
}
