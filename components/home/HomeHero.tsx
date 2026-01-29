"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      const section = canvas.parentElement as HTMLElement;
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));

    const mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.strokeStyle = "rgba(255,255,255,0.08)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 160) {
          p.vx += mdx * 0.000008;
          p.vy += mdy * 0.000008;
        }

        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700 z-0" />

      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-56 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Professional trading.
          <br />
          <span className="text-blue-200">Without the noise.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-blue-100"
        >
          Signalist gives you real-time market data, alerts, and AI-powered
          insights designed for serious traders.
        </motion.p>

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="mt-24 flex justify-center text-white/80"
        >
          <ChevronDown size={28} />
        </motion.div>
      </div>

      <svg
        viewBox="0 0 1440 140"
        className="absolute bottom-0 left-0 w-full z-20"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,80 C240,120 480,40 720,40 960,40 1200,120 1440,80 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}
