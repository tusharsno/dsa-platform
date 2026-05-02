"use server";

import db from "./db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createOrUpdateNote(
  problemId: string,
  data: {
    title?: string;
    content: string;
    approach?: string;
    mistakes?: string;
    timeComplexity?: string;
    spaceComplexity?: string;
  }
) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    const note = await db.note.upsert({
      where: {
        userId_problemId: {
          userId: user.id,
          problemId,
        },
      },
      update: {
        title: data.title,
        content: data.content,
        approach: data.approach,
        mistakes: data.mistakes,
        timeComplexity: data.timeComplexity,
        spaceComplexity: data.spaceComplexity,
      },
      create: {
        userId: user.id,
        problemId,
        title: data.title,
        content: data.content,
        approach: data.approach,
        mistakes: data.mistakes,
        timeComplexity: data.timeComplexity,
        spaceComplexity: data.spaceComplexity,
      },
    });

    revalidatePath("/notebook");
    revalidatePath(`/problems/${problemId}`);
    return { success: true, note };
  } catch (error) {
    console.error("Error creating/updating note:", error);
    return { success: false, error: "Failed to save note" };
  }
}

export async function getNoteByProblem(problemId: string) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return null;

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) return null;

    const note = await db.note.findUnique({
      where: {
        userId_problemId: {
          userId: user.id,
          problemId,
        },
      },
    });

    return note;
  } catch (error) {
    console.error("Error fetching note:", error);
    return null;
  }
}

export async function getUserNotes() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return [];

    const user = await db.user.findUnique({
      where: { clerkId },
      include: {
        notes: {
          include: {
            problem: {
              select: {
                id: true,
                title: true,
                slug: true,
                difficulty: true,
              },
            },
          },
          orderBy: { updatedAt: "desc" },
        },
      },
    });

    return user?.notes || [];
  } catch (error) {
    console.error("Error fetching user notes:", error);
    return [];
  }
}

export async function deleteNote(problemId: string) {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkId },
    });

    if (!user) throw new Error("User not found");

    await db.note.delete({
      where: {
        userId_problemId: {
          userId: user.id,
          problemId,
        },
      },
    });

    revalidatePath("/notebook");
    return { success: true };
  } catch (error) {
    console.error("Error deleting note:", error);
    return { success: false, error: "Failed to delete note" };
  }
}
