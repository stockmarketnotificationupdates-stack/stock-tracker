"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/client";
import { onAuthStateChanged, User } from "firebase/auth";
import { getWatchlist } from "@/lib/watchlist";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WatchlistPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [symbols, setSymbols] = useState<string[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) return;

      setUser(u);
      const list = await getWatchlist(u.uid);
      setSymbols(list);
    });

    return () => unsub();
  }, []);

  if (!user || symbols.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border rounded-xl p-4 space-y-3"
    >
      <h3 className="font-medium text-sm text-slate-700">Watchlist</h3>

      <div className="flex flex-wrap gap-2">
        {symbols.map((symbol) => (
          <Link
            key={symbol}
            href={`/stocks/${symbol}`}
            className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100"
          >
            {symbol}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
