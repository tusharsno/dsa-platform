"use client";

import { LucideIcon } from "lucide-react";

interface StatProps {
  stat: {
    label: string;
    value: number;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    change: string;
  };
}

export function AdminStatsCard({ stat }: StatProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`${stat.bgColor} p-3 rounded-xl`}>
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
        </div>
        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
          {stat.change}
        </span>
      </div>
      <div className="text-3xl font-bold mb-1">{stat.value.toLocaleString()}</div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}
