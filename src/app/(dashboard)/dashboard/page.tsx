import React from "react";
import {
  getUserDashboardData,
  getActivityData,
  getRecentSubmissions,
} from "@/lib/actions";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityGrid } from "@/components/dashboard/ActivityGrid";
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
    <div className="p-6 space-y-6 max-w-7xl mx-auto min-h-screen">
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
          <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
            <ActivityGrid data={activityData} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
              <h3 className="text-white font-semibold mb-4 text-sm">
                Recommended Topics
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Focus on Dynamic Programming and Graphs to strengthen your core skills.
              </p>
            </div>
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl">
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
        <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl h-fit">
          <RecentSubmissions submissions={recentSubmissions} />
        </div>
      </div>
    </div>
  );
}
