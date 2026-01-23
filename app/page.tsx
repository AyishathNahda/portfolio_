"use client";

import { useCallback, useState } from "react";
import { Preloader } from "@/components/preloader";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsGridSection } from "@/components/projects-grid-section";
import { CustomCursor } from "@/components/custom-cursor";
import { TopStrip } from "@/components/top-strip";

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
      <CustomCursor />
      <TopStrip />
      <main className="bg-background h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory md:cursor-none">
        <HeroSection />
        <AboutSection />
        <ProjectsGridSection />
        <ContactSection />
      </main>
    </>
  );
}