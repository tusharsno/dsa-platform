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
  Bookmark,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { dsaTopics } from "@/lib/dsa-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

import { UserProfileMenu } from "./UserProfileMenu";

interface NavbarProps {
  topics?: Array<{
    id: string;
    name: string;
    slug: string;
    icon: string | null;
  }>;
}

export default function Navbar({ topics = [] }: NavbarProps) {
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

  const isProblemEditor =
    pathname.startsWith("/problems/") && pathname.split("/").length === 3;

  const navLinks = [
    { name: "Problems", href: "/problems", icon: Code2 },
    { name: "Discussions", href: "/discussions", icon: MessageSquare },
    { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
    { name: "Roadmap", href: "/roadmap", icon: Zap },
  ];

  const handleSearchSelect = (id: string) => {
    setSearchOpen(false);
    router.push(`/topics/${id.toLowerCase()}`);
  };

  if (!mounted) return null;
  if (isProblemEditor) return null;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Prisma.io style minimal navbar */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md border-b border-white/10"></div>
      
      <nav className="relative max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Minimal Logo - Prisma Style */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Syntax</span>
              <span className="text-white/40">ia</span>
            </span>
          </Link>
        </motion.div>

        {/* Minimal Desktop Navigation - Prisma Style */}
        <motion.div 
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Topics Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  pathname.startsWith("/topics")
                    ? "text-white"
                    : "text-white/60 hover:text-white",
                )}
              >
                Topics
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-black/95 backdrop-blur-xl border-white/10">
              {topics.map((topic) => (
                <DropdownMenuItem key={topic.id} asChild>
                  <Link
                    href={`/topics/${topic.slug}`}
                    className="px-3 py-2 cursor-pointer text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {topic.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-white"
                    : "text-white/60 hover:text-white",
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal Desktop Controls - Prisma Style */}
        <motion.div 
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Minimal Search */}
          <motion.button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/60 hover:text-white hover:border-white/20 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="hidden lg:inline-flex items-center h-4 px-1.5 font-mono text-[9px] border border-white/20 bg-white/5 rounded text-white/50">
              ⌘K
            </kbd>
          </motion.button>

          {/* YouTube Link */}
          <Link
            href="https://www.youtube.com/@tusharbarua5074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>

          <ThemeToggle />

          <SignedIn>
            <UserProfileMenu />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white/60 hover:text-white hover:bg-white/5 text-sm"
              >
                Log in
              </Button>
            </SignInButton>
            
            <SignUpButton mode="modal">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-white/90 text-sm h-8 px-4"
              >
                Sign up
              </Button>
            </SignUpButton>
          </SignedOut>
        </motion.div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <motion.button
            onClick={() => setOpen(!open)}
            className="text-white/70 p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full left-0 bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-2xl z-50"
          >
            <div className="flex flex-col gap-2 p-6">
              <SignedIn>
                <motion.div 
                  className="flex items-center justify-between px-4 py-4 mb-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <UserProfileMenu />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-white">
                        {user?.fullName || "User"}
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest">
                        Premium Member
                      </span>
                    </div>
                  </div>
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white font-medium bg-white/10 hover:bg-white/20 border border-white/20 rounded-full"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </motion.div>
              </SignedIn>

              {/* Topics Section in Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-2"
              >
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Topics
                </div>
                {topics.map((topic) => (
                  <Link
                    key={topic.id}
                    href={`/topics/${topic.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {topic.name}
                  </Link>
                ))}
              </motion.div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all",
                      pathname.startsWith(link.href)
                        ? "bg-white/15 text-white border border-white/20"
                        : "text-white/70 hover:text-white hover:bg-white/10",
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <SignedOut>
                <motion.div 
                  className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full rounded-xl flex gap-2 h-12 bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      <LogIn className="h-4 w-4" /> Log in
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button
                      size="sm"
                      className="w-full rounded-xl flex gap-2 h-12 font-semibold bg-white text-black hover:bg-white/90"
                    >
                      <Zap className="h-3.5 w-3.5" />
                      Join Now
                    </Button>
                  </SignUpButton>
                </motion.div>
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