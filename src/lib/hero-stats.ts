import db from "@/lib/db";

export async function getHeroStats() {
  try {
    const [totalProblems, totalUsers, totalTopics, activeUsers] = await Promise.all([
      db.problem.count(),
      db.user.count(),
      db.topic.count(),
      db.user.count({
        where: {
          lastSolvedAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      }),
    ]);

    return {
      totalProblems,
      totalUsers,
      totalTopics,
      activeUsers,
    };
  } catch (error) {
    console.error("Error fetching hero stats:", error);
    return {
      totalProblems: 100,
      totalUsers: 500,
      totalTopics: 8,
      activeUsers: 50,
    };
  }
}
