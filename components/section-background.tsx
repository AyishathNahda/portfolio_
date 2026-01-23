"use client";

import { motion } from "framer-motion";

type Variant = "hero" | "about" | "projects" | "contact";

interface BlobConfig {
  color: string;
  size: string;
  initialX: string;
  initialY: string;
  animation: {
    x: string[];
    y: string[];
    duration: number;
    repeat: number;
  };
}

const VARIANTS: Record<Variant, { baseBg: string; blobs: BlobConfig[]; overlayOpacity?: string }> = {
  hero: {
    baseBg: "#F5F0E8",
    blobs: [
      {
        color: "rgba(255, 182, 193, 0.4)",
        size: "600px",
        initialX: "20%",
        initialY: "20%",
        animation: { x: ["0%", "10%", "-5%", "0%"], y: ["0%", "-8%", "12%", "0%"], duration: 20, repeat: Infinity },
      },
      {
        color: "rgba(186, 85, 211, 0.35)",
        size: "700px",
        initialX: "70%",
        initialY: "10%",
        animation: { x: ["0%", "-12%", "8%", "0%"], y: ["0%", "10%", "-6%", "0%"], duration: 25, repeat: Infinity },
      },
      {
        color: "rgba(135, 206, 250, 0.3)",
        size: "550px",
        initialX: "50%",
        initialY: "70%",
        animation: { x: ["0%", "8%", "-10%", "0%"], y: ["0%", "-10%", "8%", "0%"], duration: 22, repeat: Infinity },
      },
    ],
    overlayOpacity: "0.02",
  },
  about: {
    baseBg: "#E8DED1",
    blobs: [
      {
        color: "rgba(147, 112, 219, 0.4)",
        size: "650px",
        initialX: "15%",
        initialY: "25%",
        animation: { x: ["0%", "-10%", "12%", "0%"], y: ["0%", "10%", "-8%", "0%"], duration: 24, repeat: Infinity },
      },
      {
        color: "rgba(255, 160, 122, 0.35)",
        size: "600px",
        initialX: "75%",
        initialY: "15%",
        animation: { x: ["0%", "10%", "-8%", "0%"], y: ["0%", "-12%", "10%", "0%"], duration: 21, repeat: Infinity },
      },
      {
        color: "rgba(176, 196, 222, 0.3)",
        size: "700px",
        initialX: "45%",
        initialY: "75%",
        animation: { x: ["0%", "-8%", "10%", "0%"], y: ["0%", "8%", "-10%", "0%"], duration: 23, repeat: Infinity },
      },
    ],
    overlayOpacity: "0.025",
  },
  projects: {
    baseBg: "#EDE4D8",
    blobs: [
      {
        color: "rgba(72, 209, 204, 0.4)",
        size: "680px",
        initialX: "25%",
        initialY: "20%",
        animation: { x: ["0%", "12%", "-10%", "0%"], y: ["0%", "-10%", "12%", "0%"], duration: 26, repeat: Infinity },
      },
      {
        color: "rgba(255, 105, 180, 0.35)",
        size: "620px",
        initialX: "65%",
        initialY: "30%",
        animation: { x: ["0%", "-10%", "8%", "0%"], y: ["0%", "10%", "-8%", "0%"], duration: 22, repeat: Infinity },
      },
      {
        color: "rgba(138, 43, 226, 0.3)",
        size: "550px",
        initialX: "55%",
        initialY: "80%",
        animation: { x: ["0%", "8%", "-12%", "0%"], y: ["0%", "-8%", "10%", "0%"], duration: 24, repeat: Infinity },
      },
    ],
    overlayOpacity: "0.03",
  },
  contact: {
    baseBg: "#E0D5C7",
    blobs: [
      {
        color: "rgba(106, 90, 205, 0.4)",
        size: "600px",
        initialX: "30%",
        initialY: "25%",
        animation: { x: ["0%", "-8%", "10%", "0%"], y: ["0%", "12%", "-8%", "0%"], duration: 25, repeat: Infinity },
      },
        {
        color: "rgba(255, 140, 0, 0.35)",
        size: "680px",
        initialX: "70%",
        initialY: "20%",
        animation: { x: ["0%", "10%", "-10%", "0%"], y: ["0%", "-10%", "12%", "0%"], duration: 23, repeat: Infinity },
      },
      {
        color: "rgba(123, 104, 238, 0.3)",
        size: "620px",
        initialX: "50%",
        initialY: "75%",
        animation: { x: ["0%", "-10%", "8%", "0%"], y: ["0%", "8%", "-10%", "0%"], duration: 27, repeat: Infinity },
      },
    ],
    overlayOpacity: "0.025",
  },
};

export function SectionBackground({ variant }: { variant: Variant }) {
  const config = VARIANTS[variant];
  
  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: config.baseBg }}
    >
      {config.blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-[120px] opacity-100"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.initialX,
            top: blob.initialY,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: blob.animation.x.map((val) => `calc(-50% + ${val})`),
            y: blob.animation.y.map((val) => `calc(-50% + ${val})`),
          }}
          transition={{
            duration: blob.animation.duration,
            repeat: blob.animation.repeat,
            ease: "easeInOut",
          }}
        />
      ))}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.overlayOpacity ?? "0.02",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

