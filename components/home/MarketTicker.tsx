"use client";

const symbols = ["AAPL", "TSLA", "NVDA", "MSFT", "BTC-USD"];

export default function MarketTicker() {
  return (
    <section className="bg-[#0b0f14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-8 text-sm text-white/70 justify-end">
        {symbols.map((s) => (
          <span key={s}>{s} $</span>
        ))}
      </div>
    </section>
  );
}
