"use server";

import db from "./db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// ১. ড্যাশবোর্ডের জন্য ইউজারের ডাটা ফেচ করা
export async function getUserDashboardData() {
  const { userId: clerkId } = await auth();

  if (!clerkId) {
    throw new Error("Unauthorized");
  }

  try {
    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        _count: {
          select: { solvedProblems: true }, // এখানে solvedProblems মানে Solution মডেলের কাউন্ট
        },
      },
    });

    if (!user) return null;

    return {
      name: user.name,
      points: user.points,
      totalSolved: user._count.solvedProblems,
      streak: user.streak,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return null;
  }
}

// ২. সলিউশন সেভ করার ফাংশন
export const saveSolution = async (
  problemId: string,
  code: string,
  status: string,
) => {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkId },
  });

  if (!user) throw new Error("User not found in database");

  // Prisma Schema অনুযায়ী মডেলের নাম 'solution'
  // এবং 'upsert' এর জন্য আমরা 'id' ব্যবহার করছি
  return await db.solution.upsert({
    where: {
      id: `${user.id}-${problemId}`,
    },
    update: {
      code,
      status,
    },
    create: {
      id: `${user.id}-${problemId}`,
      userId: user.id,
      problemId,
      code,
      status,
      language: "javascript",
    },
  });
};

// ৩. নতুন প্রবলেম তৈরি করার ফাংশন
export async function createProblem(formData: FormData) {
  const title = formData.get("title") as string;
  const topic = formData.get("topic") as string;

  if (!title || !topic) return { error: "Fields are required!" };

  console.log("Saving to DB:", { title, topic });
  return { success: true };
}

// ৪. গত ১ বছরের অ্যাক্টিভিটি ডাটা নিয়ে আসা
export async function getActivityData() {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkId },
    include: {
      solvedProblems: {
        // এটি আসলে Solution মডেলের লিস্ট
        select: { createdAt: true },
        where: {
          createdAt: {
            gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
          },
        },
      },
    },
  });

  return user?.solvedProblems || [];
}

// ৫. শেষ ৫টি সাবমিশন ডাটা নিয়ে আসা
export async function getRecentSubmissions() {
  const { userId: clerkId } = await auth();
  if (!clerkId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkId },
    include: {
      solvedProblems: {
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
          problem: {
            select: { title: true, difficulty: true },
          },
        },
      },
    },
  });

  return user?.solvedProblems || [];
}

// --- টার্গেট ১: সাবমিশন ব্রিজ (FIXED) ---
export async function submitSolution(
  problemId: string,
  status: string,
  code: string,
) {
  const { userId: clerkId } = await auth();

  if (!clerkId) {
    throw new Error("You must be logged in to submit.");
  }

  const user = await db.user.findUnique({
    where: { clerkId },
  });

  if (!user) throw new Error("User not found");

  // তোমার schema অনুযায়ী মডেলের নাম db.solution
  await db.solution.upsert({
    where: {
      id: `${user.id}-${problemId}`,
    },
    update: {
      status: status,
      code: code,
    },
    create: {
      id: `${user.id}-${problemId}`,
      userId: user.id,
      problemId: problemId,
      status: status,
      code: code,
      language: "javascript",
    },
  });

  // ডাটাবেজ আপডেট হওয়ার পর প্রোফাইল পেজ রিফ্রেশ করা
  revalidatePath("/profile");
  revalidatePath("/problems");

  return { success: true };
}

// "use server";

// import { auth } from "@clerk/nextjs/server";
// import db from "@/lib/db";
// import { revalidatePath } from "next/cache";

// /**
//  * ১. সলিউশন সাবমিট করার ফাংশন
//  * এটি image_0b3b02-এর ভ্যালিডেশন এরর ফিক্স করবে
//  */
// export async function submitSolution(
//   problemId: string,
//   status: string,
//   code: string,
// ) {
//   const { userId: clerkId } = await auth();

//   if (!clerkId) {
//     return { success: false, error: "You must be logged in to submit." };
//   }

//   try {
//     // তোমার ডাটাবেজ টেবিলের নাম Solution, তাই আমরা বড় হাতের S ব্যবহার করার চেষ্টা করছি
//     // যদি টাইপ এরর দেয় তবে (db as any).solution ব্যবহার করব
//     const solution = await (db as any).solution.upsert({
//       where: {
//         clerkId_problemId: {
//           clerkId: clerkId,
//           problemId: problemId,
//         },
//       },
//       update: {
//         status: status,
//         code: code,
//       },
//       create: {
//         clerkId: clerkId,
//         problemId: problemId,
//         status: status,
//         code: code,
//       },
//     });

//     revalidatePath("/profile");
//     revalidatePath("/problems");
//     revalidatePath("/dashboard");

//     return { success: true, data: solution };
//   } catch (error: any) {
//     console.error("Database Error:", error);
//     return {
//       success: false,
//       error: "Failed to save. Make sure problemId exists in DB.",
//     };
//   }
// }

// /**
//  * ২. ড্যাশবোর্ড ডাটা (Fixes image_0b3b02.png)
//  */
// export async function getUserDashboardData() {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) return null;

//   try {
//     const totalSolved = await (db as any).solution.count({
//       where: { clerkId: clerkId, status: "Passed" },
//     });
//     return { totalSolved };
//   } catch (error) {
//     console.error("Dashboard Data Error:", error);
//     return { totalSolved: 0 };
//   }
// }

// /**
//  * ৩. হিটম্যাপ ডাটা (Fixes image_0b3ae0.png)
//  */
// export async function getActivityData() {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) return [];

//   try {
//     const activities = await (db as any).solution.findMany({
//       where: { clerkId: clerkId },
//       select: { createdAt: true, status: true },
//       orderBy: { createdAt: "asc" },
//     });
//     return activities;
//   } catch (error) {
//     console.error("Activity Data Error:", error);
//     return [];
//   }
// }

// /**
//  * ৪. রিসেন্ট সাবমিশন (Fixes image_0b3ac2.png)
//  */
// export async function getRecentSubmissions() {
//   const { userId: clerkId } = await auth();
//   if (!clerkId) return [];

//   try {
//     return await (db as any).solution.findMany({
//       where: { clerkId: clerkId },
//       orderBy: { createdAt: "desc" },
//       take: 5,
//     });
//   } catch (error) {
//     console.error("Recent Submissions Error:", error);
//     return [];
//   }
// }
