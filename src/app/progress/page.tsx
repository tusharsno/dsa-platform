import type { Metadata } from "next";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Target, TrendingUp, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Progress | DSA Platform",
  description: "Track your topic-wise learning progress",
};

export default async function ProgressPage() {
  const { userId: clerkId } = await auth();
  if (!clerkId) redirect("/sign-in");

  try {
    const dbUser = await db.user.findUnique({
      where: { clerkId },
    });

    if (!dbUser) redirect("/dashboard");

    const topics = await db.topic.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        _count: { select: { problems: true } },
      },
      orderBy: { order: "asc" },
    });

    const topicProgress = await Promise.all(
      topics.map(async (topic) => {
        const solvedCount = await db.solution.count({
          where: {
            userId: dbUser.id,
            status: "Passed",
            problem: { topicId: topic.id },
          },
        });
        return {
          name: topic.name,
          slug: topic.slug,
          solved: solvedCount,
          total: topic._count.problems,
          percentage:
            topic._count.problems > 0
              ? Math.round((solvedCount / topic._count.problems) * 100)
              : 0,
        };
      })
    );

    const totalProblems = topicProgress.reduce((acc, t) => acc + t.total, 0);
    const totalSolved = topicProgress.reduce((acc, t) => acc + t.solved, 0);
    const overallPercentage = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

    return (
      <div className="fixed inset-0 bg-black text-white overflow-y-auto">
        {/* Background Effects - Same as Profile Page */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 z-10">
          <div className="mb-8">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors mb-4"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Back to Profile</span>
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-8 w-8 text-emerald-500" />
              <h1 className="text-3xl font-bold">Learning Progress</h1>
            </div>
            <p className="text-white/60 text-sm">
              Track your progress across different DSA topics
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-white/90">Overall Progress</h2>
                <p className="text-sm text-white/60">
                  {totalSolved} of {totalProblems} problems solved
                </p>
              </div>
              <div className="text-3xl font-bold text-emerald-500">
                {overallPercentage}%
              </div>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${overallPercentage}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-white/60" />
              <h2 className="text-lg font-bold text-white/90">Topic-wise Progress</h2>
            </div>
            <div className="space-y-5">
              {topicProgress.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="block group"
                >
                  <div className="space-y-2 p-4 rounded-lg hover:bg-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 font-medium group-hover:text-emerald-400 transition-colors">
                        {topic.name}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-white/60 text-sm">
                          {topic.solved}/{topic.total}
                        </span>
                        <span className="text-emerald-500 font-bold text-sm min-w-[45px] text-right">
                          {topic.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${topic.percentage}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Progress page error:", error);
    redirect("/dashboard");
  }
}
