// "use server";

// import db from "./db";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

// // ১. ড্যাশবোর্ডের জন্য ইউজারের ডাটা ফেচ করা
// export async function getUserDashboardData() {
//   const { userId: clerkId } = await auth();

//   if (!clerkId) {
//     throw new Error("Unauthorized");
//   }

//   try {
//     const user = await db.user.findUnique({
//       where: { clerkId },
//       include: {
//         _count: {
//           select: { solvedProblems: true }, // এখানে solvedProblems মানে Solution মডেলের কাউন্ট
//         },
//       },
//     });

//     if (!user) return null;

//     return {
//       name: user.name,
//       points: user.points,
//       totalSolved: user._count.solvedProblems,
//       streak: user.streak,
//     };
//   } catch (error) {
//     console.error("Error fetching dashboard data:", error);
//     return null;
//   }
// }

// // ২. সলিউশন সেভ করার ফাংশন
// export const saveSolution = async (
//   problemId: string,
//   code: string,
//   status: string,
// ) => {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkId },
//   });

//   if (!user) throw new Error("User not found in database");

//   // Prisma Schema অনুযায়ী মডেলের নাম 'solution'
//   // এবং 'upsert' এর জন্য আমরা 'id' ব্যবহার করছি
//   return await db.solution.upsert({
//     where: {
//       id: `${user.id}-${problemId}`,
//     },
//     update: {
//       code,
//       status,
//     },
//     create: {
//       id: `${user.id}-${problemId}`,
//       userId: user.id,
//       problemId,
//       code,
//       status,
//       language: "javascript",
//     },
//   });
// };

// // ৩. নতুন প্রবলেম তৈরি করার ফাংশন
// export async function createProblem(formData: FormData) {
//   const title = formData.get("title") as string;
//   const topic = formData.get("topic") as string;

//   if (!title || !topic) return { error: "Fields are required!" };

//   console.log("Saving to DB:", { title, topic });
//   return { success: true };
// }

// // ৪. গত ১ বছরের অ্যাক্টিভিটি ডাটা নিয়ে আসা
// export async function getActivityData() {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkId },
//     include: {
//       solvedProblems: {
//         // এটি আসলে Solution মডেলের লিস্ট
//         select: { createdAt: true },
//         where: {
//           createdAt: {
//             gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
//           },
//         },
//       },
//     },
//   });

//   return user?.solvedProblems || [];
// }

// // ৫. শেষ ৫টি সাবমিশন ডাটা নিয়ে আসা
// export async function getRecentSubmissions() {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: { clerkId },
//     include: {
//       solvedProblems: {
//         take: 5,
//         orderBy: { createdAt: "desc" },
//         include: {
//           problem: {
//             select: { title: true, difficulty: true },
//           },
//         },
//       },
//     },
//   });

//   return user?.solvedProblems || [];
// }

// // --- টার্গেট ১: সাবমিশন ব্রিজ (FIXED) ---
// export async function submitSolution(
//   problemId: string,
//   status: string,
//   code: string,
// ) {
//   const { userId: clerkId } = await auth();

//   if (!clerkId) {
//     throw new Error("You must be logged in to submit.");
//   }

//   const user = await db.user.findUnique({
//     where: { clerkId },
//   });

//   if (!user) throw new Error("User not found");

//   // তোমার schema অনুযায়ী মডেলের নাম db.solution
//   await db.solution.upsert({
//     where: {
//       id: `${user.id}-${problemId}`,
//     },
//     update: {
//       status: status,
//       code: code,
//     },
//     create: {
//       id: `${user.id}-${problemId}`,
//       userId: user.id,
//       problemId: problemId,
//       status: status,
//       code: code,
//       language: "javascript",
//     },
//   });

//   // ডাটাবেজ আপডেট হওয়ার পর প্রোফাইল পেজ রিফ্রেশ করা
//   revalidatePath("/profile");
//   revalidatePath("/problems");

//   return { success: true };
// }

"use server";

import { auth } from "@clerk/nextjs/server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

/**
 * ১. সলিউশন সাবমিট করার মেইন ফাংশন
 */
export async function submitSolution(
  problemId: string,
  status: string,
  code: string,
) {
  const { userId: clerkId } = await auth();

  if (!clerkId) {
    return { success: false, error: "You must be logged in to submit." };
  }

  try {
    // তোমার স্ক্রিনশট (image_1779a1.png) অনুযায়ী ইউনিক কি হলো 'clerkId_problemId'
    const solution = await db.solution.upsert({
      where: {
        clerkId_problemId: {
          clerkId: clerkId,
          problemId: problemId,
        },
      },
      update: {
        status: status,
        code: code,
      },
      create: {
        clerkId: clerkId,
        problemId: problemId,
        status: status,
        code: code,
      },
    });

    revalidatePath("/profile");
    revalidatePath("/problems");
    revalidatePath("/dashboard");

    return { success: true, data: solution };
  } catch (error: any) {
    console.error("Database Error:", error);
    // যদি প্রবলেম আইডি ডাটাবেজে না থাকে (Foreign Key Error)
    if (error.code === "P2003") {
      return {
        success: false,
        error: "Problem not found in database. Please seed your database.",
      };
    }
    return {
      success: false,
      error: "Failed to save solution. Please check your schema.",
    };
  }
}

/**
 * ২. ড্যাশবোর্ড হিটম্যাপের জন্য অ্যাক্টিভিটি ডাটা (Fixes image_159141.png)
 */
export async function getActivityData() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return [];

  try {
    const activities = await db.solution.findMany({
      where: { clerkId: clerkId },
      select: {
        createdAt: true,
        status: true,
      },
      orderBy: { createdAt: "asc" },
    });
    return activities;
  } catch (error) {
    console.error("Activity Data Error:", error);
    return [];
  }
}

/**
 * ৩. রিসেন্ট সাবমিশন লিস্টের জন্য ডাটা (Fixes image_158df9.png)
 */
export async function getRecentSubmissions() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return [];

  try {
    return await db.solution.findMany({
      where: { clerkId: clerkId },
      orderBy: { createdAt: "desc" },
      take: 5, // শেষ ৫টি সাবমিশন দেখাবে
    });
  } catch (error) {
    console.error("Recent Submissions Error:", error);
    return [];
  }
}

/**
 * ৪. ড্যাশবোর্ড কার্ডের জন্য ওভারঅল ডাটা
 */
export async function getUserDashboardData() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  try {
    const totalSolved = await db.solution.count({
      where: { clerkId: clerkId, status: "Passed" },
    });

    return { totalSolved };
  } catch (error) {
    console.error("Dashboard Data Error:", error);
    return null;
  }
}
