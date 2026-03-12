"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Trophy, TrendingUp, Zap, Star, Activity, Shield, Fingerprint } from "lucide-react";

export function XPGamification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [levelUp, setLevelUp] = useState(false);
  const [step, setStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xpValue = useTransform(scrollYProgress, [0.1, 0.4], [0, 100]);
  const xpWidth = useTransform(xpValue, (v: number) => `${v}%`);
  const levelScale = useTransform(scrollYProgress, [0.4, 0.5], [1, 1.1]);

  // Sync steps with scroll/timer
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Synchronize internal level status
  useEffect(() => {
    return xpValue.on("change", (v) => {
      if (v >= 99) setLevelUp(true);
      else setLevelUp(false);
    });
  }, [xpValue]);

  const steps = [
    { label: "Abstinence Detected", icon: <Shield className="w-5 h-5 text-blue-400" /> },
    { label: "Syncing Metadata", icon: <Fingerprint className="w-5 h-5 text-purple-400" /> },
    { label: "XP Calculation", icon: <Activity className="w-5 h-5 text-emerald-400" /> },
    { label: "Rank Update", icon: <Star className="w-5 h-5 text-blue-400" /> }
  ];

  return (
    <section 
      ref={containerRef}
      className="bg-black py-20 px-10 flex flex-col items-center justify-center overflow-hidden h-full border-l border-white/5"
    >
      <div className="w-full flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">Phase 02</h2>
            <h3 className="text-5xl font-extrabold text-white tracking-tighter">Gamified Discipline.</h3>
          </div>
          <p className="text-neutral-500 text-lg leading-relaxed max-w-sm mx-auto font-medium">
             Invest in your dopamine baseline. Track growth with high-fidelity protocols.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
             {steps.map((s, i) => (
               <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${step === i ? 'opacity-100 translate-x-2' : 'opacity-30'}`}>
                 <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${step === i ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : ''}`}>
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
          <div className="relative aspect-square w-full max-w-md mx-auto bg-neutral-900/40 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center gap-8 overflow-hidden backdrop-blur-3xl">
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold font-mono">Current Identity</span>
                  <motion.span 
                    style={{ scale: levelScale }}
                    className="text-4xl font-bold text-white italic"
                  >
                    {levelUp ? "L-43" : "L-42"}
                  </motion.span>
                </div>
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                   <Zap className={`w-5 h-5 ${levelUp ? 'text-blue-400 fill-blue-400' : 'text-blue-400/50'}`} />
                </div>
              </div>

              {/* XP Bar Component */}
              <div className="space-y-3">
                 <div className="flex justify-between text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest">
                    <span>Progress</span>
                    <motion.span>{levelUp ? "100%" : "85%"}</motion.span>
                 </div>
                 <div className="h-3 w-full bg-black/50 rounded-full border border-white/5 p-0.5 overflow-hidden relative">
                  <motion.div 
                    style={{ width: xpWidth }}
                    className="h-full bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>

              {/* Popping Feedback */}
              <AnimatePresence>
                {levelUp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-3 bg-blue-500/20 border border-blue-500/30 p-3 rounded-xl"
                  >
                    <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Milestone: +50 Discipline</span>
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

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"
            />
          </div>
          
          {/* Subtle surrounding glow */}
          <div className="absolute inset-0 -z-10 bg-blue-500/5 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
