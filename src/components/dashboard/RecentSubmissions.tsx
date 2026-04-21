import React from "react";

export function RecentSubmissions({ submissions }: { submissions: any[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-sm">Recent Submissions</h3>
      {submissions.length === 0 ? (
        <p className="text-zinc-500 text-xs italic">
          No submissions yet. Start solving!
        </p>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
            >
              <div>
                <p className="text-sm font-medium text-white">
                  {sub.problem.title}
                </p>
                <p className="text-xs text-zinc-500">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  sub.status === "Passed"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {sub.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
