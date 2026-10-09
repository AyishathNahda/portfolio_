"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

type CursorState = "default" | "hovering" | "expanded";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Main cursor — fast, snappy
  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });

  // Slow blob — heavy lag for the expand effect
  const blobX = useSpring(0, { stiffness: 60, damping: 18, mass: 1.4 });
  const blobY = useSpring(0, { stiffness: 60, damping: 18, mass: 1.4 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      blobX.set(e.clientX);
      blobY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for project card expand zone first (takes priority)
      if (
        target.closest("[data-cursor-expand]")
      ) {
        setCursorState("expanded");
        return;
      }
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setCursorState("hovering");
        return;
      }
      setCursorState("default");
    };

    const handleHoverEnd = (e: MouseEvent) => {
      // Re-check the related target — if still inside an expand zone keep expanded
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest?.("[data-cursor-expand]")) {
        setCursorState("expanded");
        return;
      }
      setCursorState("default");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY, blobX, blobY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  const isExpanded  = cursorState === "expanded";
  const isHovering  = cursorState === "hovering";

  /* Expand blob colour:
     dark mode  → semi-transparent white (light shade)
     light mode → semi-transparent dark (dark shade)               */
  const expandFill = isDark
    ? "rgba(255, 255, 255, 0.07)"
    : "rgba(0, 0, 0, 0.06)";
  const expandBorder = isDark
    ? "rgba(255, 255, 255, 0.18)"
    : "rgba(0, 0, 0, 0.15)";

  return (
    <>
      {/* ── Large trailing expand blob (behind everything) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] hidden md:block"
        style={{ x: blobX, y: blobY }}
        animate={{
          width:  isExpanded ? 180 : 0,
          height: isExpanded ? 180 : 0,
          opacity: isVisible && isExpanded ? 1 : 0,
          background: expandFill,
          borderColor: expandBorder,
          borderWidth: isExpanded ? 1 : 0,
        }}
        transition={{
          width:   { type: "spring", stiffness: 80, damping: 20 },
          height:  { type: "spring", stiffness: 80, damping: 20 },
          opacity: { duration: 0.35 },
          background: { duration: 0.3 },
        }}
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          borderStyle: "solid",
          backdropFilter: isExpanded ? "blur(2px)" : "none",
        }}
      />

      {/* ── Secondary expand ring (outer glow, faster follow) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9989] hidden md:block"
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          borderStyle: "solid",
        }}
        animate={{
          width:  isExpanded ? 220 : 0,
          height: isExpanded ? 220 : 0,
          opacity: isVisible && isExpanded ? 0.35 : 0,
          borderColor: expandBorder,
          borderWidth: isExpanded ? 1 : 0,
        }}
        transition={{
          width:   { type: "spring", stiffness: 55, damping: 18 },
          height:  { type: "spring", stiffness: 55, damping: 18 },
          opacity: { duration: 0.4 },
        }}
      />

      {/* ── Main cursor (smiley face) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale:   isHovering ? 1.2 : isExpanded ? 0.85 : 1,
          opacity: isVisible ? 1 : 0,
          rotate:  isHovering ? 6 : 0,
        }}
        transition={{
          scale:   { type: "spring", stiffness: 400, damping: 22 },
          opacity: { duration: 0.2 },
          rotate:  { type: "spring", stiffness: 200, damping: 18 },
        }}
      >
        <span className="select-none -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl leading-none drop-shadow-sm">
          😊
        </span>
      </motion.div>

      {/* ── Trailing ring (default / hover state) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale:   isHovering ? 1.4 : 1,
          opacity: isVisible && !isExpanded ? 0.25 : 0,
        }}
        transition={{
          scale:   { type: "spring", stiffness: 200, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-foreground/30" />
      </motion.div>
    </>
  );
}
