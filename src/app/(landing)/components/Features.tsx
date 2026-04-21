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
  ChevronRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

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
  const { isLoggedIn, general, user } = stats;

  const features = [
    {
      title: "Topic-wise Learning",
      desc: isLoggedIn && user
        ? `You've explored ${user.bookmarks} bookmarked problems across ${general.topicCount}+ topics.`
        : `Master DSA through ${general.topicCount}+ structured topics covering Arrays, Trees, Graphs, and more.`,
      icon: BookOpen,
      className: "md:col-span-2",
      color: "from-blue-500 to-cyan-400",
      beamColor: "via-blue-500",
      link: "/topics",
      linkText: isLoggedIn ? "Continue Learning" : "Explore Topics",
      stat: isLoggedIn && user ? `${user.bookmarks} Bookmarked` : `${general.topicCount}+ Topics`,
    },
    {
      title: "Interactive Coding",
      desc: isLoggedIn && user
        ? `You've submitted ${user.problemsSolved} solutions. Keep the momentum going!`
        : `Join ${general.activeUsers.toLocaleString()}+ developers. ${general.totalSubmissions.toLocaleString()}+ solutions submitted.`,
      icon: Code,
      className: "md:row-span-2",
      color: "from-purple-500 to-pink-500",
      beamColor: "via-purple-500",
      isTall: true,
      link: "/problems",
      linkText: isLoggedIn ? "Solve Problems" : "Start Coding",
      stat: isLoggedIn && user ? `${user.problemsSolved} Solved` : `${general.totalSubmissions.toLocaleString()}+ Submissions`,
    },
    {
      title: "Track Progress",
      desc: isLoggedIn && user
        ? `Current streak: ${user.streak} days. You've earned ${user.points} points!`
        : `Detailed statistics and real-time heatmaps to visualize your coding journey.`,
      icon: LineChart,
      className: "",
      color: "from-emerald-500 to-teal-400",
      beamColor: "via-emerald-500",
      link: isLoggedIn ? "/dashboard" : "/auth/sign-up",
      linkText: isLoggedIn ? "View Dashboard" : "Get Started",
      stat: isLoggedIn && user ? `${user.streak} Day Streak` : `${general.activeUsers}+ Active Users`,
    },
    {
      title: "Skill Progression",
      desc: isLoggedIn && user
        ? `You're on fire! ${user.points} points earned. Unlock more achievements.`
        : `Earn badges and track your growth as you master algorithms and data structures.`,
      icon: Zap,
      className: "",
      color: "from-yellow-500 to-orange-400",
      beamColor: "via-yellow-500",
      link: isLoggedIn ? "/profile" : "/auth/sign-up",
      linkText: isLoggedIn ? "View Profile" : "Join Now",
      stat: isLoggedIn && user ? `${user.points} Points` : "Achievements Await",
    },
  ];
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-primary/20 bg-black/[0.03] dark:bg-primary/10 text-slate-500 dark:text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            The Ecosystem
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase text-slate-900 dark:text-white leading-[0.9]">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-white dark:via-primary/80 dark:to-white/50 not-italic uppercase">
              To Excel
            </span>
          </h2>

          <p className="text-slate-500 dark:text-muted-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed font-medium dark:font-light mt-4">
            A high-performance environment designed to master algorithms and
            dominate technical interviews.
          </p>
        </div>

        {/* Vertical Stack - 4 Cards - Compact */}
        <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] border border-black/[0.08] dark:border-white/[0.08] bg-slate-50/50 dark:bg-card/40 backdrop-blur-sm p-6 flex flex-col overflow-hidden transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-card/60 shadow-sm dark:shadow-none"
            >
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between gap-6">
                {/* Left: Icon & Text */}
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${f.color} p-[1px] shadow-lg shadow-black/5 flex-shrink-0`}
                  >
                    <div className="w-full h-full rounded-[11px] bg-white dark:bg-slate-950 flex items-center justify-center transition-colors group-hover:bg-transparent">
                      <f.icon className="w-6 h-6 text-slate-800 dark:text-white group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 italic uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="text-slate-500 dark:text-muted-foreground/60 text-sm leading-relaxed font-medium dark:font-light">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {/* Right: Stat & CTA */}
                <div className="flex flex-col items-end gap-2.5 flex-shrink-0">
                  <div className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <span className="text-[10px] font-bold text-slate-600 dark:text-muted-foreground uppercase tracking-wider">
                      {f.stat}
                    </span>
                  </div>
                  
                  <Link
                    href={f.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
                  >
                    {f.linkText}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Decorative Background Glow - Subtle */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${f.color} blur-[60px] opacity-0 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.08] transition-opacity duration-700`}
              />

              {/* Interactive Beam - Thinner */}
              <div
                className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 bg-gradient-to-r from-transparent ${f.beamColor} to-transparent opacity-60`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
