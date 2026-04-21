import db from "@/lib/db";
import { Users, Code2, MessageSquare, TrendingUp, Award, Flame } from "lucide-react";
import { AdminDashboard } from "./AdminDashboard";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  
  // Fetch data sequentially to avoid connection pool exhaustion
  const totalUsers = await db.user.count();
  const totalProblems = await db.problem.count();
  const totalSolutions = await db.solution.count();
  const totalDiscussions = await db.discussion.count();
  
  const recentUsers = await db.user.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      points: true,
      createdAt: true,
      _count: {
        select: { solutions: true },
      },
    },
  });
  
  const problemsByDifficulty = await db.problem.groupBy({
    by: ["difficulty"],
    _count: true,
  });
  
  const recentSolutions = await db.solution.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { name: true, imageUrl: true },
      },
      problem: {
        select: { title: true, difficulty: true },
      },
    },
  });
  
  const activeUsers = await db.user.count({
    where: {
      lastSolvedAt: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    },
  });
  
  const passedSolutions = await db.solution.count({
    where: { status: "Passed" },
  });

  const stats = [
    {
      label: "Total Users",
      value: totalUsers,
      icon: "Users",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      change: "+12%",
    },
    {
      label: "Total Problems",
      value: totalProblems,
      icon: "Code2",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      change: "+5%",
    },
    {
      label: "Solutions Submitted",
      value: totalSolutions,
      icon: "TrendingUp",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      change: "+23%",
    },
    {
      label: "Active Users (7d)",
      value: activeUsers,
      icon: "Flame",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      change: "+8%",
    },
  ];

  const difficultyData = {
    Easy: problemsByDifficulty.find((p) => p.difficulty === "Easy")?._count || 0,
    Medium: problemsByDifficulty.find((p) => p.difficulty === "Medium")?._count || 0,
    Hard: problemsByDifficulty.find((p) => p.difficulty === "Hard")?._count || 0,
  };

  return (
    <AdminDashboard
      stats={stats}
      passedSolutions={passedSolutions}
      recentUsers={recentUsers}
      difficultyData={difficultyData}
      recentSolutions={recentSolutions}
    />
  );
}
