"use client";

import Link from "next/link";
import { LayoutDashboard, Database, Settings, LogOut, Code2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar - Senior Level Sidebar Design */}
      <aside className="w-64 bg-card border-r border-border flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3 border-b border-border">
          <div className="bg-primary p-2 rounded-lg">
            <Code2 className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="font-bold tracking-tight">ADMIN PANEL</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/admin" className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted font-medium transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/problems" className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 text-primary font-bold transition-colors">
            <Database size={20} /> Manage Problems
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted font-medium transition-colors text-muted-foreground">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-red-500/10 text-red-500 font-bold transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}