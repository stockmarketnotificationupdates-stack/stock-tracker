import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Start trading smarter today
      </h2>
      <Link
        href="/sign-up"
        className="inline-block px-8 py-4 bg-blue-600 rounded-full font-semibold hover:scale-105 transition"
      >
        Get Started
      </Link>
    </section>
  );
}
