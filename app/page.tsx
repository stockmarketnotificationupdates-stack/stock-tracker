import PublicHeader from "@/components/PublicHeader";
import HomeHero from "@/components/home/HomeHero";
import MarketTicker from "@/components/home/MarketTicker";
import TopMovers from "@/components/home/TopMovers";
import FeaturesGrid from "@/components/home/FeaturesGrid";

export default function HomePage() {
  return (
    <main className="bg-[#0b0f14] text-white overflow-x-hidden">
      <PublicHeader />
      <HomeHero />
      <MarketTicker />
      <TopMovers />
      <FeaturesGrid />
    </main>
  );
}
