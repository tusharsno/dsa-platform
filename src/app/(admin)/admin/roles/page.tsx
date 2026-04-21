import { getAllUsersWithRoles } from "@/lib/role-actions";
import { RoleManagementClient } from "./RoleManagementClient";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminRolesPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  
  const { users } = await getAllUsersWithRoles();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Role & Permission Management</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Manage user roles and permissions
        </p>
      </div>

      <RoleManagementClient users={users} />
    </div>
  );
}
