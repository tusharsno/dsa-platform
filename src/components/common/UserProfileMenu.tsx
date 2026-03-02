// // "use client";

// // import { useUser, useClerk } from "@clerk/nextjs";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import {
// //   LayoutDashboard,
// //   TrendingUp,
// //   LogOut,
// //   User,
// //   Settings,
// // } from "lucide-react";
// // import Link from "next/link";

// // export function UserProfileMenu() {
// //   const { user } = useUser();
// //   const { signOut, openUserProfile } = useClerk();

// //   if (!user) return null;

// //   return (
// //     <DropdownMenu>
// //       <DropdownMenuTrigger asChild>
// //         {/* প্রোফাইল পিকচার বাটন - যা একদম প্রফেশনাল দেখাবে */}
// //         <button className="relative h-9 w-9 rounded-full border border-primary/20 hover:border-primary/50 transition-all outline-none overflow-hidden">
// //           <Avatar className="h-full w-full">
// //             <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
// //             <AvatarFallback>{user.firstName?.charAt(0)}</AvatarFallback>
// //           </Avatar>
// //         </button>
// //       </DropdownMenuTrigger>

// //       <DropdownMenuContent
// //         className="w-64 mt-2 bg-[#020617] border-white/10 p-2 rounded-xl shadow-2xl"
// //         align="end"
// //       >
// //         {/* ইউজার ইনফো */}
// //         <div className="flex items-center gap-3 p-3 mb-1">
// //           <div className="flex flex-col space-y-0.5">
// //             <p className="text-sm font-bold text-white truncate w-48">
// //               {user.fullName}
// //             </p>
// //             <p className="text-[11px] text-muted-foreground truncate w-48">
// //               {user.primaryEmailAddress?.emailAddress}
// //             </p>
// //           </div>
// //         </div>

// //         <DropdownMenuSeparator className="bg-white/5" />

// //         {/* লিঙ্কগুলো */}
// //         <div className="py-1">
// //           <Link href="/dashboard">
// //             <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/5 text-slate-300">
// //               <LayoutDashboard className="h-4 w-4 text-primary" />
// //               <span className="text-sm">Dashboard</span>
// //             </DropdownMenuItem>
// //           </Link>

// //           <Link href="/roadmap">
// //             <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/5 text-slate-300">
// //               <TrendingUp className="h-4 w-4 text-primary" />
// //               <span className="text-sm">My Progress</span>
// //             </DropdownMenuItem>
// //           </Link>

// //           <button
// //             onClick={() => openUserProfile()}
// //             className="w-full text-left outline-none"
// //           >
// //             <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/5 text-slate-300">
// //               <Settings className="h-4 w-4 text-primary" />
// //               <span className="text-sm">Account Settings</span>
// //             </DropdownMenuItem>
// //           </button>
// //         </div>

// //         <DropdownMenuSeparator className="bg-white/5" />

// //         {/* লগ আউট */}
// //         <DropdownMenuItem
// //           onClick={() => signOut()}
// //           className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-red-500/10 text-red-400 group transition-colors"
// //         >
// //           <LogOut className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
// //           <span className="text-sm font-medium">Log out</span>
// //         </DropdownMenuItem>
// //       </DropdownMenuContent>
// //     </DropdownMenu>
// //   );
// // }

// "use client";

// import { useUser, useClerk } from "@clerk/nextjs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   LayoutDashboard,
//   Settings,
//   LogOut,
//   User,
//   ChevronRight,
//   ShieldCheck,
// } from "lucide-react";
// import Link from "next/link";

// export function UserProfileMenu() {
//   const { user } = useUser();
//   const { signOut, openUserProfile } = useClerk();

//   if (!user) return null;

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         {/* AlgoMaster style Profile Avatar */}
//         <button className="relative group flex items-center gap-1 focus:outline-none shrink-0 transition-opacity hover:opacity-80">
//           <div className="h-9 w-9 rounded-full border-2 border-emerald-500/20 p-[2px] transition-all group-hover:border-emerald-500/50">
//             <Avatar className="h-full w-full border border-black/50">
//               <AvatarImage src={user.imageUrl} className="object-cover" />
//               <AvatarFallback className="bg-emerald-500/10 text-emerald-500 font-bold">
//                 {user.firstName?.charAt(0)}
//               </AvatarFallback>
//             </Avatar>
//           </div>
//         </button>
//       </DropdownMenuTrigger>

//       {/* AlgoMaster style Dropdown Content */}
//       <DropdownMenuContent
//         className="w-72 mt-2 bg-[#0d0d0d] border border-white/10 p-1.5 rounded-xl shadow-2xl shadow-black/50"
//         align="end"
//       >
//         <div className="flex items-center gap-3 p-3 mb-1">
//           <div className="h-10 w-10 rounded-full border border-white/10 overflow-hidden shrink-0">
//             <img
//               src={user.imageUrl}
//               alt="profile"
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col min-w-0">
//             <div className="flex items-center gap-1.5">
//               <p className="text-sm font-bold text-white truncate">
//                 {user.fullName}
//               </p>
//               <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
//             </div>
//             <p className="text-[11px] text-zinc-500 truncate">
//               {user.primaryEmailAddress?.emailAddress}
//             </p>
//           </div>
//         </div>

//         <DropdownMenuSeparator className="bg-white/5 mx-1" />

//         <div className="space-y-0.5 py-1">
//           <Link href="/dashboard">
//             <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all focus:bg-white/5 text-zinc-300 focus:text-white group">
//               <div className="flex items-center gap-3">
//                 <LayoutDashboard className="h-4 w-4 text-emerald-500" />
//                 <span className="text-sm font-medium">Dashboard</span>
//               </div>
//               <ChevronRight className="h-3.5 w-3.5 text-zinc-600 group-focus:text-emerald-500 transition-colors" />
//             </DropdownMenuItem>
//           </Link>

//           <button onClick={() => openUserProfile()} className="w-full">
//             <DropdownMenuItem className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all focus:bg-white/5 text-zinc-300 focus:text-white group">
//               <div className="flex items-center gap-3">
//                 <Settings className="h-4 w-4 text-zinc-400 group-focus:text-emerald-500" />
//                 <span className="text-sm font-medium">Manage Account</span>
//               </div>
//               <ChevronRight className="h-3.5 w-3.5 text-zinc-600 group-focus:text-emerald-500 transition-colors" />
//             </DropdownMenuItem>
//           </button>
//         </div>

//         <DropdownMenuSeparator className="bg-white/5 mx-1" />

//         <DropdownMenuItem
//           onClick={() => signOut()}
//           className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer focus:bg-red-500/10 text-zinc-400 focus:text-red-400 transition-colors mt-1"
//         >
//           <LogOut className="h-4 w-4" />
//           <span className="text-sm font-medium">Sign out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

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
  ChevronRight,
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
        {/* ১. বর্ডার রিমুভ করে একদম ক্লিন প্রোফাইল পিকচার */}
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

      {/* ২ ও ৩. ৪টি অপশন এবং আপনার হোমপেজের সাথে মিল রেখে ব্যাকগ্রাউন্ড */}
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
          {/* i. Profile */}
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

          {/* ii. Dashboard */}
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

          {/* iii. Manage Account */}
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

        {/* iv. Sign out */}
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
