import React from "react";
import {
  getUserDashboardData,
  getActivityData,
  getRecentSubmissions,
} from "@/lib/actions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityPreview } from "@/components/dashboard/ActivityPreview";
import { RecentSubmissions } from "@/components/dashboard/RecentSubmissions";
import { CheckCircle, Flame, Target, Bookmark } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const userData = await getUserDashboardData();

  if (!userData) {
    return (
      <div className="p-8 text-white min-h-screen flex items-center justify-center">
        <p className="text-zinc-400">
          Please log in to see your personalized dashboard.
        </p>
      </div>
    );
  }

  const activityData = await getActivityData();
  const recentSubmissions = await getRecentSubmissions();

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Effects - Same as Profile Page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative p-6 space-y-6 max-w-7xl mx-auto z-10">
      {/* Header Section */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Welcome back, {userData.name || "Dev"}! 🚀
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Keep grinding, you're doing great.
        </p>
      </header>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total Solved"
          value={userData.totalSolved}
          icon={CheckCircle}
          description="Problems solved across all topics"
        />
        <StatsCard
          title="Current Streak"
          value={`${userData.streak} Days`}
          icon={Flame}
          description="Keep the momentum going!"
        />
        <StatsCard
          title="Total Points"
          value={userData.points}
          icon={Target}
          description="Points earned from correct solutions"
        />
        <Link href="/bookmarks">
          <StatsCard
            title="Bookmarks"
            value={userData.totalBookmarks}
            icon={Bookmark}
            description="Problems saved for later"
          />
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Heatmap & Insights (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-xl p-6">
            <ActivityPreview data={activityData} />
            <Link 
              href="/profile" 
              className="mt-4 text-xs text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 font-medium"
            >
              View full history →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">
                Recommended Topics
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Focus on Dynamic Programming and Graphs to strengthen your core skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">
                Recent Accomplishments
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                You solved {userData.totalSolved} problems recently. Ready for
                the next one?
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Submissions (Side Panel) */}
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-xl p-6 h-fit">
          <RecentSubmissions submissions={recentSubmissions} />
        </div>
      </div>
      </div>
    </div>
  );
}
