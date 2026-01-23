"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionBackground } from "@/components/section-background";


const projects = [
  {
    id: 1,
    title: "EchoEase",
    subtitle: "Audiology & Speech Therapy Management",
    description:
      "A comprehensive platform for therapists to manage patient records, clinical reports, and appointments with a focus on streamlined medical workflows with YT integration based on diagnosis and age.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    color: "from-teal-500/20 to-cyan-500/20",
    year: "2025",
    github: "https://github.com/kalviumcommunity/S69_Ayishath_Nahda_Capstone_EchoEase",
    live: "https://echoease.netlify.app/",
  },
  {
    id: 2,
    title: "StudyBuddy-AI",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "An intelligent education tool that helps students summarize content, generate quizzes, and clarify complex topics using Google's Gemini Pro AI.",
    tech: ["Next.js", "Grok AI", "TypeScript", "Clerk Auth"],
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2025",
    github: "https://github.com/kalviumcommunity/StudyBuddy-AI",
    live: "https://yourstudymateaai.netlify.app/",
  },
  {
    id: 3,
    title: "Orchestra UI",
    subtitle: "AI-Generated Component Library",
    description:
      "A modern UI system featuring components designed with AI assistance, focusing on clean aesthetics, accessibility, and developer experience,built in speed using v0 and cursor.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Radix UI"],
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2026",
    github: "https://github.com/AyishathNahda/Orchestra_UI-_An_AI_Generated_Component_Library",
    live: "https://orchestra-ui-an-ai-generated-compon.vercel.app/",
  },
];


export function ProjectsGridSection() {
  return (
    <section id="work" className="relative snap-start min-h-screen flex items-center overflow-hidden">
      <SectionBackground variant="projects" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", stiffness: 260, damping: 22, mass: 0.9 },
              }}
              className="rounded-3xl border border-border/70 bg-card/35 backdrop-blur p-7 hover:bg-card/55 hover:border-border transition-colors"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm text-primary mb-1">{p.subtitle}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                    {p.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-cursor-hover
                >
                  Open <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-background/35 text-foreground/80 border border-border/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-cursor-hover
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-cursor-hover
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

