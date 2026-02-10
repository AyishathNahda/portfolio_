"use client";

import { motion } from "framer-motion";

const techStack = [
    { category: "Languages", items: ["Python", "Java", "C++"] },
    { category: "Frontend", items: ["React.js", "Next.js (App Router)", "HTML5", "CSS3", "Tailwind CSS", "Vite"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { category: "AI & APIs", items: ["Groq LLM API", "Prompt Engineering", "JSON-based AI Outputs", "YouTube Data API"] },
    { category: "DevOps & Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Netlify", "Vercel", "Render"] },
    { category: "Design & Testing", items: ["Figma (UI/UX)", "Bruno API Client"] },
];

export function TechStackTicker() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-10">
                {/* Heading removed per user request */}
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Languages, Frontend, Backend */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                {techStack.slice(0, 3).map((category, idx) => (
                                    <div key={idx} className="flex items-center gap-4 px-4">
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{category.category}:</span>
                                        {category.items.map((item) => (
                                            <span key={item} className="px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-secondary-foreground text-sm whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                {techStack.slice(0, 3).map((category, idx) => (
                                    <div key={idx} className="flex items-center gap-4 px-4">
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{category.category}:</span>
                                        {category.items.map((item) => (
                                            <span key={item} className="px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-secondary-foreground text-sm whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Databases, AI, DevOps, Design (Reverse direction implies different animation or just offset, keeping simple for now) */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee-reverse whitespace-nowrap flex gap-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                {techStack.slice(3).map((category, idx) => (
                                    <div key={idx} className="flex items-center gap-4 px-4">
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{category.category}:</span>
                                        {category.items.map((item) => (
                                            <span key={item} className="px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-secondary-foreground text-sm whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap flex gap-4">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-4">
                                {techStack.slice(3).map((category, idx) => (
                                    <div key={idx} className="flex items-center gap-4 px-4">
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{category.category}:</span>
                                        {category.items.map((item) => (
                                            <span key={item} className="px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-secondary-foreground text-sm whitespace-nowrap">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
