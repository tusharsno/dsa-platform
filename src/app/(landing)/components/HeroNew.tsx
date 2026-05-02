"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

interface HeroStats {
  totalProblems: number;
  totalUsers: number;
  totalTopics: number;
}

interface HeroNewProps {
  stats?: HeroStats;
}

export default function HeroNew({ stats }: HeroNewProps) {
  const { user, isLoaded } = useUser();

  const { totalProblems = 100, totalUsers = 500, totalTopics = 8 } = stats || {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Merge Sort visualization data
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = [3, 9, 10, 27, 38, 43, 82];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-20">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950 z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 w-fit hover:bg-emerald-500/15 transition-colors mx-auto">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">
                  Visual Learning Platform
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Prisma Style */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Master algorithms
                <br />
                <span className="text-white/40">
                  the visual way
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto font-light">
                Learn data structures and algorithms through interactive visualizations.
                <br className="hidden md:block" />
                Built for developers who learn by doing.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={isLoaded && user ? "/dashboard" : "/auth/sign-up"}
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoaded && user ? "Go to Dashboard" : "Get Started"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/problems"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-lg font-semibold text-base backdrop-blur-sm transition-all duration-300"
                >
                  Explore Problems
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats - Minimal */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-8 pt-12 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{totalProblems}+</span>
                <span>problems</span>
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{totalUsers}+</span>
                <span>developers</span>
              </div>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{totalTopics}</span>
                <span>topics</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            min-height: auto;
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
}
