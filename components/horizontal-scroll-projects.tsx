"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EchoEase",
    subtitle: "Audiology & Speech Therapy Management",
    description: "A comprehensive platform for therapists to manage patient records, clinical reports, and appointments with a focus on streamlined medical workflows with YT integration based on diagnosis and age.",
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
    description: "An intelligent education tool that helps students summarize content, generate quizzes, and clarify complex topics using Google's Gemini Pro AI.",
    tech: ["Next.js", "GROK AI", "TypeScript", "Clerk Auth"],
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2025",
    github: "https://github.com/kalviumcommunity/StudyBuddy-AI",
    live: "https://yourstudymateaai.netlify.app/",
  },
  {
    id: 3,
    title: "Orchestra UI",
    subtitle: "AI-Generated Component Library",
    description: "A modern UI system featuring components designed with AI assistance, focusing on clean aesthetics, accessibility, and developer experience.Built with speed using v0 and cursor.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Radix UI"],
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2026",
    github: "https://github.com/AyishathNahda/Orchestra_UI-_An_AI_Generated_Component_Library",
    live: "https://orchestra-ui-an-ai-generated-compon.vercel.app/",
  },
];

export function HorizontalScrollProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]" id="work">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section header */}
        <div className="px-6 md:px-12 lg:px-20 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-[0.2em] text-primary uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        {/* Horizontal scroll container */}
        <motion.div
          style={{ x }}
          className="flex gap-8 pl-6 md:pl-12 lg:pl-20"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}

          {/* End card - View all */}
          <motion.div
            className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <a
              href="#"
              className="group flex flex-col items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              data-cursor-hover
            >
              <span className="text-lg tracking-wide">View All Projects</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20">
          <div className="h-[1px] bg-border">
            <motion.div
              className="h-full bg-primary origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  scrollProgress
}: {
  project: typeof projects[0];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Parallax effect for title
  const titleY = useTransform(
    scrollProgress,
    [0, 1],
    [0, -50 * (index + 1)]
  );

  // Parallax effect for description (moves slower)
  const descY = useTransform(
    scrollProgress,
    [0, 1],
    [0, -30 * (index + 1)]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[350px] md:w-[500px] lg:w-[600px] group"
    >
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />

        {/* Content */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
          {/* Year badge */}
          <div className="flex justify-between items-start mb-auto">
            <span className="text-xs tracking-wider text-muted-foreground">
              {project.year}
            </span>
            <span className="text-xs tracking-wider text-muted-foreground">
              0{project.id}
            </span>
          </div>

          {/* Project info with parallax */}
          <div className="mt-auto">
            <motion.p
              style={{ y: descY }}
              className="text-sm text-primary mb-2"
            >
              {project.subtitle}
            </motion.p>

            <motion.h3
              style={{ y: titleY }}
              className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4"
            >
              {project.title}
            </motion.h3>

            <motion.p
              style={{ y: descY }}
              className="text-sm text-muted-foreground mb-6 max-w-md"
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-cursor-hover
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-cursor-hover
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
