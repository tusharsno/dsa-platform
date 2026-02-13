// before/02/2026
// import { dsaTopics } from "@/lib/dsa-data";
// import { notFound } from "next/navigation";
// import Link from "next/link";

// export default function TopicDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const topic = dsaTopics.find((t) => t.id === params.id);

//   if (!topic) return notFound();

//   return (
//     <div className="min-h-screen bg-background pt-24 pb-12">
//       <div className="container px-4 mx-auto max-w-4xl">
//         <Link
//           href="/topics"
//           className="text-primary hover:underline mb-8 inline-block"
//         >
//           ← Back to Topics
//         </Link>

//         <div className="mb-12">
//           <h1 className="text-5xl font-bold tracking-tight mb-4">
//             {topic.title}
//           </h1>
//           <div className="flex gap-4 items-center">
//             <span
//               className={`${topic.bg} ${topic.color} px-4 py-1 rounded-full text-sm font-bold`}
//             >
//               {topic.complexity}
//             </span>
//           </div>
//         </div>

//         <div className="bg-card/50 p-8 rounded-2xl border border-border">
//           <h2 className="text-2xl font-bold mb-4">Overview</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//             {topic.detailedContent}
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//             <div className="p-6 bg-secondary/30 rounded-xl border border-border">
//               <h3 className="font-bold mb-2">Practice Problems</h3>
//               <p className="text-sm text-muted-foreground">
//                 Coming soon: Curated list of LeetCode & Codeforces problems.
//               </p>
//             </div>
//             <div className="p-6 bg-secondary/30 rounded-xl border border-border">
//               <h3 className="font-bold mb-2">Interview Tips</h3>
//               <p className="text-sm text-muted-foreground">
//                 Master the common patterns asked in top tech companies.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 12/02/2026
// import { dsaTopics } from "@/lib/dsa-data";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { ChevronLeft, PlayCircle, Lock } from "lucide-react";

// // ১. ফাংশনটিকে async করুন
// export default async function TopicDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>; // params এখন একটি Promise
// }) {
//   // ২. params কে await করে আইডি বের করে আনুন
//   const resolvedParams = await params;
//   const rawId = resolvedParams?.id;

//   // ৩. ডাটা খোঁজা (Case-Insensitive)
//   const topic = dsaTopics.find((t) => {
//     if (!t || !t.id || !rawId) return false;
//     return t.id.toLowerCase() === rawId.toLowerCase();
//   });

//   // ৪. ডাটা না পাওয়া গেলে ৪০৪
//   if (!topic) return notFound();

//   return (
//     <div className="min-h-screen bg-[#020617] text-slate-200 pt-24 pb-12">
//       <div className="container px-4 mx-auto max-w-5xl">
//         {/* Back Button */}
//         <Link
//           href="/topics"
//           className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors mb-8 group"
//         >
//           <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           Back to Topics
//         </Link>

//         {/* Header Section */}
//         <div className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
//               Topic Module
//             </span>
//             <div className="h-[1px] w-12 bg-blue-500/30"></div>
//           </div>
//           <h1 className="text-6xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
//             {topic.title}
//           </h1>
//           <div className="flex gap-4 items-center">
//             <span
//               className={`${topic.bg} ${topic.color} px-4 py-1.5 rounded-md text-xs font-mono font-bold border border-current/20`}
//             >
//               {topic.complexity} Complexity
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
//                 Overview
//               </h2>
//               <p className="text-zinc-400 leading-relaxed italic">
//                 "{topic.detailedContent}"
//               </p>
//             </div>

//             <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/50">
//               <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
//                 <span>Practice Problems</span>
//                 <span className="text-xs font-normal text-zinc-500">
//                   Total: 3 Problems
//                 </span>
//               </h2>

//               <div className="space-y-3">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-between p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="text-zinc-600 font-mono text-sm">
//                         0{i}
//                       </div>
//                       <div>
//                         <p className="font-medium group-hover:text-blue-400 transition-colors">
//                           Sample Problem Title {i}
//                         </p>
//                         <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
//                           Easy
//                         </span>
//                       </div>
//                     </div>
//                     <PlayCircle className="w-5 h-5 text-zinc-700 group-hover:text-blue-500 transition-colors" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="p-6 bg-blue-600/5 rounded-3xl border border-blue-500/10">
//               <h3 className="font-bold mb-3 flex items-center gap-2 text-blue-400">
//                 <Lock className="w-4 h-4" /> Interview Tips
//               </h3>
//               <ul className="text-sm text-zinc-400 space-y-3">
//                 <li>• Focus on space-time tradeoff.</li>
//                 <li>• Common pattern in FAANG interviews.</li>
//                 <li>• Practice recursion-based solutions.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//Updated version
// import { dsaTopics } from "@/lib/dsa-data";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { ChevronLeft, PlayCircle, Lock } from "lucide-react";

// export default async function TopicDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const resolvedParams = await params;
//   const rawId = resolvedParams?.id;

//   const topic = dsaTopics.find((t) => {
//     if (!t || !t.id || !rawId) return false;
//     return t.id.toLowerCase() === rawId.toLowerCase();
//   });

//   if (!topic) return notFound();

//   return (
//     // bg পরিবর্তন করে ডার্ক/লাইট মোড সাপোর্ট দেওয়া হয়েছে
//     <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 pt-20 md:pt-28 pb-12 transition-colors duration-300">
//       <div className="container px-4 mx-auto max-w-5xl">
//         {/* Back Button - Mobile Friendly Padding */}
//         <Link
//           href="/topics"
//           className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 md:mb-10 group w-fit"
//         >
//           <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//           <span className="text-sm font-medium">Back to Topics</span>
//         </Link>

//         {/* Header Section - Responsive Text Sizes */}
//         <div className="mb-10 md:mb-16">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-blue-600 dark:text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
//               Topic Module
//             </span>
//             <div className="h-[1px] w-8 md:w-12 bg-blue-500/30"></div>
//           </div>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
//             {topic.title}
//           </h1>

//           <div className="flex flex-wrap gap-3 items-center">
//             <span
//               className={`${topic.bg} ${topic.color} px-3 py-1 md:px-4 md:py-1.5 rounded-md text-[10px] md:text-xs font-mono font-bold border border-current/20 uppercase`}
//             >
//               {topic.complexity} Complexity
//             </span>
//             <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono">
//               • 30 min read
//             </span>
//           </div>
//         </div>

//         {/* Grid Layout - 1 col on mobile, 3 cols on desktop */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
//           {/* Main Content Area */}
//           <div className="lg:col-span-2 space-y-6 md:space-y-8">
//             <div className="bg-slate-50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm">
//               <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
//                 Overview
//               </h2>
//               <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base italic">
//                 "{topic.detailedContent}"
//               </p>
//             </div>

//             {/* Practice Problems - Responsive Cards */}
//             <div className="bg-slate-50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50 shadow-sm">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
//                 <h2 className="text-lg md:text-xl font-bold">
//                   Practice Problems
//                 </h2>
//                 <span className="text-[10px] md:text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-500/20 w-fit">
//                   Total: 3 Problems
//                 </span>
//               </div>

//               <div className="space-y-3">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="flex items-center justify-between p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-blue-500/50 hover:shadow-md dark:hover:shadow-blue-500/5 transition-all cursor-pointer group"
//                   >
//                     <div className="flex items-center gap-3 md:gap-4">
//                       <div className="text-zinc-400 dark:text-zinc-600 font-mono text-xs md:text-sm">
//                         0{i}
//                       </div>
//                       <div>
//                         <p className="text-sm md:text-base font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                           Sample Problem Title {i}
//                         </p>
//                         <span className="text-[9px] md:text-[10px] text-emerald-600 dark:text-emerald-500 font-bold uppercase tracking-widest">
//                           Easy
//                         </span>
//                       </div>
//                     </div>
//                     <PlayCircle className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-all group-hover:scale-110" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar - Stacks below on mobile */}
//           <div className="space-y-6">
//             <div className="p-6 md:p-8 bg-blue-50 dark:bg-blue-600/5 rounded-2xl md:rounded-3xl border border-blue-100 dark:border-blue-500/10 sticky top-28">
//               <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
//                 <Lock className="w-4 h-4" /> Interview Tips
//               </h3>
//               <ul className="text-xs md:text-sm text-slate-600 dark:text-zinc-400 space-y-4">
//                 <li className="flex gap-3">
//                   <span className="text-blue-500">•</span>
//                   Focus on space-time tradeoff and optimizations.
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="text-blue-500">•</span>
//                   Common pattern in FAANG technical interviews.
//                 </li>
//                 <li className="flex gap-3">
//                   <span className="text-blue-500">•</span>
//                   Always practice recursion vs iterative solutions.
//                 </li>
//               </ul>

//               <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 cursor-pointer">
//                 Mark as Completed
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 12/02/2026 - Final Version with Dark Mode, Responsive Design, and Enhanced UI/UX
import { dsaTopics } from "@/lib/dsa-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, PlayCircle, Lock } from "lucide-react";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id;

  // ডাটা খোঁজা (Case-Insensitive)
  const topic = dsaTopics.find((t) => {
    if (!t || !t.id || !rawId) return false;
    return t.id.toLowerCase() === rawId.toLowerCase();
  });

  if (!topic) return notFound(); // ৪০৪ এরর হ্যান্ডলিং

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-200 pt-20 md:pt-28 pb-12 transition-colors duration-300">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/topics"
          className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 md:mb-10 group w-fit"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Topics</span>
        </Link>

        {/* Header - Responsive Design */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-600 dark:text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
              Topic Module
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-blue-500/30"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
            {topic.title}
          </h1>

          <div className="flex flex-wrap gap-3 items-center">
            <span
              className={`${topic.bg} ${topic.color} px-3 py-1 md:px-4 md:py-1.5 rounded-md text-[10px] md:text-xs font-mono font-bold border border-current/20 uppercase`}
            >
              {topic.complexity}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600 text-xs font-mono">
              • 30 min read
            </span>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Overview Section */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-slate-50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50">
              <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Overview
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed italic text-sm md:text-base">
                "{topic.detailedContent}"
              </p>
            </div>

            {/* Problems List */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-zinc-800/50">
              <h2 className="text-lg md:text-xl font-bold mb-8">
                Practice Problems
              </h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-400 font-mono text-sm">
                        0{i}
                      </div>
                      <div>
                        <p className="text-sm md:text-base font-semibold group-hover:text-blue-500 transition-colors">
                          Sample Problem Title {i}
                        </p>
                        <span className="text-[10px] text-emerald-600 font-bold uppercase">
                          Easy
                        </span>
                      </div>
                    </div>
                    <PlayCircle className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop Sticky */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 bg-blue-50 dark:bg-blue-600/5 rounded-2xl md:rounded-3xl border border-blue-100 dark:border-blue-500/10 lg:sticky lg:top-28">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <Lock className="w-4 h-4" /> Interview Tips
              </h3>
              <ul className="text-xs md:text-sm text-slate-600 dark:text-zinc-400 space-y-4">
                <li>• Focus on space-time tradeoff and optimizations.</li>
                <li>• Common pattern in FAANG technical interviews.</li>
                <li>• Always practice recursion vs iterative solutions.</li>
              </ul>
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/25 cursor-pointer">
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
