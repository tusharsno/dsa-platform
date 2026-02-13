// before/02/2026
// import Link from "next/link";
// import { ChevronRight, Search } from "lucide-react";

// export default function ProblemsPage() {
//   const problems = [
//     { id: "two-sum", title: "Two Sum", topic: "Arrays", difficulty: "Easy" },
//     {
//       id: "number-of-islands",
//       title: "Number of Islands",
//       topic: "Graph",
//       difficulty: "Medium",
//     },
//     // আরও ডাটা...
//   ];

//   return (
//     <div className="min-h-screen bg-background pt-24 pb-12">
//       <div className="container px-4 mx-auto max-w-6xl">
//         <h1 className="text-4xl font-bold mb-2">Problems</h1>
//         <p className="text-muted-foreground mb-8">
//           Practice coding problems to strengthen your DSA skills.
//         </p>

//         {/* Stats Cards like Lovable */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
//             <h2 className="text-3xl font-bold text-green-600">6</h2>
//             <p className="text-green-600/70 font-medium">Easy</p>
//           </div>
//           <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
//             <h2 className="text-3xl font-bold text-orange-600">2</h2>
//             <p className="text-orange-600/70 font-medium">Medium</p>
//           </div>
//           <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center">
//             <h2 className="text-3xl font-bold text-red-600">0</h2>
//             <p className="text-red-600/70 font-medium">Hard</p>
//           </div>
//         </div>

//         {/* Problems Table/List */}
//         <div className="bg-card rounded-2xl border border-border overflow-hidden">
//           {problems.map((p) => (
//             <Link
//               key={p.id}
//               href={`/problems/${p.id}`}
//               className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors border-b border-border last:border-0 group"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
//                   {p.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">{p.topic}</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <span
//                   className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
//                     p.difficulty === "Easy"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-orange-100 text-orange-700"
//                   }`}
//                 >
//                   {p.difficulty}
//                 </span>
//                 <ChevronRight size={18} className="text-muted-foreground" />
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 12/02/2026
"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Search,
  Filter,
  ChevronRight,
  LayoutGrid,
  List,
} from "lucide-react";
import Link from "next/link";

// ডেটা স্ট্রাকচার উদাহরণ (এটি পরে আপনি API বা JSON থেকে আনবেন)
const problems = [
  {
    id: "1",
    title: "Two Sum",
    topic: "Arrays",
    difficulty: "Easy",
    status: "Solved",
  },
  {
    id: "2",
    title: "Reverse Linked List",
    topic: "Linked List",
    difficulty: "Easy",
    status: "Unsolved",
  },
  {
    id: "3",
    title: "Number of Islands",
    topic: "Graphs",
    difficulty: "Medium",
    status: "Unsolved",
  },
  {
    id: "4",
    title: "Longest Palindromic Substring",
    topic: "Strings",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    id: "5",
    title: "Median of Two Sorted Arrays",
    topic: "Arrays",
    difficulty: "Hard",
    status: "Unsolved",
  },
  // এখানে আপনি শত শত প্রবলেম অবজেক্ট যোগ করতে পারবেন
];

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-28 pb-10 px-4 md:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-center">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <h4 className="text-emerald-500 text-xs font-bold uppercase tracking-widest">
              Easy
            </h4>
            <p className="text-2xl font-bold dark:text-white">45 / 120</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <h4 className="text-amber-500 text-xs font-bold uppercase tracking-widest">
              Medium
            </h4>
            <p className="text-2xl font-bold dark:text-white">12 / 85</p>
          </div>
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
            <h4 className="text-rose-500 text-xs font-bold uppercase tracking-widest">
              Hard
            </h4>
            <p className="text-2xl font-bold dark:text-white">2 / 40</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 500+ problems..."
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center gap-2 text-sm font-medium">
              <Filter className="w-4 h-4" /> Topics
            </button>
          </div>
        </div>

        {/* Professional Problems Table */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">
                <tr>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Topic</th>
                  <th className="px-6 py-4">Difficulty</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {problems.map((p) => (
                  <tr
                    key={p.id}
                    className="group hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                  >
                    <td className="px-6 py-4">
                      {p.status === "Solved" ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 dark:border-white/10" />
                      )}
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">
                      {p.title}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 font-bold uppercase tracking-tight">
                        {p.topic}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "text-xs font-bold",
                          p.difficulty === "Easy"
                            ? "text-emerald-500"
                            : p.difficulty === "Medium"
                              ? "text-amber-500"
                              : "text-rose-500",
                        )}
                      >
                        {p.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/problems/${p.id}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-blue-500 hover:text-blue-600"
                      >
                        Solve{" "}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
