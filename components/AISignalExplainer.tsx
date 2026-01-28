"use client";

import { motion } from "framer-motion";

export default function AISignalExplainer() {
  return (
    <section className="py-32 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        How AI signals work
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {["Scan markets", "Detect patterns", "Trigger alerts"].map(
          (step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-8 bg-white rounded-2xl shadow"
            >
              <div className="text-blue-600 font-bold mb-2">
                Step {i + 1}
              </div>
              <h3 className="text-xl font-semibold">{step}</h3>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
