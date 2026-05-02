// "use client";

// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   Code,
//   LineChart,
//   Zap,
//   ChevronRight,
//   ShieldCheck,
// } from "lucide-react";

// const features = [
//   {
//     title: "Topic-wise Learning",
//     desc: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
//     icon: BookOpen,
//     className: "md:col-span-2",
//     color: "from-blue-500 to-cyan-400",
//     beamColor: "via-blue-500",
//   },
//   {
//     title: "Interactive Coding",
//     desc: "Write and submit code directly in the browser with instant feedback and an optimized online judge.",
//     icon: Code,
//     className: "md:row-span-2 justify-center", // Added justify-center for layout
//     color: "from-purple-500 to-pink-500",
//     beamColor: "via-purple-500",
//   },
//   {
//     title: "Track Progress",
//     desc: "Detailed statistics and real-time heatmaps for your journey.",
//     icon: LineChart,
//     className: "",
//     color: "from-emerald-500 to-teal-400",
//     beamColor: "via-emerald-500",
//   },
//   {
//     title: "Skill Progression",
//     desc: "Earn elite badges and certifications as you level up your skills.",
//     icon: Zap,
//     className: "",
//     color: "from-yellow-500 to-orange-400",
//     beamColor: "via-yellow-500",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-7xl">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-primary/20 bg-black/[0.03] dark:bg-primary/10 text-slate-500 dark:text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
//           >
//             <ShieldCheck className="w-3 h-3" />
//             The Ecosystem
//           </motion.div>

//           <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase text-slate-900 dark:text-white leading-tight">
//             Everything You Need <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/50 not-italic uppercase">
//               To Excel
//             </span>
//           </h2>

//           <p className="text-slate-500 dark:text-muted-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed font-medium dark:font-light">
//             A high-performance environment designed to master algorithms and
//             dominate technical interviews.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className={`group relative rounded-[2rem] border border-black/[0.06] dark:border-white/[0.08] bg-slate-50/50 dark:bg-card/50 backdrop-blur-sm p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-card/80 shadow-sm dark:shadow-none ${f.className}`}
//             >
//               {/* Top Section */}
//               <div className="relative z-10 flex items-start justify-between mb-auto">
//                 <div
//                   className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${f.color} p-[1px]`}
//                 >
//                   <div className="w-full h-full rounded-[11px] bg-white dark:bg-background flex items-center justify-center transition-colors group-hover:bg-transparent">
//                     <f.icon className="w-6 h-6 text-slate-800 dark:text-white group-hover:text-white transition-colors duration-500" />
//                   </div>
//                 </div>
//                 <ChevronRight className="w-5 h-5 text-slate-300 dark:text-muted-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
//               </div>

//               {/* Text Content */}
//               <div className="relative z-10 mt-4">
//                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 italic uppercase tracking-tight group-hover:text-primary transition-colors">
//                   {f.title}
//                 </h3>
//                 <p className="text-slate-500 dark:text-muted-foreground/50 text-sm leading-relaxed max-w-[280px] font-medium dark:font-light">
//                   {f.desc}
//                 </p>
//               </div>

//               {/* Background Glows */}
//               <div
//                 className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${f.color} blur-[60px] opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700`}
//               />

//               {/* Bottom Decorative Beam */}
//               <div
//                 className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${f.beamColor} to-transparent`}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  LineChart,
  Zap,
  ArrowRight,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

interface FeatureStats {
  isLoggedIn: boolean;
  general: {
    totalProblems: number;
    totalSubmissions: number;
    activeUsers: number;
    topicCount: number;
  };
  user: {
    problemsSolved: number;
    bookmarks: number;
    points: number;
    streak: number;
  } | null;
}

export default function Features({ stats }: { stats: FeatureStats }) {
  const { user, isLoaded } = useUser();
  const { general, user: userStats } = stats;

  const features = [
    {
      title: "Topic-wise Learning",
      desc: isLoaded && user && userStats
        ? `You've explored ${userStats.bookmarks} bookmarked problems across ${general.topicCount}+ topics.`
        : `Master DSA through ${general.topicCount}+ structured topics covering Arrays, Trees, Graphs, and more.`,
      icon: BookOpen,
      link: "/topics",
      linkText: isLoaded && user ? "Continue Learning" : "Explore Topics",
      stat: isLoaded && user && userStats ? `${userStats.bookmarks} Bookmarked` : `${general.topicCount}+ Topics`,
    },
    {
      title: "Interactive Coding",
      desc: isLoaded && user && userStats
        ? `You've submitted ${userStats.problemsSolved} solutions. Keep the momentum going!`
        : `Join ${general.activeUsers.toLocaleString()}+ developers. ${general.totalSubmissions.toLocaleString()}+ solutions submitted.`,
      icon: Code,
      link: "/problems",
      linkText: isLoaded && user ? "Solve Problems" : "Start Coding",
      stat: isLoaded && user && userStats ? `${userStats.problemsSolved} Solved` : `${general.totalSubmissions.toLocaleString()}+ Submissions`,
    },
    {
      title: "Track Progress",
      desc: isLoaded && user && userStats
        ? `Current streak: ${userStats.streak} days. You've earned ${userStats.points} points!`
        : `Detailed statistics and real-time heatmaps to visualize your coding journey.`,
      icon: LineChart,
      link: isLoaded && user ? "/dashboard" : "/auth/sign-up",
      linkText: isLoaded && user ? "View Dashboard" : "Get Started",
      stat: isLoaded && user && userStats ? `${userStats.streak} Day Streak` : `${general.activeUsers}+ Active Users`,
    },
    {
      title: "Skill Progression",
      desc: isLoaded && user && userStats
        ? `You're on fire! ${userStats.points} points earned. Unlock more achievements.`
        : `Earn badges and track your growth as you master algorithms and data structures.`,
      icon: Zap,
      link: isLoaded && user ? "/profile" : "/auth/sign-up",
      linkText: isLoaded && user ? "View Profile" : "Join Now",
      stat: isLoaded && user && userStats ? `${userStats.points} Points` : "Achievements Await",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium shadow-lg mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-3 h-3 text-white/60" />
            </motion.div>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-semibold tracking-wide">
              THE ECOSYSTEM
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white leading-[1.1]">
            Your learning journey.
            <br />
            <span className="text-white/50">Personalized and tracked.</span>
          </h2>

          <p className="text-white/75 max-w-2xl text-base md:text-lg leading-relaxed font-light mt-4">
            Track your progress, maintain streaks, and level up your skills with our comprehensive learning ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-500"
            >
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between gap-6">
                {/* Left: Icon & Text */}
                <div className="flex items-center gap-4 flex-1">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <f.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* Right: Stat & CTA */}
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <div className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-medium text-white/70 tracking-wide">
                      {f.stat}
                    </span>
                  </div>
                  
                  <Link
                    href={f.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all group/link"
                  >
                    {f.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Premium accent line */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
