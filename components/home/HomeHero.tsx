"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const headline = "Professional trading.";
const subHeadline = "Without the noise.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto pt-36 pb-56 px-6 text-center relative z-10">

        {/* LETTER BY LETTER HEADLINE */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        >
          {headline.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-5xl md:text-6xl font-bold text-blue-200 mt-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.04, delayChildren: 0.6 }
            }
          }}
        >
          {subHeadline.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <p className="mt-6 max-w-xl mx-auto text-blue-100">
          Signalist gives you real-time market data, alerts, and AI-powered
          insights designed for serious traders.
        </p>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="mt-20 flex justify-center"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 opacity-80" />
        </motion.div>
      </div>

      {/* CURVED WHITE TRANSITION */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,53.3C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32L1440,120L0,120Z"
        />
      </svg>
    </section>
  );
}
