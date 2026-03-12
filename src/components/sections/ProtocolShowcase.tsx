"use client";

import { motion } from "framer-motion";
import { BarChart3, Shield, Database, Lock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ProtocolShowcase() {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-emerald-400 font-mono text-xs tracking-[0.5em] uppercase mb-4">Grip Architecture</h2>
          <p className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
            TWO PROTOCOLS. <span className="text-neutral-600">ONE VAULT.</span>
          </p>
        </motion.div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Data & Matchmaking */}
          <ProtocolCard
            title="Data & Matchmaking"
            description="Tracke und analysiere deine intimsten Präferenzen vollkommen lokal. Erkenne Muster in deinem Konsumverhalten und erhalte intelligente, KI-gestützte Matchmaking-Vorschläge (powered by Gemini 1.5) für Darsteller und Videos, die exakt deinem Datenprofil entsprechen."
            icon={<BarChart3 className="w-8 h-8 text-emerald-400" />}
            accentColor="emerald-500"
            side="left"
          />

          {/* Right Column: Shield & Detox */}
          <ProtocolCard
            title="Shield & Detox"
            description="Aktiviere das Urge-Protocol, wenn der Druck zu hoch wird. Ein kompromissloser Begleiter für Dopamin-Detox und den Verzicht auf Masturbation. Level auf, sammle XP und übernimm die Kontrolle zurück."
            icon={<Shield className="w-8 h-8 text-rose-500" />}
            accentColor="rose-500"
            side="right"
          />
        </div>
      </div>
    </section>
  );
}

function ProtocolCard({ title, description, icon, accentColor, side }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  const slideVariants = {
    hidden: { opacity: 0, x: side === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } as const }
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full p-10 rounded-[2.5rem] border border-white/5 bg-neutral-900/20 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-900/40"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${accentColor === 'emerald-500' ? '52, 211, 153' : '244, 63, 94'}, 0.1), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={`mb-8 p-4 w-fit rounded-2xl bg-${accentColor}/5 border border-${accentColor}/10`}>
          {icon}
        </div>
        
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
          <p className="text-neutral-400 text-lg leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between">
          <div className={`text-[10px] font-mono font-bold uppercase tracking-widest text-${accentColor}`}>
            Active Protocol 0{side === "left" ? "1" : "2"}
          </div>
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }}
            className={`flex items-center gap-2 text-sm font-bold text-white cursor-pointer`}
          >
            Explore <ArrowUpRight className="w-4 h-4 text-neutral-500" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-${accentColor}/5 blur-[100px] rounded-full pointer-events-none`} />
    </motion.div>
  );
}
