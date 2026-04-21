import CTA from "./(landing)/components/CTA";
import Features from "./(landing)/components/Features";
import Hero from "./(landing)/components/Hero";
import PopularTopics from "./(landing)/components/PopularTopics";
import Process from "./(landing)/components/Process";
import CreatorSection from "@/components/features/CreatorSection";
import { getHeroStats } from "@/lib/hero-stats";

export default async function Home() {
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
