"use client";

import { cn } from "@/lib/utils";

// Mini preview for Animated Pricing Table
export function PricingPreview() {
  return (
    <div className="flex gap-2 scale-75 md:scale-90">
      {[
        { name: "Basic", price: "$9", highlight: false },
        { name: "Pro", price: "$29", highlight: true },
        { name: "Team", price: "$59", highlight: false },
      ].map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col items-center px-3 py-4 rounded-lg border transition-all",
            plan.highlight
              ? "bg-accent/20 border-accent/50 scale-105"
              : "bg-secondary/50 border-border/50"
          )}
        >
          <span className="text-[10px] text-muted-foreground">{plan.name}</span>
          <span
            className={cn(
              "text-lg font-bold",
              plan.highlight ? "text-accent" : "text-foreground"
            )}
          >
            {plan.price}
          </span>
          <div className="mt-2 h-1.5 w-12 rounded-full bg-secondary">
            <div
              className={cn(
                "h-full rounded-full",
                plan.highlight ? "w-full bg-accent" : "w-1/2 bg-muted-foreground/50"
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Mini preview for Bento Grid
export function BentoPreview() {
  return (
    <div className="grid grid-cols-3 gap-1.5 w-32 md:w-40">
      <div className="col-span-2 row-span-2 rounded-lg bg-accent/20 border border-accent/30 h-16 md:h-20" />
      <div className="rounded-lg bg-secondary/80 border border-border/50 h-7 md:h-9" />
      <div className="rounded-lg bg-secondary/80 border border-border/50 h-7 md:h-9" />
      <div className="col-span-2 rounded-lg bg-secondary/80 border border-border/50 h-6 md:h-8" />
      <div className="rounded-lg bg-accent/10 border border-accent/20 h-6 md:h-8" />
    </div>
  );
}

// Mini preview for Glassmorphic Login
export function GlassLoginPreview() {
  return (
    <div className="relative w-36 md:w-44">
      <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-accent/30 blur-xl" />
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent/20 blur-lg" />
      <div className="relative flex flex-col gap-2 p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
        <div className="h-2 w-16 rounded bg-muted-foreground/30 mx-auto" />
        <div className="h-6 rounded bg-secondary/80 border border-border/30" />
        <div className="h-6 rounded bg-secondary/80 border border-border/30" />
        <div className="h-5 rounded bg-accent/80 mt-1" />
      </div>
    </div>
  );
}

// Mini preview for Animated Cards
export function AnimatedCardsPreview() {
  return (
    <div className="flex gap-2 -space-x-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "w-14 h-20 md:w-16 md:h-24 rounded-lg border border-border/50 bg-secondary/80",
            "shadow-lg transition-transform hover:scale-105",
            i === 1 && "bg-accent/20 border-accent/30 -translate-y-2"
          )}
          style={{ transform: `rotate(${(i - 1) * 8}deg)` }}
        />
      ))}
    </div>
  );
}

// Mini preview for Dashboard Stats
export function DashboardStatsPreview() {
  return (
    <div className="flex gap-2 scale-90">
      {[
        { value: "2.4K", change: "+12%" },
        { value: "$8.2K", change: "+8%" },
        { value: "94%", change: "+3%" },
      ].map((stat, i) => (
        <div
          key={i}
          className="flex flex-col p-2 rounded-lg bg-secondary/80 border border-border/50 min-w-12"
        >
          <span className="text-xs font-bold text-foreground">{stat.value}</span>
          <span className="text-[9px] text-accent">{stat.change}</span>
        </div>
      ))}
    </div>
  );
}

// Mini preview for Animated Button
export function AnimatedButtonPreview() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="relative px-6 py-2 rounded-lg bg-accent/90 overflow-hidden group cursor-pointer">
        <span className="relative z-10 text-xs font-medium text-accent-foreground">
          Hover me
        </span>
        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </div>
      <div className="flex gap-1">
        <div className="w-8 h-6 rounded bg-secondary/80 border border-border/50" />
        <div className="w-8 h-6 rounded bg-secondary/80 border border-border/50" />
      </div>
    </div>
  );
}

// Mini preview for Data Table
export function DataTablePreview() {
  return (
    <div className="w-36 md:w-44 rounded-lg overflow-hidden border border-border/50 bg-secondary/50">
      <div className="flex gap-1 px-2 py-1.5 bg-secondary/80 border-b border-border/50">
        <div className="w-6 h-2 rounded bg-muted-foreground/30" />
        <div className="w-8 h-2 rounded bg-muted-foreground/30" />
        <div className="w-6 h-2 rounded bg-muted-foreground/30" />
      </div>
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="flex gap-1 px-2 py-1 border-b border-border/30 last:border-0"
        >
          <div className="w-6 h-1.5 rounded bg-foreground/20" />
          <div className="w-8 h-1.5 rounded bg-foreground/20" />
          <div className="w-6 h-1.5 rounded bg-accent/40" />
        </div>
      ))}
    </div>
  );
}

// Mini preview for Modal
export function ModalPreview() {
  return (
    <div className="relative w-36 md:w-40">
      <div className="absolute inset-0 bg-background/80 rounded-lg" />
      <div className="relative flex flex-col p-3 rounded-lg bg-card border border-border/50 shadow-2xl">
        <div className="flex justify-between items-center mb-2">
          <div className="w-12 h-2 rounded bg-foreground/30" />
          <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="space-y-1.5 mb-3">
          <div className="w-full h-1.5 rounded bg-muted-foreground/20" />
          <div className="w-3/4 h-1.5 rounded bg-muted-foreground/20" />
        </div>
        <div className="flex gap-1.5 justify-end">
          <div className="w-10 h-4 rounded bg-secondary" />
          <div className="w-10 h-4 rounded bg-accent" />
        </div>
      </div>
    </div>
  );
}

// Mini preview for Command Palette
export function CommandPalettePreview() {
  return (
    <div className="w-40 md:w-48 rounded-lg border border-border/50 bg-card shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        <div className="flex-1 h-2 rounded bg-muted-foreground/20" />
      </div>
      <div className="p-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded",
              i === 0 && "bg-accent/20"
            )}
          >
            <div className="w-3 h-3 rounded bg-muted-foreground/30" />
            <div className="w-16 h-1.5 rounded bg-foreground/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
