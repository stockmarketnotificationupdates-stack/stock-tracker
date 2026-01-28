"use client";

import { LineChart, BrainCircuit, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Real-Time Market Data",
    desc: "Institution-grade feeds with millisecond updates.",
    icon: LineChart,
  },
  {
    title: "AI Trade Signals",
    desc: "High-probability setups powered by ML models.",
    icon: BrainCircuit,
  },
  {
    title: "Secure Infrastructure",
    desc: "Cloud-native, encrypted, and battle-tested.",
    icon: ShieldCheck,
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-blue-600 uppercase tracking-widest text-sm mb-4">
          Our Services
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-20 max-w-3xl">
          How StockHorizon helps you trade smarter
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 hover:shadow-xl transition"
            >
              <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center">
                <f.icon className="h-7 w-7 text-blue-600" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {f.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
