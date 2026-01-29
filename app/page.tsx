import PublicHeader from "@/components/PublicHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/home/HomeHero";
import Services from "@/components/home/Services";
import TrustedTech from "@/components/home/TrustedTech";

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main>
        <Hero />
        <Services />
        <TrustedTech />
      </main>
      <Footer />
    </>
  );
}
