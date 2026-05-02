// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   LayoutDashboard,
//   Code2,
//   Map,
//   Settings,
//   Trophy,
//   LogOut,
// } from "lucide-react";
// import { UserButton } from "@clerk/nextjs";

// const navItems = [
//   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//   { name: "Problems", href: "/problems", icon: Code2 },
//   { name: "Roadmap", href: "/roadmap", icon: Map },
//   { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
//   { name: "Settings", href: "/settings", icon: Settings },
// ];

// export function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-screen sticky top-0">
//       <div className="p-6">
//         <div className="flex items-center gap-2 mb-8">
//           <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black italic">
//             DL
//           </div>
//           <span className="text-white font-bold text-xl tracking-tight">
//             DSA.Learn
//           </span>
//         </div>

//         <nav className="space-y-1">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                   isActive
//                     ? "bg-emerald-500/10 text-emerald-500"
//                     : "text-zinc-400 hover:bg-white/5 hover:text-white"
//                 }`}
//               >
//                 <item.icon className="w-4 h-4" />
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       <div className="mt-auto p-6 border-t border-white/5 flex items-center gap-3">
//         <UserButton afterSignOutUrl="/" />
//         <div className="flex flex-col">
//           <span className="text-xs font-medium text-white">My Account</span>
//           <span className="text-[10px] text-zinc-500">Premium Member</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { LayoutDashboard, Code2, Map, Trophy, User } from "lucide-react";
// // import { UserButton } from "@clerk/nextjs";

// // const menuItems = [
// //   { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
// //   { name: "Problems", href: "/problems", icon: Code2 },
// //   { name: "Roadmap", href: "/roadmap", icon: Map },
// //   { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
// // ];

// // export function Sidebar() {
// //   const pathname = usePathname();

// //   return (
// //     <div className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col p-6 h-full">
// //       <div className="flex items-center gap-2 mb-10">
// //         <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-black">DL</div>
// //         <span className="font-bold text-xl">DSA Learn</span>
// //       </div>

// //       <nav className="flex-1 space-y-2">
// //         {menuItems.map((item) => (
// //           <Link
// //             key={item.href}
// //             href={item.href}
// //             className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
// //               pathname === item.href ? "bg-emerald-500/10 text-emerald-500" : "text-zinc-400 hover:text-white hover:bg-white/5"
// //             }`}
// //           >
// //             <item.icon size={18} />
// //             {item.name}
// //           </Link>
// //         ))}
// //       </nav>

// //       <div className="pt-6 border-t border-white/5 flex items-center gap-3">
// //         <UserButton afterSignOutUrl="/" />
// //         <div className="text-xs">
// //            <p className="text-white font-medium">Account Settings</p>
// //            <p className="text-zinc-500">Manage profile</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  BookMarked, 
  Target,
  Code2,
  Settings,
  LogOut,
  Home
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const mainNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Problems", href: "/problems", icon: Code2 },
  { name: "Bookmarks", href: "/bookmarks", icon: BookMarked },
  { name: "Roadmap", href: "/roadmap", icon: Target },
  { name: "Profile", href: "/profile", icon: User },
];

const bottomNavItems = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-screen sticky top-0 shrink-0 z-50">
      {/* Top Section */}
      <div className="p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 group">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">
            DL
          </div>
          <span className="text-white font-bold text-xl tracking-tight group-hover:text-emerald-500 transition-colors">
            DSA.Learn
          </span>
        </Link>

        {/* Back to Home */}
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 mb-6 rounded-lg text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-300 transition-all"
        >
          <Home className="w-3.5 h-3.5" />
          Back to Home
        </Link>

        {/* Main Navigation */}
        <nav className="space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-500 shadow-sm"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Bottom Navigation (Settings, etc) */}
        <div className="px-6 pb-4">
          <div className="border-t border-white/5 pt-4 space-y-1">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-t border-white/5 bg-zinc-900/50">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9"
                }
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.firstName || "User"}
              </p>
              <p className="text-xs text-zinc-500 truncate">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
