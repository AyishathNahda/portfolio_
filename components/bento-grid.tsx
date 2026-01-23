"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiPrisma, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGraphql, 
  SiRedux 
} from "react-icons/si";

// Glassmorphic classes standardized
const glassCard =
  "rounded-3xl border border-border/70 bg-card/35 backdrop-blur p-6 transition-all duration-300 hover:border-border hover:bg-card/55";

// Typing animation hook
function useTypingText(text: string, speed = 100, loop = false) {
  const [displayed, setDisplayed] = useState("");
  const index = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (index.current <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index.current));
        index.current++;
      }, speed);
    } else if (loop) {
      setTimeout(() => {
        index.current = 0;
        setDisplayed("");
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [displayed, text, speed, loop]);

  return displayed;
}

// Local Time hook for Bengaluru
function useBengaluruTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60 * 1000);
      setTime(ist.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Main Exported BentoGrid
export function BentoGrid({ className = "" }: { className?: string }) {
  const typingText = useTypingText("SOFTWARE ENGINEER", 100);
  const time = useBengaluruTime();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px] ${className}`}>
      
      {/* Card 1: HERO - Spans 2x2 for Mohammad Hasan look */}
      <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 opacity-80">
          Hi! I&apos;m Ayishath Nahda
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white uppercase">
          {typingText}
          <span className="ml-1 inline-block w-[4px] h-[0.9em] bg-primary animate-pulse align-middle" />
        </h1>
        <p className="mt-6 text-zinc-500 text-sm max-w-[280px] font-medium leading-relaxed">
          Based in Bengaluru, Qatar & Kerala • Available globally • Building immersive web applications
        </p>
      </BentoItem>

      {/* Card 2: Tech Stack */}
      <BentoItem className="md:col-span-2 flex flex-col justify-center">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Expertise</span>
        <div className="flex flex-wrap gap-2">
          <TechPill icon={<SiTypescript />} label="TypeScript" />
          <TechPill icon={<FaReact />} label="React" />
          <TechPill icon={<SiNextdotjs />} label="Next.js" />
          <TechPill icon={<SiTailwindcss />} label="Tailwind" />
          <TechPill icon={<SiFramer />} label="Framer" />
          <TechPill icon={<FaNodeJs />} label="Node.js" />
          <TechPill icon={<FaPython />} label="Python" />
        </div>
      </BentoItem>

      {/* Card 3: Currently Learning */}
      <BentoItem className="flex flex-col justify-center">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">Learning</span>
        <div className="flex flex-col gap-2">
          <TechPill icon={<SiRedux />} label="Redux" />
          <TechPill icon={<SiDocker />} label="Docker" />
        </div>
      </BentoItem>

      {/* Card 4: Local Time */}
      <BentoItem className="flex flex-col justify-between">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Bengaluru, IN</span>
        <span className="text-2xl font-mono text-white tracking-widest" suppressHydrationWarning>
          {time}
        </span>
      </BentoItem>

    </div>
  );
}

// Single card with glassmorphic effect
export function BentoItem({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${glassCard} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function TechPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg bg-background/35 px-3 py-1.5 text-xs font-medium text-foreground/80 border border-border/60">
      <span className="text-sm text-foreground/60">{icon}</span>
      <span className="text-foreground/80">{label}</span>
    </span>
  );
}