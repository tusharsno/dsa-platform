// Date: 09/02/2026

// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2 } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 pb-20 md:pt-28 md:pb-28 bg-background overflow-hidden">

//       {/* Elegant Radial Grid Background */}
//       <div
//         className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
//           backgroundSize: "38px 38px",
//         }}
//       />

//       <div className="container relative z-10 text-center mx-auto">

//         {/* Icon Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="flex justify-center mb-10"
//         >
//           <div className="group relative p-5 bg-card border border-border rounded-3xl shadow-lg shadow-primary/5 transition-all duration-300 hover:border-primary/50">
//             <Code2 className="w-12 h-12 text-primary" />

//             <div className="absolute -inset-1 bg-primary/25 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </div>
//         </motion.div>

//         {/* Hero Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
//           className="text-5xl md:text-[90px] font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground mb-8"
//         >
//           Master DSA.<br />
//           <span className="text-muted-foreground/50">Build the future.</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium text-muted-foreground mb-12"
//         >
//           A highly opinionated, interactive learning platform crafted for
//           developers who are serious about mastering algorithms and problem solving.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-6"
//         >
//           <Button
//             size="lg"
//             className="h-16 px-12 rounded-full text-lg font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl active:scale-95 transition-all"
//           >
//             <Link href="/auth/sign-up">Start Learning</Link>
//           </Button>

//           <button className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors group">
//             Browse Problems
//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>
//         </motion.div>
//       </div>

//       {/* Bottom Fade Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
//     </section>
//   );
// }

// 10/02/2026
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Sparkles } from "lucide-react";
// import Link from "next/link";
// import { useRef } from "react";

// // Helper function for class merging (if not already defined)
// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Hero() {
//   const containerRef = useRef<HTMLElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

//   return (
//     <motion.section
//       ref={containerRef}
//       style={{ opacity, scale }}
//       className="relative min-h-[95vh] flex items-center justify-center px-4 py-24 md:py-32 bg-background overflow-hidden"
//     >
//       {/* BACKGROUND ARCHITECTURE */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
//       </div>

//       {/* REFINED MESH GRID */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #888 1px, transparent 0)`,
//           backgroundSize: '40px 40px',
//         }}
//       />

//       <div className="container relative z-10 mx-auto max-w-7xl px-6">
//         {/* ICON COMPOSITION */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="flex justify-center mb-12"
//         >
//           <div className="relative group p-5 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl">
//             <Code2 className="w-12 h-12 text-primary" />
//             <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-500 animate-bounce" />
//             <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 animate-ping [animation-duration:3s]" />
//           </div>
//         </motion.div>

//         {/* HERO CONTENT */}
//         <div className="text-center max-w-5xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
//               Master DSA.
//             </span>
//             <br />
//             <span className="text-muted-foreground/40 italic font-medium">
//               Architect the Future.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
//           >
//             A high-performance learning environment for developers who seek
//             <span className="text-foreground font-medium italic"> algorithmic supremacy </span>
//             through systematic, data-driven practice.
//           </motion.p>

//           {/* CTAS */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="h-14 px-10 rounded-xl text-md font-bold shadow-xl hover:shadow-primary/20 transition-all duration-300 active:scale-95"
//             >
//               <Link href="/auth/sign-up" className="flex items-center gap-2">
//                 Get Started Free <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>

//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="h-14 px-10 rounded-xl text-md font-semibold border-border/60 hover:bg-muted/50 transition-all"
//             >
//               <Link href="/problems">
//                 View Curriculum
//               </Link>
//             </Button>
//           </motion.div>

//           {/* STATUS INDICATORS */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-muted-foreground/80"
//           >
//             {[
//               { label: "Live Execution", color: "bg-emerald-500" },
//               { label: "Advanced Patterns", color: "bg-blue-500" },
//               { label: "Elite Community", color: "bg-purple-500" }
//             ].map((item) => (
//               <div key={item.label} className="flex items-center gap-2 px-3 py-1 bg-muted/30 rounded-full border border-border/20">
//                 <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", item.color)} />
//                 {item.label}
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* LOGO CLOUD */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.5 }}
//           transition={{ delay: 1.2 }}
//           className="mt-32 pt-10 border-t border-border/10"
//         >
//           <div className="flex flex-wrap justify-center items-center gap-12 grayscale brightness-[2] contrast-125">
//             {['Microsoft', 'Google', 'Meta', 'Amazon', 'Netflix'].map((company) => (
//               <span key={company} className="text-xl font-bold tracking-tighter text-muted-foreground/40">
//                 {company}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* SCROLL AFFORDANCE */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
//       >
//         <div className="w-5 h-8 border-2 border-foreground rounded-full flex justify-center p-1">
//           <div className="w-1 h-1 bg-foreground rounded-full" />
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Sparkles } from "lucide-react";
// import Link from "next/link";

// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Hero() {
//   return (
//     <section className="relative min-h-[95vh] flex items-center justify-center px-4 py-24 md:py-32 bg-background overflow-hidden">
//       {/* BACKGROUND ARCHITECTURE - Color fixed, won't fade on scroll */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
//       </div>

//       {/* REFINED MESH GRID */}
//       <div
//         className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #888 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div className="container relative z-10 mx-auto max-w-7xl px-6">
//         {/* ICON COMPOSITION - Removed Sparkles bounce for cleaner look */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="flex justify-center mb-12"
//         >
//           <div className="relative group p-5 bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl">
//             <Code2 className="w-12 h-12 text-primary" />
//             <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 animate-ping [animation-duration:3s]" />
//           </div>
//         </motion.div>

//         {/* HERO CONTENT */}
//         <div className="text-center max-w-5xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
//           >
//             <span className="text-foreground">Master DSA.</span>
//             <br />
//             <span className="text-muted-foreground/40 italic font-medium">
//               Architect the Future.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
//           >
//             A high-performance learning environment for developers who seek
//             <span className="text-foreground font-medium italic">
//               {" "}
//               algorithmic supremacy{" "}
//             </span>
//             through systematic, data-driven practice.
//           </motion.p>

//           {/* CTAS */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="h-14 px-10 rounded-xl text-md font-bold shadow-xl transition-all duration-300 active:scale-95"
//             >
//               <Link href="/auth/sign-up" className="flex items-center gap-2">
//                 Get Started Free <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>

//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="h-14 px-10 rounded-xl text-md font-semibold border-border/60 hover:bg-muted/50 transition-all"
//             >
//               <Link href="/problems">View Curriculum</Link>
//             </Button>
//           </motion.div>

//           {/* STATUS INDICATORS */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-muted-foreground/80"
//           >
//             {[
//               { label: "Live Execution", color: "bg-emerald-500" },
//               { label: "Advanced Patterns", color: "bg-blue-500" },
//               { label: "Elite Community", color: "bg-purple-500" },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="flex items-center gap-2 px-3 py-1 bg-muted/30 rounded-full border border-border/20"
//               >
//                 <span
//                   className={cn(
//                     "w-1.5 h-1.5 rounded-full animate-pulse",
//                     item.color,
//                   )}
//                 />
//                 {item.label}
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* LOGO CLOUD - Cleaned and Simplified */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="mt-32 pt-10 border-t border-border/10"
//         >
//           <div className="flex flex-wrap justify-center items-center gap-12">
//             {["TechCorp", "Innovate", "DataFlow", "CloudScale"].map(
//               (company) => (
//                 <span
//                   key={company}
//                   className="text-xl font-bold tracking-tighter text-muted-foreground/20 hover:text-muted-foreground/40 transition-colors cursor-default"
//                 >
//                   {company}
//                 </span>
//               ),
//             )}
//           </div>
//         </motion.div>
//       </div>

//       {/* SCROLL AFFORDANCE */}
//       <motion.div
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20"
//       >
//         <div className="w-5 h-8 border-2 border-foreground rounded-full flex justify-center p-1">
//           <div className="w-1 h-1 bg-foreground rounded-full" />
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// best (medium)
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2 } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-background overflow-hidden">
//       {/* Subtle Background Elements */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="container relative z-10 mx-auto max-w-5xl">
//         <div className="flex flex-col items-center text-center">
//           {/* Minimal Icon/Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mb-8 p-3 bg-muted/50 rounded-2xl border border-border/50"
//           >
//             <Code2 className="w-8 h-8 text-primary" />
//           </motion.div>

//           {/* Refined Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.15] mb-6"
//           >
//             Master DSA. <br />
//             <span className="text-muted-foreground font-semibold">
//               Architect your future.
//             </span>
//           </motion.h1>

//           {/* Focused Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="max-w-xl text-base md:text-lg text-muted-foreground/80 mb-10 leading-relaxed"
//           >
//             A high-performance learning environment for developers who seek
//             <span className="text-foreground font-medium">
//               {" "}
//               algorithmic supremacy{" "}
//             </span>
//             through systematic practice.
//           </motion.p>

//           {/* Balanced CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-col sm:flex-row items-center gap-4"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="h-12 px-8 rounded-full text-sm font-semibold shadow-sm"
//             >
//               <Link href="/auth/sign-up" className="flex items-center gap-2">
//                 Get Started Free <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>

//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="h-12 px-8 rounded-full text-sm font-semibold border-border/80"
//             >
//               <Link href="/problems">View Curriculum</Link>
//             </Button>
//           </motion.div>

//           {/* Simplified Feature Tags */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="mt-16 flex flex-wrap justify-center gap-6"
//           >
//             {["Interactive Editor", "Video Solutions", "Elite Community"].map(
//               (text) => (
//                 <div
//                   key={text}
//                   className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-muted-foreground/50"
//                 >
//                   <span className="w-1 h-1 bg-primary rounded-full" />
//                   {text}
//                 </div>
//               ),
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// best
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2 } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center justify-center px-6 bg-background overflow-hidden">
//       <div className="container relative z-10 mx-auto max-w-4xl">
//         <div className="flex flex-col items-center text-center">
//           {/* Minimal Icon */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-6"
//           >
//             <div className="p-3 bg-primary/5 rounded-2xl border border-primary/10">
//               <Code2 className="w-6 h-6 text-primary" />
//             </div>
//           </motion.div>

//           {/* Refined Typography */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
//               Master DSA. <br />
//               <span className="text-muted-foreground/70 font-medium">
//                 Architect your future.
//               </span>
//             </h1>

//             <p className="max-w-md mx-auto text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
//               A high-performance learning environment for developers who seek
//               <span className="text-foreground font-medium">
//                 {" "}
//                 algorithmic supremacy{" "}
//               </span>
//               through systematic practice.
//             </p>
//           </motion.div>

//           {/* Clean Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex flex-col sm:flex-row items-center gap-4 mb-16"
//           >
//             <Button
//               asChild
//               size="lg"
//               className="h-11 px-8 rounded-full text-sm font-bold shadow-md"
//             >
//               <Link href="/auth/sign-up" className="flex items-center gap-2">
//                 Get Started Free <ArrowRight className="w-4 h-4" />
//               </Link>
//             </Button>

//             <Button
//               asChild
//               variant="ghost"
//               size="lg"
//               className="h-11 px-8 rounded-full text-sm font-semibold"
//             >
//               <Link href="/problems">View Curriculum</Link>
//             </Button>
//           </motion.div>

//           {/* Subtle Indicators */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="flex items-center gap-8"
//           >
//             {["Interactive Editor", "Video Solutions", "Community"].map(
//               (text) => (
//                 <div
//                   key={text}
//                   className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/40"
//                 >
//                   <div className="w-1 h-1 bg-primary/40 rounded-full" />
//                   {text}
//                 </div>
//               ),
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// not bad
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Terminal, CheckCircle2 } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
//       {/* ১. ব্যাকগ্রাউন্ড আর্কিটেকচার (ফাঁকা ভাব দূর করার জন্য) */}
//       <div className="absolute inset-0 z-0">
//         {/* সূক্ষ্ম গ্রিড লাইন */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

//         {/* টপ গ্লো ইফেক্ট */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
//       </div>

//       <div className="container relative z-10 mx-auto max-w-7xl pt-20">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* বাম পাশে: টেক্সট কন্টেন্ট */}
//           <div className="flex-1 text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* ছোট ব্যাজ */}
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
//                 </span>
//                 New: System Design Roadmap
//               </div>

//               <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
//                 Master DSA. <br />
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50 italic">
//                   Architect your future.
//                 </span>
//               </h1>

//               <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-10 mx-auto lg:mx-0">
//                 A high-performance learning environment for developers who seek
//                 <span className="text-foreground font-semibold">
//                   {" "}
//                   algorithmic supremacy{" "}
//                 </span>
//                 through systematic, data-driven practice.
//               </p>

//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
//                 <Button
//                   asChild
//                   size="lg"
//                   className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
//                 >
//                   <Link
//                     href="/auth/sign-up"
//                     className="flex items-center gap-2"
//                   >
//                     Get Started Free <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="h-12 px-8 rounded-xl font-semibold border-border/60 hover:bg-muted/50 transition-all"
//                 >
//                   <Link href="/problems">View Curriculum</Link>
//                 </Button>
//               </div>

//               {/* ট্রাস্ট ইন্ডিকেটর */}
//               <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 opacity-50 grayscale">
//                 {["Microsoft", "Google", "Meta", "Amazon"].map((company) => (
//                   <span
//                     key={company}
//                     className="text-sm font-bold tracking-tighter uppercase"
//                   >
//                     {company}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* ডান পাশে: ভিজ্যুয়াল এলিমেন্ট (যা সাইটকে ভরা দেখাবে) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex-1 relative w-full max-w-[550px] hidden lg:block"
//           >
//             {/* ব্যাকগ্রাউন্ড গ্লো */}
//             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-[32px] blur-2xl opacity-50 animate-pulse" />

//             {/* মেইন কার্ড (Code Preview Mockup) */}
//             <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl overflow-hidden group">
//               <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
//                 <div className="flex gap-1.5">
//                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
//                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
//                 </div>
//                 <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground font-mono">
//                   <Terminal className="w-3 h-3" />
//                   two_sum_solution.py
//                 </div>
//               </div>

//               <div className="space-y-3 font-mono text-sm">
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">01</span>
//                   <span className="text-primary">def</span>{" "}
//                   <span className="text-foreground">twoSum(nums, target):</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">02</span>
//                   <span className="pl-4 text-primary">hash_map</span>{" "}
//                   <span className="text-foreground">= &#123;&#125;</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">03</span>
//                   <span className="pl-4 text-primary">for</span>{" "}
//                   <span className="text-foreground">i, n</span>{" "}
//                   <span className="text-primary">in</span>{" "}
//                   <span className="text-foreground">enumerate(nums):</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">04</span>
//                   <span className="pl-8 text-foreground">
//                     diff = target - n
//                   </span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">05</span>
//                   <span className="pl-8 text-primary">if</span>{" "}
//                   <span className="text-foreground">diff</span>{" "}
//                   <span className="text-primary">in</span>{" "}
//                   <span className="text-foreground">hash_map:</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/40">06</span>
//                   <span className="pl-12 text-primary">return</span>{" "}
//                   <span className="text-foreground">[hash_map[diff], i]</span>
//                 </div>
//               </div>

//               {/* ফ্লোটিং স্ট্যাটাস কার্ড */}
//               <div className="absolute bottom-6 right-6 bg-background/90 border border-primary/30 p-4 rounded-2xl shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-primary/10 rounded-lg">
//                     <CheckCircle2 className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
//                       Performance
//                     </p>
//                     <p className="text-sm font-bold text-foreground">
//                       Top 1% Rank
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* নিচের ফিচার ইন্ডিকেটরস */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mt-24 py-8 border-t border-border/40 flex flex-wrap justify-center gap-x-12 gap-y-6"
//         >
//           {[
//             "Interactive Editor",
//             "Video Solutions",
//             "Elite Community",
//             "Real-time Execution",
//           ].map((text) => (
//             <div
//               key={text}
//               className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 hover:text-primary/60 transition-colors"
//             >
//               <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
//               {text}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// Good
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Terminal, Cpu, Database } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-background overflow-hidden">
//       {/* Background Architecture */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//           {/* Left Side: Typography & CTAs */}
//           <div className="flex-1 text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
//                 <Cpu className="w-3 h-3 text-primary" />
//                 Next-Gen Problem Solving
//               </div>

//               <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
//                 Master DSA. <br />
//                 <span className="text-muted-foreground/60 font-medium italic">
//                   Architect your future.
//                 </span>
//               </h1>

//               <p className="max-w-md text-sm md:text-base text-muted-foreground/80 leading-relaxed mb-10 mx-auto lg:mx-0">
//                 A high-performance environment for developers who seek
//                 <span className="text-foreground font-medium text-primary/80">
//                   {" "}
//                   algorithmic supremacy{" "}
//                 </span>
//                 through systematic, data-driven practice.
//               </p>

//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
//                 <Button
//                   asChild
//                   size="lg"
//                   className="h-11 px-8 rounded-full font-bold shadow-md hover:shadow-primary/10 transition-all active:scale-95"
//                 >
//                   <Link
//                     href="/auth/sign-up"
//                     className="flex items-center gap-2"
//                   >
//                     Start Coding <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="ghost"
//                   size="lg"
//                   className="h-11 px-8 rounded-full font-semibold"
//                 >
//                   <Link href="/problems">View Problems</Link>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Advanced Code Mockup (Fixed Error) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex-1 relative w-full max-w-[520px] hidden lg:block"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-50" />

//             <div className="relative bg-card/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 shadow-2xl">
//               {/* Toolbar */}
//               <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
//                 <div className="flex gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
//                 </div>
//                 <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
//                   <Database className="w-3 h-3 text-primary" />
//                   LRU_Cache.cpp
//                 </div>
//               </div>

//               {/* Code Snippet */}
//               <div className="space-y-2 font-mono text-[12px] leading-relaxed">
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">01</span>
//                   <span className="text-primary">class</span>{" "}
//                   <span className="text-foreground">LRUCache &#123;</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">02</span>
//                   <span className="pl-4 text-muted-foreground/50 italic">
//                     // Optimizing access with DLL
//                   </span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">03</span>
//                   <span className="pl-4 text-foreground">Node* head = </span>
//                   <span className="text-primary">new</span>{" "}
//                   <span className="text-foreground">Node(-1, -1);</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">04</span>
//                   <span className="pl-4 text-foreground">
//                     unordered_map&lt;int, Node*&gt; m;
//                   </span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">05</span>
//                   <span className="pl-4 text-primary">void</span>{" "}
//                   <span className="text-foreground">
//                     put(int key, int val) &#123;
//                   </span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">06</span>
//                   <span className="pl-8 text-primary">if</span>{" "}
//                   <span className="text-foreground">(m.count(key)) &#123;</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">07</span>
//                   <span className="pl-12 text-foreground">remove(m[key]);</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">08</span>
//                   <span className="pl-8 text-foreground">&#125;</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">09</span>
//                   <span className="pl-8 text-foreground">addNode(</span>
//                   <span className="text-primary">new</span>{" "}
//                   <span className="text-foreground">Node(key, val));</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">10</span>
//                   <span className="pl-4 text-foreground">&#125;</span>
//                 </div>
//                 <div className="flex gap-4">
//                   <span className="text-muted-foreground/30 w-4">11</span>
//                   <span className="text-foreground">&#125;;</span>
//                 </div>
//               </div>

//               {/* Stats Overlay */}
//               <div className="absolute -bottom-4 -left-4 bg-background/80 border border-border/50 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-primary/50 transition-colors">
//                 <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
//                     Time Complexity
//                   </p>
//                   <p className="text-xs font-bold font-mono text-emerald-500">
//                     O(1) Constant
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Feature Tags */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500"
//         >
//           {[
//             "System Design",
//             "Graph Theory",
//             "Dynamic Programming",
//             "Bitmasking",
//           ].map((item) => (
//             <span
//               key={item}
//               className="text-[10px] font-bold tracking-[0.3em] uppercase cursor-default hover:text-primary"
//             >
//               {item}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// first
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code2, Terminal, Cpu, Database } from "lucide-react";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-background overflow-hidden">
//       {/* Background Architecture */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//           {/* Left Side: Typography & CTAs */}
//           <div className="flex-1 text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
//                 <Cpu className="w-3 h-3 text-primary" />
//                 Next-Gen Problem Solving
//               </div>

//               <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-6">
//                 Master DSA. <br />
//                 <span className="text-muted-foreground/60 font-medium italic">
//                   Architect your future.
//                 </span>
//               </h1>

//               <p className="max-w-md text-sm md:text-base text-muted-foreground/80 leading-relaxed mb-10 mx-auto lg:mx-0">
//                 A high-performance environment for developers who seek
//                 <span className="text-foreground font-medium text-primary/80">
//                   {" "}
//                   algorithmic supremacy{" "}
//                 </span>
//                 through systematic, data-driven practice.
//               </p>

//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
//                 <Button
//                   asChild
//                   size="lg"
//                   className="h-11 px-8 rounded-full font-bold shadow-md hover:shadow-primary/10 transition-all active:scale-95"
//                 >
//                   <Link
//                     href="/auth/sign-up"
//                     className="flex items-center gap-2"
//                   >
//                     Start Coding <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="ghost"
//                   size="lg"
//                   className="h-11 px-8 rounded-full font-semibold"
//                 >
//                   <Link href="/problems">View Problems</Link>
//                 </Button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Advanced Code Mockup */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex-1 relative w-full max-w-[520px] hidden lg:block"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-50" />

//             <div className="relative bg-card/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-7 shadow-2xl overflow-hidden">
//               {/* Toolbar */}
//               <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
//                 <div className="flex gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
//                 </div>
//                 <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
//                   <Database className="w-3 h-3 text-primary" />
//                   LRU_Cache.cpp
//                 </div>
//               </div>

//               {/* Code Snippet with Line Highlighting */}
//               <div className="space-y-1.5 font-mono text-[12px] leading-relaxed relative">
//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     01
//                   </span>
//                   <span className="text-primary">
//                     class{" "}
//                     <span className="text-foreground">LRUCache &#123;</span>
//                   </span>
//                 </div>

//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     02
//                   </span>
//                   <span className="pl-4 text-muted-foreground/50 italic">
//                     // O(1) Access Optimization
//                   </span>
//                 </div>

//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     03
//                   </span>
//                   <span className="pl-4 text-foreground">
//                     Node* head = <span className="text-primary">new</span>{" "}
//                     Node(-1, -1);
//                   </span>
//                 </div>

//                 {/* Animated Highlight Line (Line 04) */}
//                 <div className="relative group">
//                   <motion.div
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                     className="absolute inset-0 bg-primary/15 border-l-2 border-primary z-0"
//                   />
//                   <div className="flex gap-4 px-4 relative z-10 py-0.5">
//                     <span className="text-primary/70 w-4 text-right font-bold">
//                       04
//                     </span>
//                     <span className="pl-4 text-foreground font-semibold">
//                       unordered_map&lt;int, Node*&gt; m;
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     05
//                   </span>
//                   <span className="pl-4 text-primary">
//                     void{" "}
//                     <span className="text-foreground">
//                       put(int k, int v) &#123;
//                     </span>
//                   </span>
//                 </div>

//                 <div className="flex gap-4 px-4 opacity-50">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     06
//                   </span>
//                   <span className="pl-8 text-muted-foreground italic">
//                     // ... logic ...
//                   </span>
//                 </div>

//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     10
//                   </span>
//                   <span className="pl-4 text-foreground">&#125;</span>
//                 </div>

//                 <div className="flex gap-4 px-4">
//                   <span className="text-muted-foreground/30 w-4 text-right">
//                     11
//                   </span>
//                   <span className="text-foreground">&#125;;</span>
//                 </div>
//               </div>

//               {/* Stats Overlay */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.5 }}
//                 className="absolute -bottom-4 -left-4 bg-background/80 border border-border/50 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-primary/50 transition-colors"
//               >
//                 <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
//                 </div>
//                 <div>
//                   <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
//                     Performance
//                   </p>
//                   <p className="text-xs font-bold font-mono text-emerald-500">
//                     O(1) Constant
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Feature Tags */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-20 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500"
//         >
//           {[
//             "System Design",
//             "Graph Theory",
//             "Dynamic Programming",
//             "Bitmasking",
//           ].map((item) => (
//             <span
//               key={item}
//               className="text-[10px] font-bold tracking-[0.3em] uppercase cursor-default hover:text-primary"
//             >
//               {item}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// second
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Database, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* 1. Advanced Mesh Gradient Background - Premium Feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Mesh Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Typography & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                <Cpu className="w-3 h-3" />
                Next-Gen Problem Solving
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                Master DSA. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground/60 to-muted-foreground/20 font-medium italic">
                  Architect your future.
                </span>
              </h1>

              <p className="max-w-md text-base text-muted-foreground/80 leading-relaxed mb-10 mx-auto lg:mx-0">
                A high-performance environment for developers who seek
                <span className="text-foreground font-semibold">
                  {" "}
                  algorithmic supremacy{" "}
                </span>
                through systematic, data-driven practice.
              </p>

              {/* 2. Interactive Social Proof - Senior UX Detail */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 px-8 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95 bg-primary"
                    >
                      <Link
                        href="/auth/sign-up"
                        className="flex items-center gap-2"
                      >
                        Start Coding <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="lg"
                      className="h-12 px-8 rounded-full font-semibold border border-white/5 hover:bg-white/5"
                    >
                      <Link href="/problems">View Problems</Link>
                    </Button>
                  </div>

                  {/* Live Users Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-2 text-[12px] text-muted-foreground/60"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                        >
                          <Users className="w-3 h-3" />
                        </div>
                      ))}
                    </div>
                    <span className="font-medium">
                      <span className="text-emerald-500 animate-pulse">●</span>{" "}
                      1.2k+ coding now
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Advanced Code Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[540px] hidden lg:block"
          >
            {/* Soft Glow Behind Card */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-30" />

            <div className="relative bg-card/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
              {/* Card Header/Toolbar */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary/80 font-mono bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                  <Database className="w-3.5 h-3.5" />
                  LRU_Cache.cpp
                </div>
              </div>

              {/* Enhanced Code Snippet */}
              <div className="space-y-2 font-mono text-[13px] leading-relaxed relative">
                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right selection:bg-transparent">
                    01
                  </span>
                  <span className="text-blue-400">
                    class{" "}
                    <span className="text-foreground">LRUCache &#123;</span>
                  </span>
                </div>

                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    02
                  </span>
                  <span className="pl-4 text-muted-foreground/40 italic">
                    // Optimized Hash-Map access
                  </span>
                </div>

                {/* The Animated High-Light Line */}
                <div className="relative group">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent border-l-2 border-primary z-0"
                  />

                  {/* Tooltip on Line 04 - Premium Detail */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-md text-[10px] font-bold text-primary-foreground shadow-xl z-20 pointer-events-none"
                  >
                    O(1) Time Complexity
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                  </motion.div>

                  <div className="flex gap-6 px-4 relative z-10 py-1">
                    <span className="text-primary/60 w-4 text-right font-bold">
                      04
                    </span>
                    <span className="pl-4 text-foreground font-semibold group-hover:text-primary transition-colors cursor-pointer">
                      unordered_map&lt;int, Node*&gt; m;
                    </span>
                  </div>
                </div>

                <div className="flex gap-6 px-4">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    05
                  </span>
                  <span className="pl-4 text-blue-400">
                    void{" "}
                    <span className="text-foreground">
                      put(int k, int v) &#123;
                    </span>
                  </span>
                </div>

                <div className="flex gap-6 px-4 opacity-40">
                  <span className="text-muted-foreground/20 w-4 text-right">
                    06
                  </span>
                  <span className="pl-8 text-muted-foreground">
                    if (m.find(k) != m.end()) ...
                  </span>
                </div>
              </div>

              {/* Floating Performance Tag */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="absolute bottom-6 right-6 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl p-3 rounded-xl flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <div className="text-[11px] font-bold text-emerald-500">
                  SYSTEM OPTIMIZED
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Tags - Subtle & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-10"
        >
          {[
            "System Design",
            "Graph Theory",
            "Dynamic Programming",
            "Concurrency",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 group cursor-default"
            >
              <Zap className="w-3 h-3 text-primary scale-0 group-hover:scale-100 transition-transform" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors group-hover:text-primary">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
