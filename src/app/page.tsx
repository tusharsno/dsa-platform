import CTA from "./(landing)/components/CTA";
import Features from "./(landing)/components/Features";
import Hero from "./(landing)/components/Hero";
import PopularTopics from "./(landing)/components/PopularTopics";
import Process from "./(landing)/components/Process";
import CreatorSection from "@/components/features/CreatorSection";
import { getHeroStats } from "@/lib/hero-stats";
import { getFeatureStats } from "@/lib/feature-stats";

export default async function Home() {
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
