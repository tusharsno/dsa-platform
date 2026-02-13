// 09/02/2026
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py-20 px-4">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-24"
//         >
//           {/* Subtle Background Pattern */}
//           <div className="absolute inset-0 -z-10 opacity-10 [background:radial-gradient(circle_at_center,_#fff_1px,_transparent_0)] [background-size:24px_24px]" />

//           <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
//             Ready to Start Your DSA Journey?
//           </h2>
//           <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100/80">
//             Join thousands of students learning data structures and algorithms.
//             Track your progress and improve your problem-solving skills.
//           </p>
//           <div className="mt-10 flex items-center justify-center">
//             <Link href="/auth/sign-up">
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="h-14 px-10 text-lg font-bold hover:bg-white hover:text-primary transition-all"
//               >
//                 Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// 10/02/2026
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sparkles, Rocket } from "lucide-react";
// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py-24 relative overflow-hidden bg-[#020617]">
//       {/* Background Decorative Blobs */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

//       <div className="container px-6 mx-auto max-w-5xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl backdrop-blur-md"
//         >
//           {/* Internal Decorative Grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

//           <div className="relative z-10">
//             <motion.div
//               initial={{ y: 10, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
//             >
//               <Rocket className="w-3 h-3" />
//               Limited Beta Access
//             </motion.div>

//             <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 leading-[1.1]">
//               Ready to <span className="text-primary">elevate</span> your <br />
//               coding journey?
//             </h2>

//             <p className="text-gray-400 max-w-xl mx-auto text-lg mb-12 font-medium leading-relaxed">
//               Join a community of elite developers mastering algorithms through
//               focused, systematic practice. Your future career starts with a
//               single line of code.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//               <Button
//                 asChild
//                 size="lg"
//                 className="h-14 px-10 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all active:scale-95 bg-primary hover:bg-primary/90"
//               >
//                 <Link href="/auth/sign-up" className="flex items-center gap-2">
//                   Get Started for Free <ArrowRight className="w-5 h-5" />
//                 </Link>
//               </Button>

//               <Link
//                 href="/problems"
//                 className="group flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors"
//               >
//                 Browse Problems
//                 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>
//           </div>

//           {/* Floating Accents */}
//           <div className="absolute top-10 right-10 opacity-20 hidden md:block">
//             <Sparkles className="w-8 h-8 text-primary animate-pulse" />
//           </div>
//           <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
//             <Sparkles className="w-6 h-6 text-primary animate-bounce" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ChevronRight import missing fix
// import { ChevronRight } from "lucide-react";

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Subtle Glow - Reduced Size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] border border-white/[0.03] bg-[#0A0C14]/40 backdrop-blur-sm p-10 md:p-16 text-center overflow-hidden shadow-2xl"
        >
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10">
            {/* Title - Reduced from 6xl to 4xl/5xl to balance with Hero */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Ready to Start Your <br />
              <span className="text-primary">DSA Journey?</span>
            </h2>

            {/* Description - Made more compact */}
            <p className="max-w-lg mx-auto text-gray-400 text-sm md:text-base mb-10 leading-relaxed">
              Join thousands of students learning data structures and
              algorithms. Track your progress and improve your problem-solving
              skills today.
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-full font-bold text-base shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 bg-primary text-primary-foreground"
              >
                <Link href="/auth/sign-up" className="flex items-center gap-2">
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Minimal Trust Indicator */}
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 text-[11px] font-bold uppercase tracking-widest">
              <UserPlus className="w-3 h-3 text-primary/50" />
              <span>Free forever for early users</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
