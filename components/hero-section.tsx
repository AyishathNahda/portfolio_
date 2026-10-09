"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/section-background";
import Image from "next/image";

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

const specialisms = [
  "Software Engineering",
  "AI / ML",
  "Data Science",
  "Full-Stack Dev",
];

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
      mvX.set((e.clientX - centerX) * 0.04);
      mvY.set((e.clientY - centerY) * 0.04);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [mvX, mvY]);

  return (
    <section id="home" className="relative snap-start min-h-screen flex items-center overflow-hidden">
      <SectionBackground variant="hero" />

      {/* Iridescent glow behind content */}
      <div className="absolute inset-0 -z-[5] flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[60vw] max-w-4xl aspect-square opacity-60"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Status badge */}
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-card/25 backdrop-blur text-muted-foreground text-xs tracking-[0.22em] uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>

            {/* Typing headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] text-foreground uppercase drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              {typing}
              <span className="ml-1 inline-block w-[3px] h-[0.88em] bg-primary animate-pulse align-middle" />
            </h1>

            {/* Main tagline */}
            <p className="text-xl md:text-2xl font-serif text-foreground/90 leading-snug max-w-lg">
              I build intelligent, scalable, and user-focused digital products.
            </p>

            {/* Specialisms pills */}
            <div className="flex flex-wrap gap-2">
              {specialisms.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs tracking-wide font-medium border border-primary/30 bg-primary/8 text-primary"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Short intro */}
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              Hi, I&apos;m{" "}
              <span className="text-foreground font-medium">Ayishath Nahda</span>
              . I&apos;m a software engineer who enjoys solving real-world problems
              across full-stack development, AI/ML, and data science.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="rounded-full px-7 py-5">
                <a href="#about" className="flex items-center gap-2" data-cursor-hover>
                  Explore my work <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-full px-5 py-5 bg-background/40 border border-border/70 backdrop-blur hover:bg-background/70"
              >
                <a
                  href="https://github.com/AyishathNahda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  data-cursor-hover
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-full px-5 py-5 bg-background/40 border border-border/70 backdrop-blur hover:bg-background/70"
              >
                <a
                  href="https://www.linkedin.com/in/ayishath-nahda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  data-cursor-hover
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Soft ambient glow behind photo */}
              <div
                className="absolute inset-[-12%] rounded-[40%_60%_55%_45%/45%_55%_60%_40%] blur-2xl opacity-40 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 40%, rgba(14,165,233,0.35), transparent 65%), radial-gradient(ellipse at 70% 70%, rgba(139,92,246,0.2), transparent 60%)",
                }}
              />

              {/* Photo frame — clean circle respecting the photo's own circular crop */}
              <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ring-1 ring-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src="/profile.png"
                  alt="Ayishath Nahda – Software Engineer"
                  fill
                  className="object-cover object-top scale-[1.02]"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
                />
              </div>

              {/* Small floating label */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-card/80 backdrop-blur border border-border/60 shadow-lg"
              >
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Based in India</p>
              </motion.div>

              {/* Small floating tag */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-card/80 backdrop-blur border border-border/60 shadow-lg"
              >
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Open to work</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
