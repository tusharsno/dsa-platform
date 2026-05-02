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
        return "text-white/75";
      case "Medium":
        return "text-white/75";
      case "Hard":
        return "text-white/75";
      default:
        return "text-white/75";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Problems
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Practice curated problems and master data structures & algorithms.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-white/20 transition-all">
            <p className="text-white/60 font-semibold uppercase text-xs tracking-wide mb-2">
              Easy
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {stats.easy.solved} / {stats.easy.total}
            </h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-white/20 transition-all">
            <p className="text-white/60 font-semibold uppercase text-xs tracking-wide mb-2">
              Medium
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {stats.medium.solved} / {stats.medium.total}
            </h3>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-white/20 transition-all">
            <p className="text-white/60 font-semibold uppercase text-xs tracking-wide mb-2">
              Hard
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {stats.hard.solved} / {stats.hard.total}
            </h3>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                type="text"
                placeholder="Search problems..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-sm text-white placeholder:text-white/60"
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
                      ? "bg-white text-black"
                      : "bg-white/5 backdrop-blur-sm text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {diff === "all" ? "All" : diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Problems Table */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 backdrop-blur-sm border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white/80 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white/80 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white/80 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white/80 uppercase tracking-wider">
                    Topic
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white/80 uppercase tracking-wider">
                    Acceptance
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-white/80 uppercase tracking-wider">
                    Bookmark
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredProblems.map((problem) => (
                  <tr
                    key={problem.id}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      {problem.isSolved ? (
                        <CheckCircle2 className="w-5 h-5 text-white/75" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-white/20" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/problems/${problem.slug}`}
                        className="font-medium text-white hover:text-white/80 transition-colors"
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
                      <span className="text-sm text-white/75">
                        {problem.topic?.name || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-white/75">
                        {problem._count?.solutions || 0} solved
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={(e) => handleBookmark(e, problem.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          bookmarkedProblems.has(problem.id)
                            ? "text-white/75 hover:text-white/50"
                            : "text-white/40 hover:text-white/75"
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
              <p className="text-white/70">
                No problems found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
