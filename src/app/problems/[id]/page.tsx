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


import Link from "next/link";
import { ChevronLeft, Play, Send, BookOpen, History } from "lucide-react";

export default function ProblemSolvingPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/problems" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <ChevronLeft size={20} className="text-slate-600" />
          </Link>
          <div className="h-4 w-[1px] bg-slate-200" />
          <h2 className="font-semibold text-slate-800">Problem: {params.id}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-all">
            <Play size={16} /> Run Code
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-sm transition-all">
            <Send size={16} /> Submit
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-56px)]">
        {/* Left: Problem Statement (Lovable Style) */}
        <div className="w-1/2 overflow-y-auto border-r border-slate-200 p-8 custom-scrollbar">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-orange-100 text-orange-600 rounded">Medium</span>
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded">Graph</span>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Number of Islands</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.
            </p>
            
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 font-mono text-sm space-y-4">
              <div>
                <p className="text-slate-900 font-bold mb-1 underline">Sample Input:</p>
                <code className="text-blue-600">grid = [["1","1","0"],["1","1","0"],["0","0","1"]]</code>
              </div>
              <div>
                <p className="text-slate-900 font-bold mb-1 underline">Expected Output:</p>
                <code className="text-green-600">2</code>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <BookOpen size={18} /> Constraints
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm bg-slate-50/50 p-4 rounded-lg">
                <li>m == grid.length</li>
                <li>n == grid[i].length</li>
                <li>1 ≤ m, n ≤ 300</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Code Editor (Dark Mode like Lovable) */}
        <div className="w-1/2 bg-[#0F172A] flex flex-col">
          <div className="h-10 bg-[#1E293B] flex items-center px-4 border-b border-white/5">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              solution.py
            </span>
          </div>
          
          <div className="flex-grow relative">
            <textarea 
              className="absolute inset-0 w-full h-full bg-transparent text-slate-300 p-6 font-mono text-sm focus:outline-none resize-none leading-6"
              spellCheck="false"
              defaultValue={`def num_islands(grid):\n    # TODO: Implement your logic here\n    # Use BFS or DFS to traverse islands\n    pass`}
            />
          </div>

          {/* Console / Output Area */}
          <div className="h-40 bg-[#020617] border-t border-white/10 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2 uppercase">
              <History size={14} /> Console Output
            </div>
            <div className="text-slate-500 font-mono text-xs italic">
              Run your code to see results here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}