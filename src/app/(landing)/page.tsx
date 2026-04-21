import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PopularTopics from "./components/PopularTopics";
import Process from "./components/Process";
import CreatorSection from "@/components/features/CreatorSection";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <PopularTopics />
      <Process />
      <CreatorSection />
      <CTA />
    </main>
  );
}
