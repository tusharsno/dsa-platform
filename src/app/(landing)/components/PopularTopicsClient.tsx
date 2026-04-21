"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getIconComponent } from "@/lib/icon-map";
import type { LucideIcon } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const colorMap: Record<number, { color: string; beamColor: string }> = {
  0: { color: "from-blue-500 to-cyan-400", beamColor: "via-blue-500" },
  1: { color: "from-purple-500 to-pink-500", beamColor: "via-purple-500" },
  2: { color: "from-yellow-500 to-orange-400", beamColor: "via-yellow-500" },
};

interface Topic {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  totalProblems: number;
  solvedProblems: number;
}

interface PopularTopicsClientProps {
  topics: Topic[];
}

export default function PopularTopicsClient({ topics }: PopularTopicsClientProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            Learning Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground italic uppercase">
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 not-italic uppercase">
              Topics
            </span>
          </h2>
        </motion.div>

        <Link
          href="/topics"
          className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-all underline-offset-8 hover:underline"
        >
          Explore All Modules
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {topics.map((topic, index) => {
          const progress =
            topic.totalProblems > 0
              ? (topic.solvedProblems / topic.totalProblems) * 100
              : 0;
          const colors = colorMap[index] || colorMap[0];
          const IconComponent = getIconComponent(topic.icon);

          return (
            <motion.div
              key={topic.id}
              variants={cardVariants}
              className="group relative"
            >
              <Link href={`/topics/${topic.slug}`}>
                <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-card/50 backdrop-blur-sm hover:border-white/20 hover:bg-card/80 transition-all duration-500 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-10">
                    <div
                      className={`relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors.color} p-[1px]`}
                    >
                      <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div
                        className={`absolute inset-0 blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${colors.color}`}
                      />
                    </div>

                    <div className="text-[10px] font-bold text-muted-foreground/30 tracking-widest uppercase italic">
                      {topic.solvedProblems > 0 ? "Active" : "New"}
                    </div>
                  </div>

                  <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors italic uppercase tracking-tight">
                      {topic.name}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between text-[11px] font-mono uppercase tracking-tighter">
                        <span className="text-muted-foreground/60">
                          Progress
                        </span>
                        <span className="text-foreground font-bold">
                          {Math.round(progress)}%
                        </span>
                      </div>

                      <div className="h-[4px] w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${colors.color}`}
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground/40 font-medium">
                        {topic.solvedProblems} / {topic.totalProblems} PROBLEMS
                        SOLVED
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${colors.beamColor} to-transparent`}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
