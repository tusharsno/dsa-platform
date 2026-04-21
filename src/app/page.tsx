import CTA from "./(landing)/components/CTA";
import Features from "./(landing)/components/Features";
import Hero from "./(landing)/components/Hero";
import PopularTopics from "./(landing)/components/PopularTopics";
import Process from "./(landing)/components/Process";
import CreatorSection from "@/components/features/CreatorSection";

export default function Home() {
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
