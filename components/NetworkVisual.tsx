'use client';

import { motion } from "framer-motion";

export default function NetworkVisual() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      className="relative h-[420px] flex items-center justify-center"
    >
      <svg width="360" height="360" viewBox="0 0 360 360">
        {/* lines */}
        {[...Array(14)].map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 360}
            y1={Math.random() * 360}
            x2={Math.random() * 360}
            y2={Math.random() * 360}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}

        {/* nodes */}
        {[...Array(18)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 360}
            cy={Math.random() * 360}
            r="3"
            fill="white"
            opacity="0.85"
          />
        ))}
      </svg>

      {/* polygon */}
      <div className="absolute w-72 h-72 border border-white/30 rotate-45 rounded-xl" />
      <div className="absolute w-56 h-56 border border-white/20 rotate-12 rounded-xl" />
    </motion.div>
  );
}
