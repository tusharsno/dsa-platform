// import db from "@/lib/db";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import {
//   Mail,
//   Calendar,
//   Zap,
//   Trophy,
//   Code2,
//   Star,
//   Target,
//   ArrowUpRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default async function ProfilePage() {
//   const user = await currentUser();
//   const { userId: clerkId } = await auth();

//   if (!clerkId || !user) redirect("/sign-in");

//   const dbUser = await db.user.findUnique({
//     where: { clerkId: clerkId },
//     include: { solvedProblems: { include: { problem: true } } },
//   });

//   if (!dbUser) return null;

//   const solved = dbUser.solvedProblems.filter((s) => s.status === "Passed");
//   const totalSolved = solved.length;

//   return (
//     <div className="fixed inset-0 bg-black text-slate-300 overflow-y-auto">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:35px_35px] pointer-events-none"></div>

//       <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 z-10">
//         {/* Profile Card */}
//         <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-10 mb-10 backdrop-blur-md">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             {/* Fully Rounded Profile Pic */}
//             <div className="h-32 w-32 rounded-full border border-white/10 p-1 bg-gradient-to-b from-white/10 to-transparent">
//               <img
//                 src={user.imageUrl}
//                 className="h-full w-full rounded-full object-cover"
//                 alt="Profile"
//               />
//             </div>

//             <div className="flex-1 text-center md:text-left space-y-3">
//               <div className="flex items-center justify-center md:justify-start gap-4">
//                 <h1 className="text-4xl font-bold text-white tracking-tight">
//                   {dbUser.name}
//                 </h1>
//                 <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/20 font-black tracking-widest uppercase">
//                   PRO
//                 </span>
//               </div>

//               <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-1">
//                 <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
//                   <Mail className="h-4 w-4" /> {dbUser.email}
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
//                   <Calendar className="h-4 w-4" /> Joined Feb 2026
//                 </div>
//               </div>
//             </div>

//             {/* Premium Button without styled-jsx (Animation via Tailwind) */}
//             <Button className="relative group overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-10 h-12 shadow-[0_0_20px_rgba(37,99,235,0.15)] border border-white/10 transition-all active:scale-95">
//               {/* Shimmer effect using Tailwind's arbitrary animation values */}
//               <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[30deg] -translate-x-full group-hover:[animation:shimmer_1.5s_infinite] [animation-fill-mode:forwards]"></div>
//               <span className="relative">Edit Profile</span>
//             </Button>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//           <StatBox
//             label="Problems Solved"
//             value={totalSolved}
//             icon={Target}
//             color="text-emerald-500"
//           />
//           <StatBox
//             label="Current Streak"
//             value={`${dbUser.streak || 0} Days`}
//             icon={Zap}
//             color="text-orange-500"
//           />
//           <StatBox
//             label="Total Points"
//             value={dbUser.points || 0}
//             icon={Star}
//             color="text-blue-500"
//           />
//           <StatBox
//             label="Global Rank"
//             value="Coming Soon"
//             icon={Trophy}
//             color="text-purple-500"
//           />
//         </div>

//         {/* Activity & Rank */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-8">
//             <div className="flex items-center justify-between mb-8">
//               <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
//                 <Code2 className="h-4 w-4 text-blue-500" /> Solving Activity
//               </h3>
//               <div className="text-[10px] text-blue-500 font-bold uppercase flex items-center gap-1 cursor-pointer">
//                 Full History <ArrowUpRight className="h-3 w-3" />
//               </div>
//             </div>

//             <div className="h-48 w-full bg-black/40 rounded-2xl border border-white/[0.03] border-dashed flex flex-col items-center justify-center">
//               <p className="text-slate-500 text-sm font-medium">
//                 No activity yet this year.
//               </p>
//               <p className="text-slate-700 text-xs">
//                 Your progress heatmap will appear here.
//               </p>
//             </div>
//           </div>

//           <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
//             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 w-full text-left">
//               My Rank
//             </h3>
//             <div className="h-24 w-24 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.01] mb-4">
//               <Trophy className="h-10 w-10 text-slate-800" />
//             </div>
//             <p className="text-4xl font-black text-white tracking-tighter">
//               #0
//             </p>
//             <p className="text-slate-600 text-[11px] mt-2">
//               Solve more to climb the leaderboard
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatBox({ label, value, icon: Icon, color }: any) {
//   return (
//     <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-2xl p-6 transition-all hover:border-white/10 group">
//       <div className="flex items-center gap-4">
//         <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
//           <Icon className={`h-5 w-5 ${color}`} />
//         </div>
//         <div>
//           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">
//             {label}
//           </p>
//           <p className="text-xl font-bold text-white tracking-tight">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // তুষার, আপনার প্রোফাইল এখন পুরোপুরি ডাইনামিক এবং অটোমেটিক! আপনি যে কোডটি ব্যবহার করছেন, সেখানে db.user.findUnique সরাসরি ডাটাবেস থেকে ডেটা ফেচ করছে।

import db from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Mail,
  Calendar,
  Zap,
  Trophy,
  Code2,
  Star,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
  const user = await currentUser();
  const { userId: clerkId } = await auth();

  if (!clerkId || !user) redirect("/sign-in");

  const dbUser = await db.user.findUnique({
    where: { clerkId: clerkId },
    include: { solvedProblems: { include: { problem: true } } },
  });

  if (!dbUser) return null;

  // সলভ করা প্রবলেমগুলো ফিল্টার করা
  const solved = dbUser.solvedProblems.filter((s) => s.status === "Passed");
  const totalSolved = solved.length;

  // ক্যাটাগরি অনুযায়ী আলাদা কাউন্ট (any টাইপ দিয়ে লাল দাগ ফিক্স করা হয়েছে)
  const easySolved = solved.filter(
    (s: any) => s.problem.difficulty === "Easy",
  ).length;
  const mediumSolved = solved.filter(
    (s: any) => s.problem.difficulty === "Medium",
  ).length;
  const hardSolved = solved.filter(
    (s: any) => s.problem.difficulty === "Hard",
  ).length;

  return (
    <div className="fixed inset-0 bg-black text-slate-300 overflow-y-auto">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:35px_35px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 z-10">
        {/* Profile Card */}
        <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-10 mb-10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Fully Rounded Profile Pic with Glow */}
            <div className="h-32 w-32 rounded-full border border-white/10 p-1 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <img
                src={user.imageUrl}
                className="h-full w-full rounded-full object-cover"
                alt="Profile"
              />
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <h1 className="text-4xl font-bold text-white tracking-tight">
                  {dbUser.name}
                </h1>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/20 font-black tracking-widest uppercase">
                  PRO
                </span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Mail className="h-4 w-4" /> {dbUser.email}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar className="h-4 w-4" /> Joined Feb 2026
                </div>
              </div>
            </div>

            {/* Shimmering Edit Button */}
            <Button className="relative group overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-10 h-12 shadow-[0_0_20px_rgba(37,99,235,0.15)] border border-white/10 transition-all active:scale-95">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[30deg] -translate-x-full group-hover:animate-shimmer"></div>
              <span className="relative">Edit Profile</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid - Categorized Solved Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <StatBox
            label="Total Solved"
            value={totalSolved}
            icon={Target}
            color="text-white"
          />
          <StatBox
            label="Easy"
            value={easySolved}
            icon={Star}
            color="text-emerald-500"
          />
          <StatBox
            label="Medium"
            value={mediumSolved}
            icon={Zap}
            color="text-amber-500"
          />
          <StatBox
            label="Hard"
            value={hardSolved}
            icon={Trophy}
            color="text-rose-500"
          />
        </div>

        {/* Second Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <StatBox
            label="Current Streak"
            value={`${dbUser.streak || 0} Days`}
            icon={Zap}
            color="text-orange-500"
          />
          <StatBox
            label="Total Points"
            value={dbUser.points || 0}
            icon={Star}
            color="text-blue-500"
          />
          <StatBox
            label="Global Rank"
            value="Coming Soon"
            icon={Trophy}
            color="text-purple-500"
          />
        </div>

        {/* Activity & Rank */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-blue-500" /> Solving Activity
              </h3>
              <div className="text-[10px] text-blue-500 font-bold uppercase flex items-center gap-1 cursor-pointer">
                Full History <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>

            <div className="h-48 w-full bg-black/40 rounded-2xl border border-white/[0.03] border-dashed flex flex-col items-center justify-center">
              <p className="text-slate-500 text-sm font-medium">
                No activity yet this year.
              </p>
              <p className="text-slate-700 text-xs">
                Your progress heatmap will appear here.
              </p>
            </div>
          </div>

          <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 w-full text-left">
              My Rank
            </h3>
            <div className="h-24 w-24 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.01] mb-4">
              <Trophy className="h-10 w-10 text-slate-800" />
            </div>
            <p className="text-4xl font-black text-white tracking-tighter">
              #0
            </p>
            <p className="text-slate-600 text-[11px] mt-2">
              Solve more to climb the leaderboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, icon: Icon, color }: any) {
  return (
    <div className="bg-[#0a0a0a]/60 border border-white/[0.05] rounded-2xl p-6 transition-all hover:border-white/10 group">
      <div className="flex items-center gap-4">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">
            {label}
          </p>
          <p className="text-xl font-bold text-white tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}
