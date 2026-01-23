"use client";

import React from "react"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  title: string;
  description: string;
  techStack: string[];
  preview: React.ReactNode;
  featured?: boolean;
}

export function ComponentCard({
  title,
  description,
  techStack,
  preview,
  featured = false,
}: ComponentCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden",
        "transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/10",
        "hover:-translate-y-1",
        featured && "md:col-span-2"
      )}
    >
      {/* Preview Area */}
      <div className="relative aspect-[16/10] bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {preview}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="bg-secondary/90 hover:bg-secondary text-secondary-foreground backdrop-blur-sm"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Code2 className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground leading-tight">
            {title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-secondary/80 text-muted-foreground hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
