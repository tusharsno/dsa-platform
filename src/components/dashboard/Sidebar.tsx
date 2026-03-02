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
import { LayoutDashboard, Code2, Map, Settings, Trophy } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Problems", href: "/problems", icon: Code2 },
  { name: "Roadmap", href: "/roadmap", icon: Map },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="p-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black italic">
            DL
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            DSA.Learn
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
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
        </nav>
      </div>

      {/* User Profile Section at Bottom */}
      <div className="mt-auto p-6 border-t border-white/5 flex items-center gap-3">
        <UserButton afterSignOutUrl="/" />
        <div className="flex flex-col">
          <span className="text-xs font-medium text-white">My Account</span>
          <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            Free Tier
          </span>
        </div>
      </div>
    </div>
  );
}
