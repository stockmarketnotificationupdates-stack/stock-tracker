import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Market overview", "Basic watchlists"],
  },
  {
    name: "Pro",
    price: "$15/mo",
    features: [
      "Real-time alerts",
      "Advanced indicators",
      "Unlimited watchlists",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$39/mo",
    features: [
      "AI insights",
      "Priority market data",
      "Early feature access",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold text-center mb-16">
        Choose your edge
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 ${
              plan.highlight
                ? "border-yellow-500 shadow-xl"
                : "border-border"
            }`}
          >
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-4xl font-bold mt-4">{plan.price}</p>

            <ul className="mt-6 space-y-2 text-muted-foreground">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <Button
              className="mt-8 w-full"
              variant={plan.highlight ? "default" : "outline"}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
