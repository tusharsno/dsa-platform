// 09/02/2026
// "use client";

// import { motion } from "framer-motion";
// import { Layers, BrainCircuit, Zap, ArrowRight } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// const topics = [
//   {
//     name: "Arrays",
//     problems: 2,
//     icon: Layers,
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//   },
//   {
//     name: "Dynamic Programming",
//     problems: 1,
//     icon: BrainCircuit,
//     color: "text-purple-500",
//     bg: "bg-purple-500/10",
//   },
//   {
//     name: "Greedy",
//     problems: 0,
//     icon: Zap,
//     color: "text-yellow-500",
//     bg: "bg-yellow-500/10",
//   },
// ];

// export default function PopularTopics() {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container px-4 mx-auto">
//         <div className="flex justify-between items-end mb-10">
//           <div>
//             <h2 className="text-3xl font-bold tracking-tight">
//               Popular Topics
//             </h2>
//             <p className="mt-2 text-muted-foreground italic">
//               Start with the fundamentals or jump to advanced concepts
//             </p>
//           </div>
//           <Link
//             href="/topics"
//             className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
//           >
//             View All Topics{" "}
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {topics.map((topic, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -5 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Card className="border border-border/50 bg-card/40 backdrop-blur-sm shadow-sm">
//                 <CardContent className="p-6 flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className={`p-3 rounded-xl ${topic.bg}`}>
//                       <topic.icon className={`h-6 w-6 ${topic.color}`} />
//                     </div>
//                     <h3 className="font-bold text-lg">{topic.name}</h3>
//                   </div>
//                   <span className="text-sm text-muted-foreground">
//                     {topic.problems} problems
//                   </span>
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
import { Layers, BrainCircuit, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const topics = [
  {
    name: "Arrays",
    problems: 2,
    totalProblems: 10,
    icon: Layers,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    name: "Dynamic Programming",
    problems: 1,
    totalProblems: 15,
    icon: BrainCircuit,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    name: "Greedy",
    problems: 0,
    totalProblems: 8,
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
  },
];

// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function PopularTopics() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-4 h-4" />
              Learning Path
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Popular Topics
            </h2>
            <p className="mt-3 text-muted-foreground/80 max-w-md leading-relaxed italic">
              Master the core algorithms through our hand-picked problem sets.
            </p>
          </motion.div>

          <Link
            href="/topics"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary/80 hover:text-primary transition-colors group"
          >
            View All Topics
            <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {topics.map((topic, index) => {
            const progress = (topic.problems / topic.totalProblems) * 100;

            return (
              <motion.div key={index} variants={cardVariants}>
                <Link
                  href={`/topics/${topic.name.toLowerCase().replace(" ", "-")}`}
                >
                  <Card
                    className={`group relative border border-white/5 bg-card/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-primary/5 ${topic.border} overflow-hidden`}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div
                          className={`p-4 rounded-2xl ${topic.bg} ${topic.color} transition-transform duration-500 group-hover:scale-110 shadow-inner`}
                        >
                          <topic.icon className="h-7 w-7" />
                        </div>
                        <div className="text-right text-[10px] font-bold text-muted-foreground/40 tracking-widest uppercase">
                          {topic.problems > 0 ? "In Progress" : "Not Started"}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-extrabold text-xl group-hover:text-primary transition-colors">
                          {topic.name}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-muted-foreground">
                              {topic.problems} / {topic.totalProblems} Solved
                            </span>
                            <span className="text-primary">
                              {Math.round(progress)}%
                            </span>
                          </div>

                          {/* Premium Progress Bar */}
                          <div className="h-1.5 w-full bg-muted/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${progress}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className={`h-full rounded-full bg-gradient-to-r from-primary to-primary/60`}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
