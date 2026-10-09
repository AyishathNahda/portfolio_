"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Layers, BrainCircuit, BarChart3 } from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building reliable, well-structured applications with strong programming fundamentals, RESTful APIs, authentication systems, and backend architecture.",
    tags: ["Python", "Java", "C++", "Node.js", "APIs", "Databases", "System Design"],
  },
  {
    number: "02",
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Creating complete web applications from frontend to backend using modern frameworks and deployment tools — focusing on clean UI, performance, and solid architecture.",
    tags: ["React", "Next.js", "Node.js", "FastAPI", "MongoDB", "PostgreSQL", "Vercel"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI / Machine Learning",
    description:
      "Building AI-powered applications and working with LLMs, RAG pipelines, vector embeddings, and practical ML workflows to solve real problems.",
    tags: ["LLMs", "RAG", "ChromaDB", "Gemini", "Groq", "Embeddings", "Prompt Engineering"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Science & Analytics",
    description:
      "Working with data pipelines, exploratory analysis, visualization, and machine learning models to extract insights and drive decisions.",
    tags: ["Python", "Pandas", "NumPy", "XGBoost", "Streamlit", "Data Viz", "ML Models"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-background py-32 overflow-hidden">
      {/* Subtle top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tighter">
            What I Work On
          </h2>
        </motion.div>

        {/* Grid of expertise cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                className="group relative rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-8 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-muted-foreground tracking-[0.3em]">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-foreground transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-border/50 text-muted-foreground font-mono hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
