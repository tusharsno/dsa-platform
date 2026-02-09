"use client";

import { motion } from "framer-motion";
import { Github, Mail, Lock, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link"; // Link ইমপোর্ট নিশ্চিত করা হয়েছে

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-background py-12 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-card p-10 rounded-3xl border border-border shadow-xl shadow-black/5 dark:shadow-none"
      >
        <div className="text-center">
          <div className="inline-flex p-3 rounded-2xl bg-primary mb-4 shadow-lg shadow-primary/20">
            <Code2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-muted-foreground">Sign in to continue your DSA journey</p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-border rounded-xl hover:bg-muted transition-all font-medium text-foreground">
            <Github size={20} /> Continue with GitHub
          </button>
          
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-muted-foreground text-xs uppercase font-bold">Or email</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-foreground/80">Email</label>
              <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-foreground/80">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95">
              Sign In <ArrowRight size={18} />
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          New here? <Link href="/auth/sign-up" className="text-primary font-bold hover:underline">Create an account</Link>
        </p>
      </motion.div>
    </div>
  );
}