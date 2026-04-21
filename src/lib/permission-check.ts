"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { ROLES, ROLE_PERMISSIONS, ROLE_HIERARCHY, hasPermission } from "./permissions";
import { redirect } from "next/navigation";

// Get current user with permissions
export async function getCurrentUserWithPermissions() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  const user = await db.user.findUnique({
    where: { clerkId },
    select: {
      id: true,
      clerkId: true,
      email: true,
      name: true,
      role: true,
      permissions: true,
    },
  });

  if (!user) return null;

  // Merge role-based permissions with custom permissions
  const rolePermissions = ROLE_PERMISSIONS[user.role] || [];
  const allPermissions = [...new Set([...rolePermissions, ...user.permissions])];

  return {
    ...user,
    allPermissions,
  };
}

// Check if user has specific permission
export async function checkPermission(permission: string): Promise<boolean> {
  const user = await getCurrentUserWithPermissions();
  if (!user) return false;

  return hasPermission(user.allPermissions, permission);
}

// Require permission or redirect
export async function requirePermission(permission: string, redirectTo = "/admin/access-denied") {
  const hasAccess = await checkPermission(permission);
  if (!hasAccess) {
    redirect(redirectTo);
  }
  return true;
}

// Check if user is admin (any admin role)
export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUserWithPermissions();
  if (!user) return false;

  return [ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.MODERATOR].includes(user.role);
}

// Check if user is super admin
export async function isSuperAdmin(): Promise<boolean> {
  const user = await getCurrentUserWithPermissions();
  if (!user) return false;

  return user.role === ROLES.SUPER_ADMIN;
}

// Check if user can manage another user
export async function canManageUser(targetUserId: string): Promise<boolean> {
  const currentUser = await getCurrentUserWithPermissions();
  if (!currentUser) return false;

  const targetUser = await db.user.findUnique({
    where: { id: targetUserId },
    select: { role: true },
  });

  if (!targetUser) return false;

  return ROLE_HIERARCHY[currentUser.role] > ROLE_HIERARCHY[targetUser.role];
}

// Log activity
export async function logActivity(
  action: string,
  resource: string,
  resourceId?: string,
  targetUserId?: string,
  metadata?: any
) {
  const user = await getCurrentUserWithPermissions();
  if (!user) return;

  await db.activityLog.create({
    data: {
      userId: user.id,
      action,
      resource,
      resourceId,
      targetUserId,
      metadata: metadata ? JSON.stringify(metadata) : null,
    },
  });
}
