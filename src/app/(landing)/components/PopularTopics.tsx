"use client";

import { motion } from "framer-motion";
import { Layers, BrainCircuit, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const topics = [
  { name: "Arrays", problems: 2, icon: Layers, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Dynamic Programming", problems: 1, icon: BrainCircuit, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Greedy", problems: 0, icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
];

export default function PopularTopics() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Popular Topics</h2>
            <p className="mt-2 text-muted-foreground italic">Start with the fundamentals or jump to advanced concepts</p>
          </div>
          <Link href="/topics" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:underline group">
            View All Topics <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border border-border/50 bg-card/40 backdrop-blur-sm shadow-sm">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${topic.bg}`}>
                      <topic.icon className={`h-6 w-6 ${topic.color}`} />
                    </div>
                    <h3 className="font-bold text-lg">{topic.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{topic.problems} problems</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}