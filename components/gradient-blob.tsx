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
        className="absolute w-[400px] h-[400px] opacity-100 will-change-transform"
        style={{
          x: blobX,
          y: blobY,
          background:
            "radial-gradient(circle at 35% 35%, rgba(0, 255, 255, 0.8) 0%, rgba(0, 150, 255, 0.5) 25%, rgba(138, 43, 226, 0.3) 50%, transparent 70%)",
          filter: "blur(40px)", // Smoother blur
          boxShadow: "0 0 100px 40px rgba(0, 200, 255, 0.2)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Static ambient blobs */}
      <div
        className="absolute -top-24 -right-24 w-[400px] h-[400px] opacity-30 blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-20 blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}