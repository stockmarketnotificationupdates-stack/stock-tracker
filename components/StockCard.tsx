"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StockCard({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className={cn(
        // ⬇️ polished base (dark, unified, premium)
        "group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6",
        "shadow-sm transition-all duration-300",
        "hover:shadow-xl hover:shadow-blue-500/10",
        "will-change-transform",
        className
      )}
    >
      {/* subtle gradient highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08), transparent 40%)",
        }}
      />

      {title && (
        <h3 className="relative z-10 mb-4 text-lg font-semibold text-white">
          {title}
        </h3>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
