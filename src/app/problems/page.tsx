import ProblemsTable from "@/components/ProblemsTable";
import { allProblems } from "@/data/problems/index";

export default function ProblemsPage() {
  const stats = {
    easy: allProblems.filter((p) => p.difficulty === "Easy").length,
    medium: allProblems.filter((p) => p.difficulty === "Medium").length,
    hard: allProblems.filter((p) => p.difficulty === "Hard").length,
  };

  return (
    // bg-white (Light) | bg-[#030712] (Dark)
    <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 90%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-10 px-6">
        {/* Header Stats with Adaptive Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Easy Card */}
          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-green-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-green-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-green-600 dark:text-green-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Easy
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              0 / {stats.easy}
            </h3>
          </div>

          {/* Medium Card */}
          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-yellow-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-yellow-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-yellow-600 dark:text-yellow-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Medium
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              0 / {stats.medium}
            </h3>
          </div>

          {/* Hard Card */}
          <div className="bg-slate-50 dark:bg-[#0B101E]/40 border border-red-500/20 backdrop-blur-sm p-8 rounded-2xl text-center group hover:border-red-500/40 transition-all shadow-sm dark:shadow-none">
            <p className="text-red-600 dark:text-red-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-2">
              Hard
            </p>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              0 / {stats.hard}
            </h3>
          </div>
        </div>

        {/* The Interactive Table Section */}
        <div className="bg-white dark:bg-transparent rounded-3xl border border-slate-200 dark:border-white/5 p-1 backdrop-blur-md">
          <ProblemsTable />
        </div>
      </div>
    </main>
  );
}
