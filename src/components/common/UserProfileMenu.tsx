"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  User,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export function UserProfileMenu() {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex items-center focus:outline-none shrink-0 transition-opacity hover:opacity-80">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.imageUrl}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
              {user.firstName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-70 mt-2 bg-background/95 backdrop-blur-xl border border-white/10 p-1.5 rounded-xl shadow-2xl shadow-black/50"
        align="end"
      >
        <div className="flex items-center gap-3 p-3 mb-1">
          <Avatar className="h-10 w-10 border border-white/5">
            <AvatarImage src={user.imageUrl} />
          </Avatar>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-bold text-white truncate">
                {user.fullName}
              </p>
              <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <p className="text-[10px] text-zinc-500 truncate lowercase">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-white/5 mx-1" />

        <div className="space-y-0.5 py-1">
          <Link href="/profile">
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all focus:bg-white/5 text-zinc-300 focus:text-white group">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-blue-500/10 group-focus:bg-blue-500/20">
                  <User className="h-4 w-4 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Profile</span>
                  <span className="text-[10px] text-zinc-500">
                    View your profile
                  </span>
                </div>
              </div>
            </DropdownMenuItem>
          </Link>

          <Link href="/dashboard">
            <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all focus:bg-white/5 text-zinc-300 focus:text-white group">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-purple-500/10 group-focus:bg-purple-500/20">
                  <LayoutDashboard className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Dashboard</span>
                  <span className="text-[10px] text-zinc-500">
                    Track your progress
                  </span>
                </div>
              </div>
            </DropdownMenuItem>
          </Link>

          <button onClick={() => openUserProfile()} className="w-full">
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all focus:bg-white/5 text-zinc-300 focus:text-white">
              <div className="p-1.5 rounded-md bg-zinc-500/10">
                <Settings className="h-4 w-4 text-zinc-400" />
              </div>
              <span className="text-sm font-medium">Manage Account</span>
            </DropdownMenuItem>
          </button>
        </div>

        <DropdownMenuSeparator className="bg-white/5 mx-1" />

        <DropdownMenuItem
          onClick={() => signOut()}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer focus:bg-red-500/10 text-zinc-400 focus:text-red-400 transition-colors mt-1"
        >
          <div className="p-1.5 rounded-md bg-red-500/10">
            <LogOut className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
