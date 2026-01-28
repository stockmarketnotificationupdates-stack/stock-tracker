"use client";

import { useEffect, useRef, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Loader2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import { getWatchlist } from "@/lib/watchlist";
import { auth } from "@/lib/firebase/client";
import { onAuthStateChanged, User } from "firebase/auth";
import { useDebounce } from "@/hooks/useDebounce";
import WatchlistButton from "@/components/WatchlistButton";

const US_EXCHANGES = ["NYSE", "NASDAQ", "NYSE ARCA"];

// 🔥 fallback popular stocks (always show something)
const POPULAR_STOCKS = [
  { symbol: "AAPL", name: "Apple Inc.", exchange: "NASDAQ" },
  { symbol: "MSFT", name: "Microsoft Corp.", exchange: "NASDAQ" },
  { symbol: "NVDA", name: "NVIDIA Corp.", exchange: "NASDAQ" },
  { symbol: "GOOGL", name: "Alphabet Inc.", exchange: "NASDAQ" },
  { symbol: "META", name: "Meta Platforms Inc.", exchange: "NASDAQ" },
  { symbol: "AMZN", name: "Amazon.com Inc.", exchange: "NASDAQ" },
  { symbol: "TSLA", name: "Tesla Inc.", exchange: "NASDAQ" },
];

interface SearchCommandProps {
  initialStocks?: StockWithWatchlistStatus[];
}

export default function SearchCommand({
  initialStocks = [],
}: SearchCommandProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] =
    useState<StockWithWatchlistStatus[]>(initialStocks);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  const isSearchMode = searchTerm.trim().length > 0;

  /* auth + watchlist */
  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      if (!u) return;
      setUser(u);
      const list = await getWatchlist(u.uid);
      setWatchlist(list);
    });
  }, []);

  /* search */
  const handleSearch = async () => {
    if (!isSearchMode) return;

    setLoading(true);
    try {
      const results = await searchStocks(searchTerm.trim());
      setStocks(results || []);
      setActiveIndex(0);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useDebounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch();
  }, [searchTerm]);

  /* US priority */
  const sortedStocks = [...stocks].sort((a, b) => {
    const aUS = US_EXCHANGES.includes(a.exchange);
    const bUS = US_EXCHANGES.includes(b.exchange);
    return Number(bUS) - Number(aUS);
  });

  /* ⭐ FINAL DISPLAY LOGIC */
  const displayStocks: StockWithWatchlistStatus[] = isSearchMode
    ? sortedStocks
    : [
        // watchlist first
        ...sortedStocks.filter((s) => watchlist.includes(s.symbol)),
        // then popular fallback
        ...POPULAR_STOCKS.filter(
          (p) => !watchlist.includes(p.symbol)
        ),
      ].slice(0, 10);

  /* ⌘K */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* click outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* keyboard nav */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!displayStocks.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % displayStocks.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) =>
        i === 0 ? displayStocks.length - 1 : i - 1
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = displayStocks[activeIndex];
      close();
      router.push(`/stocks/${selected.symbol}`);
    }
  };

  const close = () => {
    setOpen(false);
    setSearchTerm("");
    setStocks([]);
    setActiveIndex(0);
  };

  return (
    <div ref={containerRef} className="relative w-[520px]">
      {/* trigger */}
      <div
        onClick={() => setOpen(true)}
        className="flex h-11 items-center gap-2 rounded-md border bg-muted px-4 text-sm text-muted-foreground cursor-pointer"
      >
        Search stocks…
        <span className="ml-auto text-xs">⌘K</span>
      </div>

      {open && (
        <div className="absolute left-0 top-[52px] z-50 w-full rounded-md border bg-background shadow-lg">
          <Command>
            <CommandInput
              value={searchTerm}
              onValueChange={setSearchTerm}
              onKeyDown={handleKeyDown}
              placeholder="Search stocks..."
              autoFocus
            />

            <CommandList>
              {loading && (
                <CommandEmpty className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Searching…
                </CommandEmpty>
              )}

              {!loading &&
                displayStocks.map((stock, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={stock.symbol}
                      className={`flex items-center gap-3 px-3 py-2 ${
                        isActive ? "bg-muted" : "hover:bg-muted"
                      }`}
                    >
                      <Link
                        href={`/stocks/${stock.symbol}`}
                        onClick={close}
                        className="flex flex-1 items-center gap-3"
                      >
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{stock.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {stock.symbol} · {stock.exchange}
                          </div>
                        </div>
                      </Link>

                      {user && (
                        <WatchlistButton symbol={stock.symbol} />
                      )}
                    </div>
                  );
                })}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}
