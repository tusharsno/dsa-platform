import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HeroNew from "./components/HeroNew";
import PopularTopics from "./components/PopularTopics";
import Process from "./components/Process";
import CodePreview from "./components/CodePreview";
import BentoGrid from "./components/BentoGrid";
import CreatorSection from "@/components/features/CreatorSection";
import { getHeroStats } from "@/lib/hero-stats";
import { getFeatureStats } from "@/lib/feature-stats";
import { getUserDashboardData } from "@/lib/actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function LandingPage() {
  const user = await currentUser();
  
  const [heroStats, featureStats, userStats] = await Promise.all([
    getHeroStats(),
    getFeatureStats(),
    user ? getUserDashboardData().catch(() => null) : null,
  ]);
  
  return (
    <>
      <HeroNew stats={heroStats} />
      <BentoGrid />
      <CodePreview />
      <div className="h-16"></div>
      <Features stats={featureStats} />
      <div className="h-16"></div>
      <PopularTopics />
      <div className="h-16"></div>
      <Process />
      <div className="h-16"></div>
      <CreatorSection />
      <div className="h-16"></div>
      <CTA stats={heroStats} />
    </>
  );
}
