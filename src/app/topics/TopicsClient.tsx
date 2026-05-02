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
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="container px-6 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Topics
            </h1>

            <p className="text-white/80 text-lg max-w-2xl">
              Master data structures and algorithms with our curated learning paths.
            </p>
          </motion.div>
        </div>

        {/* Topics List - NextJS Blog Style */}
        <div className="space-y-0 border-t border-white/10">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Link href={`/topics/${topic.slug}`}>
                <div className="group border-b border-white/10 py-8 hover:bg-white/5 transition-colors duration-200 px-4 -mx-4">
                  <div className="flex items-start justify-between">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-white/80 transition-colors">
                        {topic.name}
                      </h2>

                      {/* Description */}
                      <p className="text-white/75 text-base mb-3 line-clamp-2">
                        {topic.description || "Learn and practice problems"}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>{topic._count?.problems || 0} problems</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-white/80" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {topics.length === 0 && (
          <div className="text-center py-20 border-t border-white/10">
            <p className="text-white/70">
              No topics available yet. Run the seed script to populate data.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
