"use client";

export default function Pricing() {
  return (
    <section className="py-32 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Simple pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[
          { name: "Free", price: "$0" },
          { name: "Pro", price: "$29" },
          { name: "Elite", price: "$79" },
        ].map((tier) => (
          <div
            key={tier.name}
            className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <div className="text-3xl mt-4">{tier.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
