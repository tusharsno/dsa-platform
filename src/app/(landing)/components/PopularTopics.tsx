// // "use client";

// // import { motion, Variants } from "framer-motion";
// // import { Layers, BrainCircuit, Zap, ArrowRight, Sparkles } from "lucide-react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import Link from "next/link";

// // const topics = [
// //   {
// //     name: "Arrays",
// //     problems: 2,
// //     totalProblems: 10,
// //     icon: Layers,
// //     color: "text-blue-500",
// //     bg: "bg-blue-500/10",
// //     border: "group-hover:border-blue-500/50",
// //   },
// //   {
// //     name: "Dynamic Programming",
// //     problems: 1,
// //     totalProblems: 15,
// //     icon: BrainCircuit,
// //     color: "text-purple-500",
// //     bg: "bg-purple-500/10",
// //     border: "group-hover:border-purple-500/50",
// //   },
// //   {
// //     name: "Greedy",
// //     problems: 0,
// //     totalProblems: 8,
// //     icon: Zap,
// //     color: "text-yellow-500",
// //     bg: "bg-yellow-500/10",
// //     border: "group-hover:border-yellow-500/50",
// //   },
// // ];

// // // Proper Type definition instead of 'any' to satisfy the TypeScript compiler
// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const cardVariants: Variants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.5,
// //       // Fixed: Framer Motion v12 works best with named easings
// //       // or explicit cubic-bezier cast if using custom values.
// //       ease: [0.22, 1, 0.36, 1],
// //     },
// //   },
// // };

// // export default function PopularTopics() {
// //   return (
// //     <section className="py-24 relative overflow-hidden bg-background">
// //       {/* Background Decor */}
// //       <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

// //       <div className="container px-6 mx-auto max-w-7xl">
// //         <div className="flex justify-between items-end mb-12">
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
// //               <Sparkles className="w-4 h-4" />
// //               Learning Path
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
// //               Popular Topics
// //             </h2>
// //             <p className="mt-3 text-muted-foreground/80 max-w-md leading-relaxed italic">
// //               Master the core algorithms through our hand-picked problem sets.
// //             </p>
// //           </motion.div>

// //           <Link
// //             href="/topics"
// //             className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary/80 hover:text-primary transition-colors group"
// //           >
// //             View All Topics
// //             <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
// //               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
// //             </div>
// //           </Link>
// //         </div>

// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="grid grid-cols-1 md:grid-cols-3 gap-8"
// //         >
// //           {topics.map((topic, index) => {
// //             const progress = (topic.problems / topic.totalProblems) * 100;
// //             const topicSlug = topic.name.toLowerCase().replace(/\s+/g, "-");

// //             return (
// //               <motion.div key={index} variants={cardVariants}>
// //                 <Link href={`/topics/${topicSlug}`}>
// //                   <Card
// //                     className={`group relative border border-white/5 bg-card/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-primary/5 ${topic.border} overflow-hidden`}
// //                   >
// //                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

// //                     <CardContent className="p-8 relative z-10">
// //                       <div className="flex items-start justify-between mb-8">
// //                         <div
// //                           className={`p-4 rounded-2xl ${topic.bg} ${topic.color} transition-transform duration-500 group-hover:scale-110 shadow-inner`}
// //                         >
// //                           <topic.icon className="h-7 w-7" />
// //                         </div>
// //                         <div className="text-right text-[10px] font-bold text-muted-foreground/40 tracking-widest uppercase">
// //                           {topic.problems > 0 ? "In Progress" : "Not Started"}
// //                         </div>
// //                       </div>

// //                       <div className="space-y-4">
// //                         <h3 className="font-extrabold text-xl group-hover:text-primary transition-colors">
// //                           {topic.name}
// //                         </h3>

// //                         <div className="space-y-2">
// //                           <div className="flex justify-between text-xs font-medium">
// //                             <span className="text-muted-foreground">
// //                               {topic.problems} / {topic.totalProblems} Solved
// //                             </span>
// //                             <span className="text-primary">
// //                               {Math.round(progress)}%
// //                             </span>
// //                           </div>

// //                           <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
// //                             <motion.div
// //                               initial={{ width: 0 }}
// //                               whileInView={{ width: `${progress}%` }}
// //                               transition={{ duration: 1, delay: 0.5 }}
// //                               className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
// //                             />
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </CardContent>
// //                   </Card>
// //                 </Link>
// //               </motion.div>
// //             );
// //           })}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion, Variants } from "framer-motion";
// import { Layers, BrainCircuit, Zap, ArrowRight, Target } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// const topics = [
//   {
//     name: "Arrays",
//     problems: 2,
//     totalProblems: 10,
//     icon: Layers,
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//     glow: "group-hover:shadow-blue-500/10",
//     border: "group-hover:border-blue-500/30",
//     barColor: "from-blue-600 to-blue-400",
//   },
//   {
//     name: "Dynamic Programming",
//     problems: 1,
//     totalProblems: 15,
//     icon: BrainCircuit,
//     color: "text-purple-500",
//     bg: "bg-purple-500/10",
//     glow: "group-hover:shadow-purple-500/10",
//     border: "group-hover:border-purple-500/30",
//     barColor: "from-purple-600 to-purple-400",
//   },
//   {
//     name: "Greedy",
//     problems: 0,
//     totalProblems: 8,
//     icon: Zap,
//     color: "text-yellow-500",
//     bg: "bg-yellow-500/10",
//     glow: "group-hover:shadow-yellow-500/10",
//     border: "group-hover:border-yellow-500/30",
//     barColor: "from-yellow-600 to-yellow-400",
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function PopularTopics() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       {/* Background Decor - Subtle Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />

//       <div className="container px-6 mx-auto max-w-7xl">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-2"
//           >
//             <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em]">
//               <Target className="w-3 h-3" />
//               Curated Roadmap
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground italic uppercase">
//               Popular <span className="text-blue-500 not-italic">Topics</span>
//             </h2>
//             <p className="text-muted-foreground/60 max-w-md text-sm font-light leading-relaxed">
//               Master core algorithms through our strategically designed problem
//               sets.
//             </p>
//           </motion.div>

//           <Link
//             href="/topics"
//             className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-foreground/50 hover:text-primary transition-all"
//           >
//             View All Tracks
//             <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
//               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </div>
//           </Link>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           {topics.map((topic, index) => {
//             const progress = (topic.problems / topic.totalProblems) * 100;
//             const topicSlug = topic.name.toLowerCase().replace(/\s+/g, "-");

//             return (
//               <motion.div key={index} variants={cardVariants} className="group">
//                 <Link href={`/topics/${topicSlug}`}>
//                   <Card
//                     className={`relative h-full border border-white/[0.05] bg-card/30 backdrop-blur-xl transition-all duration-500 ${topic.border} ${topic.glow} overflow-hidden`}
//                   >
//                     {/* Interior Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//                     <CardContent className="p-8 relative z-10">
//                       <div className="flex items-start justify-between mb-10">
//                         <div
//                           className={`p-4 rounded-2xl ${topic.bg} ${topic.color} ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-white/20`}
//                         >
//                           <topic.icon className="h-6 w-6" />
//                         </div>
//                         <span
//                           className={`text-[10px] font-bold px-3 py-1 rounded-full border border-white/5 bg-white/5 tracking-tighter uppercase ${topic.problems > 0 ? "text-blue-400" : "text-muted-foreground/40"}`}
//                         >
//                           {topic.problems > 0 ? "In Progress" : "Locked"}
//                         </span>
//                       </div>

//                       <div className="space-y-6">
//                         <h3 className="font-bold text-2xl tracking-tight text-white/90 group-hover:text-white transition-colors">
//                           {topic.name}
//                         </h3>

//                         <div className="space-y-3">
//                           <div className="flex justify-between items-end">
//                             <span className="text-[11px] font-medium text-muted-foreground tracking-wider uppercase">
//                               {topic.problems}{" "}
//                               <span className="opacity-40">/</span>{" "}
//                               {topic.totalProblems} Completed
//                             </span>
//                             <span
//                               className={`text-sm font-black ${topic.color}`}
//                             >
//                               {Math.round(progress)}%
//                             </span>
//                           </div>

//                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
//                             <motion.div
//                               initial={{ width: 0 }}
//                               whileInView={{ width: `${progress}%` }}
//                               transition={{ duration: 1.2, ease: "circOut" }}
//                               className={`h-full rounded-full bg-gradient-to-r ${topic.barColor} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { getPopularTopicsWithProgress } from "@/lib/database-actions";
import PopularTopicsClient from "./PopularTopicsClient";

export default async function PopularTopics() {
  const topics = await getPopularTopicsWithProgress();

  if (topics.length === 0) {
    return null;
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto max-w-7xl">
        <PopularTopicsClient topics={topics} />
      </div>
    </section>
  );
}
