"use client";

import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

export function RecentUsersTable({ users }: { users: any[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold">Recent Users</h3>
        <p className="text-sm text-muted-foreground">Latest registered users</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                User
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Email
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Points
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Solved
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {user.imageUrl ? (
                      <Image
                        src={user.imageUrl}
                        alt={user.name || "User"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {user.name?.[0] || "U"}
                        </span>
                      </div>
                    )}
                    <span className="font-semibold">{user.name || "Anonymous"}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-md">
                    {user.points}
                  </span>
                </td>
                <td className="p-4 text-sm font-semibold">{user._count.solutions}</td>
                <td className="p-4 text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
