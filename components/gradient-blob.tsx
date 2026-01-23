"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export function GradientBlob() {
  // Initialize with 0 to avoid "window is not defined" error during server-side rendering
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the interactive 3D blob
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 2 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 2 });

  // Position the blob (centered)
  const blobX = useTransform(springX, (x) => x - 400); 
  const blobY = useTransform(springY, (y) => y - 400); 

  useEffect(() => {
    // This code ONLY runs on the client (browser)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Set initial center position once the window is available
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[800px] h-[800px] opacity-50 blur-[100px]"
        style={{
          x: blobX,
          y: blobY,
          background:
            "radial-gradient(circle 370px at 50% 48%, oklch(0.70 0.18 220 / 0.75) 0%, oklch(0.57 0.19 230 / 0.27) 60%, transparent 95%)",
        }}
      />

      {/* Static ambient blobs */}
      <div
        className="absolute -top-48 -right-48 w-[700px] h-[700px] opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.15 280 / 0.5) 0%, oklch(0.55 0.2 300 / 0.3) 40%, transparent 70%)",
        }}
      />

      <div
        className="absolute -bottom-64 -left-64 w-[800px] h-[800px] opacity-15 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.12 200 / 0.4) 0%, oklch(0.5 0.1 180 / 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}