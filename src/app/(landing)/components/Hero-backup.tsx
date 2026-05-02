"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, Target } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Hero({ 
  stats, 
  userStats 
}: { 
  stats?: { totalProblems: number; totalUsers: number; activeUsers: number };
  userStats?: { totalSolved: number; streak: number; points: number };
}) {
  const { user, isLoaded } = useUser();
  const { totalProblems = 100, totalUsers = 500 } = stats || {};

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-16 pb-16">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center space-y-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Practice • Learn • Excel</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Code Your Way to
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Success
              </motion.span>
            </h1>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Master data structures and algorithms through interactive coding challenges. 
              Join <span className="text-emerald-400 font-semibold">{totalUsers.toLocaleString()}+ developers</span> already improving their skills.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
            >
              <Link href={isLoaded && user ? "/dashboard" : "/auth/sign-up"} className="flex items-center gap-2">
                {isLoaded && user ? "Dashboard" : "Start Free"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold"
            >
              <Link href="/problems">
                Browse Problems
              </Link>
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-16"
          >
            {isLoaded && user && userStats ? (
              // User stats
              [
                { label: "Solved", value: userStats.totalSolved, color: "text-emerald-400" },
                { label: "Streak", value: `${userStats.streak}d`, color: "text-orange-400" },
                { label: "Points", value: userStats.points, color: "text-blue-400" }
              ]
            ) : (
              // Platform stats
              [
                { label: "Problems", value: `${totalProblems}+`, color: "text-emerald-400" },
                { label: "Users", value: `${Math.floor(totalUsers/1000)}k+`, color: "text-blue-400" },
                { label: "Success", value: "94%", color: "text-purple-400" }
              ]
            ).map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-8 text-white/60 text-sm mt-12"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Interactive Editor</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Instant Feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-purple-400" />
              <span>Track Progress</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}