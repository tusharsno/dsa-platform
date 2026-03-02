// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { CardContent } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import * as LucideIcons from "lucide-react";
// // // import { cn } from "@/lib/utils";
// // // import Link from "next/link";
// // // import { SpotlightCard } from "../animations/SpotlightCard";

// // // type IconName = keyof typeof LucideIcons;

// // // interface TopicCardProps {
// // //   id: string;
// // //   title: string;
// // //   description: string;
// // //   complexity: string;
// // //   iconName: string;
// // // }

// // // export default function TopicCard({
// // //   id,
// // //   title,
// // //   description,
// // //   complexity,
// // //   iconName,
// // // }: TopicCardProps) {
// // //   const Icon =
// // //     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
// // //     LucideIcons.HelpCircle;

// // //   return (
// // //     <Link href={`/topics/${id}`} className="block h-full group">
// // //       <motion.div
// // //         whileHover={{ y: -4 }} // Subtle lift, not too much
// // //         transition={{ duration: 0.3, ease: "easeOut" }}
// // //         className="h-full"
// // //       >
// // //         <SpotlightCard
// // //           className={cn(
// // //             "h-full transition-all duration-500 border relative overflow-hidden",
// // //             // Background: Problems page er sathe match kore deep tint
// // //             "bg-white/[0.02] dark:bg-[#09090b]/40 backdrop-blur-md",
// // //             // Border: Khub e subtle, hover korle ektu cyan light ashbe
// // //             "border-black/[0.05] dark:border-white/[0.05] group-hover:border-cyan-500/20",
// // //             // Shadow: Chokhe porbe na emon shadow
// // //             "shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
// // //           )}
// // //         >
// // //           {/* Top-Left Subtle Glow: Eta ekhon chokhe lagbe na, opacity khub e kom */}
// // //           <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

// // //           <CardContent className="p-7 h-full flex flex-col justify-between relative z-10">
// // //             <div>
// // //               <div className="flex items-start justify-between mb-6">
// // //                 <div
// // //                   className={cn(
// // //                     "p-2.5 rounded-xl transition-all duration-500 border shadow-sm",
// // //                     // Light mode vs Dark mode colors
// // //                     "bg-zinc-100 border-zinc-200 text-zinc-600",
// // //                     "dark:bg-zinc-800/50 dark:border-white/5 dark:text-zinc-400 dark:group-hover:text-cyan-400 dark:group-hover:border-cyan-500/20",
// // //                   )}
// // //                 >
// // //                   <Icon className="h-5 w-5" />
// // //                 </div>

// // //                 <Badge
// // //                   variant="outline"
// // //                   className={cn(
// // //                     "font-mono text-[10px] px-2 py-0.5 tracking-tight font-medium",
// // //                     "border-zinc-200 text-zinc-500",
// // //                     "dark:border-cyan-500/10 dark:bg-cyan-500/5 dark:text-cyan-500/80",
// // //                   )}
// // //                 >
// // //                   {complexity}
// // //                 </Badge>
// // //               </div>

// // //               <h3 className="text-lg font-semibold tracking-tight mb-2 text-zinc-800 dark:text-zinc-200 group-hover:dark:text-white transition-colors">
// // //                 {title}
// // //               </h3>

// // //               <p className="text-sm leading-relaxed line-clamp-2 font-normal text-zinc-500 dark:text-zinc-400/80">
// // //                 {description}
// // //               </p>
// // //             </div>

// // //             <div
// // //               className={cn(
// // //                 "mt-8 flex items-center text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-500",
// // //                 "text-zinc-400 dark:text-cyan-500/50 group-hover:dark:text-cyan-400",
// // //               )}
// // //             >
// // //               <span className="relative">
// // //                 View Challenge
// // //                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500/50 transition-all duration-500 group-hover:w-full" />
// // //               </span>
// // //               <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
// // //             </div>
// // //           </CardContent>
// // //         </SpotlightCard>
// // //       </motion.div>
// // //     </Link>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { CardContent } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import * as LucideIcons from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import Link from "next/link";
// // import { SpotlightCard } from "../animations/SpotlightCard";

// // type IconName = keyof typeof LucideIcons;

// // interface TopicCardProps {
// //   id: string;
// //   title: string;
// //   description: string;
// //   complexity: string;
// //   iconName: string;
// // }

// // export default function TopicCard({
// //   id,
// //   title,
// //   description,
// //   complexity,
// //   iconName,
// // }: TopicCardProps) {
// //   const Icon =
// //     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
// //     LucideIcons.HelpCircle;

// //   return (
// //     <Link href={`/topics/${id}`} className="block h-full group">
// //       <motion.div
// //         whileHover={{ y: -5 }}
// //         transition={{ duration: 0.3, ease: "easeOut" }}
// //         className="h-full"
// //       >
// //         <SpotlightCard
// //           className={cn(
// //             "h-full transition-all duration-500 border relative overflow-hidden",
// //             // Background specification
// //             "bg-white dark:bg-[#09090b]/60 backdrop-blur-md",
// //             // Border specification matching Problems Page
// //             "border-zinc-200 dark:border-white/[0.05] group-hover:dark:border-cyan-500/30",
// //             "shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]",
// //           )}
// //         >
// //           {/* Subtle Inner Glow (Not harsh) */}
// //           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

// //           <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
// //             <div>
// //               <div className="flex items-start justify-between mb-8">
// //                 {/* Icon Logic: Hover korle color change hobe (Original Style) */}
// //                 <div
// //                   className={cn(
// //                     "p-3 rounded-2xl transition-all duration-500 border",
// //                     // Light Mode Styles
// //                     "bg-zinc-50 border-zinc-200 text-zinc-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400",
// //                     // Dark Mode Styles
// //                     "dark:bg-zinc-800/40 dark:border-white/5 dark:text-zinc-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-black dark:group-hover:border-cyan-500/50",
// //                   )}
// //                 >
// //                   <Icon className="h-5 w-5" />
// //                 </div>

// //                 {/* Complexity Badge */}
// //                 <Badge
// //                   variant="outline"
// //                   className={cn(
// //                     "font-mono text-[10px] px-2 py-1 font-medium tracking-tight",
// //                     "border-zinc-200 text-zinc-500", // Light Mode
// //                     "dark:border-cyan-500/20 dark:bg-cyan-500/5 dark:text-cyan-500/80", // Dark Mode
// //                   )}
// //                 >
// //                   {complexity}
// //                 </Badge>
// //               </div>

// //               {/* Title & Description */}
// //               <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-zinc-100 group-hover:dark:text-white transition-colors">
// //                 {title}
// //               </h3>

// //               <p className="text-sm leading-relaxed font-normal text-zinc-600 dark:text-zinc-400/80 line-clamp-2">
// //                 {description}
// //               </p>
// //             </div>

// //             {/* Action Link with Premium Underline */}
// //             <div
// //               className={cn(
// //                 "mt-10 flex items-center text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500",
// //                 "text-zinc-400 dark:text-cyan-500/40 group-hover:dark:text-cyan-400",
// //               )}
// //             >
// //               <span className="relative">
// //                 View Challenge
// //                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500/50 transition-all duration-500 group-hover:w-full" />
// //               </span>
// //               <LucideIcons.ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
// //             </div>
// //           </CardContent>
// //         </SpotlightCard>
// //       </motion.div>
// //     </Link>
// //   );
// // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { CardContent } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import * as LucideIcons from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import Link from "next/link";
// // import { SpotlightCard } from "../animations/SpotlightCard";

// // type IconName = keyof typeof LucideIcons;

// // interface TopicCardProps {
// //   id: string;
// //   title: string;
// //   description: string;
// //   complexity: string;
// //   iconName: string;
// // }

// // export default function TopicCard({
// //   id,
// //   title,
// //   description,
// //   complexity,
// //   iconName,
// // }: TopicCardProps) {
// //   const Icon =
// //     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
// //     LucideIcons.HelpCircle;

// //   return (
// //     <Link href={`/topics/${id}`} className="block h-full group">
// //       <motion.div
// //         whileHover={{ y: -5 }}
// //         transition={{ duration: 0.3, ease: "easeOut" }}
// //         className="h-full"
// //       >
// //         <SpotlightCard
// //           className={cn(
// //             "h-full transition-all duration-500 border relative overflow-hidden",
// //             // FIX: Pure black bad diye background-er navy tone-er sathe match kora hoyeche
// //             "bg-[#0c111d]/40 backdrop-blur-xl",
// //             // FIX: Border color-ta arektu subtle navy-blue kora hoyeche
// //             "border-white/[0.05] group-hover:border-cyan-500/30",
// //             "shadow-[0_8px_30px_rgb(0,0,0,0.2)]",
// //           )}
// //         >
// //           {/* Very subtle glow to make it pop from the navy background */}
// //           <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

// //           <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
// //             <div>
// //               <div className="flex items-start justify-between mb-8">
// //                 {/* Your Original Hover Logic: Logo background changes to cyan */}
// //                 <div
// //                   className={cn(
// //                     "p-3 rounded-2xl transition-all duration-500 border",
// //                     "bg-zinc-800/50 border-white/5 text-zinc-400",
// //                     "group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400",
// //                   )}
// //                 >
// //                   <Icon className="h-5 w-5" />
// //                 </div>

// //                 <Badge
// //                   variant="outline"
// //                   className="font-mono text-[10px] px-2 py-1 border-cyan-500/20 bg-cyan-500/5 text-cyan-400/80"
// //                 >
// //                   {complexity}
// //                 </Badge>
// //               </div>

// //               <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-100 group-hover:text-white transition-colors">
// //                 {title}
// //               </h3>

// //               <p className="text-sm leading-relaxed text-zinc-400/70 line-clamp-2">
// //                 {description}
// //               </p>
// //             </div>

// //             <div className="mt-10 flex items-center text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-500/50 group-hover:text-cyan-400 transition-all">
// //               <span>View Challenge</span>
// //               <LucideIcons.ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
// //             </div>
// //           </CardContent>
// //         </SpotlightCard>
// //       </motion.div>
// //     </Link>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import * as LucideIcons from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { SpotlightCard } from "../animations/SpotlightCard";

// type IconName = keyof typeof LucideIcons;

// interface TopicCardProps {
//   id: string;
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string;
// }

// export default function TopicCard({
//   id,
//   title,
//   description,
//   complexity,
//   iconName,
// }: TopicCardProps) {
//   const Icon =
//     (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
//     LucideIcons.HelpCircle;

//   return (
//     <Link href={`/topics/${id}`} className="block h-full group">
//       <motion.div
//         whileHover={{ y: -6, scale: 1.01 }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//         className="h-full"
//       >
//         <SpotlightCard
//           className={cn(
//             "h-full transition-all duration-500 border relative overflow-hidden",
//             // Light Mode: Clean White | Dark Mode: Deep Glass Navy (Matches your BG)
//             "bg-white dark:bg-[#0c111d]/50 backdrop-blur-xl",
//             // Border Specification
//             "border-zinc-200 dark:border-white/[0.05] group-hover:dark:border-cyan-500/30",
//             // Shadow for depth
//             "shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
//           )}
//         >
//           {/* Subtle Inner Glow - Essential for Premium Navy blending */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//           <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
//             <div>
//               <div className="flex items-start justify-between mb-8">
//                 {/* Icon Logic: Hover effects specified for both modes */}
//                 <div
//                   className={cn(
//                     "p-3 rounded-2xl transition-all duration-500 border shadow-sm",
//                     // Light Mode Styles
//                     "bg-zinc-50 border-zinc-200 text-zinc-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400",
//                     // Dark Mode Styles (Your Original Logic)
//                     "dark:bg-zinc-800/40 dark:border-white/5 dark:text-zinc-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-black dark:group-hover:border-cyan-500/50",
//                   )}
//                 >
//                   <Icon className="h-5 w-5" />
//                 </div>

//                 {/* Complexity Badge */}
//                 <Badge
//                   variant="outline"
//                   className={cn(
//                     "font-mono text-[10px] px-2 py-1 font-semibold tracking-tight",
//                     "border-zinc-200 text-zinc-500", // Light
//                     "dark:border-cyan-500/20 dark:bg-cyan-500/5 dark:text-cyan-400", // Dark
//                   )}
//                 >
//                   {complexity}
//                 </Badge>
//               </div>

//               {/* Title & Description with high contrast */}
//               <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-zinc-100 group-hover:dark:text-white transition-colors">
//                 {title}
//               </h3>

//               <p className="text-sm leading-relaxed font-normal text-zinc-600 dark:text-zinc-400/80 line-clamp-2">
//                 {description}
//               </p>
//             </div>

//             {/* View Challenge Link with hover-line effect */}
//             <div
//               className={cn(
//                 "mt-10 flex items-center text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500",
//                 "text-zinc-400 dark:text-cyan-500/40 group-hover:dark:text-cyan-400",
//               )}
//             >
//               <span className="relative">
//                 View Challenge
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500/60 transition-all duration-500 group-hover:w-full" />
//               </span>
//               <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
//             </div>
//           </CardContent>
//         </SpotlightCard>
//       </motion.div>
//     </Link>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SpotlightCard } from "../animations/SpotlightCard";

type IconName = keyof typeof LucideIcons;

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
}

export default function TopicCard({
  id,
  title,
  description,
  complexity,
  iconName,
}: TopicCardProps) {
  const Icon =
    (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) ||
    LucideIcons.HelpCircle;

  return (
    <Link href={`/topics/${id}`} className="block h-full group">
      <motion.div whileHover={{ y: -6, scale: 1.01 }} className="h-full">
        <SpotlightCard
          className={cn(
            "h-full transition-all duration-500 border relative overflow-hidden",
            // Light: White glass | Dark: Deep Navy glass
            "bg-white/80 dark:bg-[#0c111d]/50 backdrop-blur-xl",
            // Border: Subtle zinc | Neon cyan on hover
            "border-zinc-200 dark:border-white/[0.05] group-hover:border-cyan-500/50 group-hover:dark:border-cyan-500/30",
            "shadow-xl shadow-black/[0.02] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
          )}
        >
          <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-start justify-between mb-8">
                <div
                  className={cn(
                    "p-3 rounded-2xl transition-all duration-500 border shadow-sm",
                    "bg-white border-zinc-200 text-zinc-600 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-500",
                    "dark:bg-zinc-800/40 dark:border-white/5 dark:text-zinc-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-black",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <Badge
                  variant="outline"
                  className="font-mono text-[10px] px-2 py-1 border-cyan-500/30 text-cyan-700 dark:text-cyan-400 bg-cyan-500/5"
                >
                  {complexity}
                </Badge>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3 text-zinc-900 dark:text-zinc-100 transition-colors">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400/80 line-clamp-2">
                {description}
              </p>
            </div>

            <div className="mt-10 flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-700/60 dark:text-cyan-500/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all duration-500">
              <span className="relative">
                View Challenge
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full" />
              </span>
              <LucideIcons.ArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </SpotlightCard>
      </motion.div>
    </Link>
  );
}
