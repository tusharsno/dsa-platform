"use client";

import { useState } from "react";

export function ActivityPreview({ data }: { data: { createdAt: Date }[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 89); // Last 90 days

  const startDay = startDate.getDay();

  // Create activity map
  const activityMap = new Map<string, number>();
  data.forEach((d) => {
    const dateStr = new Date(d.createdAt).toDateString();
    activityMap.set(dateStr, (activityMap.get(dateStr) || 0) + 1);
  });

  // Generate weeks
  const weeks: Date[][] = [];
  let currentWeek: Date[] = [];

  for (let i = 0; i < startDay; i++) {
    currentWeek.push(new Date(0));
  }

  for (let i = 0; i < 90; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    currentWeek.push(date);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(new Date(0));
    }
    weeks.push(currentWeek);
  }

  const getColor = (count: number) => {
    if (count === 0) return "bg-zinc-800/50 dark:bg-zinc-900/50";
    if (count === 1) return "bg-emerald-500/30";
    if (count === 2) return "bg-emerald-500/50";
    if (count === 3) return "bg-emerald-500/70";
    return "bg-emerald-500";
  };

  const totalContributions = data.filter((d) => {
    const date = new Date(d.createdAt);
    return date >= startDate && date <= today;
  }).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Recent Activity</h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            {totalContributions} submission{totalContributions !== 1 ? "s" : ""} in last 90 days
          </p>
        </div>
        {selectedDate && (
          <div className="text-xs text-zinc-400 bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50">
            {activityMap.get(selectedDate) || 0} submission{(activityMap.get(selectedDate) || 0) !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {totalContributions === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 px-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50">
          <div className="w-12 h-12 mb-3 rounded-full bg-zinc-800/50 flex items-center justify-center">
            <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-zinc-400 mb-1">No recent activity</p>
          <p className="text-xs text-zinc-500 text-center">
            Start solving to see your progress
          </p>
        </div>
      ) : (
        <div className="relative overflow-x-auto pb-2">
          <div className="inline-block min-w-full">
            <div className="flex gap-[2px]">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[2px]">
                  {week.map((date, dayIdx) => {
                    const dateStr = date.toDateString();
                    const count = activityMap.get(dateStr) || 0;
                    const isPlaceholder = date.getTime() === 0;
                    const isFuture = date > today;

                    return (
                      <div
                        key={dayIdx}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-all ${
                          isPlaceholder || isFuture
                            ? "bg-transparent"
                            : getColor(count)
                        } ${
                          !isPlaceholder && !isFuture && "hover:ring-2 hover:ring-emerald-400/50 hover:scale-110 cursor-pointer"
                        }`}
                        onMouseEnter={() => !isPlaceholder && !isFuture && setSelectedDate(dateStr)}
                        onMouseLeave={() => setSelectedDate(null)}
                        title={
                          isPlaceholder || isFuture
                            ? ""
                            : `${date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}: ${count} submission${count !== 1 ? "s" : ""}`
                        }
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {totalContributions > 0 && (
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="font-medium">Less</span>
            <div className="flex gap-1">
              <div className="w-[10px] h-[10px] bg-zinc-800/50 rounded-[2px]" />
              <div className="w-[10px] h-[10px] bg-emerald-500/30 rounded-[2px]" />
              <div className="w-[10px] h-[10px] bg-emerald-500/50 rounded-[2px]" />
              <div className="w-[10px] h-[10px] bg-emerald-500/70 rounded-[2px]" />
              <div className="w-[10px] h-[10px] bg-emerald-500 rounded-[2px]" />
            </div>
            <span className="font-medium">More</span>
          </div>
        </div>
      )}
    </div>
  );
}
