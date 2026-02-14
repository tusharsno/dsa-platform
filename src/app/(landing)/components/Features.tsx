// 09/02/2026
// "use client";

// import { motion } from "framer-motion";
// import { BookOpen, Code2, Target, TrendingUp } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// // আপনার স্ক্রিনশট (image_e05d54.png) অনুযায়ী ডেটা সেটআপ
// const features = [
//   {
//     title: "Topic-wise Learning",
//     description:
//       "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
//     icon: BookOpen,
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
//   {
//     title: "Interactive Coding",
//     description:
//       "Write and submit Python code directly in the browser with instant feedback.",
//     icon: Code2,
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
//   {
//     title: "Track Progress",
//     description:
//       "Monitor your learning journey with detailed progress tracking and statistics.",
//     icon: Target,
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
//   {
//     title: "Skill Progression",
//     description:
//       "Start with easy problems and gradually tackle medium and hard challenges.",
//     icon: TrendingUp,
//     iconColor: "text-blue-600",
//     iconBg: "bg-blue-50",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-20 bg-white dark:bg-slate-950">
//       <div className="container px-4 mx-auto">
//         {/* হেডার সেকশন */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
//             Everything You Need to Excel
//           </h2>
//           <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
//             A complete learning platform designed to help you master DSA
//             concepts and ace technical interviews.
//           </p>
//         </div>

//         {/* ফিচার কার্ড গ্রিড */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
//                 <CardContent className="p-8">
//                   <div
//                     className={`w-12 h-12 rounded-xl ${feature.iconBg} dark:bg-blue-900/20 flex items-center justify-center mb-6`}
//                   >
//                     <feature.icon
//                       className={`h-6 w-6 ${feature.iconColor} dark:text-blue-400`}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
//                     {feature.title}
//                   </h3>
//                   <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
//                     {feature.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 10/02/2026
"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  LineChart,
  Zap,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "Topic-wise Learning",
    desc: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
    icon: BookOpen,
    className:
      "md:col-span-2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent border-blue-500/20",
    iconColor: "text-blue-400",
    pattern:
      "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent",
  },
  {
    title: "Interactive Coding",
    desc: "Write and submit code directly in the browser with instant feedback.",
    icon: Code,
    className:
      "md:row-span-2 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent border-purple-500/20",
    iconColor: "text-purple-400",
    pattern:
      "bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent",
  },
  {
    title: "Track Progress",
    desc: "Detailed statistics and heatmaps.",
    icon: LineChart,
    className:
      "bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Skill Progression",
    desc: "Earn badges as you level up.",
    icon: Zap,
    className:
      "bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
];

export default function Features() {
  return (
    <section className="py-24 dark:bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              The Ecosystem
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Everything You Need to Excel
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-medium">
            A high-performance environment designed to help you master
            algorithms and dominate your next technical interview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2rem] border p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20 ${f.className}`}
            >
              {/* Pattern Overlay */}
              <div
                className={`absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700 ${f.pattern}`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black/40 border border-white/10 backdrop-blur-sm group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500`}
                  >
                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:tracking-tight transition-all">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] group-hover:text-gray-300 transition-colors">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Glow Effect */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { BookOpen, Code, LineChart, Zap, ChevronRight } from "lucide-react";

// const features = [
//   {
//     title: "Topic-wise Learning",
//     desc: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
//     icon: BookOpen,
//     className:
//       "md:col-span-2 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent border-blue-500/10",
//     iconColor: "text-blue-400",
//     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)]",
//   },
//   {
//     title: "Interactive Coding",
//     desc: "Write and submit code directly in the browser with instant feedback.",
//     icon: Code,
//     className:
//       "md:row-span-2 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent border-purple-500/10",
//     iconColor: "text-purple-400",
//     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.2)]",
//   },
//   {
//     title: "Track Progress",
//     desc: "Detailed statistics and heatmaps to monitor growth.",
//     icon: LineChart,
//     className:
//       "bg-gradient-to-br from-emerald-600/10 via-transparent to-transparent border-emerald-500/10",
//     iconColor: "text-emerald-400",
//     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]",
//   },
//   {
//     title: "Skill Progression",
//     desc: "Earn badges and level up your ranking.",
//     icon: Zap,
//     className:
//       "bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent border-yellow-500/10",
//     iconColor: "text-yellow-400",
//     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)]",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="py-24 bg-[#020617] relative overflow-hidden">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

//       <div className="container px-6 mx-auto max-w-7xl relative z-10">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
//             </span>
//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
//               The Ecosystem
//             </span>
//           </motion.div>

//           <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
//             Everything You Need to Excel
//           </h2>
//           <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
//             A high-performance environment designed to help you master
//             algorithms and dominate your next technical interview.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className={`group relative rounded-[2.5rem] border p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20 ${f.className} ${f.glow}`}
//             >
//               <div className="relative z-10">
//                 <div className="flex items-center justify-between mb-8">
//                   <div
//                     className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/5 backdrop-blur-xl group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500`}
//                   >
//                     <f.icon className={`w-6 h-6 ${f.iconColor}`} />
//                   </div>
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
//                     <ChevronRight className="w-5 h-5 text-gray-500" />
//                   </div>
//                 </div>

//                 <h3 className="text-2xl font-bold text-white mb-3 tracking-tight transition-all">
//                   {f.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[220px]">
//                   {f.desc}
//                 </p>
//               </div>

//               {/* Decorative Corner Element */}
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
