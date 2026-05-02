import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import db from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Calendar,
  Zap,
  Trophy,
  Code2,
  Star,
  Target,
  ChevronRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActivityGrid } from "@/components/dashboard/ActivityGrid";
import { getUserRank } from "@/lib/rank-actions";

export const metadata: Metadata = {
  title: "Profile | DSA Platform",
  description: "View your coding profile, statistics, and progress",
};

interface StatBoxProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export default async function ProfilePage() {
  const user = await currentUser();
  const { userId: clerkId } = await auth();

  if (!clerkId || !user) redirect("/sign-in");

  try {
    let dbUser = await db.user.findUnique({
      where: { clerkId },
      include: {
        solutions: {
          where: { status: "Passed" },
          include: { problem: { select: { difficulty: true } } },
        },
      },
    });

    if (!dbUser) {
      dbUser = await db.user.create({
        data: {
          clerkId,
          name:
            `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() ||
            "Anonymous",
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
        },
        include: {
          solutions: {
            where: { status: "Passed" },
            include: { problem: { select: { difficulty: true } } },
          },
        },
      });
    }

    const activityData = dbUser.solutions.map((s) => ({
      createdAt: s.createdAt,
    }));
    let userRank = 0;
    try {
      userRank = await getUserRank(dbUser.id);
    } catch (error) {
      console.error("Failed to fetch user rank:", error);
    }

    return (
      <div className="fixed inset-0 bg-black text-white overflow-y-auto">
        {/* Your Original Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 z-10">
          {/* Header Section - AlgoMaster Layout with Your Original Colors */}
          <div className="relative group border border-white/10 rounded-lg mb-6 backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-500">
            <div className="h-32 bg-white/[0.10] border-b border-white/10" />
            <div className="px-10 pb-8">
              <div className="relative flex flex-col md:flex-row items-start md:items-end gap-8 -mt-16">
                <div className="relative group/avatar">
                  <div className="h-32 w-32 rounded-full border border-white/20 p-1 bg-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                    <img
                      src={user.imageUrl}
                      className="h-full w-full rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/80 rounded-full border-2 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                      {dbUser.name}
                    </h1>
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold text-white/60 uppercase">
                      Free
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-5 text-white/60 text-sm">
                    <div className="flex items-center gap-2 hover:text-white/80 transition-colors">
                      <Mail className="h-4 w-4" /> {dbUser.email}
                    </div>
                    <div className="flex items-center gap-2 hover:text-white/80 transition-colors">
                      <Calendar className="h-4 w-4" /> Joined{" "}
                      {new Date(dbUser.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <Link href="/profile/edit" className="pb-0 pr-6">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md px-20 py-6 transition-all active:scale-95">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Access Grid - AlgoMaster Feature with Your Original Glass-morphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link href="/progress" className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/5 text-white/80">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white/90 uppercase text-xs tracking-widest">
                    Learning Progress
                  </h3>
                  <p className="text-[11px] text-white/40 mt-1 uppercase tracking-tighter">
                    Track your topic-wise progress
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-white/50 transition-all" />
            </Link>

            <Link href="/notebook" className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/5 text-white/80">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white/90 uppercase text-xs tracking-widest">
                    My Notebook
                  </h3>
                  <p className="text-[11px] text-white/40 mt-1 uppercase tracking-tighter">
                    View your saved notes
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-white/20 group-hover:text-white/50 transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <StatBox
              label="Current Streak"
              value={`${dbUser.streak || 0} Days`}
              icon={Zap}
            />
            <StatBox
              label="Total Points"
              value={dbUser.points || 0}
              icon={Star}
            />
            <StatBox label="Global Rank" value={`#${userRank}`} icon={Trophy} />
          </div>

          {/* Activity Section */}
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="h-4 w-4 text-white/60" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Solving Activity
              </h3>
            </div>
            <ActivityGrid data={activityData} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Profile page error:", error);
    redirect("/dashboard");
  }
}

function StatBox({ label, value, icon: Icon }: StatBoxProps) {
  return (
    <div className="relative group bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-white/20 overflow-hidden">
      <div className="relative flex items-center gap-4">
        <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white/80">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-0.5">
            {label}
          </p>
          <p className="text-xl font-bold text-white tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}
