import { getTopicBySlug } from "@/lib/database-actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  PlayCircle,
  Target,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getIconComponent } from "@/lib/icon-map";

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.id;

  // Fetch topic from database by slug
  const topicData = await getTopicBySlug(slug);
  
  if (!topicData) return notFound();

  const IconComponent = getIconComponent(topicData.icon);
  const problemCount = topicData.problems?.length || 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 selection:bg-primary/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] blur-[120px] rounded-full bg-primary/10" />
      </div>

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <Link
          href="/topics"
          className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all mb-8 group w-fit"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide">
            Back to Topics
          </span>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold text-primary">
              Topic Module
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 p-[1px]">
              <div className="w-full h-full rounded-[15px] bg-[#0a0a0a] flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              {topicData.name}
            </h1>
          </div>

          <p className="text-zinc-400 text-lg mb-6">
            {topicData.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold border bg-primary/10 border-primary/20 text-primary uppercase tracking-widest">
              {problemCount} Problems
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {problemCount > 0 ? (
              <section className="space-y-4">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3 px-2">
                  <PlayCircle className="w-5 h-5 text-primary" />
                  Practice Problems
                </h2>
                <div className="grid gap-3">
                  {topicData.problems?.map((problem, index) => (
                    <Link
                      key={problem.id}
                      href={`/problems/${problem.slug}`}
                      className="flex items-center justify-between p-5 bg-zinc-900/20 hover:bg-zinc-900/60 border border-white/5 hover:border-primary/30 rounded-2xl transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-zinc-700 font-mono text-xl font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-base font-semibold group-hover:text-white transition-colors mb-1">
                            {problem.title}
                          </p>
                          <span
                            className={cn(
                              "text-[10px] font-bold uppercase tracking-widest",
                              problem.difficulty === "Easy"
                                ? "text-emerald-500"
                                : problem.difficulty === "Medium"
                                  ? "text-amber-500"
                                  : "text-rose-500"
                            )}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                      </div>
                      <PlayCircle className="w-6 h-6 text-zinc-600 group-hover:text-primary transition-all" />
                    </Link>
                  ))}
                </div>
              </section>
            ) : (
              <section className="bg-zinc-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  Coming Soon
                </h2>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-light">
                  Problems for this topic are being prepared. Check back soon!
                </p>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 lg:sticky lg:top-28">
              <h3 className="font-bold mb-6 flex items-center gap-2 text-primary">
                <Lightbulb className="w-5 h-5" /> Quick Stats
              </h3>
              <ul className="text-sm text-zinc-400 space-y-4">
                <li className="flex justify-between">
                  <span>Total Problems:</span>
                  <span className="font-bold text-white">{problemCount}</span>
                </li>
                <li className="flex justify-between">
                  <span>Your Progress:</span>
                  <span className="font-bold text-primary">0%</span>
                </li>
              </ul>
              <Link
                href="/problems"
                className="block w-full mt-10 bg-white text-black hover:bg-primary hover:text-white py-4 rounded-2xl text-sm font-black transition-all shadow-xl shadow-white/5 text-center"
              >
                START SOLVING
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
