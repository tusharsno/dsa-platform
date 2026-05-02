import { getProblemBySlug } from "@/lib/database-actions";
import { notFound } from "next/navigation";
import Workspace from "@/components/Workspace/Workspace";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export default async function ProblemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const problem = await getProblemBySlug(id);

  if (!problem) {
    return notFound();
  }

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.015] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <nav className="h-11 flex items-center justify-between px-4 border-b border-white/10 bg-white/[0.10] backdrop-blur-md z-50 relative">
        <div className="flex items-center gap-4">
          <Link
            href="/problems"
            className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Problems
          </Link>

          <div className="h-4 w-[1px] bg-white/10" />

          <div className="flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded-md shadow-sm">
            <span className="text-[11px] font-bold text-white/80 tracking-tight">
              {problem.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <main className="flex-1 overflow-hidden relative z-10">
        <Workspace problem={problem} />
      </main>
    </div>
  );
}
