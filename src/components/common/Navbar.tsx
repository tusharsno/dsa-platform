// Date: 09/02/2026
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, LayoutDashboard } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">

//         {/* লোগো সেকশন */}
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="bg-primary p-1.5 rounded-lg">
//               <Code2 className="h-6 w-6 text-primary-foreground" />
//             </div>
//             <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
//               DSA Learn
//             </span>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু (Desktop) */}
//         <div className="hidden md:flex items-center bg-muted/50 px-4 py-1.5 rounded-full border">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full",
//                 pathname === link.href
//                   ? "bg-background text-primary shadow-sm"
//                   : "text-muted-foreground hover:text-primary"
//               )}
//             >
//               <link.icon className="h-4 w-4" />
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* ডানদিকের বাটন সেকশন (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <ThemeToggle />
//           <Link href="/auth/sign-in">
//             <Button variant="ghost" size="sm" className="font-medium">
//               Sign In
//             </Button>
//           </Link>
//           <Link href="/auth/sign-up">
//             <Button size="sm" className="font-medium px-5">
//               Get Started
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু বাটন */}
//         <div className="flex md:hidden items-center gap-3">
//           <ThemeToggle />
//           <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </nav>

//       {/* মোবাইল মেনু ড্রপডাউন */}
//       {open && (
//         <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
//           <div className="flex flex-col gap-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors",
//                   pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
//                 )}
//                 onClick={() => setOpen(false)}
//               >
//                 <link.icon className="h-5 w-5" />
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//           <div className="grid grid-cols-2 gap-3 pt-4 border-t">
//             <Link href="/auth/sign-in" className="w-full" onClick={() => setOpen(false)}>
//               <Button variant="outline" className="w-full">Sign In</Button>
//             </Link>
//             <Link href="/auth/sign-up" className="w-full" onClick={() => setOpen(false)}>
//               <Button className="w-full">Get Started</Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// 10/02/2026
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Youtube, Sparkles } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
//         {/* লোগো সেকশন - Added Subtle Animation */}
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <div className="bg-primary p-1.5 rounded-xl transition-transform group-hover:rotate-12">
//               <Code2 className="h-6 w-6 text-primary-foreground" />
//             </div>
//             <span className="text-xl font-black tracking-tighter hidden sm:inline-block">
//               DSA <span className="text-primary">Learn</span>
//             </span>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু (Desktop) - Pill Styled */}
//         <div className="hidden md:flex items-center bg-muted/30 px-1.5 py-1 rounded-full border border-border/50">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "flex items-center gap-2 px-5 py-2 text-sm font-semibold transition-all rounded-full relative",
//                 pathname === link.href
//                   ? "bg-background text-primary shadow-sm ring-1 ring-border"
//                   : "text-muted-foreground hover:text-foreground",
//               )}
//             >
//               <link.icon className="h-4 w-4" />
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* ডানদিকের বাটন সেকশন (Desktop) */}
//         <div className="hidden md:flex items-center gap-2">
//           {/* YouTube Link - মাউস হভার করলে লাল হবে */}
//           <Link
//             href="https://youtube.com/@tusharbarua5074?si=R_9CpfvNb2hY2fcq"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group hover:bg-red-500/10"
//             title="Subscribe to Tushar Barua on YouTube"
//           >
//             {/* সলিড ইউটিউব আইকন যা হভার করলে লাল হবে */}
//             <svg
//               viewBox="0 0 24 24"
//               className="h-5 w-5 fill-muted-foreground group-hover:fill-[#FF0000] transition-colors duration-300"
//             >
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//             </svg>
//           </Link>
//           <div className="h-6 w-[1px] bg-border mx-2" /> {/* Separator */}
//           <ThemeToggle />
//           <Link href="/auth/sign-in">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="font-bold hover:bg-transparent hover:text-primary transition-colors"
//             >
//               Log in
//             </Button>
//           </Link>
//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু কন্ট্রোলস */}
//         <div className="flex md:hidden items-center gap-2">
//           <Link
//             href="https://youtube.com/@yourchannel"
//             target="_blank"
//             className="p-2 text-muted-foreground hover:text-red-500"
//           >
//             <Youtube className="h-5 w-5 fill-current" />
//           </Link>
//           <ThemeToggle />
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? (
//               <X className="h-6 w-6 text-primary" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </Button>
//         </div>
//       </nav>

//       {/* মোবাইল মেনু ড্রপডাউন (AnimatePresence ব্যবহার করতে পারেন) */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-b bg-background overflow-hidden"
//           >
//             <div className="p-4 space-y-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     "flex items-center gap-4 p-4 rounded-2xl text-base font-bold transition-all",
//                     pathname === link.href
//                       ? "bg-primary text-primary-foreground"
//                       : "hover:bg-muted",
//                   )}
//                   onClick={() => setOpen(false)}
//                 >
//                   <link.icon className="h-5 w-5" />
//                   {link.name}
//                 </Link>
//               ))}

//               <div className="grid grid-cols-1 gap-3 pt-4 border-t">
//                 <Link href="/auth/sign-up" onClick={() => setOpen(false)}>
//                   <Button className="w-full rounded-xl h-12 text-lg font-bold">
//                     Get Started Free
//                   </Button>
//                 </Link>
//                 <Link href="/auth/sign-in" onClick={() => setOpen(false)}>
//                   <Button
//                     variant="outline"
//                     className="w-full rounded-xl h-12 text-lg font-bold"
//                   >
//                     Sign In
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Youtube } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
//       {/* Container max-width and padding adjusted for professional look */}
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন */}
//         <div className="flex items-center gap-2">
//           <Link href="/" className="flex items-center space-x-2 group">
//             <div className="bg-primary p-1.5 rounded-xl transition-transform group-hover:rotate-12 shadow-sm">
//               <Code2 className="h-6 w-6 text-primary-foreground" />
//             </div>
//             <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
//               DSA <span className="text-primary">Learn</span>
//             </span>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু (Desktop) - AlgoMaster inspired Pill design */}
//         <div className="hidden md:flex items-center bg-muted/40 px-1.5 py-1 rounded-full border border-border/40">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "flex items-center gap-2 px-5 py-2 text-sm font-semibold transition-all rounded-full relative",
//                 pathname === link.href
//                   ? "bg-background text-primary shadow-sm ring-1 ring-border/50"
//                   : "text-muted-foreground hover:text-foreground",
//               )}
//             >
//               <link.icon className="h-4 w-4" />
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* ডানদিকের বাটন সেকশন (Desktop) */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* YouTube Icon - AlgoMaster inspired Solid Hover style */}
//           <Link
//             href="https://youtube.com/@tusharbarua5074?si=R_9CpfvNb2hY2fcq"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground/80 hover:text-[#FF0000] hover:bg-red-500/10 transition-all duration-300 group"
//             title="Subscribe to Tushar Barua on YouTube"
//           >
//             <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//             </svg>
//           </Link>
//           <div className="h-4 w-[1px] bg-border mx-1" />{" "}
//           {/* Subtle Separator */}
//           <ThemeToggle />
//           <Link href="/auth/sign-in">
//             <Button variant="ghost" size="sm" className="font-semibold px-4">
//               Log in
//             </Button>
//           </Link>
//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-6 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-primary/20 active:scale-95 transition-all"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু কন্ট্রোলস */}
//         <div className="flex md:hidden items-center gap-2">
//           <ThemeToggle />
//           <Button
//             variant="ghost"
//             size="icon"
//             className="rounded-full"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </nav>

//       {/* মোবাইল মেনু ড্রপডাউন */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-b bg-background"
//           >
//             <div className="p-4 space-y-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={cn(
//                     "flex items-center gap-4 p-4 rounded-xl text-base font-semibold",
//                     pathname === link.href
//                       ? "bg-primary/10 text-primary"
//                       : "hover:bg-muted",
//                   )}
//                   onClick={() => setOpen(false)}
//                 >
//                   <link.icon className="h-5 w-5" />
//                   {link.name}
//                 </Link>
//               ))}
//               <div className="grid grid-cols-2 gap-3 pt-4 border-t">
//                 <Link href="/auth/sign-in" onClick={() => setOpen(false)}>
//                   <Button variant="outline" className="w-full rounded-xl">
//                     Log In
//                   </Button>
//                 </Link>
//                 <Link href="/auth/sign-up" onClick={() => setOpen(false)}>
//                   <Button className="w-full rounded-xl">Join Now</Button>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

//  best (medium)
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Search, Zap } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap }, // নতুন আইটেম
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন */}
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center gap-2.5 group">
//             <div className="bg-primary/10 p-2 rounded-xl border border-primary/20 transition-all group-hover:bg-primary group-hover:rotate-6">
//               <Code2 className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
//             </div>
//             <span className="text-lg font-bold tracking-tight">
//               DSA <span className="text-primary">Learn</span>
//             </span>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু - Improved Pill Design */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full",
//                   isActive
//                     ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                     : "text-muted-foreground hover:text-foreground",
//                 )}
//               >
//                 <link.icon
//                   className={cn(
//                     "h-4 w-4",
//                     isActive ? "text-primary" : "text-muted-foreground",
//                   )}
//                 />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* ডানদিকের সেকশন */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* Premium Search Trigger */}
//           <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group">
//             <Search className="h-3.5 w-3.5" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
//               <span className="text-xs">⌘</span>K
//             </kbd>
//           </button>

//           <div className="h-4 w-[1px] bg-border/60 mx-1" />

//           {/* <ThemeToggle /> */}
//           <div className="cursor-pointer">
//             <ThemeToggle />
//           </div>

//           <Link href="/auth/sign-in">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-sm font-medium hover:bg-transparent hover:text-primary cursor-pointer"
//             >
//               Log in
//             </Button>
//           </Link>

//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all active:scale-95 cursor-pointer"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু */}
//         <div className="flex md:hidden items-center gap-3 cursor-pointer">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground"
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       {/* মোবাইল ড্রপডাউন (অপরিবর্তিত রাখতে পারেন বা হালকা গ্যাপ বাড়াতে পারেন) */}
//       {/* ... আপনার বর্তমান AnimatePresence কোডটি এখানে থাকবে ... */}
//     </header>
//   );
// }

// best one
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Search, Zap } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-2.5 group cursor-pointer"
//           >
//             <div className="bg-primary/10 p-2 rounded-xl border border-primary/20 transition-all group-hover:bg-primary group-hover:rotate-6">
//               <Code2 className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
//             </div>
//             <span className="text-lg font-bold tracking-tight">
//               DSA <span className="text-primary">Learn</span>
//             </span>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু - Improved Pill Design */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
//                   isActive
//                     ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                     : "text-muted-foreground hover:text-foreground",
//                 )}
//               >
//                 <link.icon
//                   className={cn(
//                     "h-4 w-4",
//                     isActive ? "text-primary" : "text-muted-foreground",
//                   )}
//                 />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* ডানদিকের সেকশন */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* Premium Search Trigger */}
//           <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group cursor-pointer">
//             <Search className="h-3.5 w-3.5" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
//               <span className="text-xs">⌘</span>K
//             </kbd>
//           </button>

//           <div className="h-4 w-[1px] bg-border/60 mx-1" />

//           {/* Theme Toggle Wrapper with Pointer Cursor */}
//           <div className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
//             <ThemeToggle />
//           </div>

//           <Link href="/auth/sign-in" className="cursor-pointer">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-sm font-medium hover:bg-transparent hover:text-primary cursor-pointer"
//             >
//               Log in
//             </Button>
//           </Link>

//           <Link href="/auth/sign-up" className="cursor-pointer">
//             <Button
//               size="sm"
//               className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all active:scale-95 cursor-pointer"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু */}
//         <div className="flex md:hidden items-center gap-3">
//           <div className="cursor-pointer flex items-center justify-center">
//             <ThemeToggle />
//           </div>
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground cursor-pointer p-1"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* মোবাইল ড্রপডাউন (AnimatePresence অংশ) */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="flex flex-col gap-2 p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
//                 >
//                   <link.icon className="h-5 w-5 text-primary" />
//                   <span className="font-medium">{link.name}</span>
//                 </Link>
//               ))}
//               <hr className="my-2 border-border/40" />
//               <Link href="/auth/sign-up" className="w-full">
//                 <Button className="w-full rounded-xl font-bold cursor-pointer">
//                   Join Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// Final one
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Search, Zap } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন - Unique & Branded */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-3 group cursor-pointer"
//           >
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/30 transition-all" />
//               <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="group-hover:rotate-12 transition-transform duration-500"
//                 >
//                   <path
//                     d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
//                     className="stroke-primary"
//                     strokeWidth="2.5"
//                     strokeLinejoin="round"
//                   />
//                   <circle
//                     cx="20"
//                     cy="20"
//                     r="3"
//                     className="fill-primary animate-pulse"
//                   />
//                   <path
//                     d="M20 12V17M20 23V28M27 16L23 18.5M17 21.5L13 24"
//                     className="stroke-primary/60"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="flex flex-col -space-y-1">
//               <span className="text-xl font-black tracking-tighter italic group-hover:text-primary transition-colors">
//                 DSA<span className="text-primary not-italic">.</span>
//               </span>
//               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
//                 Learn
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু - Pill Design */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
//                   isActive
//                     ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                     : "text-muted-foreground hover:text-foreground",
//                 )}
//               >
//                 <link.icon
//                   className={cn(
//                     "h-4 w-4",
//                     isActive ? "text-primary" : "text-muted-foreground",
//                   )}
//                 />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* ডানদিকের সেকশন */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* Quick Search Trigger */}
//           <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group">
//             <Search className="h-3.5 w-3.5" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
//               <span className="text-xs cursor-pointer">⌘</span>K
//             </kbd>
//           </button>

//           <div className="h-4 w-[1px] bg-border/60 mx-1" />

//           {/* Theme Toggle - Wrapper to ensure pointer cursor */}
//           <div className="flex items-center justify-center cursor-pointer hover:bg-muted/50 p-1.5 rounded-lg transition-colors [&_button]:cursor-pointer">
//             <ThemeToggle />
//           </div>

//           <Link href="/auth/sign-in">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="text-sm font-medium hover:bg-transparent hover:text-primary cursor-pointer"
//             >
//               Log in
//             </Button>
//           </Link>

//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all active:scale-95 cursor-pointer"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু */}
//         <div className="flex md:hidden items-center gap-3">
//           <div className="cursor-pointer hover:bg-muted/50 p-1.5 rounded-lg [&_button]:cursor-pointer">
//             <ThemeToggle />
//           </div>
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground cursor-pointer p-1"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* মোবাইল ড্রপডাউন */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="flex flex-col gap-2 p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
//                 >
//                   <link.icon className="h-5 w-5 text-primary" />
//                   <span className="font-medium">{link.name}</span>
//                 </Link>
//               ))}
//               <hr className="my-2 border-border/40" />
//               <Link href="/auth/sign-up" className="w-full">
//                 <Button className="w-full rounded-xl font-bold cursor-pointer">
//                   Join Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// before/02/2026
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Search, Zap, Youtube } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন - রিস্টোর করা হয়েছে */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-3 group cursor-pointer"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/30 transition-all" />
//               <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="group-hover:rotate-12 transition-transform duration-500"
//                 >
//                   <path
//                     d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
//                     className="stroke-primary"
//                     strokeWidth="2.5"
//                     strokeLinejoin="round"
//                   />
//                   <circle
//                     cx="20"
//                     cy="20"
//                     r="3"
//                     className="fill-primary animate-pulse"
//                   />
//                   <path
//                     d="M20 12V17M20 23V28M27 16L23 18.5M17 21.5L13 24"
//                     className="stroke-primary/60"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="flex flex-col -space-y-1">
//               <span className="text-xl font-black tracking-tighter italic group-hover:text-primary transition-colors">
//                 DSA<span className="text-primary not-italic">.</span>
//               </span>
//               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
//                 Learn
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু (Pill Design সহ Roadmap রাখা হয়েছে) */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
//                 pathname === link.href
//                   ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                   : "text-muted-foreground hover:text-foreground",
//               )}
//             >
//               <link.icon
//                 className={cn(
//                   "h-4 w-4",
//                   pathname === link.href
//                     ? "text-primary"
//                     : "text-muted-foreground",
//                 )}
//               />
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* ডানদিকের সেকশন - সার্চবার এবং ইউটিউব লিঙ্ক */}
//         <div className="hidden md:flex items-center gap-3">
//           {/* Quick Search Trigger (রিস্টোর করা হয়েছে) */}
//           <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group">
//             <Search className="h-3.5 w-3.5 cursor-text" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
//               <span className="text-xs">⌘</span>K
//             </kbd>
//           </button>

//           <div className="h-4 w-[1px] bg-border/60 mx-1" />

//           {/* YouTube Link - AlgoMaster Style Solid Hover */}
//           <Link
//             href="https://youtube.com/@tusharbarua5074?si=R_9CpfvNb2hY2fcq"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground/80 hover:text-[#FF0000] hover:bg-red-500/10 transition-all duration-300 group cursor-pointer"
//             title="Subscribe on YouTube"
//           >
//             <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//             </svg>
//           </Link>

//           <ThemeToggle />

//           <Link href="/auth/sign-in">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="font-medium hover:text-primary cursor-pointer"
//             >
//               Log in
//             </Button>
//           </Link>

//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-95 cursor-pointer"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল মেনু কন্ট্রোল */}
//         <div className="flex md:hidden items-center gap-3">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground cursor-pointer"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* মোবাইল ড্রপডাউন */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="flex flex-col gap-2 p-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted font-medium cursor-pointer"
//                 >
//                   <link.icon className="h-5 w-5 text-primary" />
//                   {link.name}
//                 </Link>
//               ))}
//               <hr className="my-2 border-border/40" />
//               <Link
//                 href="/auth/sign-up"
//                 className="w-full"
//                 onClick={() => setOpen(false)}
//               >
//                 <Button className="w-full rounded-xl font-bold">
//                   Join Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// 12/02/2026
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, Search, Zap } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* লোগো সেকশন */}
//         <div className="flex items-center">
//           <Link
//             href="/"
//             className="flex items-center gap-3 group cursor-pointer"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/30 transition-all" />
//               <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 40 40"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="group-hover:rotate-12 transition-transform duration-500"
//                 >
//                   <path
//                     d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
//                     className="stroke-primary"
//                     strokeWidth="2.5"
//                     strokeLinejoin="round"
//                   />
//                   <circle
//                     cx="20"
//                     cy="20"
//                     r="3"
//                     className="fill-primary animate-pulse"
//                   />
//                   <path
//                     d="M20 12V17M20 23V28M27 16L23 18.5M17 21.5L13 24"
//                     className="stroke-primary/60"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="flex flex-col -space-y-1">
//               <span className="text-xl font-black tracking-tighter italic group-hover:text-primary transition-colors">
//                 DSA<span className="text-primary not-italic">.</span>
//               </span>
//               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
//                 Learn
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* মাঝখানের মেনু (Pill Design - Active State ফিক্সড) */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => {
//             // চেক করা হচ্ছে বর্তমান পাথ এই লিঙ্কের পাথ দিয়ে শুরু হয়েছে কি না (সাব-রাউট হাইলাইটিং)
//             const isActive = pathname.startsWith(link.href);

//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
//                   isActive
//                     ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                     : "text-muted-foreground hover:text-foreground",
//                 )}
//               >
//                 <link.icon
//                   className={cn(
//                     "h-4 w-4",
//                     isActive ? "text-primary" : "text-muted-foreground",
//                   )}
//                 />
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* ডানদিকের সেকশন */}
//         <div className="hidden md:flex items-center gap-3">
//           <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group">
//             <Search className="h-3.5 w-3.5 cursor-text" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
//               <span className="text-xs">⌘</span>K
//             </kbd>
//           </button>

//           <div className="h-4 w-[1px] bg-border/60 mx-1" />

//           <Link
//             href="https://youtube.com/@tusharbarua5074"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground/80 hover:text-[#FF0000] hover:bg-red-500/10 transition-all duration-300 group cursor-pointer"
//             title="Subscribe on YouTube"
//           >
//             <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//             </svg>
//           </Link>

//           <ThemeToggle />

//           <Link href="/auth/sign-in">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="font-medium hover:text-primary cursor-pointer"
//             >
//               Log in
//             </Button>
//           </Link>

//           <Link href="/auth/sign-up">
//             <Button
//               size="sm"
//               className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-95 cursor-pointer"
//             >
//               Join Now
//             </Button>
//           </Link>
//         </div>

//         {/* মোবাইল কন্ট্রোল */}
//         <div className="flex md:hidden items-center gap-3">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground cursor-pointer"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* মোবাইল ড্রপডাউন (Active State ফিক্সড) */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="flex flex-col gap-2 p-4">
//               {navLinks.map((link) => {
//                 const isActive = pathname.startsWith(link.href);
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className={cn(
//                       "flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors",
//                       isActive ? "bg-muted text-primary" : "hover:bg-muted",
//                     )}
//                   >
//                     <link.icon
//                       className={cn(
//                         "h-5 w-5",
//                         isActive ? "text-primary" : "text-muted-foreground",
//                       )}
//                     />
//                     {link.name}
//                   </Link>
//                 );
//               })}
//               <hr className="my-2 border-border/40" />
//               <Link href="/auth/sign-up" onClick={() => setOpen(false)}>
//                 <Button className="w-full rounded-xl font-bold">
//                   Join Now
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Code2, Search, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
// Clerk ইমপোর্ট যোগ করা হয়েছে
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Topics", href: "/topics", icon: BookOpen },
    { name: "Problems", href: "/problems", icon: Code2 },
    { name: "Roadmap", href: "/roadmap", icon: Zap },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* লোগো সেকশন */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/30 transition-all" />
              <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="group-hover:rotate-12 transition-transform duration-500"
                >
                  <path
                    d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
                    className="stroke-primary"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="3"
                    className="fill-primary animate-pulse"
                  />
                  <path
                    d="M20 12V17M20 23V28M27 16L23 18.5M17 21.5L13 24"
                    className="stroke-primary/60"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-black tracking-tighter italic group-hover:text-primary transition-colors">
                DSA<span className="text-primary not-italic">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                Learn
              </span>
            </div>
          </Link>
        </div>

        {/* মাঝখানের মেনু */}
        <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
                  isActive
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <link.icon
                  className={cn(
                    "h-4 w-4",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                />
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* ডানদিকের সেকশন - Clerk ইন্টিগ্রেশন এখানে */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group">
            <Search className="h-3.5 w-3.5 cursor-text" />
            <span className="pr-4 cursor-text">Quick Search</span>
            <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <div className="h-4 w-[1px] bg-border/60 mx-1" />

          <ThemeToggle />

          {/* লগইন না করা থাকলে এই বাটনগুলো দেখাবে */}
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="font-medium hover:text-primary cursor-pointer"
              >
                Log in
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                size="sm"
                className="font-bold px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-95 cursor-pointer"
              >
                Join Now
              </Button>
            </SignUpButton>
          </SignedOut>

          {/* লগইন করা থাকলে প্রোফাইল বাটন দেখাবে */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "h-9 w-9 border border-primary/20 hover:border-primary/50 transition-all",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* মোবাইল কন্ট্রোল */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground cursor-pointer"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* মোবাইল ড্রপডাউন */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-medium cursor-pointer transition-colors",
                      isActive ? "bg-muted text-primary" : "hover:bg-muted",
                    )}
                  >
                    <link.icon
                      className={cn(
                        "h-5 w-5",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    {link.name}
                  </Link>
                );
              })}
              <hr className="my-2 border-border/40" />

              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full rounded-xl mb-2">
                    Log in
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full rounded-xl font-bold">
                    Join Now
                  </Button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center justify-between px-4 py-2 bg-muted/50 rounded-xl pl-2 ml-1">
                  <span className="text-sm font-medium">My Account</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
