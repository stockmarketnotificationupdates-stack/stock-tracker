'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiTradingview,
  SiGoogle,
  SiGithub,
  SiVercel,
} from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { useRef } from 'react';

const partners = [
  { name: 'TradingView', Icon: SiTradingview },
  { name: 'Google', Icon: SiGoogle },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Finnhub', Icon: FaChartLine },
  { name: 'Vercel', Icon: SiVercel },
];

export default function Partners() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // scroll depth
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* animated node lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <motion.line
            x1="15%"
            y1="50%"
            x2="85%"
            y2="50%"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="6 12"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-center text-xs md:text-sm
            uppercase tracking-[0.3em]
            text-blue-500 mb-14
          "
        >
          Powered by trusted technology partners
        </motion.p>

        <div className="relative grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
          {partners.map(({ name, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.08,
                rotateX: 12,
                rotateY: -12,
              }}
              className="group perspective-[1400px]"
            >
              <div
                className="
                  relative h-20 flex items-center justify-center
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  border border-blue-200/60
                  shadow-[0_20px_40px_-20px_rgba(59,130,246,0.45)]
                  transition-all duration-300
                  group-hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.65)]
                "
              >
                {/* glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    blur-2xl transition
                    bg-blue-400/30
                  "
                />

                <Icon
                  className="
                    relative z-10
                    w-8 h-8 md:w-9 md:h-9
                    text-blue-600
                    transition
                    group-hover:text-blue-700
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
