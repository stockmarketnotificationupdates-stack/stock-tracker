"use client";

import {
  BarChart3,
  Cloud,
  Code2,
  Database,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  { name: "TradingView", icon: LineChart },
  { name: "Finnhub", icon: BarChart3 },
  { name: "Firebase", icon: Database },
  { name: "GitHub", icon: Code2 },
  { name: "Vercel", icon: Cloud },
];

export default function ClientsTrust() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-blue-600 uppercase tracking-widest text-sm mb-4 font-medium">
          Our Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
          Trusted services we use
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <s.icon className="h-7 w-7 text-blue-600" />
              </div>

              <h3 className="font-semibold text-gray-900">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
