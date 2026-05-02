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
        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
      />

      <div className="grid gap-4">
        {filtered.map((problem) => (
          <Link
            key={problem.id}
            href={`/problems/${problem.slug}#discussions`}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium group-hover:text-white/80 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {problem.topic.name} • {problem.difficulty}
                </p>
              </div>
              <div className="flex items-center gap-2 text-white/60">
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
