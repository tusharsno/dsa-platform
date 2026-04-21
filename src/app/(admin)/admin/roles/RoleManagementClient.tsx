"use client";

import { useState, useMemo } from "react";
import { updateUserRole, addUserPermission, removeUserPermission } from "@/lib/role-actions";
import { ROLES, PERMISSIONS, ROLE_PERMISSIONS } from "@/lib/permissions";
import { Shield, Crown, Star, User as UserIcon, Plus, X, Search, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

interface User {
  id: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  role: string;
  permissions: string[];
  points: number;
  createdAt: Date;
  _count: { solutions: number };
}

export function RoleManagementClient({ users }: { users: User[] }) {
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [confirmDialog, setConfirmDialog] = useState<{
    show: boolean;
    userId: string;
    newRole: string;
    userName: string;
  } | null>(null);
  const router = useRouter();
  const { showToast, ToastComponent } = useToast();

  // Filter users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, roleFilter]);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case ROLES.SUPER_ADMIN:
        return <Crown className="w-4 h-4 text-yellow-500" />;
      case ROLES.ADMIN:
        return <Shield className="w-4 h-4 text-blue-500" />;
      case ROLES.MODERATOR:
        return <Star className="w-4 h-4 text-purple-500" />;
      default:
        return <UserIcon className="w-4 h-4 text-zinc-500" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case ROLES.SUPER_ADMIN:
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case ROLES.ADMIN:
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case ROLES.MODERATOR:
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  const handleRoleChange = async (userId: string, newRole: string, userName: string) => {
    setConfirmDialog({ show: true, userId, newRole, userName });
  };

  const confirmRoleChange = async () => {
    if (!confirmDialog) return;
    
    setLoading(confirmDialog.userId);
    setConfirmDialog(null);
    const result = await updateUserRole(confirmDialog.userId, confirmDialog.newRole);
    setLoading(null);

    if (result.success) {
      showToast("Role updated successfully", "success");
      router.refresh();
    } else {
      showToast(result.error || "Failed to update role", "error");
    }
  };

  const handleAddPermission = async (userId: string, permission: string) => {
    setLoading(userId);
    const result = await addUserPermission(userId, permission);
    setLoading(null);

    if (result.success) {
      showToast("Permission added successfully", "success");
      router.refresh();
    } else {
      showToast(result.error || "Failed to add permission", "error");
    }
  };

  const handleRemovePermission = async (userId: string, permission: string) => {
    setLoading(userId);
    const result = await removeUserPermission(userId, permission);
    setLoading(null);

    if (result.success) {
      showToast("Permission removed successfully", "success");
      router.refresh();
    } else {
      showToast(result.error || "Failed to remove permission", "error");
    }
  };

  return (
    <div className="space-y-6">
      {ToastComponent}
      
      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500/50"
        >
          <option value="all">All Roles</option>
          <option value={ROLES.USER}>User</option>
          <option value={ROLES.MODERATOR}>Moderator</option>
          <option value={ROLES.ADMIN}>Admin</option>
          <option value={ROLES.SUPER_ADMIN}>Super Admin</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-900/80 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase">
                  Permissions
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase">
                  Stats
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-zinc-400 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                const rolePermissions = ROLE_PERMISSIONS[user.role] || [];
                const customPermissions = user.permissions.filter(
                  (p) => !rolePermissions.includes(p)
                );

                return (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {user.imageUrl ? (
                          <Image
                            src={user.imageUrl}
                            alt={user.name || "User"}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                            <UserIcon className="w-5 h-5 text-zinc-500" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-white">
                            {user.name || "Unknown"}
                          </p>
                          <p className="text-xs text-zinc-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value, user.name || user.email)}
                        disabled={loading === user.id}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 ${getRoleBadgeColor(
                          user.role
                        )} bg-transparent cursor-pointer disabled:opacity-50`}
                      >
                        <option value={ROLES.USER}>User</option>
                        <option value={ROLES.MODERATOR}>Moderator</option>
                        <option value={ROLES.ADMIN}>Admin</option>
                        <option value={ROLES.SUPER_ADMIN}>Super Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {rolePermissions.slice(0, 2).map((perm) => (
                          <span
                            key={perm}
                            className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded"
                          >
                            {perm.split(".")[1]}
                          </span>
                        ))}
                        {rolePermissions.length > 2 && (
                          <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded">
                            +{rolePermissions.length - 2}
                          </span>
                        )}
                        {customPermissions.map((perm) => (
                          <span
                            key={perm}
                            className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] rounded flex items-center gap-1"
                          >
                            {perm.split(".")[1]}
                            <button
                              onClick={() => handleRemovePermission(user.id, perm)}
                              className="hover:text-red-500"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs text-zinc-400">
                        <p>{user._count.solutions} solved</p>
                        <p>{user.points} points</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setSelectedUser(user)}
                        disabled={loading === user.id}
                        className="px-3 py-1.5 bg-blue-500/10 text-blue-500 text-xs rounded-lg hover:bg-blue-500/20 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto"
                      >
                        {loading === user.id && <Loader2 className="w-3 h-3 animate-spin" />}
                        Manage
                      </button>
                    </td>
                  </tr>
                );
              }))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Permission Management Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Manage Permissions: {selectedUser.name}
                </h2>
                <p className="text-sm text-zinc-400">{selectedUser.email}</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Role Permissions (Auto-assigned)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(ROLE_PERMISSIONS[selectedUser.role] || []).map((perm) => (
                    <span
                      key={perm}
                      className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-xs rounded-lg"
                    >
                      {perm}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Custom Permissions
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedUser.permissions
                    .filter((p) => !(ROLE_PERMISSIONS[selectedUser.role] || []).includes(p))
                    .map((perm) => (
                      <span
                        key={perm}
                        className="px-3 py-1.5 bg-emerald-500/10 text-emerald-500 text-xs rounded-lg flex items-center gap-2"
                      >
                        {perm}
                        <button
                          onClick={() => handleRemovePermission(selectedUser.id, perm)}
                          className="hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                </div>

                <div className="mt-4">
                  <p className="text-xs text-zinc-500 mb-2">Add Permission:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(PERMISSIONS).map((perm) => {
                      const hasPermission = [...(ROLE_PERMISSIONS[selectedUser.role] || []), ...selectedUser.permissions].includes(perm);
                      
                      return (
                        <button
                          key={perm}
                          onClick={() => !hasPermission && handleAddPermission(selectedUser.id, perm)}
                          disabled={hasPermission}
                          className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                            hasPermission
                              ? "bg-zinc-800/50 text-zinc-600 border-zinc-700 cursor-not-allowed"
                              : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:border-emerald-500"
                          }`}
                        >
                          {perm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {confirmDialog?.show && (
        <ConfirmDialog
          title="Confirm Role Change"
          message={`Are you sure you want to change ${confirmDialog.userName}'s role to ${confirmDialog.newRole}?`}
          confirmText="Change Role"
          cancelText="Cancel"
          onConfirm={confirmRoleChange}
          onCancel={() => setConfirmDialog(null)}
          type="warning"
        />
      )}
    </div>
  );
}
