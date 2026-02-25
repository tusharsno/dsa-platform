// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { usePathname, useRouter } from "next/navigation";
// // // import { Menu, X, BookOpen, Code2, Search, Zap, Hash } from "lucide-react";
// // // import ThemeToggle from "./ThemeToggle";
// // // import { Button } from "@/components/ui/button";
// // // import { cn } from "@/lib/utils";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { dsaTopics } from "@/lib/dsa-data";

// // // import {
// // //   CommandDialog,
// // //   CommandEmpty,
// // //   CommandGroup,
// // //   CommandInput,
// // //   CommandItem,
// // //   CommandList,
// // // } from "@/components/ui/command";

// // // import {
// // //   UserButton,
// // //   SignInButton,
// // //   SignUpButton,
// // //   SignedIn,
// // //   SignedOut,
// // // } from "@clerk/nextjs";

// // // export default function Navbar() {
// // //   const [open, setOpen] = useState(false);
// // //   const [searchOpen, setSearchOpen] = useState(false);
// // //   const [mounted, setMounted] = useState(false); // Hydration fix (Image 15)
// // //   const pathname = usePathname();
// // //   const router = useRouter();

// // //   // Next.js 16 Hydration consistency check
// // //   useEffect(() => {
// // //     setMounted(true);
// // //   }, []);

// // //   // Keyboard shortcut: CMD+K or CTRL+K
// // //   useEffect(() => {
// // //     const down = (e: KeyboardEvent) => {
// // //       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
// // //         e.preventDefault();
// // //         setSearchOpen((prev) => !prev);
// // //       }
// // //     };
// // //     document.addEventListener("keydown", down);
// // //     return () => document.removeEventListener("keydown", down);
// // //   }, []);

// // //   const navLinks = [
// // //     { name: "Topics", href: "/topics", icon: BookOpen },
// // //     { name: "Problems", href: "/problems", icon: Code2 },
// // //     { name: "Roadmap", href: "/roadmap", icon: Zap },
// // //   ];

// // //   const handleSearchSelect = (id: string) => {
// // //     setSearchOpen(false);
// // //     // Case-insensitive navigation to avoid 404 (Image 11 fix)
// // //     router.push(`/topics/${id.toLowerCase()}`);
// // //   };

// // //   // Hydration protection: Do not render interactive search until client-side
// // //   if (!mounted) return null;

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
// // //       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
// // //         {/* Logo Section */}
// // //         <div className="flex items-center">
// // //           <Link href="/" className="flex items-center gap-3 group">
// // //             <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
// // //               <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
// // //                 <path
// // //                   d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
// // //                   className="stroke-primary"
// // //                   strokeWidth="2.5"
// // //                 />
// // //                 <circle
// // //                   cx="20"
// // //                   cy="20"
// // //                   r="3"
// // //                   className="fill-primary animate-pulse"
// // //                 />
// // //               </svg>
// // //             </div>
// // //             <div className="flex flex-col -space-y-1 text-slate-900 dark:text-white">
// // //               <span className="text-xl font-black tracking-tighter italic">
// // //                 DSA<span className="text-primary not-italic">.</span>
// // //               </span>
// // //               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
// // //                 Learn
// // //               </span>
// // //             </div>
// // //           </Link>
// // //         </div>

// // //         {/* Desktop Navigation Links */}
// // //         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
// // //           {navLinks.map((link) => (
// // //             <Link
// // //               key={link.href}
// // //               href={link.href}
// // //               className={cn(
// // //                 "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
// // //                 pathname.startsWith(link.href)
// // //                   ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
// // //                   : "text-muted-foreground hover:text-foreground",
// // //               )}
// // //             >
// // //               <link.icon
// // //                 className={cn(
// // //                   "h-4 w-4",
// // //                   pathname.startsWith(link.href)
// // //                     ? "text-primary"
// // //                     : "text-muted-foreground",
// // //                 )}
// // //               />
// // //               {link.name}
// // //             </Link>
// // //           ))}
// // //         </div>

// // //         {/* Search and Auth Controls */}
// // //         <div className="hidden md:flex items-center gap-3">
// // //           <button
// // //             onClick={() => setSearchOpen(true)}
// // //             className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all group outline-none"
// // //           >
// // //             <Search className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
// // //             <span className="pr-4 cursor-text">Quick Search</span>
// // //             <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-border/60 bg-background px-1.5 font-mono text-[10px]">
// // //               ⌘K
// // //             </kbd>
// // //           </button>

// // //           <div className="h-4 w-[1px] bg-border/60 mx-1" />
// // //           <ThemeToggle />

// // //           <SignedIn>
// // //             <UserButton
// // //               afterSignOutUrl="/"
// // //               appearance={{
// // //                 elements: { avatarBox: "h-9 w-9 border border-primary/20" },
// // //               }}
// // //             />
// // //           </SignedIn>

// // //           <SignedOut>
// // //             <SignInButton mode="modal">
// // //               <Button variant="ghost" size="sm">
// // //                 Log in
// // //               </Button>
// // //             </SignInButton>
// // //             <SignUpButton mode="modal">
// // //               <Button
// // //                 size="sm"
// // //                 className="font-bold px-5 rounded-full bg-primary text-primary-foreground"
// // //               >
// // //                 Join Now
// // //               </Button>
// // //             </SignUpButton>
// // //           </SignedOut>
// // //         </div>

// // //         {/* Mobile Controls */}
// // //         <div className="flex md:hidden items-center gap-3">
// // //           <button
// // //             onClick={() => setSearchOpen(true)}
// // //             className="p-2 text-muted-foreground"
// // //           >
// // //             <Search className="h-5 w-5" />
// // //           </button>
// // //           <ThemeToggle />
// // //           <button
// // //             onClick={() => setOpen(!open)}
// // //             className="text-muted-foreground"
// // //           >
// // //             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //           </button>
// // //         </div>
// // //       </nav>

// // //       {/* Search Palette Dialog */}
// // //       <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
// // //         <CommandInput placeholder="Search (e.g. 'Recursion', 'Arrays')..." />
// // //         <CommandList className="max-h-[350px] overflow-y-auto">
// // //           <CommandEmpty>No results found for your search.</CommandEmpty>
// // //           <CommandGroup heading="DSA Topics">
// // //             {dsaTopics.map((topic) => (
// // //               <CommandItem
// // //                 key={topic.id}
// // //                 value={topic.title} // Necessary for Command filtering (Image 13 fix)
// // //                 onSelect={() => handleSearchSelect(topic.id)}
// // //                 className="cursor-pointer flex items-center gap-2 p-2"
// // //               >
// // //                 <Hash className="h-4 w-4 text-primary/70" />
// // //                 <span>{topic.title}</span>
// // //               </CommandItem>
// // //             ))}
// // //           </CommandGroup>
// // //           <CommandGroup heading="Actions">
// // //             <CommandItem
// // //               onSelect={() => handleSearchSelect("/problems")}
// // //               className="cursor-pointer"
// // //             >
// // //               <Code2 className="mr-2 h-4 w-4" />
// // //               <span>Browse All Problems</span>
// // //             </CommandItem>
// // //           </CommandGroup>
// // //         </CommandList>
// // //       </CommandDialog>

// // //       {/* Mobile Sidebar */}
// // //       <AnimatePresence>
// // //         {open && (
// // //           <motion.div
// // //             initial={{ opacity: 0, height: 0 }}
// // //             animate={{ opacity: 1, height: "auto" }}
// // //             exit={{ opacity: 0, height: 0 }}
// // //             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
// // //           >
// // //             <div className="flex flex-col gap-2 p-4">
// // //               {navLinks.map((link) => (
// // //                 <Link
// // //                   key={link.href}
// // //                   href={link.href}
// // //                   onClick={() => setOpen(false)}
// // //                   className={cn(
// // //                     "flex items-center gap-3 px-4 py-3 rounded-xl font-medium",
// // //                     pathname.startsWith(link.href)
// // //                       ? "bg-muted text-primary"
// // //                       : "hover:bg-muted",
// // //                   )}
// // //                 >
// // //                   <link.icon className="h-5 w-5" />
// // //                   {link.name}
// // //                 </Link>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   );
// // // }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   Menu,
//   X,
//   BookOpen,
//   Code2,
//   Search,
//   Zap,
//   Hash,
//   LogIn,
//   UserPlus,
// } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import { dsaTopics } from "@/lib/dsa-data";

// import {
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// import {
//   UserButton,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   useUser,
// } from "@clerk/nextjs";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user } = useUser();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Keyboard shortcut: CMD+K
//   useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault();
//         setSearchOpen((prev) => !prev);
//       }
//     };
//     document.addEventListener("keydown", down);
//     return () => document.removeEventListener("keydown", down);
//   }, []);

//   const navLinks = [
//     { name: "Topics", href: "/topics", icon: BookOpen },
//     { name: "Problems", href: "/problems", icon: Code2 },
//     { name: "Roadmap", href: "/roadmap", icon: Zap },
//   ];

//   const handleSearchSelect = (id: string) => {
//     setSearchOpen(false);
//     router.push(`/topics/${id.toLowerCase()}`);
//   };

//   if (!mounted) return null;

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
//       <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
//               <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
//                 <path
//                   d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
//                   className="stroke-primary"
//                   strokeWidth="2.5"
//                 />
//                 <circle
//                   cx="20"
//                   cy="20"
//                   r="3"
//                   className="fill-primary animate-pulse"
//                 />
//               </svg>
//             </div>
//             <div className="flex flex-col -space-y-1 text-slate-900 dark:text-white">
//               <span className="text-xl font-black tracking-tighter italic">
//                 DSA<span className="text-primary not-italic">.</span>
//               </span>
//               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
//                 Learn
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
//                 pathname.startsWith(link.href)
//                   ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
//                   : "text-muted-foreground hover:text-foreground",
//               )}
//             >
//               <link.icon
//                 className={cn(
//                   "h-4 w-4",
//                   pathname.startsWith(link.href)
//                     ? "text-primary"
//                     : "text-muted-foreground",
//                 )}
//               />
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Controls */}
//         <div className="hidden md:flex items-center gap-3">
//           <button
//             onClick={() => setSearchOpen(true)}
//             className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all outline-none"
//           >
//             <Search className="h-3.5 w-3.5" />
//             <span className="pr-4 cursor-text">Quick Search</span>
//             <kbd className="hidden lg:inline-flex h-5 px-1.5 font-mono text-[10px] border border-border/60 bg-background rounded">
//               ⌘K
//             </kbd>
//           </button>
//           <ThemeToggle />
//           <SignedIn>
//             <UserButton
//               afterSignOutUrl="/"
//               appearance={{
//                 elements: { avatarBox: "h-9 w-9 border border-primary/20" },
//               }}
//             />
//           </SignedIn>
//           <SignedOut>
//             <SignInButton mode="modal">
//               <Button variant="ghost" size="sm">
//                 Log in
//               </Button>
//             </SignInButton>
//             <SignUpButton mode="modal">
//               <Button size="sm" className="font-bold px-5 rounded-full">
//                 Join Now
//               </Button>
//             </SignUpButton>
//           </SignedOut>
//         </div>

//         {/* Mobile Buttons (Search + Theme + Hamburger) */}
//         <div className="flex md:hidden items-center gap-3">
//           <button
//             onClick={() => setSearchOpen(true)}
//             className="p-2 text-muted-foreground"
//           >
//             <Search className="h-5 w-5" />
//           </button>
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-muted-foreground"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Sidebar */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl absolute w-full left-0 shadow-2xl z-50 overflow-hidden"
//           >
//             <div className="flex flex-col gap-2 p-4 pb-8">
//               {/* Profile Card if Logged In */}
//               <SignedIn>
//                 <div className="flex items-center gap-3 px-4 py-4 mb-2 bg-muted/30 rounded-2xl border border-white/5">
//                   <UserButton
//                     appearance={{ elements: { avatarBox: "h-10 w-10" } }}
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-sm font-bold">
//                       {user?.fullName || "User"}
//                     </span>
//                     <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
//                       Premium Member
//                     </span>
//                   </div>
//                 </div>
//               </SignedIn>

//               {/* Nav Links */}
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setOpen(false)}
//                   className={cn(
//                     "flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-all",
//                     pathname.startsWith(link.href)
//                       ? "bg-primary/10 text-primary"
//                       : "hover:bg-muted",
//                   )}
//                 >
//                   <link.icon className="h-5 w-5" />
//                   {link.name}
//                 </Link>
//               ))}

//               {/* Login & Join Buttons for Mobile (When Signed Out) */}
//               <SignedOut>
//                 <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border/40">
//                   <SignInButton mode="modal">
//                     <Button
//                       variant="outline"
//                       className="w-full rounded-xl flex gap-2 h-12"
//                     >
//                       <LogIn className="h-4 w-4" /> Log in
//                     </Button>
//                   </SignInButton>
//                   <SignUpButton mode="modal">
//                     <Button className="w-full rounded-xl flex gap-2 h-12 font-bold bg-primary text-primary-foreground">
//                       <UserPlus className="h-4 w-4" /> Join
//                     </Button>
//                   </SignUpButton>
//                 </div>
//               </SignedOut>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Command Palette Logic (Search remains same) */}
//       <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
//         <CommandInput placeholder="Search topics..." />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>
//           <CommandGroup heading="Topics">
//             {dsaTopics.map((topic) => (
//               <CommandItem
//                 key={topic.id}
//                 value={topic.title}
//                 onSelect={() => handleSearchSelect(topic.id)}
//                 className="cursor-pointer"
//               >
//                 <Hash className="mr-2 h-4 w-4 text-primary" />
//                 <span>{topic.title}</span>
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </CommandList>
//       </CommandDialog>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  BookOpen,
  Code2,
  Search,
  Zap,
  Hash,
  LogIn,
  UserPlus,
  Youtube,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { dsaTopics } from "@/lib/dsa-data";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut: CMD+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navLinks = [
    { name: "Topics", href: "/topics", icon: BookOpen },
    { name: "Problems", href: "/problems", icon: Code2 },
    { name: "Roadmap", href: "/roadmap", icon: Zap },
  ];

  const handleSearchSelect = (id: string) => {
    setSearchOpen(false);
    router.push(`/topics/${id.toLowerCase()}`);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative bg-background border border-primary/20 p-1.5 rounded-xl transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
                  className="stroke-primary"
                  strokeWidth="2.5"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="3"
                  className="fill-primary animate-pulse"
                />
              </svg>
            </div>
            <div className="flex flex-col -space-y-1 text-slate-900 dark:text-white">
              <span className="text-xl font-black tracking-tighter italic">
                DSA<span className="text-primary not-italic">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                Learn
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full cursor-pointer",
                pathname.startsWith(link.href)
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <link.icon
                className={cn(
                  "h-4 w-4",
                  pathname.startsWith(link.href)
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-3 px-3 py-1.5 bg-muted/40 border border-border/40 rounded-lg text-xs text-muted-foreground hover:bg-muted/60 transition-all outline-none"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="pr-4 cursor-text">Quick Search</span>
            <kbd className="hidden lg:inline-flex h-5 px-1.5 font-mono text-[10px] border border-border/60 bg-background rounded">
              ⌘K
            </kbd>
          </button>

          {/* YouTube Icon Link */}
          {/* YouTube Icon Link */}
          <Link
            href="https://www.youtube.com/@tusharbarua5074"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 group transition-all duration-300"
            title="Visit YouTube Channel"
          >
            {/* Custom YouTube Icon: Default White, Red on Hover */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-muted-foreground group-hover:fill-[#FF0000] transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>

          <ThemeToggle />
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: "h-9 w-9 border border-primary/20" },
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            {/* <SignUpButton mode="modal">
              <Button size="sm" className="font-bold px-5 rounded-full">
                Join Now
              </Button>
            </SignUpButton> */}
            <SignUpButton mode="modal">
              <Button
                size="sm"
                className="relative group h-9 px-6 font-bold rounded-full transition-all duration-300 
               bg-primary text-primary-foreground
               hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
               active:scale-95 border border-white/10 cursor-pointer"
              >
                {/* Subtle Inner Highlight */}
                <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />

                <span className="relative flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" />
                  Join Now
                </span>
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* YouTube Icon Link */}
          {/* YouTube Icon Link */}
          <Link
            href="https://www.youtube.com/@tusharbarua5074"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 group transition-all duration-300"
            title="Visit YouTube Channel"
          >
            {/* Custom YouTube Icon: Default White, Red on Hover */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-muted-foreground group-hover:fill-[#FF0000] transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-muted-foreground"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl absolute w-full left-0 shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-4 pb-8">
              {/* Profile Card if Logged In */}
              <SignedIn>
                <div className="flex items-center gap-3 px-4 py-4 mb-2 bg-muted/30 rounded-2xl border border-white/5">
                  <UserButton
                    appearance={{ elements: { avatarBox: "h-10 w-10" } }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">
                      {user?.fullName || "User"}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      Premium Member
                    </span>
                  </div>
                </div>
              </SignedIn>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium transition-all",
                    pathname.startsWith(link.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted",
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              ))}

              {/* Login & Join Buttons for Mobile */}
              <SignedOut>
                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border/40">
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl flex gap-2 h-12"
                    >
                      <LogIn className="h-4 w-4" /> Log in
                    </Button>
                  </SignInButton>
                  {/* <SignUpButton mode="modal">
                    <Button className="w-full rounded-xl flex gap-2 h-12 font-bold bg-primary text-primary-foreground">
                      <UserPlus className="h-4 w-4" /> Join
                    </Button>
                  </SignUpButton> */}
                  <SignUpButton mode="modal">
                    <Button
                      size="sm"
                      className="relative group h-9 px-6 font-bold rounded-full transition-all duration-300 
               bg-primary text-primary-foreground
               hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] 
               active:scale-95 border border-white/10 cursor-pointer"
                    >
                      {/* Subtle Inner Highlight */}
                      <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />

                      <span className="relative flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-110" />
                        Join Now
                      </span>
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search topics..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Topics">
            {dsaTopics.map((topic) => (
              <CommandItem
                key={topic.id}
                value={topic.title}
                onSelect={() => handleSearchSelect(topic.id)}
                className="cursor-pointer"
              >
                <Hash className="mr-2 h-4 w-4 text-primary" />
                <span>{topic.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
