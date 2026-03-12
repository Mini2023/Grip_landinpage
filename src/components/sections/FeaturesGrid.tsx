"use client";

import { motion } from "framer-motion";
import { Link2, BarChart3, Trophy, Timer, Shield, Users, Sparkles, BrainCircuit } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "AI Deep Scraper",
    description: "Neural metadata extraction for Porhub, Rule34 and more. Ultra-precise categorization.",
    icon: <Sparkles className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    accent: "from-emerald-500/20",
    detail: "Gemini 2.0 Powered"
  },
  {
    title: "AI Suggestions",
    description: "Personalized search queries and performer recommendations based on your behavioral patterns.",
    icon: <BrainCircuit className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2",
    accent: "from-blue-500/20",
    detail: "Neural Intel"
  },
  {
    title: "XP Gamification",
    description: "Level up your discipline. Every clean day counts towards your global rank.",
    icon: <Trophy className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-2",
    accent: "from-purple-500/20",
    detail: "Level 42 Reached"
  },
  {
    title: "Real-time Analytics",
    description: "Visualize streaks and relapse triggers. Subtle monitoring that alerts you when patterns begin to slip.",
    icon: <Timer className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    accent: "from-orange-500/20",
    detail: "0.4ms Latency"
  },
  {
    title: "The Shield",
    description: "Active recovery protocol. Prevent fallback with emergency AI-motivation and focus blocks.",
    icon: <Shield className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    accent: "from-red-500/20",
    detail: "Protocol Active"
  },
  {
    title: "Social Hub",
    description: "Connect with others on the same journey. Shared streaks, support, and insights.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    accent: "from-cyan-500/20",
    detail: "1.2k Online"
  }
];

export function FeaturesGrid() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Functional Specs</h2>
          <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineered for Performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, className, accent, detail }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 transition-all hover:bg-neutral-900/60 ${className}`}
    >
      {/* Intensified Spot-light effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.15), transparent 40%)`,
        }}
      />

      {/* Intensified Border glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 211, 153, 0.45), transparent 80%)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-auto">
          <div className="text-emerald-400/80 p-3 rounded-xl bg-black/50 border border-white/5 group-hover:border-emerald-400/30 transition-colors">
            {icon}
          </div>
          <div className="text-[10px] font-mono text-emerald-400/40 uppercase tracking-widest bg-emerald-400/5 px-2 py-1 rounded border border-emerald-400/10 group-hover:border-emerald-400/30 transition-colors">
            {detail}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Mini sparkline visualization hint */}
        <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0"
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full shadow-[0_0_15px_rgba(52,211,153,0.5)]`} />
    </motion.div>
  );
}

