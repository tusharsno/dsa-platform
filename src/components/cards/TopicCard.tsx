// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import * as LucideIcons from "lucide-react"; 
// import { cn } from "@/lib/utils";

// interface TopicCardProps {
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string;
//   color: string;
//   bg: string;
// }

// export default function TopicCard({
//   title,
//   description,
//   complexity,
//   iconName,
//   color,
//   bg,
// }: TopicCardProps) {
//   // স্ট্রিং নাম থেকে আইকন কম্পোনেন্ট খুঁজে বের করা
//   const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;

//   return (
//     <motion.div 
//       whileHover={{ y: -5 }} 
//       transition={{ duration: 0.2 }}
//     >
//       <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
//         <CardContent className="p-6">
//           <div className="flex items-start justify-between mb-4">
//             <div className={cn("p-3 rounded-xl", bg, color)}>
//               <Icon className="h-6 w-6" />
//             </div>
//             <Badge variant="secondary" className="font-mono text-[10px]">
//               {complexity}
//             </Badge>
//           </div>
//           <h3 className="text-xl font-bold mb-2 tracking-tight">
//             {title}
//           </h3>
//           <p className="text-sm text-muted-foreground line-clamp-2">
//             {description}
//           </p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react"; 
import { cn } from "@/lib/utils";
import Link from "next/link";

// টাইপ ডিফাইন করা যাতে 'any' ব্যবহার করতে না হয়
type IconName = keyof typeof LucideIcons;

interface TopicCardProps {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
  color: string;
  bg: string;
}

export default function TopicCard({ 
  id, 
  title, 
  description, 
  complexity, 
  iconName, 
  color, 
  bg 
}: TopicCardProps) {
  
  // এখানে (LucideIcons as any) এর বদলে নিচের লাইনটি ব্যবহার করুন
  const Icon = (LucideIcons[iconName as IconName] as LucideIcons.LucideIcon) || LucideIcons.HelpCircle;

  return (
    <Link href={`/topics/${id}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 cursor-pointer transition-all">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={cn("p-3 rounded-xl", bg, color)}>
                <Icon className="h-6 w-6" />
              </div>
              <Badge variant="secondary" className="font-mono text-[10px]">
                {complexity}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}