import { getAllProblemsAdmin } from "@/lib/admin-actions";
import { AdminProblemsClient } from "./AdminProblemsClient";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminProblemsPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  
  const problems = await getAllProblemsAdmin();

  return <AdminProblemsClient initialProblems={problems} />;
}
