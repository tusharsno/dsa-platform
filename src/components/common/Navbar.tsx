"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Code2, LayoutDashboard } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Topics", href: "/topics", icon: BookOpen },
    { name: "Problems", href: "/problems", icon: Code2 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        
        {/* লোগো সেকশন */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline-block">
              DSA Learn
            </span>
          </Link>
        </div>

        {/* মাঝখানের মেনু (Desktop) */}
        <div className="hidden md:flex items-center bg-muted/50 px-4 py-1.5 rounded-full border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 text-sm font-medium transition-all rounded-full",
                pathname === link.href 
                  ? "bg-background text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* ডানদিকের বাটন সেকশন (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/auth/sign-in">
            <Button variant="ghost" size="sm" className="font-medium">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button size="sm" className="font-medium px-5">
              Get Started
            </Button>
          </Link>
        </div>

        {/* মোবাইল মেনু বাটন */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* মোবাইল মেনু ড্রপডাউন */}
      {open && (
        <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted"
                )}
                onClick={() => setOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4 border-t">
            <Link href="/auth/sign-in" className="w-full" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up" className="w-full" onClick={() => setOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { Menu, X, BookOpen, Code2, LayoutDashboard, ShieldCheck } from "lucide-react"; // ShieldCheck যোগ করা হয়েছে
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
//         <div className="hidden md:flex items-center bg-muted/50 px-2 py-1 rounded-full border">
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

//           {/* প্রফেশনাল অ্যাডমিন লিঙ্ক */}
//           <div className="w-px h-4 bg-border mx-2" /> {/* Divider */}
//           <Link
//             href="/admin/problems"
//             className={cn(
//               "flex items-center gap-2 px-4 py-1.5 text-sm font-bold transition-all rounded-full border border-transparent",
//               pathname.startsWith("/admin")
//                 ? "bg-primary/10 text-primary border-primary/20"
//                 : "text-orange-500 hover:bg-orange-500/10"
//             )}
//           >
//             <ShieldCheck className="h-4 w-4" />
//             Admin
//           </Link>
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
            
//             {/* মোবাইল অ্যাডমিন লিঙ্ক */}
//             <Link
//               href="/admin/problems"
//               className="flex items-center gap-3 p-3 rounded-lg text-sm font-bold text-orange-500 hover:bg-orange-500/5 transition-colors"
//               onClick={() => setOpen(false)}
//             >
//               <ShieldCheck className="h-5 w-5" />
//               Admin Dashboard
//             </Link>
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