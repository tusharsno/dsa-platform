"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useMemo } from "react";
import { DEFAULT_TOTAL_USERS } from "@/lib/constants";

export default function Hero({ stats }: { stats?: { totalUsers: number; totalProblems: number; totalTopics: number } }) {
  const { user, isLoaded } = useUser();
  const { totalUsers = DEFAULT_TOTAL_USERS, totalProblems = 100, totalTopics = 8 } = stats || {};

  const ctaHref = useMemo(() => {
    return isLoaded && user ? "/dashboard" : "/auth/sign-up";
  }, [isLoaded, user]);

  const ctaText = useMemo(() => {
    return isLoaded && user ? "Go to Dashboard" : "Start Free";
  }, [isLoaded, user]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black min-h-[85vh]"
      aria-label="Hero section"
    >
      {/* Minimal background - Prisma Style */}
      <div className="absolute inset-0 z-0">
        {/* Gradient from light top to dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* DSA Formulas/Code Background - Fading from top to bottom */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient mask for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />
          
          {/* Top Section - Full Opacity */}
          <div className="opacity-40">
            <div className="absolute top-20 left-10 text-white/50 font-mono text-base rotate-[-5deg]">
              <div>mid = (left + right) / 2</div>
              <div>O(log n)</div>
            </div>
            
            <div className="absolute top-32 right-20 text-white/50 font-mono text-2xl rotate-[8deg]">
              O(n²)
            </div>
            
            <div className="absolute top-16 left-1/3 text-white/50 font-mono text-xs rotate-[4deg]">
              <div>merge(left, right)</div>
              <div>// Divide & Conquer</div>
            </div>
            
            <div className="absolute top-1/4 left-1/2 text-white/50 font-mono text-sm rotate-[-2deg]">
              [1, 2, 3, 4, 5]
            </div>
            
            <div className="absolute top-24 right-1/4 text-white/50 font-mono text-xs rotate-[-7deg]">
              <div>hash = (key % size)</div>
              <div>// Hash Function</div>
            </div>
            
            <div className="absolute top-1/4 right-16 text-white/50 font-mono text-xs rotate-[7deg]">
              <div>queue.enqueue(node)</div>
              <div>// BFS Traversal</div>
            </div>
          </div>
          
          {/* Middle Section - Medium Opacity */}
          <div className="opacity-30">
            <div className="absolute top-1/3 left-1/4 text-white/50 font-mono text-sm rotate-[-3deg]">
              <div>function dfs(node) {'{'}</div>
              <div>  visited[node] = true</div>
              <div>{'}'}</div>
            </div>
            
            <div className="absolute top-1/2 right-1/3 text-white/50 font-mono text-base rotate-[5deg]">
              <div>quickSort(arr)</div>
              <div>O(n log n)</div>
            </div>
            
            <div className="absolute top-1/2 left-12 text-white/50 font-mono text-sm rotate-[-6deg]">
              <div>stack.push(x)</div>
              <div>stack.pop()</div>
            </div>
            
            <div className="absolute top-1/3 right-1/5 text-white/50 font-mono text-xs rotate-[-6deg]">
              <div>// Greedy Choice</div>
              <div>maxProfit += prices[i]</div>
            </div>
            
            <div className="absolute top-2/3 left-1/5 text-white/50 font-mono text-xs rotate-[4deg]">
              <div>backtrack(path)</div>
              <div>// Explore all paths</div>
            </div>
            
            <div className="absolute top-2/3 left-1/4 text-white/50 font-mono text-xs rotate-[8deg]">
              <div>while (left {'<'} right) {'{'}</div>
              <div>  // Two Pointers</div>
            </div>
            
            <div className="absolute top-2/3 right-1/4 text-white/50 font-mono text-sm rotate-[6deg]">
              2^n - 1
            </div>
          </div>
          
          {/* Bottom Section - Low Opacity */}
          <div className="opacity-20">
            <div className="absolute bottom-1/3 left-1/3 text-white/50 font-mono text-sm rotate-[-8deg]">
              <div>dp[i] = dp[i-1] + dp[i-2]</div>
              <div>// Fibonacci</div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 text-white/50 font-mono text-base rotate-[3deg]">
              <div>dist[v] = dist[u] + w</div>
              <div>// Dijkstra</div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/2 text-white/50 font-mono text-sm rotate-[-4deg]">
              factorial(n) = n * factorial(n-1)
            </div>
            
            <div className="absolute bottom-1/3 left-16 text-white/50 font-mono text-xs rotate-[5deg]">
              <div>node.next = newNode</div>
              <div>// LinkedList</div>
            </div>
            
            <div className="absolute bottom-1/3 right-20 text-white/50 font-mono text-sm rotate-[-3deg]">
              <div>height = 1 + max(left, right)</div>
              <div>// Tree Height</div>
            </div>
            
            <div className="absolute bottom-1/5 left-1/4 text-white/50 font-mono text-sm rotate-[-5deg]">
              <div>inorder(root.left)</div>
              <div>visit(root)</div>
            </div>
            
            <div className="absolute bottom-1/2 right-1/5 text-white/50 font-mono text-base rotate-[-4deg]">
              n! / (n-r)!
            </div>
            
            <div className="absolute bottom-1/4 right-1/3 text-white/50 font-mono text-xs rotate-[3deg]">
              <div>sum += arr[right]</div>
              <div>// Sliding Window</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pt-20 pb-0">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl pb-4">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Main Heading - Prisma Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Master algorithms
                  <br />
                  <span className="text-white/50">
                    the visual way
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto font-light">
                  Solve curated problems, track progress with GitHub-style heatmaps,
                  <br className="hidden md:block" />
                  and ace interviews with real company questions.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-10 py-3.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label={ctaText}
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/problems"
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-10 py-3.5 rounded-lg font-semibold text-sm backdrop-blur-sm transition-all duration-300"
                    aria-label="Explore problems"
                  >
                    <Code2 className="w-4 h-4" />
                    Explore Problems
                  </Link>
                </motion.div>
              </motion.div>

              {/* Everything you need section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-12 space-y-4"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  Everything you need <span className="text-white/50">to master DSA</span>
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
