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
import { useState, useRef, MouseEvent } from "react";

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-white/[0.02] blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/60 mb-4"
          >
            <Layers className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
              Learning Path
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            DSA Mastery Roadmap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-xl text-lg font-light leading-relaxed"
          >
            Follow this optimized path to master algorithms. Each module is a
            stepping stone to your success.
          </motion.p>
        </div>

        {/* Roadmap Path */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[2px] bg-white/10" />

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
                  <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/75 group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300" />
                  </div>
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[44%] pl-10 md:pl-0">
                  <SpotlightCard topic={topic} index={index} />
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

function SpotlightCard({ topic, index }: { topic: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-[1px] rounded-xl overflow-hidden"
    >
      {/* Animated Border Gradient */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8), rgba(255,255,255,0.2) 30%, transparent 50%)`
            : 'none',
        }}
      />

      {/* Card Content */}
      <div
        className={cn(
          "relative p-8 rounded-xl transition-all duration-300 bg-black",
          "border border-white/10 group-hover:border-white/20",
        )}
      >
        {/* Content */}
        <div className="relative z-10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] group-hover:from-white/[0.10] group-hover:to-white/[0.06] transition-all duration-300 -m-8 p-8 rounded-xl">
        {/* Top Badge */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.2em]">
              Phase {index + 1}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.10] backdrop-blur-sm">
            <span className="text-[9px] font-mono text-white/60 tracking-wider">
              {topic.complexity || "O(N)"}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[26px] font-semibold text-white mb-4 transition-colors leading-[1.2] tracking-[-0.02em]">
          {topic.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] text-white/60 leading-[1.7] mb-8 line-clamp-2 font-light">
          {topic.description}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom Button */}
        <Link href={`/topics/${topic.id}`}>
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group/btn cursor-pointer">
            <span className="text-[13px] text-white/60 group-hover/btn:text-white/90 font-medium tracking-wide transition-colors">View Challenges</span>
            <div className="flex items-center gap-1.5 text-white/40 group-hover/btn:text-white/80 transition-all">
              <div className="w-4 h-[1px] bg-white/30 group-hover/btn:w-6 transition-all duration-300" />
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
