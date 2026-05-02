"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";
import { getIconComponent } from "@/lib/icon-map";
import { useUser } from "@clerk/nextjs";

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
  const { user, isLoaded } = useUser();

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
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
              LEARNING PATH
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-4">
            Popular topics.
            <br />
            <span className="text-white/40">Start learning today.</span>
          </h2>
          
          <p className="text-white/60 max-w-md text-base leading-relaxed font-light">
            {isLoaded && user 
              ? "Continue your learning journey with these popular topics."
              : "Master core algorithms through our strategically designed problem sets."
            }
          </p>
        </motion.div>

        <Link
          href="/topics"
          className="group flex items-center gap-3 text-sm font-semibold text-white hover:gap-4 transition-all"
        >
          {isLoaded && user ? "View All Topics" : "Explore Topics"}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Topics Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {topics.map((topic, index) => {
          const progress =
            topic.totalProblems > 0
              ? (topic.solvedProblems / topic.totalProblems) * 100
              : 0;
          const IconComponent = getIconComponent(topic.icon);

          return (
            <motion.div
              key={topic.id}
              variants={cardVariants}
              className="group relative"
            >
              <Link href={`/topics/${topic.slug}`}>
                <div className="h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:from-white/8 hover:to-white/[0.03] transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-xl min-h-[280px]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>

                    <motion.div 
                      className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs font-bold text-white tracking-wider">
                        {topic.solvedProblems > 0 ? "ACTIVE" : "NEW"}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-white/95 transition-colors leading-tight">
                      {topic.name}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/60 font-medium">
                          Progress
                        </span>
                        <span className="text-xl font-black text-white">
                          {Math.round(progress)}%
                        </span>
                      </div>

                      <div className="relative">
                        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                            className="h-full rounded-full bg-gradient-to-r from-white/80 via-white/60 to-white/40 shadow-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-white/70 font-light">
                          <span className="font-bold text-white">{topic.solvedProblems}</span> / {topic.totalProblems} solved
                        </p>
                        
                        <motion.div
                          className="flex items-center gap-2 text-sm font-semibold text-white/80 opacity-0 group-hover:opacity-100 transition-all"
                          initial={{ x: -10 }}
                          whileInView={{ x: 0 }}
                        >
                          <span>Start</span>
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Premium accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
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
