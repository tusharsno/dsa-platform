import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getFeatureStats() {
  try {
    const { userId: clerkId } = await auth();
    
    // Get general stats
    const [totalProblems, totalSubmissions, activeUsers, topicCount] = await Promise.all([
      db.problem.count(),
      db.solution.count(),
      db.user.count({
        where: {
          lastSolvedAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          },
        },
      }),
      db.topic.count(),
    ]);

    // If user is logged in, get personalized stats
    let userStats = null;
    if (clerkId) {
      const user = await db.user.findUnique({
        where: { clerkId },
        select: {
          id: true,
          points: true,
          streak: true,
          _count: {
            select: {
              solutions: true,
              bookmarks: true,
            },
          },
        },
      });

      if (user) {
        userStats = {
          problemsSolved: user._count.solutions,
          bookmarks: user._count.bookmarks,
          points: user.points,
          streak: user.streak,
        };
      }
    }

    return {
      isLoggedIn: !!clerkId,
      general: {
        totalProblems,
        totalSubmissions,
        activeUsers,
        topicCount,
      },
      user: userStats,
    };
  } catch (error) {
    console.error("Error fetching feature stats:", error);
    return {
      isLoggedIn: false,
      general: {
        totalProblems: 100,
        totalSubmissions: 5000,
        activeUsers: 500,
        topicCount: 15,
      },
      user: null,
    };
  }
}
