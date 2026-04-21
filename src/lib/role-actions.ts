"use server";

import db from "./db";
import { revalidatePath } from "next/cache";
import { getCurrentUserWithPermissions, canManageUser, logActivity } from "./permission-check";
import { PERMISSIONS, ROLES, ROLE_PERMISSIONS, canManageRole } from "./permissions";

// Update user role
export async function updateUserRole(userId: string, newRole: string) {
  try {
    const currentUser = await getCurrentUserWithPermissions();
    if (!currentUser) {
      return { success: false, error: "Unauthorized" };
    }

    // Check if current user has permission
    if (!currentUser.allPermissions.includes(PERMISSIONS.USERS_MANAGE_ROLES)) {
      return { success: false, error: "No permission to manage roles" };
    }

    // Get target user
    const targetUser = await db.user.findUnique({
      where: { id: userId },
      select: { role: true, email: true, name: true },
    });

    if (!targetUser) {
      return { success: false, error: "User not found" };
    }

    // Check role hierarchy
    if (!canManageRole(currentUser.role, targetUser.role)) {
      return { success: false, error: "Cannot manage user with equal or higher role" };
    }

    if (!canManageRole(currentUser.role, newRole)) {
      return { success: false, error: "Cannot assign role equal or higher than yours" };
    }

    // Update role and assign default permissions
    const defaultPermissions = ROLE_PERMISSIONS[newRole] || [];
    
    await db.user.update({
      where: { id: userId },
      data: {
        role: newRole,
        permissions: defaultPermissions,
      },
    });

    // Log activity
    await logActivity(
      "UPDATE_ROLE",
      "User",
      userId,
      userId,
      {
        oldRole: targetUser.role,
        newRole,
        targetEmail: targetUser.email,
      }
    );

    revalidatePath("/admin/users");
    revalidatePath("/admin/roles");

    return { success: true };
  } catch (error) {
    console.error("Error updating user role:", error);
    return { success: false, error: "Failed to update role" };
  }
}

// Add custom permission to user
export async function addUserPermission(userId: string, permission: string) {
  try {
    const currentUser = await getCurrentUserWithPermissions();
    if (!currentUser) {
      return { success: false, error: "Unauthorized" };
    }

    if (!currentUser.allPermissions.includes(PERMISSIONS.USERS_MANAGE_ROLES)) {
      return { success: false, error: "No permission to manage permissions" };
    }

    const targetUser = await db.user.findUnique({
      where: { id: userId },
      select: { permissions: true, role: true },
    });

    if (!targetUser) {
      return { success: false, error: "User not found" };
    }

    if (!canManageRole(currentUser.role, targetUser.role)) {
      return { success: false, error: "Cannot manage this user" };
    }

    // Add permission if not already present
    const updatedPermissions = [...new Set([...targetUser.permissions, permission])];

    await db.user.update({
      where: { id: userId },
      data: { permissions: updatedPermissions },
    });

    await logActivity("ADD_PERMISSION", "User", userId, userId, { permission });

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Error adding permission:", error);
    return { success: false, error: "Failed to add permission" };
  }
}

// Remove custom permission from user
export async function removeUserPermission(userId: string, permission: string) {
  try {
    const currentUser = await getCurrentUserWithPermissions();
    if (!currentUser) {
      return { success: false, error: "Unauthorized" };
    }

    if (!currentUser.allPermissions.includes(PERMISSIONS.USERS_MANAGE_ROLES)) {
      return { success: false, error: "No permission to manage permissions" };
    }

    const targetUser = await db.user.findUnique({
      where: { id: userId },
      select: { permissions: true, role: true },
    });

    if (!targetUser) {
      return { success: false, error: "User not found" };
    }

    if (!canManageRole(currentUser.role, targetUser.role)) {
      return { success: false, error: "Cannot manage this user" };
    }

    const updatedPermissions = targetUser.permissions.filter(p => p !== permission);

    await db.user.update({
      where: { id: userId },
      data: { permissions: updatedPermissions },
    });

    await logActivity("REMOVE_PERMISSION", "User", userId, userId, { permission });

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Error removing permission:", error);
    return { success: false, error: "Failed to remove permission" };
  }
}

// Get all users with roles and permissions
export async function getAllUsersWithRoles() {
  try {
    const currentUser = await getCurrentUserWithPermissions();
    if (!currentUser) {
      return { success: false, error: "Unauthorized", users: [] };
    }

    if (!currentUser.allPermissions.includes(PERMISSIONS.USERS_VIEW)) {
      return { success: false, error: "No permission to view users", users: [] };
    }

    const users = await db.user.findMany({
      select: {
        id: true,
        clerkId: true,
        email: true,
        name: true,
        imageUrl: true,
        role: true,
        permissions: true,
        points: true,
        createdAt: true,
        _count: {
          select: { solutions: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, users };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { success: false, error: "Failed to fetch users", users: [] };
  }
}

// Get activity logs
export async function getActivityLogs(limit = 50) {
  try {
    const currentUser = await getCurrentUserWithPermissions();
    if (!currentUser) {
      return { success: false, error: "Unauthorized", logs: [] };
    }

    if (!currentUser.allPermissions.includes(PERMISSIONS.LOGS_VIEW)) {
      return { success: false, error: "No permission to view logs", logs: [] };
    }

    const logs = await db.activityLog.findMany({
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
        targetUser: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return { success: true, logs };
  } catch (error) {
    console.error("Error fetching logs:", error);
    return { success: false, error: "Failed to fetch logs", logs: [] };
  }
}
