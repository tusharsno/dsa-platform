"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { toggleBookmark } from "@/lib/database-actions";
import { useRouter } from "next/navigation";

export function BookmarkCard({ bookmark }: { bookmark: any }) {
  const router = useRouter();

  const handleRemove = async () => {
    await toggleBookmark(bookmark.problem.id);
    router.refresh();
  };

  const difficultyColor = {
    Easy: "text-emerald-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  }[bookmark.problem.difficulty];

  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <Link
            href={`/problems/${bookmark.problem.slug}`}
            className="text-white font-medium hover:text-emerald-500 transition-colors"
          >
            {bookmark.problem.title}
          </Link>
          <div className="flex items-center gap-3 mt-2">
            <span className={`text-xs font-medium ${difficultyColor}`}>
              {bookmark.problem.difficulty}
            </span>
            <span className="text-xs text-zinc-500">
              {bookmark.problem.topic.name}
            </span>
            {bookmark.problem.tags.length > 0 && (
              <div className="flex gap-1">
                {bookmark.problem.tags.slice(0, 2).map((tag: any) => (
                  <span
                    key={tag.id}
                    className="text-xs px-2 py-0.5 bg-white/5 rounded text-zinc-400"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleRemove}
          className="text-emerald-500 hover:text-red-500 transition-colors"
        >
          <Bookmark className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
}
