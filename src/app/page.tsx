import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { RolesSection } from "@/components/home/RolesSection";
import { ChannelsSection } from "@/components/home/ChannelsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b14] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RolesSection />
        <ChannelsSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
