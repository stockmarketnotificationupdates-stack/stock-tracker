"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollChart() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section ref={ref} className="py-32 bg-white">
      <motion.div
        style={{ scale }}
        className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-10 shadow-xl"
      >
        <div className="text-green-400 text-sm mb-2">LIVE MARKET</div>
        <div className="h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl" />
      </motion.div>
    </section>
  );
}
