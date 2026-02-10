"use client";

import { useCallback, useState } from "react";
import { Preloader } from "@/components/preloader";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsGridSection } from "@/components/projects-grid-section";

import { TechStackTicker } from "@/components/tech-stack-ticker";
import { GradientBlob } from "@/components/gradient-blob";
import { TopStrip } from "@/components/top-strip";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <>
      <TopStrip />
      <ThemeToggle />
      <main className="bg-background min-h-screen relative overflow-hidden">
        <GradientBlob />
        <HeroSection />
        <AboutSection />
        <TechStackTicker />
        <ProjectsGridSection />
        <ContactSection />
      </main>
    </>
  );
}