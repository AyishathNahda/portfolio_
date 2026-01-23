"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- HELPERS ---

function TypingHeading({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, current + 1));
      current++;
      if (current === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
      {displayed}
      <span className="inline-block w-[4px] h-[0.8em] bg-zinc-500 animate-pulse ml-2 align-middle" />
    </h1>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-400 font-medium hover:border-zinc-500 transition-colors">
      {label}
    </span>
  );
}

// --- EXPORTED COMPONENTS ---

export function BentoItem({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.98 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        scale: { type: "spring", stiffness: 260, damping: 22, mass: 0.9 },
      }}
      className={`rounded-3xl border border-border/70 bg-card/35 backdrop-blur p-6 transition-all duration-300 hover:border-border hover:bg-card/55 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// This is the main section your page.tsx will call
export function PortfolioLayout() {
  return (
    <section className="max-w-7xl mx-auto pt-20 px-4">
      {/* HERO */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for new projects
        </motion.div>
        
        <TypingHeading text="SOFTWARE ENGINEER" />
        
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Hi, I&apos;m <span className="text-white font-medium">Ayishath Nahda</span>. I build high-performance 
          web applications with a focus on minimalist design.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-end p-8">
          <Globe className="w-6 h-6 text-zinc-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-white">Crafting digital experiences from Bengaluru.</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            I specialize in React and Next.js, turning complex problems into simple, beautiful interfaces.
          </p>
        </BentoItem>

        <BentoItem className="flex flex-col justify-between p-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">Connect</span>
          <div className="flex justify-between items-center text-zinc-500">
             <a href="#" className="hover:text-white transition-colors"><Github size={20}/></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
             <a href="#" className="hover:text-white transition-colors"><Mail size={20}/></a>
          </div>
        </BentoItem>

        <BentoItem className="flex flex-col justify-between p-6">
           <MapPin className="text-zinc-600" size={20} />
           <div>
              <p className="text-white font-bold text-sm">Bengaluru, IN</p>
              <p className="text-xs text-zinc-600 mb-3">UTC +5:30 • Remote worldwide</p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                I&apos;m a software engineer focused on building fast, accessible web apps with
                clean UI, thoughtful motion, and scalable architecture.
              </p>
              <div className="mt-4">
                <Button
                  asChild
                  className="rounded-full px-5 py-2 border border-zinc-800 bg-transparent text-white hover:bg-white hover:text-black transition-all"
                >
                  <a href="#about" className="flex items-center gap-2">
                    About Me <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
           </div>
        </BentoItem>

        <BentoItem className="md:col-span-2 flex flex-col justify-center p-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold mb-6">Expertise</span>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js"].map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </BentoItem>
      </div>

      <div className="mt-20 flex justify-center">
        <Button asChild className="rounded-full px-8 py-6 border border-zinc-800 bg-transparent text-white hover:bg-white hover:text-black transition-all">
          <a href="#projects" className="flex items-center gap-2">
            View Selected Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}