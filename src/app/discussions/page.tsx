import { getProblems } from "@/lib/database-actions";
import { DiscussionList } from "./DiscussionList";

export default async function DiscussionsPage() {
  const problems = await getProblems();

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Discussions</h1>
        <p className="text-zinc-400 mt-2">
          Browse discussions across all problems
        </p>
      </div>

      <DiscussionList problems={problems} />
    </div>
  );
}
