"use client";

import { motion } from "framer-motion";

const SIGNALS = [
  { symbol: "NVDA", result: "+8.4%" },
  { symbol: "AAPL", result: "+3.1%" },
  { symbol: "TSLA", result: "+6.9%" },
];

export default function RecentSignals() {
  return (
    <section className="py-32 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Recent winning signals
      </h2>

      <div className="flex justify-center gap-8">
        {SIGNALS.map((s) => (
          <motion.div
            key={s.symbol}
            whileHover={{ scale: 1.05 }}
            className="p-8 border rounded-2xl shadow-sm"
          >
            <div className="text-xl font-bold">{s.symbol}</div>
            <div className="text-green-600 text-2xl">{s.result}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
