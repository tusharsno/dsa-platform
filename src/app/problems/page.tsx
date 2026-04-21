import { getProblems, getDashboardStats } from "@/lib/database-actions";
import ProblemsClient from "./ProblemsClient";

export default async function ProblemsPage() {
  const problems = await getProblems();
  const stats = await getDashboardStats();

  // Calculate stats from problems
  const totalEasy = problems.filter((p) => p.difficulty === "Easy").length;
  const totalMedium = problems.filter((p) => p.difficulty === "Medium").length;
  const totalHard = problems.filter((p) => p.difficulty === "Hard").length;

  const solvedEasy = stats?.easySolved || 0;
  const solvedMedium = stats?.mediumSolved || 0;
  const solvedHard = stats?.hardSolved || 0;

  return (
    <ProblemsClient
      problems={problems}
      stats={{
        easy: { solved: solvedEasy, total: totalEasy },
        medium: { solved: solvedMedium, total: totalMedium },
        hard: { solved: solvedHard, total: totalHard },
      }}
    />
  );
}
