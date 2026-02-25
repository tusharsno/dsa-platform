// before:
// import CTA from "./components/CTA";
// import Features from "./components/Features";
// import Hero from "./components/Hero";
// import PopularTopics from "./components/PopularTopics";

// export default function LandingPage() {
//   return (
//     <main className="flex flex-col min-h-screen">
//       <Hero />
//       {/* এখানে আমরা পরে Features এবং Popular Topics সেকশন যোগ করব */}
//       <Features />
//       <PopularTopics />
//       <CTA />
//     </main>
//   );
// }

// update:
// src/app/(landing)/page.tsx
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PopularTopics from "./components/PopularTopics";
import { syncUser } from "@/lib/auth"; // Step 1: syncUser import kora
import Process from "./components/Process";
import CreatorSection from "@/components/features/CreatorSection";

export default async function LandingPage() {
  // Step 2: syncUser() call kora
  // Eta background-e check korbe user login thakle database-e user create hobe
  await syncUser();

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      {/* ekhane amra pore Features ebong Popular Topics section jog korbo */}
      <Features />
      <PopularTopics />
      <Process />
      <CreatorSection />
      <CTA />
    </main>
  );
}
