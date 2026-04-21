"use server";

import { auth } from "@clerk/nextjs/server";
import db from "./db";

export async function isAdmin() {
  try {
    const { userId: clerkId } = await auth();
    if (!clerkId) return false;

    const user = await db.user.findUnique({
      where: { clerkId },
      select: { role: true },
    });

    return user?.role === "admin" || user?.role === "super_admin" || user?.role === "moderator";
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

export async function requireAdmin() {
  const admin = await isAdmin();
  if (!admin) {
    throw new Error("Unauthorized: Admin access required");
  }
  return true;
}
