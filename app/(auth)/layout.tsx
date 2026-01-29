'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import AnimatedBackground from './AnimatedBackground';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
      {/* animated blobs */}
      <AnimatedBackground />

      <section className="relative z-10">
        <Link
          href="/"
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-blue-600 font-semibold tracking-wide"
        >
          StockHorizon
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-8 text-center text-xs text-slate-400">
          <div className="flex justify-center gap-4 mb-2">
            <Link href="#">Help</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
          © 2026 StockHorizon
        </footer>
      </section>
    </main>
  );
}
