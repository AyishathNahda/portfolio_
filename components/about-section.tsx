"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/section-background";

export function AboutSection() {
  return (
    <section id="about" className="relative snap-start min-h-screen flex items-center overflow-hidden">
      <SectionBackground variant="about" />
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border/70 bg-card/35 backdrop-blur-xl p-8 md:p-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            I build fast, scalable, and beautiful web experiences.
          </h2>

          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            I&apos;m Ayishath Nahda, a software engineer focused on crafting high-performance
            interfaces with React/Next.js(MERN stack) and thoughtful motion. I care about clean architecture,
            accessibility, and a polished user experience—from micro-interactions to full product flows.
          </p>

          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            I specialize in architecting scalable full-stack applications, AI-powered solutions,
            and immersive web experiences using technologies like{" "}
            <span className="text-foreground font-semibold">Next.js</span>,{" "}
            <span className="text-foreground font-semibold">Node.js</span>, and{" "}
            <span className="text-foreground font-semibold">React.js</span>, and{" "}
            <span className="text-foreground font-semibold">MERN</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full px-6 py-6">
              <a href="#work" className="flex items-center gap-2" data-cursor-hover>
                View My Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="rounded-full px-6 py-6 bg-background/40 border border-border/70 backdrop-blur hover:bg-background/70"
            >
              <a href="#work" className="flex items-center gap-2" data-cursor-hover>
                Scroll <ArrowDown className="w-4 h-4" />
              </a>
            </Button>

            <Button
  asChild
  variant="secondary"
  className="rounded-full px-6 py-6 bg-background/40 border border-border/70 backdrop-blur hover:bg-background/70"
>
  <a
    href="/AyishathNahda_Resume.pdf" // Path starts from the public folder root
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
    data-cursor-hover
  >
    <FileDown className="w-4 h-4" />
    Check out my resume
  </a>
</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

