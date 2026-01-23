"use client";

import React from "react"

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Stack", href: "#stack" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const socialItems = [
  { icon: Github, label: "GitHub", href: "https://github.com/AyishathNahda" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayishath-nahda/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl shadow-background/50">
        {/* Main nav items */}
        {navItems.map((item, index) => (
          <DockItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-border/50 mx-2" />

        {/* Social items */}
        {socialItems.map((item, index) => (
          <DockItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isHovered={hoveredIndex === navItems.length + index}
            onHover={() => setHoveredIndex(navItems.length + index)}
            onLeave={() => setHoveredIndex(null)}
            external
          />
        ))}
      </div>
    </motion.nav>
  );
}

function DockItem({
  icon: Icon,
  label,
  href,
  isHovered,
  onHover,
  onLeave,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative flex items-center justify-center p-3 rounded-xl transition-colors hover:bg-secondary/50"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      data-cursor-hover
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        className="absolute -top-10 px-2 py-1 text-xs font-medium bg-popover border border-border rounded-md whitespace-nowrap text-popover-foreground"
      >
        {label}
      </motion.span>
    </motion.a>
  );
}
