import db from "@/lib/db";
import { AdminUsersClient } from "./AdminUsersClient";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminUsersPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: {
          solutions: true,
          bookmarks: true,
          discussions: true,
        },
      },
    },
  });

  return <AdminUsersClient users={users} />;
}
