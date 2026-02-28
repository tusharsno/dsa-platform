// "use client";

// import { dsaTopics } from "@/lib/dsa-data";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { CheckCircle2, ArrowRight } from "lucide-react";

// export default function RoadmapPage() {
//   return (
//     // bg-white (Light Mode) | bg-[#020617] (Dark Mode)
//     <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white pt-28 pb-20 px-4 md:px-6 transition-colors duration-300">
//       <div className="max-w-5xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 bg-clip-text text-transparent">
//             The Ultimate DSA Roadmap
//           </h1>
//           <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
//             A step-by-step guide to mastering data structures and algorithms,
//             carefully curated for top-tier tech interviews.
//           </p>
//         </div>

//         {/* Roadmap Path */}
//         <div className="relative">
//           {/* Central Vertical Line (Desktop) */}
//           <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-slate-200 dark:bg-gradient-to-b dark:from-blue-500/50 dark:via-purple-500/50 dark:to-emerald-500/50" />

//           {/* Side Line (Mobile) */}
//           <div className="md:hidden absolute left-4 h-full w-[2px] bg-slate-200 dark:bg-slate-800" />

//           <div className="space-y-16">
//             {dsaTopics.map((topic, index) => (
//               <div
//                 key={topic.id}
//                 className={cn(
//                   "relative flex items-center justify-between gap-8 flex-col md:flex-row group",
//                   index % 2 === 0 ? "md:flex-row-reverse" : "",
//                 )}
//               >
//                 {/* Content Card */}
//                 <div className="w-full md:w-[45%] ml-10 md:ml-0">
//                   <Link href={`/topics/${topic.id}`}>
//                     <div
//                       className={cn(
//                         "p-6 rounded-2xl border transition-all duration-300",
//                         // Light Mode: White card, Gray border
//                         "bg-white border-slate-200 shadow-sm hover:shadow-xl",
//                         // Dark Mode: Transparent blueish card, subtle border
//                         "dark:bg-white/[0.02] dark:border-white/10 dark:hover:border-blue-500/40",
//                         "hover:-translate-y-1",
//                       )}
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <span
//                           className={cn(
//                             "text-xs font-mono px-2 py-1 rounded",
//                             "bg-slate-100 dark:bg-white/5", // Badge background
//                             topic.color,
//                           )}
//                         >
//                           STEP {index + 1}
//                         </span>
//                         <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
//                       </div>

//                       <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                         {topic.title}
//                       </h3>

//                       <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
//                         {topic.description}
//                       </p>

//                       <div className="flex items-center gap-4">
//                         <span className="text-[10px] text-slate-400 flex items-center gap-1 uppercase tracking-widest">
//                           <CheckCircle2 className="w-3 h-3" />
//                           {topic.complexity}
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Center Node (Responsive Dot) */}
//                 <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
//                   <div
//                     className={cn(
//                       "w-10 h-10 rounded-full border-4 z-10 flex items-center justify-center transition-all duration-500 group-hover:scale-125",
//                       "bg-white border-white dark:bg-[#020617] dark:border-[#020617]", // Light vs Dark border
//                       topic.bg, // Topic specific background
//                     )}
//                   >
//                     <div
//                       className={cn(
//                         "w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]",
//                         topic.color.replace("text", "bg"),
//                       )}
//                     />
//                   </div>
//                 </div>

//                 {/* Empty Spacer for Desktop Symmetry */}
//                 <div className="hidden md:block w-[45%]" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { dsaTopics } from "@/lib/dsa-data";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { CheckCircle2, ArrowRight, Layers, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function RoadmapPage() {
//   return (
//     <div className="min-h-screen bg-[#020617] text-slate-200 pt-24 pb-20 px-4 md:px-6 relative selection:bg-blue-500/30">
//       {/* Subtle Grid Background - Consistent with your home page */}
//       <div
//         className="absolute inset-0 z-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="max-w-4xl mx-auto relative z-10">
//         {/* Clean Header */}
//         <div className="mb-16 border-b border-white/5 pb-10">
//           <div className="flex items-center gap-2 text-blue-500 mb-4">
//             <Layers className="w-5 h-5" />
//             <span className="text-sm font-semibold tracking-[0.2em] uppercase">
//               Curriculum
//             </span>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             DSA Learning Path
//           </h1>
//           <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
//             A carefully structured sequence to take you from basics to advanced
//             problem solving.
//           </p>
//         </div>

//         {/* Roadmap Path */}
//         <div className="relative ml-4 md:ml-0">
//           {/* The Main Line */}
//           <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent" />

//           <div className="space-y-12">
//             {dsaTopics.map((topic, index) => (
//               <motion.div
//                 key={topic.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className={cn(
//                   "relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
//                   index % 2 === 0 ? "md:flex-row-reverse" : "",
//                 )}
//               >
//                 {/* Connector Dot */}
//                 <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#020617] border-2 border-blue-500 z-20 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

//                 {/* Card */}
//                 <div className="w-full md:w-[45%] pl-8 md:pl-0">
//                   <Link href={`/topics/${topic.id}`} className="block group">
//                     <div className="p-6 rounded-2xl bg-[#0B1224] border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl group-hover:bg-[#0f172a]">
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-[10px] font-bold text-blue-400/80 tracking-widest uppercase">
//                           Module {index + 1}
//                         </span>
//                         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">
//                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
//                           <span className="text-[10px] text-blue-400 font-medium uppercase tracking-tighter">
//                             Active
//                           </span>
//                         </div>
//                       </div>

//                       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                         {topic.title}
//                       </h3>

//                       <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-2">
//                         {topic.description}
//                       </p>

//                       <div className="flex items-center justify-between">
//                         <div className="text-[10px] text-slate-500 uppercase font-mono tracking-widest">
//                           {topic.complexity || "CORE"}
//                         </div>
//                         <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
//                       </div>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Empty Side for Desktop Symmetry */}
//                 <div className="hidden md:block w-[45%]" />
//               </motion.div>
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
import { Layers, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RoadmapPage() {
  return (
    // Dynamic Background: White for light, Deep Navy/Black for dark
    <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-200 pt-24 pb-20 px-4 md:px-6 relative overflow-hidden transition-colors duration-500">
      {/* 1. Adaptive Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 80%)",
        }}
      />

      {/* 2. Adaptive Glow (Subtle blue in dark mode, very faint in light mode) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-500 mb-4"
          >
            <Layers className="w-5 h-5" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">
              The Curriculum
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            DSA Mastery Roadmap
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg font-light leading-relaxed">
            Follow this optimized path to master algorithms. Each module is a
            stepping stone to your success.
          </p>
        </div>

        {/* Roadmap Path */}
        <div className="relative">
          {/* Central Line: Gray in light, Deep Slate in dark */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-16">
            {dsaTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Connector Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-[#030712] border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[44%] pl-10 md:pl-0">
                  <Link href={`/topics/${topic.id}`} className="group block">
                    <div
                      className={cn(
                        "relative p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-2xl border",
                        "bg-white border-slate-200 hover:border-blue-400", // Light Mode
                        "dark:bg-[#0B101E]/40 dark:border-white/5 dark:hover:border-blue-500/40 dark:hover:bg-[#0B101E]/80", // Dark Mode
                        "backdrop-blur-sm",
                      )}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          Phase {index + 1}
                        </span>
                        <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-500/10 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-500/20">
                          {topic.complexity || "O(N)"}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {topic.title}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 font-light">
                        {topic.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-tighter">
                        View Challenges
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="hidden md:block w-[44%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
