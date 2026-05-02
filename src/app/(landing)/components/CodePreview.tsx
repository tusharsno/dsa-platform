"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const codeExample = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`;

const features = [
  "Monaco editor with VS Code features",
  "Instant test case execution",
  "Performance metrics tracking",
  "BeeCrowd-style celebrations",
];

export default function CodePreview() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 lg:py-20">
      {/* Pure black background - no gradient */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Code like a pro.
                <br />
                <span className="text-white/40">Submit with confidence.</span>
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed font-light max-w-lg">
                Write solutions in our Monaco-powered editor. Run test cases instantly, see execution time and memory usage, celebrate success with confetti.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-light">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Code Editor Mock */}
            <div className="relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-white/50 font-mono ml-2">solution.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white font-medium">
                    JavaScript
                  </div>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto bg-zinc-900">
                <pre className="text-white/80 leading-relaxed">
                  <code>
                    <span className="text-purple-400">function</span> <span className="text-yellow-300">binarySearch</span>(<span className="text-orange-300">arr</span>, <span className="text-orange-300">target</span>) {'{'}
                    {"\n  "}<span className="text-purple-400">let</span> <span className="text-blue-300">left</span> = <span className="text-green-400">0</span>;
                    {"\n  "}<span className="text-purple-400">let</span> <span className="text-blue-300">right</span> = <span className="text-orange-300">arr</span>.<span className="text-blue-300">length</span> - <span className="text-green-400">1</span>;
                    {"\n  "}
                    {"\n  "}<span className="text-purple-400">while</span> (<span className="text-blue-300">left</span> {'<='} <span className="text-blue-300">right</span>) {'{'}
                    {"\n    "}<span className="text-purple-400">const</span> <span className="text-blue-300">mid</span> = <span className="text-blue-300">Math</span>.<span className="text-yellow-300">floor</span>((<span className="text-blue-300">left</span> + <span className="text-blue-300">right</span>) / <span className="text-green-400">2</span>);
                    {"\n    "}
                    {"\n    "}<span className="text-purple-400">if</span> (<span className="text-orange-300">arr</span>[<span className="text-blue-300">mid</span>] === <span className="text-orange-300">target</span>) {'{'}
                    {"\n      "}<span className="text-purple-400">return</span> <span className="text-blue-300">mid</span>;
                    {"\n    "}{'}'}  
                    {"\n    "}
                    {"\n    "}<span className="text-purple-400">if</span> (<span className="text-orange-300">arr</span>[<span className="text-blue-300">mid</span>] {'<'} <span className="text-orange-300">target</span>) {'{'}
                    {"\n      "}<span className="text-blue-300">left</span> = <span className="text-blue-300">mid</span> + <span className="text-green-400">1</span>;
                    {"\n    "}{'}'} <span className="text-purple-400">else</span> {'{'}
                    {"\n      "}<span className="text-blue-300">right</span> = <span className="text-blue-300">mid</span> - <span className="text-green-400">1</span>;
                    {"\n    "}{'}'}  
                    {"\n  "}{'}'}  
                    {"\n  "}
                    {"\n  "}<span className="text-purple-400">return</span> -<span className="text-green-400">1</span>;
                    {"\n"}{'}'}
                  </code>
                </pre>
              </div>

              {/* Bottom Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-zinc-900">
                <div className="flex items-center gap-4 text-xs text-white/50">
                  <span>Line 1, Col 1</span>
                  <span>•</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs text-white">Ready</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-white border border-white/20 rounded-lg px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm font-semibold text-black">All tests passed</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
