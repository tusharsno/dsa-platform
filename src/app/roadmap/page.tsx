// 12/02/2026
// src/app/roadmap/page.tsx
// import { dsaTopics } from "@/data/dsa-data";
// import { dsaTopics } from "@/lib/dsa-data";
// import { CheckCircle2, Circle } from "lucide-react";

// export default function RoadmapPage() {
//   return (
//     <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-6">
//       <div className="max-w-3xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             DSA Mastery Roadmap
//           </h1>
//           <p className="text-slate-400 text-lg">
//             A structured path to master algorithms and data structures.
//           </p>
//         </div>

//         {/* Timeline Path */}
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800" />

//           <div className="space-y-12">
//             {dsaTopics.map((topic, index) => (
//               <div
//                 key={topic.id}
//                 className={`relative flex items-center justify-between md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
//               >
//                 {/* Content Card */}
//                 <div className="ml-12 md:ml-0 md:w-[45%]">
//                   <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all group shadow-xl">
//                     <span
//                       className={`text-xs font-mono uppercase tracking-wider ${topic.color}`}
//                     >
//                       Step {index + 1}
//                     </span>
//                     <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-400 transition-colors">
//                       {topic.title}
//                     </h3>
//                     <p className="text-slate-400 text-sm leading-relaxed">
//                       {topic.description}
//                     </p>
//                     <div className="mt-4 flex items-center gap-2">
//                       <span
//                         className={`px-2 py-1 rounded-md text-[10px] bg-white/5 border border-white/10 ${topic.color}`}
//                       >
//                         {topic.complexity}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline Center Dot */}
//                 <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
//                   <div
//                     className={`w-8 h-8 rounded-full border-4 border-[#020617] ${topic.bg} flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]`}
//                   >
//                     <div
//                       className={`w-2 h-2 rounded-full ${topic.color.replace("text", "bg")}`}
//                     />
//                   </div>
//                 </div>

//                 {/* Empty spacer for desktop symmetry */}
//                 <div className="hidden md:block md:w-[45%]" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { dsaTopics } from "@/lib/dsa-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function RoadmapPage() {
  return (
    // bg-white (Light Mode) | bg-[#020617] (Dark Mode)
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white pt-28 pb-20 px-4 md:px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent">
            The Ultimate DSA Roadmap
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A step-by-step guide to mastering data structures and algorithms,
            carefully curated for top-tier tech interviews.
          </p>
        </div>

        {/* Roadmap Path */}
        <div className="relative">
          {/* Central Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-slate-200 dark:bg-gradient-to-b dark:from-blue-500/50 dark:via-purple-500/50 dark:to-emerald-500/50" />

          {/* Side Line (Mobile) */}
          <div className="md:hidden absolute left-4 h-full w-[2px] bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-16">
            {dsaTopics.map((topic, index) => (
              <div
                key={topic.id}
                className={cn(
                  "relative flex items-center justify-between gap-8 flex-col md:flex-row group",
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-10 md:ml-0">
                  <Link href={`/topics/${topic.id}`}>
                    <div
                      className={cn(
                        "p-6 rounded-2xl border transition-all duration-300",
                        // Light Mode: White card, Gray border
                        "bg-white border-slate-200 shadow-sm hover:shadow-xl",
                        // Dark Mode: Transparent blueish card, subtle border
                        "dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-blue-500/40",
                        "hover:-translate-y-1",
                      )}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={cn(
                            "text-xs font-mono px-2 py-1 rounded",
                            "bg-slate-100 dark:bg-white/5", // Badge background
                            topic.color,
                          )}
                        >
                          STEP {index + 1}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {topic.title}
                      </h3>

                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {topic.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3" />
                          {topic.complexity}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Center Node (Responsive Dot) */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border-4 z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-125",
                      "bg-white border-white dark:bg-[#020617] dark:border-[#020617]", // Light vs Dark border
                      topic.bg, // Topic specific background
                    )}
                  >
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]",
                        topic.color.replace("text", "bg"),
                      )}
                    />
                  </div>
                </div>

                {/* Empty Spacer for Desktop Symmetry */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
