import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Professional trading.
          <span className="block text-yellow-500">
            Without the noise.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
          Signalist gives you real-time market data, alerts, and AI-powered
          insights designed for serious traders.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="px-8">
              Start Free
            </Button>
          </Link>

          <Link href="/pricing">
            <Button size="lg" variant="outline" className="px-8">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>

      {/* subtle glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
    </section>
  );
}
