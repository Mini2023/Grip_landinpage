"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function MockupSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-start bg-black pt-20 pb-20"
    >
      <div className="sticky top-20 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <h2 className="text-emerald-400 font-mono text-xs tracking-[0.4em] uppercase mb-2">System Insights</h2>
          <p className="text-4xl font-bold text-white tracking-tighter">Detailed Analytics</p>
        </motion.div>

        <motion.div
           style={{
             scale,
             rotateX,
             opacity,
             perspective: "1000px"
           }}
           className="relative w-[90%] max-w-6xl aspect-video rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(52,211,153,0.1)]"
        >
          {/* Abstract Dashboard UI */}
          <div className="absolute inset-0 p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-400 opacity-80 italic">Quantifying Behavior</span>
                <div className="h-4 w-32 bg-emerald-400/20 rounded border border-emerald-400/30" />
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500/50" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                <div className="h-2 w-2 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 relative">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 rounded-xl bg-black/40 border border-white/5 p-4 flex flex-col justify-end relative">
                  <div className="h-1 w-full bg-white/5 rounded">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                      className="h-full bg-emerald-400/40 rounded"
                    />
                  </div>
                  
                  {/* Popping Tags */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2 + (i * 0.1), type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                  >
                    {i === 1 ? "SOLO" : i === 2 ? "STREAK" : "PEAK"}
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex-1 rounded-xl bg-black/40 border border-white/5 p-8 relative overflow-hidden">
               {/* Grid markings */}
               <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none opacity-5">
                  {[...Array(72)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white" />
                  ))}
               </div>
               
               {/* Graph construction */}
               <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                  <motion.path
                    d="M0 40 L10 35 L20 38 L30 20 L40 25 L50 10 L60 15 L70 5 L80 12 L90 8 L100 20"
                    fill="none"
                    stroke="currentColor"
                    className="text-emerald-400"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0 40 L10 38 L20 39 L30 35 L40 37 L50 30 L60 32 L70 28 L80 30 L90 25 L100 28"
                    fill="none"
                    stroke="currentColor"
                    className="text-neutral-600"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  />
               </svg>
            </div>
          </div>
          
          {/* Glass Overlay Glow */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-light text-white/50 tracking-wide uppercase">Deep Analytics</h2>
        </motion.div>
      </div>
    </section>
  );
}
