// import Link from "next/link"; // এই লাইনটি যোগ করুন
// import { ChevronLeft } from "lucide-react";

// export default function ProblemSolvingPage({ params }: { params: { id: string } }) {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="flex flex-col lg:flex-row h-screen">

//         {/* Left Side: Problem Description (Lovable Style) */}
//         <div className="w-full lg:w-1/2 p-8 overflow-y-auto border-r border-slate-200">
//           <Link href="/problems" className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
//             <ChevronLeft size={18} /> Back to Problems
//           </Link>

//           <h1 className="text-3xl font-bold mb-4">Number of Islands</h1>
//           <div className="flex gap-2 mb-6">
//             <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-bold">Medium</span>
//             <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Graph</span>
//           </div>

//           <div className="prose prose-slate max-w-none">
//             <p className="text-slate-600 leading-relaxed mb-4">
//               Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//             </p>
//             {/* Constraints and Examples like Lovable */}
//             <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-sm">
//               <p className="font-bold mb-2">Sample Input:</p>
//               <pre className="whitespace-pre-wrap">grid = [["1","1","0"],["1","1","0"],["0","0","1"]]</pre>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Editor (Lovable Style) */}
//         <div className="w-full lg:w-1/2 bg-[#1e1e1e] flex flex-col">
//           <div className="p-4 bg-[#2d2d2d] flex justify-between items-center border-b border-white/5">
//             <span className="text-white/70 text-sm font-mono flex items-center gap-2">
//                Code Editor
//             </span>
//           </div>
//           <textarea
//             className="flex-grow bg-transparent text-slate-300 p-6 font-mono text-sm focus:outline-none resize-none"
//             spellCheck="false"
//             defaultValue={`def num_islands(grid):\n    # Write your solution here\n    pass`}
//           />
//           <div className="p-4 bg-[#2d2d2d] border-t border-white/5 flex justify-end">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-bold transition-all">
//               Submit Solution
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// before/12/2026
// import Link from "next/link";
// import { ChevronLeft, Play, Send, BookOpen, History } from "lucide-react";

// export default function ProblemSolvingPage({ params }: { params: { id: string } }) {
//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* Top Navigation Bar */}
//       <header className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white sticky top-0 z-10">
//         <div className="flex items-center gap-4">
//           <Link href="/problems" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
//             <ChevronLeft size={20} className="text-slate-600" />
//           </Link>
//           <div className="h-4 w-[1px] bg-slate-200" />
//           <h2 className="font-semibold text-slate-800">Problem: {params.id}</h2>
//         </div>
//         <div className="flex items-center gap-2">
//           <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-all">
//             <Play size={16} /> Run Code
//           </button>
//           <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-sm transition-all">
//             <Send size={16} /> Submit
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden h-[calc(100vh-56px)]">
//         {/* Left: Problem Statement (Lovable Style) */}
//         <div className="w-1/2 overflow-y-auto border-r border-slate-200 p-8 custom-scrollbar">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-orange-100 text-orange-600 rounded">Medium</span>
//             <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded">Graph</span>
//           </div>

//           <h1 className="text-3xl font-bold text-slate-900 mb-6">Number of Islands</h1>

//           <div className="space-y-6 text-slate-600 leading-relaxed">
//             <p>
//               Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//             </p>

//             <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 font-mono text-sm space-y-4">
//               <div>
//                 <p className="text-slate-900 font-bold mb-1 underline">Sample Input:</p>
//                 <code className="text-blue-600">grid = [["1","1","0"],["1","1","0"],["0","0","1"]]</code>
//               </div>
//               <div>
//                 <p className="text-slate-900 font-bold mb-1 underline">Expected Output:</p>
//                 <code className="text-green-600">2</code>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <h3 className="font-bold text-slate-900 flex items-center gap-2">
//                 <BookOpen size={18} /> Constraints
//               </h3>
//               <ul className="list-disc list-inside space-y-1 text-sm bg-slate-50/50 p-4 rounded-lg">
//                 <li>m == grid.length</li>
//                 <li>n == grid[i].length</li>
//                 <li>1 ≤ m, n ≤ 300</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Right: Code Editor (Dark Mode like Lovable) */}
//         <div className="w-1/2 bg-[#0F172A] flex flex-col">
//           <div className="h-10 bg-[#1E293B] flex items-center px-4 border-b border-white/5">
//             <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
//               solution.py
//             </span>
//           </div>

//           <div className="flex-grow relative">
//             <textarea
//               className="absolute inset-0 w-full h-full bg-transparent text-slate-300 p-6 font-mono text-sm focus:outline-none resize-none leading-6"
//               spellCheck="false"
//               defaultValue={`def num_islands(grid):\n    # TODO: Implement your logic here\n    # Use BFS or DFS to traverse islands\n    pass`}
//             />
//           </div>

//           {/* Console / Output Area */}
//           <div className="h-40 bg-[#020617] border-t border-white/10 p-4">
//             <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2 uppercase">
//               <History size={14} /> Console Output
//             </div>
//             <div className="text-slate-500 font-mono text-xs italic">
//               Run your code to see results here...
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 12/02/2026
// "use client";

// import React from "react"; // React.use() এর জন্য ইম্পোর্ট করুন
// import Link from "next/link";
// import {
//   ChevronLeft,
//   Play,
//   Send,
//   BookOpen,
//   History,
//   Terminal,
//   Code2,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function ProblemSolvingPage({
//   params,
// }: {
//   params: Promise<{ id: string }>; // params এখন একটি Promise
// }) {
//   // Promise টি unwrap করতে React.use() ব্যবহার করুন
//   const resolvedParams = React.use(params);
//   const problemId = resolvedParams.id;

//   return (
//     <div className="min-h-screen bg-white dark:bg-[#020617] flex flex-col transition-colors duration-300">
//       {/* Top Navigation Bar */}
//       <header className="h-14 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-4 bg-white dark:bg-[#020617]/80 backdrop-blur-md sticky top-0 z-20">
//         <div className="flex items-center gap-4">
//           <Link
//             href="/problems"
//             className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors group"
//           >
//             <ChevronLeft
//               size={20}
//               className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500"
//             />
//           </Link>
//           <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />
//           <h2 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
//             <Code2 size={18} className="text-blue-500" />
//             Problem:{" "}
//             <span className="capitalize">{problemId.replace(/-/g, " ")}</span>
//           </h2>
//         </div>

//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md transition-all">
//             <Play size={16} className="fill-current" /> Run
//           </button>
//           <button className="flex items-center gap-2 px-6 py-1.5 text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all active:scale-95">
//             <Send size={16} /> Submit
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden h-[calc(100vh-56px)]">
//         {/* Left: Problem Statement */}
//         <div className="w-1/2 overflow-y-auto border-r border-slate-200 dark:border-white/10 p-8 custom-scrollbar bg-slate-50/30 dark:bg-transparent">
//           <div className="flex items-center gap-2 mb-6">
//             <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md border border-amber-200 dark:border-amber-500/20">
//               Medium
//             </span>
//             <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-500/20">
//               Graph
//             </span>
//           </div>

//           <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
//             Number of Islands
//           </h1>

//           <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
//             <p>
//               Given an{" "}
//               <code className="px-1 py-0.5 bg-slate-100 dark:bg-white/10 rounded font-mono">
//                 m x n
//               </code>{" "}
//               2D binary grid which represents a map of
//               <span className="text-slate-900 dark:text-slate-200 font-medium">
//                 {" '1's (land)"}
//               </span>{" "}
//               and
//               <span className="text-slate-900 dark:text-slate-200 font-medium">
//                 {" '0's (water)"}
//               </span>
//               , return the number of islands.
//             </p>

//             <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-slate-200 dark:border-white/10 p-6 font-mono text-sm space-y-4 shadow-sm">
//               <div>
//                 <p className="text-slate-900 dark:text-slate-300 font-bold mb-2 flex items-center gap-2">
//                   <Terminal size={14} className="text-blue-500" /> Sample Input:
//                 </p>
//                 <div className="p-3 bg-slate-50 dark:bg-black/40 rounded-lg text-blue-600 dark:text-blue-400">
//                   {`grid = [["1","1","0"],["1","1","0"],["0","0","1"]]`}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-slate-900 dark:text-slate-300 font-bold mb-2">
//                   Expected Output:
//                 </p>
//                 <div className="p-3 bg-slate-50 dark:bg-black/40 rounded-lg text-emerald-600 dark:text-emerald-400 border border-slate-100 dark:border-white/5">
//                   2
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3 pt-4">
//               <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-lg">
//                 <BookOpen size={20} className="text-blue-500" /> Constraints
//               </h3>
//               <ul className="space-y-2 text-sm bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
//                 <li className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
//                   <span>
//                     <code className="font-mono">m == grid.length</code>
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
//                   <span>
//                     <code className="font-mono">n == grid[i].length</code>
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
//                   <span>
//                     <code className="font-mono">1 ≤ m, n ≤ 300</code>
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Right: Code Editor */}
//         <div className="w-1/2 bg-[#0F172A] dark:bg-[#020617] flex flex-col">
//           <div className="h-10 bg-slate-800/50 dark:bg-white/5 flex items-center px-4 border-b border-white/5">
//             <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] dark:bg-white/10 rounded-t-md border-x border-t border-white/10 translate-y-[1px]">
//               <span className="text-[11px] font-mono text-blue-400">
//                 solution.py
//               </span>
//             </div>
//           </div>

//           <div className="flex-grow relative">
//             <textarea
//               className="absolute inset-0 w-full h-full bg-transparent text-slate-300 p-8 font-mono text-sm focus:outline-none resize-none leading-7 selection:bg-blue-500/30"
//               spellCheck="false"
//               defaultValue={`def num_islands(grid):\n    # TODO: Implement your logic here\n    # Use BFS or DFS to traverse islands\n    pass`}
//             />
//           </div>

//           {/* Console Output */}
//           <div className="h-48 bg-[#020617] border-t border-white/10 flex flex-col">
//             <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
//               <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
//                 <History size={14} /> Console Output
//               </div>
//               <button className="text-[10px] text-slate-500 hover:text-white transition-colors">
//                 Clear
//               </button>
//             </div>
//             <div className="p-4 overflow-y-auto flex-grow font-mono text-xs text-slate-500 italic">
//               Run your code to see results here...
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Play,
  Send,
  BookOpen,
  History,
  Terminal,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
// আপনার ডাটা ফাইলটি ইমপোর্ট করুন
import { problemsData } from "@/data/problems";

export default function ProblemSolvingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 15+ অনুযায়ী params unwrap করা
  const resolvedParams = React.use(params);
  const problemId = resolvedParams.id;

  // ডাটাবেস থেকে প্রবলেমটি খুঁজে বের করা
  const problem = problemsData[problemId as keyof typeof problemsData];

  // প্রবলেম না পাওয়া গেলে ৪মেট হ্যান্ডলিং
  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617]">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Problem Not Found
          </h1>
          <Link
            href="/problems"
            className="text-blue-500 hover:underline inline-flex items-center gap-2"
          >
            <ChevronLeft size={16} /> Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] flex flex-col transition-colors duration-300 font-sans">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-4 bg-white dark:bg-[#020617]/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Link
            href="/problems"
            className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors group"
          >
            <ChevronLeft
              size={20}
              className="text-slate-600 dark:text-slate-400 group-hover:text-blue-500"
            />
          </Link>
          <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />
          <h2 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <Code2 size={18} className="text-blue-500" />
            Problem: <span className="capitalize">{problem.title}</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-md transition-all">
            <Play size={16} className="fill-current" /> Run
          </button>
          <button className="flex items-center gap-2 px-6 py-1.5 text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all active:scale-95">
            <Send size={16} /> Submit
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-56px)]">
        {/* Left: Problem Statement */}
        <div className="w-1/2 overflow-y-auto border-r border-slate-200 dark:border-white/10 p-8 custom-scrollbar bg-slate-50/30 dark:bg-transparent">
          <div className="flex items-center gap-2 mb-6">
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-md border",
                problem.difficulty === "Easy"
                  ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200"
                  : "bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200",
              )}
            >
              {problem.difficulty}
            </span>

            {/* লাইন ৪১৫ ফিক্স: Optional chaining এবং fallback value ব্যবহার করা হয়েছে */}
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-500/20">
              {problem.category || "General"}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            {problem.title}
          </h1>

          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <p>{problem.description}</p>

            <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-slate-200 dark:border-white/10 p-6 font-mono text-sm space-y-4 shadow-sm">
              <div>
                <p className="text-slate-900 dark:text-slate-300 font-bold mb-2 flex items-center gap-2">
                  <Terminal size={14} className="text-blue-500" /> Sample Input:
                </p>
                <div className="p-3 bg-slate-50 dark:bg-black/40 rounded-lg text-blue-600 dark:text-blue-400 whitespace-pre-wrap overflow-x-auto">
                  {problem.sampleInput}
                </div>
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-300 font-bold mb-2">
                  Expected Output:
                </p>
                <div className="p-3 bg-slate-50 dark:bg-black/40 rounded-lg text-emerald-600 dark:text-emerald-400 border border-slate-100 dark:border-white/5">
                  {problem.expectedOutput}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-lg">
                <BookOpen size={20} className="text-blue-500" /> Constraints
              </h3>
              <ul className="space-y-2 text-sm bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                {problem.constraints?.map((constraint, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <code className="font-mono">{constraint}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Code Editor */}
        <div className="w-1/2 bg-[#0F172A] dark:bg-[#020617] flex flex-col">
          <div className="h-10 bg-slate-800/50 dark:bg-white/5 flex items-center px-4 border-b border-white/5">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] dark:bg-white/10 rounded-t-md border-x border-t border-white/10 translate-y-[1px]">
              <span className="text-[11px] font-mono text-blue-400">
                solution.py
              </span>
            </div>
          </div>

          <div className="flex-grow relative">
            <textarea
              className="absolute inset-0 w-full h-full bg-transparent text-slate-300 p-8 font-mono text-sm focus:outline-none resize-none leading-7 selection:bg-blue-500/30"
              spellCheck="false"
              defaultValue={problem.initialCode || "# Start coding here...\n"}
            />
          </div>

          {/* Console Output */}
          <div className="h-48 bg-[#020617] border-t border-white/10 flex flex-col">
            <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <History size={14} /> Console Output
              </div>
              <button className="text-[10px] text-slate-500 hover:text-white transition-colors">
                Clear
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-grow font-mono text-xs text-slate-500 italic">
              Run your code to see results here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
