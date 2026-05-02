import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import db from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserNotes } from "@/lib/note-actions";
import { Star, Target, Zap, Trophy, BookOpen, Bookmark, Clock, FileText, Edit, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "My Notebook | DSA Platform",
  description: "View your problem-solving statistics and notes",
};

interface StatBoxProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

interface DifficultyStats {
  easy: number;
  medium: number;
  hard: number;
}

export default async function NotebookPage() {
  const user = await currentUser();
  const { userId: clerkId } = await auth();

  if (!clerkId || !user) redirect("/sign-in");

  try {
    let dbUser = await db.user.findUnique({
      where: { clerkId },
      include: {
        solutions: {
          where: { status: "Passed" },
          include: {
            problem: {
              select: { 
                difficulty: true,
                title: true,
                slug: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 10,
        },
        bookmarks: {
          include: {
            problem: {
              select: {
                id: true,
                title: true,
                slug: true,
                difficulty: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 10,
        },
      },
    });

    if (!dbUser) {
      redirect("/profile");
    }

    const allSolutions = await db.solution.findMany({
      where: { 
        userId: dbUser.id,
        status: "Passed"
      },
      include: {
        problem: {
          select: { difficulty: true },
        },
      },
    });

    const userNotes = await getUserNotes();

    const totalSolved = allSolutions.length;

    const difficultyStats: DifficultyStats = allSolutions.reduce(
      (acc, solution) => {
        const difficulty = solution.problem.difficulty.toLowerCase();
        if (difficulty === "easy") acc.easy++;
        else if (difficulty === "medium") acc.medium++;
        else if (difficulty === "hard") acc.hard++;
        return acc;
      },
      { easy: 0, medium: 0, hard: 0 }
    );

    return (
      <div className="fixed inset-0 bg-black text-white overflow-y-auto">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <BookOpen className="h-6 w-6 text-white/80" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">My Notebook</h1>
              <p className="text-sm text-white/60 mt-1">Track your problem-solving progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatBox
              label="Total Solved"
              value={totalSolved}
              icon={Target}
              color="text-emerald-500"
            />
            <StatBox
              label="Easy"
              value={difficultyStats.easy}
              icon={Star}
              color="text-green-500"
            />
            <StatBox
              label="Medium"
              value={difficultyStats.medium}
              icon={Zap}
              color="text-yellow-500"
            />
            <StatBox
              label="Hard"
              value={difficultyStats.hard}
              icon={Trophy}
              color="text-red-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="h-5 w-5 text-yellow-500" />
                <h2 className="text-lg font-bold text-white">Bookmarked Problems</h2>
                <span className="ml-auto text-xs text-white/40">{dbUser.bookmarks.length} saved</span>
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                {dbUser.bookmarks.length === 0 ? (
                  <div className="text-center py-8 text-white/40 text-sm">
                    <Bookmark className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No bookmarked problems yet</p>
                    <Link href="/problems" className="text-xs text-blue-400 hover:text-blue-300 mt-2 inline-block">
                      Browse problems →
                    </Link>
                  </div>
                ) : (
                  dbUser.bookmarks.map((bookmark) => (
                    <Link
                      key={bookmark.id}
                      href={`/problems/${bookmark.problem.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
                          {bookmark.problem.title}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ml-2 flex-shrink-0 ${
                          bookmark.problem.difficulty === "Easy"
                            ? "bg-green-500/10 text-green-500"
                            : bookmark.problem.difficulty === "Medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {bookmark.problem.difficulty}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-bold text-white">Recent Solutions</h2>
                <span className="ml-auto text-xs text-white/40">Last 10</span>
              </div>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                {dbUser.solutions.length === 0 ? (
                  <div className="text-center py-8 text-white/40 text-sm">
                    <Clock className="h-12 w-12 mx-auto mb-2 opacity-20" />
                    <p>No solutions yet</p>
                    <Link href="/problems" className="text-xs text-blue-400 hover:text-blue-300 mt-2 inline-block">
                      Start solving →
                    </Link>
                  </div>
                ) : (
                  dbUser.solutions.map((solution) => (
                    <Link
                      key={solution.id}
                      href={`/problems/${solution.problem.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
                          {solution.problem.title}
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          {new Date(solution.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ml-2 flex-shrink-0 ${
                          solution.problem.difficulty === "Easy"
                            ? "bg-green-500/10 text-green-500"
                            : solution.problem.difficulty === "Medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {solution.problem.difficulty}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-bold text-white">My Notes</h2>
              </div>
              <span className="text-xs text-white/40">{userNotes.length} notes</span>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
              {userNotes.length === 0 ? (
                <div className="text-center py-12 text-white/40">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p className="text-sm mb-2">No notes yet!</p>
                  <p className="text-xs mb-4">Start adding notes to your solved problems</p>
                  <Link href="/problems" className="text-xs text-blue-400 hover:text-blue-300 inline-block">
                    Browse problems →
                  </Link>
                </div>
              ) : (
                userNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Link
                        href={`/problems/${note.problem.slug}`}
                        className="flex-1 min-w-0"
                      >
                        <h3 className="text-sm font-bold text-white/90 group-hover:text-white transition-colors truncate">
                          {note.title || note.problem.title}
                        </h3>
                        <p className="text-xs text-white/40 mt-1">
                          {note.problem.title}
                        </p>
                      </Link>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ml-2 flex-shrink-0 ${
                          note.problem.difficulty === "Easy"
                            ? "bg-green-500/10 text-green-500"
                            : note.problem.difficulty === "Medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {note.problem.difficulty}
                      </span>
                    </div>
                    
                    {note.content && (
                      <p className="text-xs text-white/60 line-clamp-2 mb-2">
                        {note.content}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      {note.timeComplexity && (
                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">
                          Time: {note.timeComplexity}
                        </span>
                      )}
                      {note.spaceComplexity && (
                        <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400">
                          Space: {note.spaceComplexity}
                        </span>
                      )}
                      <span className="ml-auto">
                        {new Date(note.updatedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Notebook page error:", error);
    redirect("/profile");
  }
}

function StatBox({ label, value, icon: Icon, color }: StatBoxProps) {
  return (
    <div className="relative group bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 hover:from-white/[0.10] hover:to-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      <div className="relative flex items-center gap-4">
        <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.08] transition-colors duration-300">
          <Icon className={`h-5 w-5 ${color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <div>
          <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-0.5 group-hover:text-white/80 transition-colors">
            {label}
          </p>
          <p className="text-xl font-bold text-white tracking-tight group-hover:text-white/95 transition-colors">{value}</p>
        </div>
      </div>
    </div>
  );
}
