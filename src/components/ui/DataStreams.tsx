"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function DataStreams() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const path1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const path2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  // Jagged paths mimicking circuit traces or data flow
  const paths = [
    "M 100 0 L 100 200 L 150 250 L 150 500 L 50 600 L 50 800 L 200 950 L 200 1000",
    "M 400 0 L 400 150 L 350 200 L 350 450 L 450 550 L 450 750 L 300 900 L 300 1000",
    "M 700 0 L 700 300 L 750 350 L 750 600 L 650 700 L 650 850 L 800 900 L 800 1000",
    "M 900 0 L 900 100 L 850 150 L 850 400 L 950 500 L 950 700 L 850 850 L 850 1000",
    "M 250 0 L 250 400 L 300 450 L 100 650 L 100 900 L 250 950 L 250 1000",
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-visible opacity-30 select-none">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none"
        style={{ filter: "drop-shadow(0 0 8px rgba(52, 211, 153, 0.4))" }}
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#34d399"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{ 
              pathLength: i % 2 === 0 ? path1 : path2,
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.4, 0.4, 0.1])
            }}
          />
        ))}

        {/* Dynamic Glowing Data Nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            r="3"
            fill="#34d399"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              cx: Math.random() * 1000,
              cy: Math.random() * 1000,
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Rapid Pulsing Bits */}
        {[...Array(12)].map((_, i) => (
          <motion.rect
            key={`bit-${i}`}
            width="2"
            height="10"
            fill="#34d399"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, 1000]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{ x: (i * 80) + 20 }}
          />
        ))}
      </svg>
    </div>
  );
}
