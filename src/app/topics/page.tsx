import TopicCard from "@/components/cards/TopicCard";
import { dsaTopics } from "@/lib/dsa-data";

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">DSA Topics</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Master the fundamentals with our structured learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsaTopics.map((topic) => (
            <TopicCard 
              key={topic.id} 
              {...topic} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}