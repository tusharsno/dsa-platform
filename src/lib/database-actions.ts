"use server";

import db from "./db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import type { ProblemFilters } from "@/types/database";

// ==================== TOPIC ACTIONS ====================

export async function getAllTopics() {
  try {
    return await db.topic.findMany({
      orderBy: { order: "asc" },
      include: {
        _count: {
          select: { problems: true },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return [];
  }
}

export async function getTopicBySlug(slug: string) {
  try {
    return await db.topic.findUnique({
      where: { slug },
      include: {
        problems: {
          include: {
            _count: {
              select: { solutions: true },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null;
  }
}

// ==================== PROBLEM ACTIONS ====================

export async function getProblems(filters?: ProblemFilters) {
  try {
    const { userId } = await auth();

    const where: any = {};

    if (filters?.difficulty) {
      where.difficulty = filters.difficulty;
    }

    if (filters?.topicId) {
      where.topicId = filters.topicId;
    }

    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: "insensitive" } },
        { description: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    if (filters?.tagIds && filters.tagIds.length > 0) {
      where.tags = {
        some: {
          id: { in: filters.tagIds },
        },
      };
    }

    if (filters?.companyIds && filters.companyIds.length > 0) {
      where.companies = {
        some: {
          id: { in: filters.companyIds },
        },
      };
    }

    const problems = await db.problem.findMany({
      where,
      include: {
        topic: true,
        tags: true,
        companies: true,
        _count: {
          select: {
            solutions: true,
            discussions: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // If user is logged in, check which problems they've solved and bookmarked
    if (userId) {
      const user = await db.user.findUnique({
        where: { clerkId: userId },
        include: {
          solutions: {
            where: { status: "Passed" },
            select: { problemId: true },
          },
          bookmarks: {
            select: { problemId: true },
          },
        },
      });

      const solvedIds = new Set(user?.solutions.map((s) => s.problemId) || []);
      const bookmarkedIds = new Set(user?.bookmarks.map((b) => b.problemId) || []);

      return problems.map((p) => ({
        ...p,
        isSolved: solvedIds.has(p.id),
        isBookmarked: bookmarkedIds.has(p.id),
      }));
    }

    return problems;
  } catch (error) {
    console.error("Error fetching problems:", error);
    return [];
  }
}

export async function getProblemBySlug(slug: string) {
  try {
    const { userId } = await auth();

    const problem = await db.problem.findUnique({
      where: { slug },
      include: {
        topic: true,
        tags: true,
        companies: true,
        testCases: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!problem) return null;

    // Check if user has solved this problem and bookmarked it
    if (userId) {
      const user = await db.user.findUnique({
        where: { clerkId: userId },
      });

      if (user) {
        const solution = await db.solution.findUnique({
          where: {
            userId_problemId: {
              userId: user.id,
              problemId: problem.id,
            },
          },
        });

        const bookmark = await db.bookmark.findUnique({
          where: {
            userId_problemId: {
              userId: user.id,
              problemId: problem.id,
            },
          },
        });

        return {
          ...problem,
          userSolution: solution,
          isBookmarked: !!bookmark,
        };
      }
    }

    return problem;
  } catch (error) {
    console.error("Error fetching problem:", error);
    return null;
  }
}

// ==================== SOLUTION ACTIONS ====================

export async function submitSolution(
  problemId: string,
  code: string,
  language: string,
  status: "Passed" | "Failed" | "Runtime Error",
  executionTime?: number,
  memoryUsage?: number
) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    const solution = await db.solution.upsert({
      where: {
        userId_problemId: {
          userId: user.id,
          problemId,
        },
      },
      update: {
        code,
        language,
        status,
        executionTime,
        memoryUsage,
      },
      create: {
        userId: user.id,
        problemId,
        code,
        language,
        status,
        executionTime,
        memoryUsage,
      },
    });

    // Update user points and streak if passed
    if (status === "Passed") {
      const problem = await db.problem.findUnique({
        where: { id: problemId },
      });

      let points = 0;
      if (problem?.difficulty === "Easy") points = 10;
      if (problem?.difficulty === "Medium") points = 20;
      if (problem?.difficulty === "Hard") points = 30;

      await db.user.update({
        where: { id: user.id },
        data: {
          points: { increment: points },
          lastSolvedAt: new Date(),
        },
      });
    }

    revalidatePath("/problems");
    revalidatePath("/dashboard");
    revalidatePath("/profile");
    revalidatePath("/bookmarks");

    return { success: true, solution };
  } catch (error) {
    console.error("Error submitting solution:", error);
    return { success: false, error: "Failed to submit solution" };
  }
}

export async function getUserSolutions(userId?: string) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId && !userId) return [];

    const targetClerkId = userId || clerkId;

    const user = await db.user.findUnique({
      where: { clerkId: targetClerkId },
      include: {
        solutions: {
          include: {
            problem: {
              select: {
                id: true,
                title: true,
                difficulty: true,
                slug: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
          take: 50,
        },
      },
    });

    return user?.solutions || [];
  } catch (error) {
    console.error("Error fetching user solutions:", error);
    return [];
  }
}

// ==================== BOOKMARK ACTIONS ====================

export async function toggleBookmark(problemId: string) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    const existing = await db.bookmark.findUnique({
      where: {
        userId_problemId: {
          userId: user.id,
          problemId,
        },
      },
    });

    if (existing) {
      await db.bookmark.delete({
        where: { id: existing.id },
      });
      return { bookmarked: false };
    } else {
      await db.bookmark.create({
        data: {
          userId: user.id,
          problemId,
        },
      });
      return { bookmarked: true };
    }
  } catch (error) {
    console.error("Error toggling bookmark:", error);
    return { error: "Failed to toggle bookmark" };
  }
}

export async function getUserBookmarks() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return [];

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        bookmarks: {
          include: {
            problem: {
              include: {
                topic: true,
                tags: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return user?.bookmarks || [];
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    return [];
  }
}

// ==================== DISCUSSION ACTIONS ====================

export async function getDiscussions(problemId: string) {
  try {
    return await db.discussion.findMany({
      where: { problemId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                imageUrl: true,
              },
            },
          },
          orderBy: { createdAt: "asc" },
        },
        _count: {
          select: { replies: true },
        },
      },
      orderBy: { upvotes: "desc" },
    });
  } catch (error) {
    console.error("Error fetching discussions:", error);
    return [];
  }
}

export async function createDiscussion(
  problemId: string,
  title: string,
  content: string
) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    const discussion = await db.discussion.create({
      data: {
        problemId,
        userId: user.id,
        title,
        content,
      },
    });

    revalidatePath(`/problems/${problemId}`);
    return { success: true, discussion };
  } catch (error) {
    console.error("Error creating discussion:", error);
    return { success: false, error: "Failed to create discussion" };
  }
}

export async function createReply(discussionId: string, content: string) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    const reply = await db.reply.create({
      data: {
        discussionId,
        userId: user.id,
        content,
      },
    });

    revalidatePath(`/problems`);
    return { success: true, reply };
  } catch (error) {
    console.error("Error creating reply:", error);
    return { success: false, error: "Failed to create reply" };
  }
}

// ==================== DASHBOARD ACTIONS ====================

export async function getDashboardStats() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return null;

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        solutions: {
          where: { status: "Passed" },
          include: {
            problem: {
              select: { difficulty: true },
            },
          },
        },
      },
    });

    if (!user) return null;

    const easySolved = user.solutions.filter(
      (s) => s.problem.difficulty === "Easy"
    ).length;
    const mediumSolved = user.solutions.filter(
      (s) => s.problem.difficulty === "Medium"
    ).length;
    const hardSolved = user.solutions.filter(
      (s) => s.problem.difficulty === "Hard"
    ).length;

    return {
      name: user.name,
      points: user.points,
      streak: user.streak,
      totalSolved: user.solutions.length,
      easySolved,
      mediumSolved,
      hardSolved,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return null;
  }
}

export async function getActivityData() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return [];

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        solutions: {
          where: {
            createdAt: {
              gte: new Date(
                new Date().setFullYear(new Date().getFullYear() - 1)
              ),
            },
          },
          select: { createdAt: true },
        },
      },
    });

    return user?.solutions || [];
  } catch (error) {
    console.error("Error fetching activity data:", error);
    return [];
  }
}

export async function getRecentSubmissions() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return [];

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        solutions: {
          take: 5,
          orderBy: { createdAt: "desc" },
          include: {
            problem: {
              select: { title: true, difficulty: true, slug: true },
            },
          },
        },
      },
    });

    return user?.solutions || [];
  } catch (error) {
    console.error("Error fetching recent submissions:", error);
    return [];
  }
}
