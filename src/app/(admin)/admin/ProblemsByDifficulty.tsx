"use client";

export function ProblemsByDifficulty({
  data,
}: {
  data: { Easy: number; Medium: number; Hard: number };
}) {
  const total = data.Easy + data.Medium + data.Hard;
  const easyPercent = total > 0 ? (data.Easy / total) * 100 : 0;
  const mediumPercent = total > 0 ? (data.Medium / total) * 100 : 0;
  const hardPercent = total > 0 ? (data.Hard / total) * 100 : 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold">Problems by Difficulty</h3>
        <p className="text-sm text-muted-foreground">Distribution overview</p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-emerald-500">Easy</span>
            <span className="text-sm font-bold">{data.Easy}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${easyPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-yellow-500">Medium</span>
            <span className="text-sm font-bold">{data.Medium}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${mediumPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-red-500">Hard</span>
            <span className="text-sm font-bold">{data.Hard}</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-500"
              style={{ width: `${hardPercent}%` }}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Total Problems</span>
            <span className="text-2xl font-bold">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
