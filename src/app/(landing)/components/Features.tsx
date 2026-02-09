"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// আপনার স্ক্রিনশট (image_e05d54.png) অনুযায়ী ডেটা সেটআপ
const features = [
  {
    title: "Topic-wise Learning",
    description: "Master DSA concepts through structured topic guides covering Arrays, Trees, Graphs, and more.",
    icon: BookOpen,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Interactive Coding",
    description: "Write and submit Python code directly in the browser with instant feedback.",
    icon: Code2,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Track Progress",
    description: "Monitor your learning journey with detailed progress tracking and statistics.",
    icon: Target,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    title: "Skill Progression",
    description: "Start with easy problems and gradually tackle medium and hard challenges.",
    icon: TrendingUp,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        {/* হেডার সেকশন */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A complete learning platform designed to help you master DSA concepts and ace technical interviews.
          </p>
        </div>

        {/* ফিচার কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-xl ${feature.iconBg} dark:bg-blue-900/20 flex items-center justify-center mb-6`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor} dark:text-blue-400`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}