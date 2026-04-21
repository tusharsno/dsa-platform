"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, CheckCircle2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toggleBookmark } from "@/lib/database-actions";
import { useRouter } from "next/navigation";

interface Problem {
  id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: { name: string } | null;
  tags: { name: string }[];
  companies: { name: string }[];
  isSolved?: boolean;
  isBookmarked?: boolean;
  _count?: {
    solutions: number;
    discussions: number;
  };
}

interface Stats {
  easy: { solved: number; total: number };
  medium: { solved: number; total: number };
  hard: { solved: number; total: number };
}

export default function ProblemsClient({
  problems,
  stats,
}: {
  problems: Problem[];
  stats: Stats;
}) {
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [bookmarkedProblems, setBookmarkedProblems] = useState<Set<string>>(
    new Set(problems.filter(p => p.isBookmarked).map(p => p.id))
  );
  const router = useRouter();

  const handleBookmark = async (e: React.MouseEvent, problemId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const result = await toggleBookmark(problemId);
    if (!result.error) {
      setBookmarkedProblems(prev => {
        const newSet = new Set(prev);
        if (result.bookmarked) {
          newSet.add(problemId);
        } else {
          newSet.delete(problemId);
        }
        return newSet;
      });
      router.refresh();
    }
  };

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === "all" || problem.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 dark:text-green-500";
      case "Medium":
        return "text-yellow-600 dark:text-yellow-500";
      case "Hard":
        return "text-red-600 dark:text-red-500";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-10 px-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-green-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-green-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-green-600 dark:text-green-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Easy
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {stats.easy.solved} / {stats.easy.total}
            </h3>
          </div>

          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-yellow-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-yellow-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-yellow-600 dark:text-yellow-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Medium
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {stats.medium.solved} / {stats.medium.total}
            </h3>
          </div>

          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-red-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-red-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-red-600 dark:text-red-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Hard
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {stats.hard.solved} / {stats.hard.total}
            </h3>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-transparent rounded-3xl border border-slate-200 dark:border-white/5 p-6 backdrop-blur-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search problems..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              {["all", "Easy", "Medium", "Hard"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setDifficultyFilter(diff)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === diff
                      ? "bg-primary text-white"
                      : "bg-slate-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {diff === "all" ? "All" : diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Table */}
        <div className="bg-white dark:bg-transparent rounded-3xl border border-slate-200 dark:border-white/5 backdrop-blur-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-zinc-900/50 border-b border-slate-200 dark:border-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Acceptance
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Bookmark
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {filteredProblems.map((problem) => (
                  <tr
                    key={problem.id}
                    className="hover:bg-slate-50 dark:hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {problem.isSolved ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/problems/${problem.slug}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {problem.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`font-semibold ${getDifficultyColor(problem.difficulty)}`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {problem.topic?.name || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {problem._count?.solutions || 0} solved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={(e) => handleBookmark(e, problem.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          bookmarkedProblems.has(problem.id)
                            ? "text-emerald-500 hover:text-red-500"
                            : "text-zinc-400 hover:text-emerald-500"
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedProblems.has(problem.id) ? "fill-current" : ""}`} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredProblems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">
                No problems found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
