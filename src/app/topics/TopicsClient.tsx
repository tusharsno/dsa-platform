"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  order: number;
  _count?: {
    problems: number;
  };
}

export default function TopicsClient({ topics }: { topics: Topic[] }) {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 selection:bg-primary/30 relative overflow-hidden transition-colors duration-300">
      {/* Background Mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-6 mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] bg-black/[0.02] dark:bg-white/[0.03] text-cyan-600 dark:text-cyan-400 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                Structured Learning Path
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase leading-[0.85] text-zinc-900 dark:text-white">
                DSA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 not-italic">
                  TOPICS
                </span>
              </h1>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400/70 text-lg max-w-2xl font-light mt-6 leading-relaxed">
              Master the fundamentals of data structures and algorithms with our
              carefully curated structured learning paths.
            </p>
          </motion.div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
            >
              <Link href={`/topics/${topic.slug}`}>
                <div className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-2xl p-6 hover:border-primary/50 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{topic.icon || "📚"}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {topic.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {topic.description || "Learn and practice problems"}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">
                      {topic._count?.problems || 0} problems
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {topics.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 dark:text-zinc-400">
              No topics available yet. Run the seed script to populate data.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
