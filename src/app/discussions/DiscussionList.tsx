"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function DiscussionList({ problems }: { problems: any[] }) {
  const [search, setSearch] = useState("");

  const filtered = problems.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
      />

      <div className="grid gap-4">
        {filtered.map((problem) => (
          <Link
            key={problem.id}
            href={`/problems/${problem.slug}#discussions`}
            className="bg-zinc-900/50 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium group-hover:text-emerald-500 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {problem.topic.name} • {problem.difficulty}
                </p>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{problem._count.discussions}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
