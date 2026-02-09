"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 pb-20 md:pt-28 md:pb-28 bg-background overflow-hidden">
      
      {/* Elegant Radial Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="container relative z-10 text-center mx-auto">
        
        {/* Icon Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <div className="group relative p-5 bg-card border border-border rounded-3xl shadow-lg shadow-primary/5 transition-all duration-300 hover:border-primary/50">
            <Code2 className="w-12 h-12 text-primary" />

            <div className="absolute -inset-1 bg-primary/25 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-[90px] font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground mb-8"
        >
          Master DSA.<br />
          <span className="text-muted-foreground/50">Build the future.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-muted-foreground mb-12"
        >
          A highly opinionated, interactive learning platform crafted for
          developers who are serious about mastering algorithms and problem solving.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="h-16 px-12 rounded-full text-lg font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl active:scale-95 transition-all"
          >
            Start Learning
          </Button>

          <button className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors group">
            Browse Problems
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </section>
  );
}
