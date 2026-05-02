// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, UserPlus } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py-20 dark:bg-background relative overflow-hidden">
//       {/* Background Subtle Glow - Reduced Size */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="container px-6 mx-auto max-w-4xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="relative rounded-[2rem] border border-white/[0.03] bg-[#0A0C14]/40 backdrop-blur-sm p-10 md:p-16 text-center overflow-hidden shadow-2xl"
//         >
//           {/* Subtle Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

//           <div className="relative z-10">
//             {/* Title - Reduced from 6xl to 4xl/5xl to balance with Hero */}
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
//               Ready to Start Your <br />
//               <span className="text-primary">DSA Journey?</span>
//             </h2>

//             {/* Description - Made more compact */}
//             <p className="max-w-lg mx-auto text-gray-400 text-sm md:text-base mb-10 leading-relaxed">
//               Join thousands of students learning data structures and
//               algorithms. Track your progress and improve your problem-solving
//               skills today.
//             </p>

//             {/* <div className="flex justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="h-12 px-8 rounded-full font-bold text-base shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 bg-primary text-primary-foreground"
//               >
//                 <Link href="/auth/sign-up" className="flex items-center gap-2">
//                   Create Free Account <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div> */}
//             {/* Ultra-Premium Glass Button */}
//             <div className="flex justify-center">
//               <Link href="/auth/sign-up" className="group/btn relative">
//                 {/* Subtle Outer Glow */}
//                 <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition duration-500" />

//                 <button className="relative flex items-center gap-3 px-8 h-14 bg-[#0A0C14] border border-white/10 hover:border-primary/50 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-2xl overflow-hidden">
//                   {/* Sliding Shine Effect */}
//                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform" />
//                   GET STARTED FOR FREE
//                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
//                 </button>
//               </Link>
//             </div>

//             {/* Minimal Trust Indicator */}
//             <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-[11px] font-bold uppercase tracking-widest">
//               <UserPlus className="w-3 h-3 text-primary/50" />
//               <span>Free forever for early users</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Zap } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-5xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative rounded-[2.5rem] border border-white/[0.05] bg-card/20 backdrop-blur-sm p-12 md:p-20 text-center overflow-hidden group"
//         >
//           {/* Subtle Background Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

//           <div className="relative z-10">
//             {/* Minimal Badge */}
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
//               <Zap className="w-3 h-3 text-primary" />
//               Join the Elite
//             </div>

//             {/* Title - Restored your title with my premium styling */}
//             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 leading-[1] italic uppercase">
//               Ready to Start Your <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary/80 to-white/50 not-italic uppercase">
//                 DSA Journey?
//               </span>
//             </h2>

//             <p className="max-w-xl mx-auto text-muted-foreground/50 text-sm md:text-base mb-12 font-light leading-relaxed tracking-wide">
//               Track your progress and improve your problem-solving skills today.
//               Access 80+ challenges curated for high-performance learning.
//             </p>

//             {/* Ultra-Premium Glass Link */}
//             <div className="flex justify-center">
//               <Link
//                 href="/auth/sign-up"
//                 className="group/btn relative flex items-center gap-3 px-8 h-14 bg-[#0A0C14] border border-white/10 hover:border-primary/50 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-2xl overflow-hidden"
//               >
//                 <div className="absolute -inset-0.5 bg-primary/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition duration-500 -z-10" />
//                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
//                 Create Free Account
//                 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-primary" />
//               </Link>
//             </div>

//             {/* Social Proof Line */}
//             <div className="mt-12 flex items-center justify-center gap-4">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="w-6 h-6 rounded-full border-2 border-[#0A0C14] bg-muted/20"
//                   />
//                 ))}
//               </div>
//               <p className="text-[10px] font-bold text-muted-foreground/30 uppercase tracking-widest">
//                 80+ problems solved today
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <style jsx global>{`
//         @keyframes shimmer {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(100%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Users } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

interface CTAProps {
  stats?: {
    totalUsers: number;
    activeUsers: number;
    totalProblems: number;
  };
}

export default function CTA({ stats }: CTAProps) {
  const [mounted, setMounted] = useState(false);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { totalUsers = 0, activeUsers = 0, totalProblems = 0 } = stats || {};
  const displayUsers = Math.max(totalUsers, 1);
  const displayActive = Math.max(activeUsers, 1);

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-12 md:p-20 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-500">
            <div className="relative z-10">
              {/* Header Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium shadow-lg mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-3 h-3 text-white/60" />
                </motion.div>
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-semibold tracking-wide">
                  {isLoaded && user ? "CONTINUE YOUR JOURNEY" : "START YOUR JOURNEY"}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                className="text-4xl md:text-5xl font-black tracking-tight text-white mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {isLoaded && user ? (
                  <>
                    Keep building.
                    <br />
                    <span className="text-white/40">
                      Keep growing.
                    </span>
                  </>
                ) : (
                  <>
                    Start your journey.
                    <br />
                    <span className="text-white/40">
                      Master DSA today.
                    </span>
                  </>
                )}
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="max-w-2xl mx-auto text-white/60 text-base md:text-lg mb-12 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {isLoaded && user ? (
                  `Continue solving problems and tracking progress. Join ${displayUsers.toLocaleString()}+ developers mastering algorithms.`
                ) : (
                  `Join ${displayUsers.toLocaleString()}+ developers. Access ${totalProblems}+ curated problems and track your progress.`
                )}
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={isLoaded && user ? "/dashboard" : "/auth/sign-up"}
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-black border-0 rounded-full font-bold text-base shadow-xl shadow-white/15 hover:shadow-white/25 transition-all duration-300 overflow-hidden"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Cpu className="w-5 h-5 text-black" />
                    </motion.div>
                    {isLoaded && user ? "Go to Dashboard" : "Start Coding Free"}
                    <motion.div
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    >
                      <ArrowRight className="w-5 h-5 text-black" />
                    </motion.div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <Users className="w-3 h-3 text-white" />
                    </motion.div>
                  ))}
                </div>
                <span className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-white/60 text-sm font-light">
                    {isLoaded && user ? 
                      `${displayActive}+ developers coding right now` : 
                      `${displayUsers.toLocaleString()}+ developers already joined`
                    }
                  </span>
                </span>
              </motion.div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Premium accent line */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
