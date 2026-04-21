"use client";

import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { CheckCircle, XCircle } from "lucide-react";

export function RecentActivityFeed({ activities }: { activities: any[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest solution submissions</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <div className="relative">
                {activity.user.imageUrl ? (
                  <Image
                    src={activity.user.imageUrl}
                    alt={activity.user.name || "User"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold">
                      {activity.user.name?.[0] || "U"}
                    </span>
                  </div>
                )}
                <div
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                    activity.status === "Passed"
                      ? "bg-emerald-500"
                      : "bg-red-500"
                  }`}
                >
                  {activity.status === "Passed" ? (
                    <CheckCircle className="w-3 h-3 text-white" />
                  ) : (
                    <XCircle className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{activity.user.name || "Anonymous"}</span>
                  {" "}
                  <span className="text-muted-foreground">
                    {activity.status === "Passed" ? "solved" : "attempted"}
                  </span>
                  {" "}
                  <span className="font-semibold">{activity.problem.title}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
                </p>
              </div>

              <div>
                <span
                  className={`text-xs px-2 py-1 rounded-md font-bold ${
                    activity.problem.difficulty === "Easy"
                      ? "bg-emerald-500/10 text-emerald-500"
                      : activity.problem.difficulty === "Medium"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {activity.problem.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
