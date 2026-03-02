"use client";

import React from "react";

export function ActivityGrid({ data }: { data: any[] }) {
  // ৩৬৫ দিনের একটি অ্যারে তৈরি করা (সিম্পল ডেমো গ্রিড)
  const days = Array.from({ length: 365 });

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-zinc-400">Activity Heatmap</h3>
      <div className="flex flex-wrap gap-1">
        {days.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${
              i % 15 === 0 ? "bg-emerald-500" : "bg-zinc-800"
            } hover:ring-1 hover:ring-white transition-all`}
            title={`Day ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
        <span>Less</span>
        <div className="w-3 h-3 bg-zinc-800 rounded-sm" />
        <div className="w-3 h-3 bg-emerald-900 rounded-sm" />
        <div className="w-3 h-3 bg-emerald-700 rounded-sm" />
        <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
        <span>More</span>
      </div>
    </div>
  );
}
