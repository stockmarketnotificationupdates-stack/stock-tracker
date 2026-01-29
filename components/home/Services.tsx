export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Our Services
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          How can StockHorizon help you trade smarter?
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Live Market Signals",
              desc: "Actionable trade alerts powered by real-time market data.",
            },
            {
              title: "AI Trade Insights",
              desc: "Machine-learning models identify high-probability setups.",
            },
            {
              title: "Risk Management",
              desc: "Clear entries, exits, and stop-loss strategies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
