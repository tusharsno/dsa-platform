"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero({ stats }: { stats?: { totalProblems: number; totalUsers: number; activeUsers: number } }) {
  const { totalProblems = 100, totalUsers = 500, activeUsers = 50 } = stats || {};
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* 1. Advanced Mesh Gradient Background - Premium Feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Mesh Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Typography & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                <Cpu className="w-3 h-3" />
                Next-Gen Problem Solving
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                Master DSA. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground/60 to-muted-foreground/20 font-medium italic">
                  Architect your future.
                </span>
              </h1>

              <p className="max-w-md text-base text-muted-foreground/80 leading-relaxed mb-10 mx-auto lg:mx-0">
                Join{" "}
                <span className="text-foreground font-semibold">
                  {totalUsers.toLocaleString()}+ developers
                </span>{" "}
                practicing through{" "}
                <span className="text-primary font-semibold">
                  {totalProblems}+ curated problems
                </span>
                . A high-performance environment for algorithmic mastery.
              </p>

              {/* 2. Interactive Social Proof - Senior UX Detail */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 px-8 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 bg-primary"
                    >
                      <Link
                        href="/auth/sign-up"
                        className="flex items-center gap-2"
                      >
                        Start Coding <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="lg"
                      className="h-12 px-8 rounded-full font-semibold border border-white/5 hover:bg-white/5"
                    >
                      <Link href="/problems">View Problems</Link>
                    </Button>
                  </div>

                  {/* Live Users Indicator - Real Data */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-2 text-[12px] text-muted-foreground/60"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                        >
                          <Users className="w-3 h-3" />
                        </div>
                      ))}
                    </div>
                    <span className="font-medium">
                      <span className="text-emerald-500 animate-pulse">●</span>{" "}
                      {activeUsers}+ active this week
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Advanced Code Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[540px] hidden lg:block"
          >
            {/* Soft Glow Behind Card */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-30" />

            <div className="relative bg-card/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Card Header/Toolbar */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary/80 font-mono bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                  <Database className="w-3.5 h-3.5" />
                  LRU_Cache.cpp
                </div>
              </div>

              {/* Enhanced Code Snippet */}
              <div className="space-y-2 font-mono text-[13px] leading-relaxed relative">
                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right selection:bg-transparent">
                    01
                  </span>
                  <span className="text-blue-400">
                    class{" "}
                    <span className="text-foreground">LRUCache &#123;</span>
                  </span>
                </div>

                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    02
                  </span>
                  <span className="pl-4 text-muted-foreground/40 italic">
                    // Optimized Hash-Map access
                  </span>
                </div>

                {/* The Animated High-Light Line */}
                <div className="relative group">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent border-l-2 border-primary z-0"
                  />

                  {/* Tooltip on Line 04 - Premium Detail */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-md text-[10px] font-bold text-primary-foreground shadow-xl z-20 pointer-events-none"
                  >
                    O(1) Time Complexity
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                  </motion.div>

                  <div className="flex gap-6 px-4 relative z-10 py-1">
                    <span className="text-primary/60 w-4 text-right font-bold">
                      04
                    </span>
                    <span className="pl-4 text-foreground font-semibold group-hover:text-primary transition-colors cursor-pointer">
                      unordered_map&lt;int, Node*&gt; m;
                    </span>
                  </div>
                </div>

                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    05
                  </span>
                  <span className="pl-4 text-blue-400">
                    void{" "}
                    <span className="text-foreground">
                      put(int k, int v) &#123;
                    </span>
                  </span>
                </div>

                <div className="flex gap-6 px-4 opacity-40">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    06
                  </span>
                  <span className="pl-8 text-muted-foreground">
                    if (m.find(k) != m.end()) ...
                  </span>
                </div>
              </div>

              {/* Floating Performance Tag */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl p-3 rounded-xl flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <div className="text-[11px] font-bold text-emerald-500">
                  SYSTEM OPTIMIZED
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Tags - Subtle & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-10"
        >
          {[
            "System Design",
            "Graph Theory",
            "Dynamic Programming",
            "Concurrency",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 group cursor-default"
            >
              <Zap className="w-3 h-3 text-primary scale-0 group-hover:scale-100 transition-transform" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-primary">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
