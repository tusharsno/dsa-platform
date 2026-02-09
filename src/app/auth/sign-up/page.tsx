"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, Sparkles, User, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-background py-12 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-card p-10 rounded-3xl border border-border shadow-xl shadow-black/5 dark:shadow-none"
      >
        <div className="text-center">
          <div className="inline-flex p-3 rounded-2xl bg-primary mb-4 shadow-lg shadow-primary/20">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Create Account</h2>
          <p className="mt-2 text-muted-foreground">Join the elite club of DSA masters</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/80">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/80">Preferred Language</label>
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
              <option>Python</option>
              <option>C++</option>
              <option>Java</option>
              <option>JavaScript</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/80">Email</label>
            <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground/80">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
            Join Platform <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already a member? <Link href="/auth/sign-in" className="text-primary font-bold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}