"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionBackground } from "@/components/section-background";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative snap-start min-h-screen flex items-center overflow-hidden"
    >
      <SectionBackground variant="contact" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card/70 backdrop-blur-xl border border-border/70 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
                Lets Connect
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                Have an idea? Let&apos;s build it.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I&apos;m open to full-time roles, freelance work, and collaborations. Send a message and I&apos;ll reply soon.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:ayishathnahda.9i@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                data-cursor-hover
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/AyishathNahda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full w-11 h-11 border border-border/70 bg-background/40 hover:bg-background/70 transition-colors"
                  aria-label="GitHub"
                  data-cursor-hover
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayishath-nahda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full w-11 h-11 border border-border/70 bg-background/40 hover:bg-background/70 transition-colors"
                  aria-label="LinkedIn"
                  data-cursor-hover
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://leetcode.com/u/Nahda_16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-border/70 bg-background/40 hover:bg-background/70 transition-colors text-sm font-medium"
                  data-cursor-hover
                >
                  LeetCode
                </a>
                <a
                  href="https://drive.google.com/file/d/1G4zrOPguIWExkwes67FdpiMi_G_qCKee/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-border/70 bg-background/40 hover:bg-background/70 transition-colors text-sm font-medium"
                  data-cursor-hover
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

