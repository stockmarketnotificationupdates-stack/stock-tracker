"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-blue-700/95 backdrop-blur shadow-md"
          : "bg-blue-700"
      )}
    >
      <div className="max-w-[1400px] mx-auto h-20 px-10 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          StockHorizon
        </Link>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {["About", "Services", "Clients", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="relative group text-white/80 hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link href="/sign-in" className="relative group">
          <span className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition" />
          <span className="relative inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/40 text-sm font-medium text-white transition-all group-hover:bg-white group-hover:text-blue-700">
            Dashboard Login
          </span>
        </Link>
      </div>
    </header>
  );
}
