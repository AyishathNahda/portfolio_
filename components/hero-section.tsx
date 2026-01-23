"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/section-background";

function useTypingText(text: string, speed = 80, loop = false) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      setDisplayed(text.slice(0, index + 1));
      index += 1;
      if (index < text.length) {
        timeout = setTimeout(tick, speed);
      } else if (loop) {
        timeout = setTimeout(() => {
          index = 0;
          setDisplayed("");
          tick();
        }, 1200);
      }
    };

    tick();
    return () => clearTimeout(timeout);
  }, [text, speed, loop]);

  return displayed;
}

export function HeroSection() {
  const typing = useTypingText("SOFTWARE ENGINEER", 70, true);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 15, mass: 1.2 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 15, mass: 1.2 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mvX.set((e.clientX - centerX) * 0.04); // subtle parallax
      mvY.set((e.clientY - centerY) * 0.04);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [mvX, mvY]);

  return (
    <section id="home" className="relative snap-start min-h-screen flex items-center overflow-hidden">
      <SectionBackground variant="hero" />
      {/* Iridescent heart-like glow behind headline */}
      <div className="absolute inset-0 -z-[5] flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[60vw] max-w-4xl aspect-square opacity-70"
          style={{ x: springX, y: springY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          <div
            className="absolute inset-0 blur-3xl rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, rgba(120,196,255,0.45), transparent 55%), radial-gradient(circle at 65% 55%, rgba(255,140,210,0.38), transparent 60%), radial-gradient(circle at 50% 50%, rgba(255,214,200,0.28), transparent 70%)",
            }}
          />
          <motion.div
            className="absolute inset-[8%] blur-[60px] rounded-[999px]"
            style={{
              background:
                "conic-gradient(from 120deg, rgba(255,140,210,0.35), rgba(120,196,255,0.32), rgba(255,214,200,0.3), rgba(255,140,210,0.35))",
            }}
            animate={{ rotate: -360, scale: [1, 1.04, 1] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          />
        </motion.div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-card/25 backdrop-blur text-muted-foreground text-xs tracking-[0.25em] uppercase mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available for new projects
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground uppercase drop-shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
            {typing}
            <span className="ml-1 inline-block w-[4px] h-[0.9em] bg-primary animate-pulse align-middle" />
          </h1>

          <p className="mt-8 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hi, I&apos;m <span className="text-foreground font-medium">Ayishath Nahda</span>. I build high-performance web
            applications with a focus on minimalist design.
          </p>

          <div className="mt-10 flex justify-center">
            <Button asChild className="rounded-full px-8 py-6">
              <a href="#about" className="flex items-center gap-2" data-cursor-hover>
                Scroll to explore <ArrowDown className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

