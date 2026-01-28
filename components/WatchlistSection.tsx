"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/client";
import { onAuthStateChanged, User } from "firebase/auth";
import { getWatchlist } from "@/lib/watchlist";
import Link from "next/link";
import StockCard from "@/components/StockCard";

export default function WatchlistSection() {
  const [user, setUser] = useState<User | null>(null);
  const [symbols, setSymbols] = useState<string[]>([]);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (!u) return;
      setUser(u);
      setSymbols(await getWatchlist(u.uid));
    });
  }, []);

  if (!user || symbols.length === 0) return null;

  return (
    <StockCard title="Your Watchlist">
      <div className="flex flex-wrap gap-2">
        {symbols.map((symbol) => (
          <Link
            key={symbol}
            href={`/stocks/${symbol}`}
            className="rounded-full bg-accent px-3 py-1 text-sm hover:bg-accent/80"
          >
            {symbol}
          </Link>
        ))}
      </div>
    </StockCard>
  );
}
