import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PopularTopics from "./components/PopularTopics";
import Process from "./components/Process";
import CreatorSection from "@/components/features/CreatorSection";
import { getHeroStats } from "@/lib/hero-stats";

export default async function LandingPage() {
  const stats = await getHeroStats();
  
  return (
    <main className="flex flex-col min-h-screen">
      <Hero stats={stats} />
      <Features />
      <PopularTopics />
      <Process />
      <CreatorSection />
      <CTA />
    </main>
  );
}
