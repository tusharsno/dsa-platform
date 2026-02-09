// import Hero from "./components/Hero";

// export default function LandingPage() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }


import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PopularTopics from "./components/PopularTopics";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      {/* এখানে আমরা পরে Features এবং Popular Topics সেকশন যোগ করব */}
      <Features />
      <PopularTopics />
      <CTA />
    </main>
  );
}
