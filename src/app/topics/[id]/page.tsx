import { dsaTopics } from "@/lib/dsa-data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const topic = dsaTopics.find((t) => t.id === params.id);

  if (!topic) return notFound();

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container px-4 mx-auto max-w-4xl">
        <Link href="/topics" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Topics
        </Link>
        
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">{topic.title}</h1>
          <div className="flex gap-4 items-center">
            <span className={`${topic.bg} ${topic.color} px-4 py-1 rounded-full text-sm font-bold`}>
              {topic.complexity}
            </span>
          </div>
        </div>

        <div className="bg-card/50 p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {topic.detailedContent}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="font-bold mb-2">Practice Problems</h3>
              <p className="text-sm text-muted-foreground">Coming soon: Curated list of LeetCode & Codeforces problems.</p>
            </div>
            <div className="p-6 bg-secondary/30 rounded-xl border border-border">
              <h3 className="font-bold mb-2">Interview Tips</h3>
              <p className="text-sm text-muted-foreground">Master the common patterns asked in top tech companies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
