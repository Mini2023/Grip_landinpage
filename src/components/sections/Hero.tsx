"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { DataStreams } from "@/components/ui/DataStreams";

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">

      {/* Background Data Streams */}
      <DataStreams />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* AI Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-6 relative z-10"
      >
        <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-emerald-400 italic">Now with Neural AI Intelligence</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-8xl md:text-[14rem] font-extrabold tracking-tighter leading-[0.9] pb-6 bg-gradient-to-b from-white to-neutral-700 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(255,255,255,0.05)] text-center relative z-10"
      >
        GRIP
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg md:text-2xl text-neutral-400 font-medium tracking-tight max-w-2xl text-center mb-12"
      >
        Master your digital patterns. <span className="text-white">Safely. Locally.</span>
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <a
          href="https://grip-omega.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-xl rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Visit App
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white to-emerald-200/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>

      {/* Bottom Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-12"
      >
        <a
          href="https://grip-omega.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-600 hover:text-emerald-400/80 transition-colors cursor-pointer group"
        >
          Access the Dashboard
          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-emerald-400/30 animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-emerald-400/50 font-bold">Scroll Down</span>
      </motion.div>

    </section>
  );
}
