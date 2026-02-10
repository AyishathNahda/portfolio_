"use client";

import { motion } from "framer-motion";

type Variant = "hero" | "about" | "projects" | "contact";

const VARIANTS: Record<Variant, { baseBg: string; overlayOpacity?: string }> = {
  hero: {
    baseBg: "rgba(240, 248, 255, 0)", // Transparent to show main gradient blob
    overlayOpacity: "0.02",
  },
  about: {
    baseBg: "rgba(241, 245, 249, 0.3)", // Slate 100 with opacity
    overlayOpacity: "0.025",
  },
  projects: {
    baseBg: "rgba(224, 242, 254, 0.3)", // Sky 100 with opacity
    overlayOpacity: "0.03",
  },
  contact: {
    baseBg: "rgba(236, 254, 255, 0.3)", // Cyan 50 with opacity
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
      {/* Heavy blobs removed for performance - relying on global Tech Orb */}

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

