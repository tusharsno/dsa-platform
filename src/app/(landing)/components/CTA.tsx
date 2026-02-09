"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-24"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 -z-10 opacity-10 [background:radial-gradient(circle_at_center,_#fff_1px,_transparent_0)] [background-size:24px_24px]" />
          
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Start Your DSA Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100/80">
            Join thousands of students learning data structures and algorithms. Track your progress and improve your problem-solving skills.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold hover:bg-white hover:text-primary transition-all">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}