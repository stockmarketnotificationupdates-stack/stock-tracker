"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-6 pt-44 pb-64 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Trade with signal.
          <span className="block text-blue-200">Not noise.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-blue-100"
        >
          Real-time market data, AI-powered signals, and alerts built for traders
          who take results seriously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-20 max-w-5xl rounded-3xl bg-slate-900/80 p-6 shadow-2xl"
        >
          <div className="h-56 flex items-center justify-center text-emerald-400 tracking-widest">
            LIVE MARKET FEED
          </div>
        </motion.div>
      </div>

      {/* curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[100%]" />
    </section>
  );
}
