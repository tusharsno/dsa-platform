import db from "@/lib/db";
import { AdminSettingsClient } from "./AdminSettingsClient";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminSettingsPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  const [topics, tags, companies] = await Promise.all([
    db.topic.findMany({ orderBy: { order: "asc" } }),
    db.tag.findMany({ orderBy: { name: "asc" } }),
    db.company.findMany({ orderBy: { name: "asc" } }),
  ]);

  return <AdminSettingsClient topics={topics} tags={tags} companies={companies} />;
}
