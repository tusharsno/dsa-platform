"use client";

import { useState, useMemo } from "react";
import { Activity, Shield, Trash2, Edit, Plus, Search } from "lucide-react";
import Image from "next/image";

interface ActivityLog {
  id: string;
  action: string;
  resource: string;
  resourceId: string | null;
  metadata: string | null;
  createdAt: Date;
  user: {
    name: string | null;
    email: string;
    imageUrl: string | null;
  };
  targetUser: {
    name: string | null;
    email: string;
  } | null;
}

export function ActivityLogsClient({ logs }: { logs: ActivityLog[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesFilter = filter === "all" || log.resource.toLowerCase() === filter.toLowerCase();
      const matchesSearch = 
        log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.resource.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [logs, filter, searchQuery]);

  const getActionIcon = (action: string) => {
    if (action.includes("CREATE")) return <Plus className="w-4 h-4 text-green-500" />;
    if (action.includes("UPDATE") || action.includes("EDIT")) return <Edit className="w-4 h-4 text-blue-500" />;
    if (action.includes("DELETE")) return <Trash2 className="w-4 h-4 text-red-500" />;
    if (action.includes("ROLE") || action.includes("PERMISSION")) return <Shield className="w-4 h-4 text-purple-500" />;
    return <Activity className="w-4 h-4 text-zinc-500" />;
  };

  const getActionColor = (action: string) => {
    if (action.includes("CREATE")) return "bg-green-500/10 text-green-500 border-green-500/20";
    if (action.includes("UPDATE") || action.includes("EDIT")) return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    if (action.includes("DELETE")) return "bg-red-500/10 text-red-500 border-red-500/20";
    if (action.includes("ROLE") || action.includes("PERMISSION")) return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          placeholder="Search logs by action, user, or resource..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {["all", "Problem", "User", "Topic", "Tag", "Company"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-emerald-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {f === "all" ? "All" : f}
          </button>
        ))}
        <div className="ml-auto px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg">
          <span className="text-zinc-500 text-sm">Total:</span>{" "}
          <span className="text-white font-semibold text-sm">{filteredLogs.length}</span>
        </div>
      </div>

      {/* Logs List */}
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
        <div className="divide-y divide-white/5">
          {filteredLogs.length === 0 ? (
            <div className="p-12 text-center">
              <Activity className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-500">No activity logs found</p>
            </div>
          ) : (
            filteredLogs.map((log) => {
              const metadata = log.metadata ? JSON.parse(log.metadata) : null;

              return (
                <div
                  key={log.id}
                  className="p-4 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="mt-1">{getActionIcon(log.action)}</div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getActionColor(log.action)}`}>
                          {log.action.replace(/_/g, " ")}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {log.resource}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        {log.user.imageUrl ? (
                          <Image
                            src={log.user.imageUrl}
                            alt={log.user.name || "User"}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-zinc-800" />
                        )}
                        <span className="text-white font-medium">
                          {log.user.name || log.user.email}
                        </span>
                        
                        {log.targetUser && (
                          <>
                            <span className="text-zinc-500">→</span>
                            <span className="text-zinc-400">
                              {log.targetUser.name || log.targetUser.email}
                            </span>
                          </>
                        )}
                      </div>

                      {metadata && (
                        <div className="mt-2 text-xs text-zinc-500 bg-zinc-800/50 rounded p-2">
                          {Object.entries(metadata).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-zinc-400">{key}:</span>{" "}
                              <span className="text-zinc-300">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <div className="text-xs text-zinc-500 whitespace-nowrap">
                      {formatDate(log.createdAt)}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
