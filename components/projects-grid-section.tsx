"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

/* ─── project data ─── */
const projects = [
  {
    id: 1,
    title: "EchoEase",
    subtitle: "Audiology & Speech Therapy Management",
    description: "A comprehensive platform for therapists to manage patient records, clinical reports, and appointments with a focus on streamlined medical workflows.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    year: "2025",
    github: "https://github.com/kalviumcommunity/S69_Ayishath_Nahda_Capstone_EchoEase",
    live: "https://echoease.netlify.app/",
    accent: "#4FC3F7",
    icon: "🩺",
    graphic: "medical",
  },
  {
    id: 2,
    title: "StudyBuddy-AI",
    subtitle: "AI-Powered Learning Assistant",
    description: "An intelligent education tool that helps students summarize content, generate quizzes, and clarify complex topics using Google's Gemini Pro AI.",
    tech: ["Next.js", "Grok AI", "TypeScript", "Clerk Auth"],
    year: "2025",
    github: "https://github.com/kalviumcommunity/StudyBuddy-AI",
    live: "https://yourstudymateaai.netlify.app/",
    accent: "#A78BFA",
    icon: "🤖",
    graphic: "ai",
  },
  {
    id: 3,
    title: "JobFit-AI",
    subtitle: "AI Career Assistant",
    description: "Full-stack AI career assistant for resume analysis, job matching, ATS scoring, and interview preparation, powered by advanced RAG pipelines and vector embeddings.",
    tech: ["React", "FastAPI", "Google Gemini", "RAG", "PyMuPDF", "ChromaDB"],
    year: "2026",
    github: "https://github.com/AyishathNahda/JobFit-AI",
    live: "https://job-fit-ai-tawny.vercel.app/",
    accent: "#34D399",
    icon: "💼",
    graphic: "career",
  },
  {
    id: 4,
    title: "CostLens AI",
    subtitle: "Cloud Cost Intelligence Dashboard",
    description: "Cloud cost intelligence platform that combines telemetry, billing data, anomaly detection, forecasting, and cost decomposition to identify the root causes of cloud spend changes.",
    tech: ["Python", "XGBoost", "Streamlit", "Machine Learning", "Data Analytics"],
    year: "2026",
    github: "https://github.com/AyishathNahda/CostLens-AI",
    live: "https://costlens-ai.streamlit.app/",
    accent: "#FB923C",
    icon: "☁️",
    graphic: "analytics",
  },
  {
    id: 5,
    title: "Email Scheduler",
    subtitle: "Distributed Email Scheduling Platform",
    description: "Production-grade distributed email scheduling platform with rate limiting, retries, crash recovery, concurrency-safe processing, and a Next.js campaign dashboard.",
    tech: ["Node.js", "Express", "TypeScript", "MySQL", "Redis", "BullMQ", "Next.js"],
    year: "2026",
    github: "https://github.com/AyishathNahda/job_email_scheduler",
    live: "https://job-email-scheduler-frontend.vercel.app/",
    accent: "#F472B6",
    icon: "📧",
    graphic: "email",
  },
];

/* ─── animated SVG graphics ─── */
function ProjectGraphic({ type, accent, hovered }: { type: string; accent: string; hovered: boolean }) {
  if (type === "medical") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0">
        <defs>
          <radialGradient id="med-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <filter id="glow-med">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="260" fill="url(#med-bg)" />
        <motion.path
          d="M20,130 L80,130 L100,80 L120,180 L140,60 L160,200 L180,130 L380,130"
          fill="none" stroke={accent} strokeWidth={hovered ? 3 : 2} strokeLinecap="round"
          filter="url(#glow-med)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
        <motion.g animate={{ scale: hovered ? [1, 1.1, 1] : 1 }} transition={{ duration: 2, repeat: Infinity }}
          style={{ originX: "200px", originY: "60px" }}>
          <rect x="188" y="40" width="24" height="40" rx="4" fill={accent} opacity="0.7" />
          <rect x="176" y="52" width="48" height="16" rx="4" fill={accent} opacity="0.7" />
        </motion.g>
        {[60, 140, 220, 300, 360].map((x, i) => (
          <motion.circle key={i} cx={x} cy={130} r={3} fill={accent} opacity={0.5}
            animate={{ r: hovered ? [3, 5, 3] : 3 }}
            transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity }} />
        ))}
      </svg>
    );
  }
  if (type === "ai") {
    const nodes = [
      { x: 200, y: 55 }, { x: 110, y: 135 }, { x: 290, y: 135 },
      { x: 60, y: 210 }, { x: 155, y: 210 }, { x: 245, y: 210 }, { x: 340, y: 210 },
    ];
    const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0">
        <defs>
          <radialGradient id="ai-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <filter id="glow-ai"><feGaussianBlur stdDeviation="5" result="c"/><feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="400" height="260" fill="url(#ai-bg)" />
        {edges.map(([a, b], i) => (
          <motion.line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={accent} strokeWidth={1.5} opacity={0.5}
            animate={{ opacity: hovered ? [0.5, 1, 0.5] : 0.5 }}
            transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }} />
        ))}
        {nodes.map((n, i) => (
          <motion.circle key={i} cx={n.x} cy={n.y} r={i === 0 ? 18 : 12}
            fill={accent} opacity={i === 0 ? 0.85 : 0.55} filter="url(#glow-ai)"
            animate={{ scale: hovered ? [1, 1.15, 1] : 1 }}
            transition={{ delay: i * 0.1, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: `${n.x}px`, originY: `${n.y}px` }} />
        ))}
        <text x="200" y="60" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">AI</text>
      </svg>
    );
  }
  if (type === "career") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0">
        <defs>
          <radialGradient id="car-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <filter id="glow-car"><feGaussianBlur stdDeviation="4" result="c"/><feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="400" height="260" fill="url(#car-bg)" />
        {[50, 80, 120, 90, 150, 110, 170].map((h, i) => (
          <motion.rect key={i} x={30 + i * 50} y={220 - h} width={32} height={h} rx={5} fill={accent} opacity={0.6}
            animate={{ scaleY: hovered ? [1, 1.08, 1] : 1 }}
            transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
            style={{ originX: `${30 + i * 50 + 16}px`, originY: "220px" }} />
        ))}
        <motion.path d="M46,195 L96,155 L146,115 L196,135 L246,85 L296,65 L346,40"
          fill="none" stroke={accent} strokeWidth={2.5} strokeDasharray="8 4" filter="url(#glow-car)"
          animate={{ opacity: hovered ? [0.7, 1, 0.7] : 0.7 }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.polygon points="336,30 356,40 336,50" fill={accent}
          animate={{ scale: hovered ? [1, 1.2, 1] : 1 }} transition={{ duration: 2, repeat: Infinity }}
          style={{ originX: "346px", originY: "40px" }} />
      </svg>
    );
  }
  if (type === "analytics") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0">
        <defs>
          <radialGradient id="ana-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <filter id="glow-ana"><feGaussianBlur stdDeviation="5" result="c"/><feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="400" height="260" fill="url(#ana-bg)" />
        <motion.circle cx={200} cy={130} r={80} fill="none" stroke={accent} strokeWidth={30} opacity={0.25}
          animate={{ r: hovered ? [80, 84, 80] : 80 }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx={200} cy={130} r={80} fill="none" stroke={accent} strokeWidth={30}
          strokeDasharray="200 302" strokeDashoffset={-40} filter="url(#glow-ana)"
          animate={{ strokeDasharray: hovered ? ["200 302", "230 272", "200 302"] : ["200 302"] }}
          transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx={200} cy={130} r={80} fill="none" stroke="white" strokeWidth={30}
          strokeDasharray="100 402" strokeDashoffset={-240} opacity={0.15} />
        <motion.text x="200" y="135" textAnchor="middle" fill={accent} fontSize="16" fontWeight="bold"
          animate={{ opacity: hovered ? [0.8, 1, 0.8] : 0.8 }} transition={{ duration: 1.5, repeat: Infinity }}>
          Cloud
        </motion.text>
        {[{x:310,y:55,label:"Cost"},{x:55,y:185,label:"Trends"}].map((chip, i) => (
          <motion.g key={i} animate={{ y: hovered ? [0, -6, 0] : 0 }} transition={{ delay: i * 0.5, duration: 2.5, repeat: Infinity }}>
            <rect x={chip.x} y={chip.y} width={60} height={22} rx={11} fill={accent} opacity={0.25} />
            <text x={chip.x+30} y={chip.y+15} textAnchor="middle" fill={accent} fontSize="11" fontWeight="600">{chip.label}</text>
          </motion.g>
        ))}
      </svg>
    );
  }
  // email
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full absolute inset-0">
      <defs>
        <radialGradient id="em-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="glow-em"><feGaussianBlur stdDeviation="4" result="c"/><feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="400" height="260" fill="url(#em-bg)" />
      <motion.rect x={110} y={80} width={180} height={120} rx={10} fill="none" stroke={accent} strokeWidth={2.5} opacity={0.7}
        animate={{ scale: hovered ? [1, 1.04, 1] : 1 }} transition={{ duration: 2, repeat: Infinity }}
        style={{ originX: "200px", originY: "140px" }} />
      <motion.path d="M110,90 L200,155 L290,90" fill="none" stroke={accent} strokeWidth={2.5} opacity={0.7} />
      {[{x:55,y:30},{x:295,y:22},{x:340,y:100}].map((pos, i) => (
        <motion.g key={i}
          animate={{ x: hovered ? [0, 18, 0] : 0, y: hovered ? [0, -10, 0] : 0, opacity: hovered ? [0.4, 0.85, 0.4] : 0.4 }}
          transition={{ delay: i * 0.4, duration: 2, repeat: Infinity }}>
          <rect x={pos.x} y={pos.y} width={30} height={20} rx={4} fill={accent} opacity={0.6} />
          <path d={`M${pos.x},${pos.y+3} L${pos.x+15},${pos.y+13} L${pos.x+30},${pos.y+3}`} fill="none" stroke="white" strokeWidth={1.2} opacity={0.8} />
        </motion.g>
      ))}
      {[0,1,2,3].map(i => (
        <motion.circle key={i} cx={165 + i * 24} cy={240} r={5} fill={accent}
          animate={{ scale: hovered ? [1, 1.6, 1] : 1, opacity: hovered ? [0.5, 1, 0.5] : 0.5 }}
          transition={{ delay: i * 0.2, duration: 1.2, repeat: Infinity }} />
      ))}
    </svg>
  );
}

/* ─── main section ─── */
export function ProjectsGridSection() {
  return (
    <section id="work" className="relative bg-background">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="mb-28">
          <span className="text-sm tracking-[0.4em] text-neutral-500 uppercase mb-6 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground tracking-tighter">
            CASE STUDIES
          </h2>
        </div>
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── project card with hover-pop ─── */
function ProjectCard({ project, index, total }: { project: (typeof projects)[0]; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 20%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="sticky top-20 min-h-[75vh] flex flex-col justify-center mb-20 last:mb-0 bg-background pt-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-expand
    >
      {/* Divider */}
      <div className="w-full h-[1px] bg-border mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

        {/* Left: info */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-7"
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-sm font-mono text-muted-foreground">0{project.id}</span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
              <motion.span className="ml-auto text-xl select-none"
                animate={{ rotate: hovered ? [0, -12, 12, 0] : 0, scale: hovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.5 }}>
                {project.icon}
              </motion.span>
            </div>

            <motion.h3
              className="text-4xl md:text-5xl font-serif font-medium mb-3 tracking-tight leading-none"
              animate={{ color: hovered ? project.accent : "var(--foreground)" }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-base text-muted-foreground font-light mb-5">{project.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sm">{project.description}</p>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <motion.span key={t}
                className="px-3 py-1.5 text-xs rounded-full border font-mono transition-colors duration-300"
                animate={{
                  y: hovered ? [0, -4, 0] : 0,
                  borderColor: hovered ? `${project.accent}55` : "rgba(255,255,255,0.12)",
                  color: hovered ? project.accent : "var(--muted-foreground)",
                }}
                transition={{ delay: i * 0.05, duration: hovered ? 1.4 : 0.3, repeat: hovered ? Infinity : 0 }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Mobile links */}
          <div className="flex items-center gap-6 lg:hidden pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-medium">
              <Github className="w-4 h-4" /> Source
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground font-medium"
              style={{ color: project.accent }}>
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right: animated graphic with POP effect */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            className="relative w-full aspect-video rounded-2xl overflow-hidden border"
            animate={{
              scale: hovered ? 1.028 : 1,
              boxShadow: hovered
                ? `0 28px 70px -8px ${project.accent}40, 0 0 0 1.5px ${project.accent}30`
                : "0 8px 30px rgba(0,0,0,0.14)",
              borderColor: hovered ? `${project.accent}45` : "rgba(255,255,255,0.08)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          >
            {/* Base bg */}
            <div className="absolute inset-0" style={{ background: "hsl(var(--secondary)/0.35)" }} />

            {/* SVG graphic */}
            <ProjectGraphic type={project.graphic} accent={project.accent} hovered={hovered} />

            {/* Hover radial overlay */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.accent}20, transparent 70%)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>

            {/* Year badge */}
            <motion.div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md border"
              style={{ borderColor: `${project.accent}40`, color: project.accent, background: `${project.accent}20` }}
              animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -2 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {project.year}
            </motion.div>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center justify-end gap-8 pt-4 border-t border-border/50">
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground font-medium"
              whileHover={{ color: project.accent, x: -3 }} transition={{ duration: 0.2 }}>
              <Github className="w-4 h-4" /> Source
            </motion.a>
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground font-medium"
              whileHover={{ color: project.accent, x: 3 }} transition={{ duration: 0.2 }}>
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

