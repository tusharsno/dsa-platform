import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PopularTopics from "./components/PopularTopics";
import Process from "./components/Process";
import CreatorSection from "@/components/features/CreatorSection";
import { getHeroStats } from "@/lib/hero-stats";
import { getFeatureStats } from "@/lib/feature-stats";

export default async function LandingPage() {
  const [heroStats, featureStats] = await Promise.all([
    getHeroStats(),
    getFeatureStats(),
  ]);
  
  return (
    <main className="flex flex-col min-h-screen">
      <Hero stats={heroStats} />
      <Features stats={featureStats} />
      <PopularTopics />
      <Process />
      <CreatorSection />
      <CTA />
    </main>
  );
}
