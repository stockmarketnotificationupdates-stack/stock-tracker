"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { auth } from "@/lib/firebase/client";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "@/lib/watchlist";

export default function WatchlistButton({ symbol }: { symbol: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) return;

      setUser(u);
      const exists = await isInWatchlist(u.uid, symbol);
      setActive(exists);
      setLoading(false);
    });

    return () => unsub();
  }, [symbol]);

  if (!user || loading) return null;

  async function toggle() {
    setActive((prev) => !prev);

    if (active) {
      await removeFromWatchlist(user.uid, symbol);
    } else {
      await addToWatchlist(user.uid, symbol);
    }
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className={`p-2 rounded-lg border transition ${
        active
          ? "bg-yellow-400 text-black border-yellow-400"
          : "bg-white text-slate-500 hover:text-yellow-500"
      }`}
      title={active ? "Remove from watchlist" : "Add to watchlist"}
    >
      <Star size={18} fill={active ? "currentColor" : "none"} />
    </motion.button>
  );
}
