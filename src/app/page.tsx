import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MockupSection } from "@/components/sections/MockupSection";
import { LinkScraperPreview } from "@/components/sections/LinkScraperPreview";
import { XPGamification } from "@/components/sections/XPGamification";
import { ProtocolShowcase } from "@/components/sections/ProtocolShowcase";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <ProtocolShowcase />
      <MockupSection />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black border-y border-white/5">
        <LinkScraperPreview />
        <XPGamification />
      </div>
      <FeaturesGrid />
      <Footer />
    </main>
  );
}
