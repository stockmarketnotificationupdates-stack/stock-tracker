"use client";

export default function TopMovers() {
  return (
    <section className="bg-[#0b0f14] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-6">
          🔥 Market Activity
        </h3>

        <div className="grid md:grid-cols-5 gap-4">
          {["S&P Futures", "Nasdaq", "EUR/USD", "Bitcoin", "AUD"].map((m) => (
            <div
              key={m}
              className="rounded-xl bg-white/5 p-4 text-sm"
            >
              <p className="text-white/70">{m}</p>
              <p className="mt-2 text-emerald-400">+2.31%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
