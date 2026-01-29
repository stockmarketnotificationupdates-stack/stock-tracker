import { BarChart3, Brain, Shield } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-600 text-sm tracking-wide mb-3">
          OUR SERVICES
        </p>

        <h2 className="text-4xl font-bold mb-16">
          How can StockHorizon help you trade smarter?
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          <Card
            icon={<BarChart3 />}
            title="Real-Time Market Data"
            text="Institution-grade feeds with millisecond updates."
          />
          <Card
            icon={<Brain />}
            title="AI Trade Signals"
            text="High-probability setups powered by ML models."
          />
          <Card
            icon={<Shield />}
            title="Secure Infrastructure"
            text="Cloud-native, encrypted, and battle-tested."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }: any) {
  return (
    <div>
      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
