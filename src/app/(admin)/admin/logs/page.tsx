import { getActivityLogs } from "@/lib/role-actions";
import { ActivityLogsClient } from "./ActivityLogsClient";
import { isAdmin } from "@/lib/admin-check";
import { redirect } from "next/navigation";

export default async function AdminLogsPage() {
  const admin = await isAdmin();
  if (!admin) redirect("/admin/access-denied");
  
  const { logs } = await getActivityLogs(100);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Activity Logs</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Audit trail of all admin actions
        </p>
      </div>

      <ActivityLogsClient logs={logs} />
    </div>
  );
}
