"use client";

import { Button } from "@/components/ui/button";

export function TopStrip() {
  return (
    <div className="pointer-events-none fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16">
      <div className="pointer-events-auto text-lg md:text-xl font-semibold tracking-tight text-foreground">
        NAHDA.
      </div>
      <div className="pointer-events-auto">
        <Button
          asChild
          className="rounded-full px-5 py-2 shadow-lg shadow-primary/20"
        >
          <a href="#contact" data-cursor-hover>
            Let&apos;s Talk
          </a>
        </Button>
      </div>
    </div>
  );
}

