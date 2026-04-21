// Role hierarchy and permissions

export const ROLES = {
  USER: "user",
  MODERATOR: "moderator",
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
} as const;

export const PERMISSIONS = {
  // Problem permissions
  PROBLEMS_VIEW: "problems.view",
  PROBLEMS_CREATE: "problems.create",
  PROBLEMS_EDIT: "problems.edit",
  PROBLEMS_DELETE: "problems.delete",
  
  // User permissions
  USERS_VIEW: "users.view",
  USERS_EDIT: "users.edit",
  USERS_DELETE: "users.delete",
  USERS_MANAGE_ROLES: "users.manage_roles",
  
  // Settings permissions
  SETTINGS_VIEW: "settings.view",
  SETTINGS_EDIT: "settings.edit",
  
  // Analytics permissions
  ANALYTICS_VIEW: "analytics.view",
  
  // Activity logs
  LOGS_VIEW: "logs.view",
} as const;

// Role-based default permissions
export const ROLE_PERMISSIONS: Record<string, string[]> = {
  [ROLES.USER]: [
    PERMISSIONS.PROBLEMS_VIEW,
  ],
  
  [ROLES.MODERATOR]: [
    PERMISSIONS.PROBLEMS_VIEW,
    PERMISSIONS.PROBLEMS_CREATE,
    PERMISSIONS.PROBLEMS_EDIT,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.SETTINGS_VIEW,
  ],
  
  [ROLES.ADMIN]: [
    PERMISSIONS.PROBLEMS_VIEW,
    PERMISSIONS.PROBLEMS_CREATE,
    PERMISSIONS.PROBLEMS_EDIT,
    PERMISSIONS.PROBLEMS_DELETE,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.SETTINGS_VIEW,
    PERMISSIONS.SETTINGS_EDIT,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.LOGS_VIEW,
  ],
  
  [ROLES.SUPER_ADMIN]: [
    PERMISSIONS.PROBLEMS_VIEW,
    PERMISSIONS.PROBLEMS_CREATE,
    PERMISSIONS.PROBLEMS_EDIT,
    PERMISSIONS.PROBLEMS_DELETE,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.USERS_MANAGE_ROLES,
    PERMISSIONS.SETTINGS_VIEW,
    PERMISSIONS.SETTINGS_EDIT,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.LOGS_VIEW,
  ],
};

// Role hierarchy (higher number = more power)
export const ROLE_HIERARCHY: Record<string, number> = {
  [ROLES.USER]: 0,
  [ROLES.MODERATOR]: 1,
  [ROLES.ADMIN]: 2,
  [ROLES.SUPER_ADMIN]: 3,
};

// Check if user has permission
export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.includes(requiredPermission);
}

// Check if user has any of the permissions
export function hasAnyPermission(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.some(permission => userPermissions.includes(permission));
}

// Check if user has all permissions
export function hasAllPermissions(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.every(permission => userPermissions.includes(permission));
}

// Check if role can manage another role
export function canManageRole(userRole: string, targetRole: string): boolean {
  return ROLE_HIERARCHY[userRole] > ROLE_HIERARCHY[targetRole];
}

// Get all permissions for a role
export function getRolePermissions(role: string): string[] {
  return ROLE_PERMISSIONS[role] || [];
}
