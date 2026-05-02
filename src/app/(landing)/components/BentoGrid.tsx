"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, BookOpen, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Monaco Code Editor",
    description: "Professional VS Code-powered editor with syntax highlighting, auto-completion, and instant test execution.",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
  },
  {
    icon: TrendingUp,
    title: "GitHub-Style Heatmap",
    description: "Visualize your daily coding activity. Track streaks, maintain consistency, and watch your progress grow.",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
  },
  {
    icon: BookOpen,
    title: "Smart Bookmarking",
    description: "Save problems for later practice. Organize your learning journey with one-click bookmarks.",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
  },
  {
    icon: Zap,
    title: "Real-Time Feedback",
    description: "Run test cases instantly with detailed results. See execution time, memory usage, and error messages. BeeCrowd-style confetti celebrations on successful submissions.",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
    large: true,
  },
  {
    icon: Target,
    title: "Company-Tagged Problems",
    description: "Practice questions asked by Google, Amazon, Microsoft, and top tech companies. Filter by difficulty, topics, and interview patterns to ace your next coding interview.",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10",
    large: true,
  },
];

export default function BentoGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-6 pb-16 lg:pb-20">
      {/* Pure black background - no gradient */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        {/* Bento Grid - No header needed now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Top Row - 3 small boxes */}
          {features.slice(0, 3).map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`relative h-64 bg-gradient-to-br ${feature.gradient} border ${feature.border} rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content with gradient fade */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    {feature.description}
                  </p>
                  
                  {/* Gradient fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                </div>

                {/* Bottom fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}

          {/* Bottom Row - 2 large boxes */}
          {features.slice(3).map((feature, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className={`group relative ${i === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className={`relative h-80 bg-gradient-to-br ${feature.gradient} border ${feature.border} rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content with gradient fade */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed font-light max-w-lg">
                    {feature.description}
                  </p>
                  
                  {/* Gradient fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                </div>

                {/* Bottom fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
