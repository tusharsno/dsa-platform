"use client";

import { Users, Code2, TrendingUp, Flame, Award } from "lucide-react";
import { AdminStatsCard } from "./AdminStatsCard";
import { RecentUsersTable } from "./RecentUsersTable";
import { ProblemsByDifficulty } from "./ProblemsByDifficulty";
import { RecentActivityFeed } from "./RecentActivityFeed";

const iconMap = {
  Users,
  Code2,
  TrendingUp,
  Flame,
};

export function AdminDashboard({
  stats,
  passedSolutions,
  recentUsers,
  difficultyData,
  recentSolutions,
}: {
  stats: any[];
  passedSolutions: number;
  recentUsers: any[];
  difficultyData: any;
  recentSolutions: any[];
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform analytics and management</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <Award className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-bold text-emerald-500">
            {passedSolutions} Solved
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <AdminStatsCard
            key={stat.label}
            stat={{
              ...stat,
              icon: iconMap[stat.icon as keyof typeof iconMap],
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentUsersTable users={recentUsers} />
        </div>
        <div>
          <ProblemsByDifficulty data={difficultyData} />
        </div>
      </div>

      <RecentActivityFeed activities={recentSolutions} />
    </div>
  );
}
