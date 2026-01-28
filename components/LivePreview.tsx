"use client";

import { motion } from "framer-motion";

const MOCK_DATA = [
  { symbol: "AAPL", price: "189.42", change: "+1.12%" },
  { symbol: "TSLA", price: "243.18", change: "-0.87%" },
  { symbol: "NVDA", price: "624.90", change: "+2.41%" },
  { symbol: "SPY", price: "489.12", change: "+0.34%" },
];

export default function LivePreview() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Market moves in real time.
        </motion.h2>

        <p className="text-gray-600 mb-16">
          See how fast Signalist surfaces opportunities as they happen.
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {MOCK_DATA.map((stock, i) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-gray-50 p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-xl font-semibold">
                {stock.symbol}
              </div>
              <div className="text-2xl font-bold mt-2">
                ${stock.price}
              </div>
              <div
                className={`mt-2 text-sm ${
                  stock.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stock.change}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
