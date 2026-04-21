import db from "@/lib/db";

export async function getHeroStats() {
  try {
    const [totalProblems, totalUsers, activeUsers] = await Promise.all([
      db.problem.count(),
      db.user.count(),
      db.user.count({
        where: {
          lastSolvedAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      }),
    ]);

    return {
      totalProblems,
      totalUsers,
      activeUsers,
    };
  } catch (error) {
    console.error("Error fetching hero stats:", error);
    return {
      totalProblems: 100,
      totalUsers: 500,
      activeUsers: 50,
    };
  }
}
