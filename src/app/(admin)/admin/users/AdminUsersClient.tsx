"use client";

import { useState } from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Search, Award, MessageSquare, Bookmark } from "lucide-react";

export function AdminUsersClient({ users }: { users: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
        <p className="text-muted-foreground">{users.length} total users</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
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
                Streak
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Activity
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-wider">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4">
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
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold">
                            {user.name?.[0] || "U"}
                          </span>
                        </div>
                      )}
                      <span className="font-semibold">{user.name || "Anonymous"}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span className="font-bold">{user.points}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-500 text-xs font-bold rounded-md">
                      {user.streak} days
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="font-bold">{user._count.solutions}</span>
                        <span className="text-muted-foreground">solved</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bookmark className="w-3 h-3" />
                        <span className="font-bold">{user._count.bookmarks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span className="font-bold">{user._count.discussions}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(user.createdAt), {
                      addSuffix: true,
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
