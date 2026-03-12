"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link2, Shield, Fingerprint, Activity, Sparkles, Brain } from "lucide-react";
import { useState, useEffect } from "react";

export function LinkScraperPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: "Intercepting Request", icon: <Link2 className="w-5 h-5 text-blue-400" /> },
    { label: "Neural Content Analysis", icon: <Brain className="w-5 h-5 text-purple-400" /> },
    { label: "Deep Meta Extraction", icon: <Fingerprint className="w-5 h-5 text-emerald-400" /> },
    { label: "AI Pattern Matching", icon: <Activity className="w-5 h-5 text-orange-400" /> }
  ];

  return (
    <section className="bg-black py-20 px-10 flex flex-col items-center justify-center overflow-hidden h-full">
      <div className="w-full flex flex-col gap-12 items-center">

        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-emerald-400 font-mono text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3" /> Phase 01
            </h2>
            <h3 className="text-5xl font-extrabold text-white tracking-tighter">AI Link Scraper.</h3>
          </div>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Grip's <strong>AI Deep Scrape</strong> protocol identifies patterns, performers, and behavioral triggers with 99.8% precision.
            Neural processing happens locally—keeping your telemetry data strictly private.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {steps.map((s, i) => (
              <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${step === i ? 'opacity-100 translate-x-2' : 'opacity-30'}`}>
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${step === i ? 'border-emerald-500/50 shadow-[0_0_15px_rgba(52,211,153,0.2)]' : ''}`}>
                  {s.icon}
                </div>
                <span className={`font-mono text-xs uppercase tracking-[0.2em] ${step === i ? 'text-white' : 'text-neutral-600'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square w-full max-w-md mx-auto bg-neutral-900/40 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center gap-10 overflow-hidden backdrop-blur-3xl">

            {/* Animated Scanning Box */}
            <div className="relative z-10 flex flex-col gap-6">
              <div className="text-neutral-500 font-mono text-[10px] break-all opacity-50">
                https://the-lab.internal/v1/analyze/content/0x39a1f2...
              </div>

              <div className="relative h-20 rounded-xl bg-black/60 border border-white/5 flex items-center px-6 gap-4 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-12"
                />
                <div className="className w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="h-2 w-3/4 bg-white/10 rounded" />
                  <div className="h-1.5 w-1/2 bg-white/5 rounded" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-2"
                  >
                    <div className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">TRIGGER DETECTED</div>
                    <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/30">CATEGORY: PERFORMER</div>
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-bold border border-red-500/30"
                    >
                      SHIELD ACTIVE
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Background grid for tech vibe */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-white" />
              ))}
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 p-4">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                    className="w-1 h-3 bg-emerald-500/50 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Subtle surrounding glow */}
          <div className="absolute inset-0 -z-10 bg-emerald-500/5 blur-[100px] rounded-full" />
        </div>

      </div>
    </section>
  );
}
