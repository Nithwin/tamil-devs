import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { GuidelinesSection } from "@/components/home/GuidelinesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400">
      <Preloader />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <GuidelinesSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
