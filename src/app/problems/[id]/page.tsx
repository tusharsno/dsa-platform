import { allProblems } from "@/data/problems/index";
import { notFound } from "next/navigation";
import Workspace from "@/components/Workspace/Workspace";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export async function generateStaticParams() {
  return allProblems.map((problem) => ({
    id: problem.id,
  }));
}

export default async function ProblemPage({
  params,
}: {
  params: { id: string };
}) {
  // Next.js 15+ এ params await করতে হয়
  const { id } = await params;
  const problem = allProblems.find((p) => p.id === id);

  if (!problem) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#020617] overflow-hidden">
      <nav className="h-11 flex items-center justify-between px-4 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0B1120]/50 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <Link
            href="/problems"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-500 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Problems
          </Link>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center gap-2 px-2 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md shadow-sm">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 tracking-tight">
              {problem.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-500 transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <main className="flex-1 overflow-hidden">
        {/* আমরা পুরো problem অবজেক্টটি পাস করছি */}
        <Workspace problem={problem} />
      </main>
    </div>
  );
}
