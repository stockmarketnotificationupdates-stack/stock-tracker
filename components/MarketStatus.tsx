"use client";

import { useEffect, useState } from "react";

type Phase = "OPEN" | "PRE" | "AFTER" | "CLOSED" | "WEEKEND";

function getMarketPhase(now: Date) {
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const day = est.getDay(); // 0 = Sun
  const minutes = est.getHours() * 60 + est.getMinutes();

  const PRE = 4 * 60;        // 4:00
  const OPEN = 9 * 60 + 30;  // 9:30
  const CLOSE = 16 * 60;     // 16:00
  const AFTER = 20 * 60;     // 20:00

  if (day === 0 || day === 6) return { phase: "WEEKEND", target: null };

  if (minutes >= PRE && minutes < OPEN)
    return { phase: "PRE", target: OPEN };

  if (minutes >= OPEN && minutes < CLOSE)
    return { phase: "OPEN", target: CLOSE };

  if (minutes >= CLOSE && minutes < AFTER)
    return { phase: "AFTER", target: AFTER };

  return { phase: "CLOSED", target: PRE };
}

function format(ms: number) {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function MarketStatus() {
  const [phase, setPhase] = useState<Phase>("CLOSED");
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const { phase, target } = getMarketPhase(now);
      setPhase(phase);

      if (target === null) {
        setCountdown(null);
        return;
      }

      const est = new Date(
        now.toLocaleString("en-US", { timeZone: "America/New_York" })
      );

      const targetTime = new Date(est);
      targetTime.setHours(Math.floor(target / 60), target % 60, 0, 0);

      if (targetTime < est) targetTime.setDate(targetTime.getDate() + 1);

      setCountdown(format(targetTime.getTime() - est.getTime()));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const config = {
    OPEN: {
      label: "Market Open",
      sub: countdown && `Closes in ${countdown}`,
      class:
        "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 animate-pulse",
    },
    PRE: {
      label: "Pre-Market",
      sub: countdown && `Opens in ${countdown}`,
      class: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    AFTER: {
      label: "After Hours",
      sub: countdown && `Closes in ${countdown}`,
      class: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    },
    CLOSED: {
      label: "Market Closed",
      sub: countdown && `Opens in ${countdown}`,
      class: "bg-slate-500/10 text-slate-300 border-slate-500/30",
    },
    WEEKEND: {
      label: "Weekend",
      sub: "Opens Monday 9:30 ET",
      class: "bg-slate-500/10 text-slate-300 border-slate-500/30",
    },
  }[phase];

  return (
    <div
      className={`flex flex-col items-start rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${config.class}`}
    >
      <span>{config.label}</span>
      {config.sub && (
        <span className="text-[10px] opacity-70 leading-tight">
          {config.sub}
        </span>
      )}
    </div>
  );
}
