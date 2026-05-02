"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQ from "@/app/(landing)/components/FAQ";
import { getAllTopics } from "@/lib/database-actions";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [topics, setTopics] = useState<Array<{
    id: string;
    name: string;
    slug: string;
    icon: string | null;
  }>>([]);

  useEffect(() => {
    getAllTopics().then((data) => {
      setTopics(data.map(t => ({ id: t.id, name: t.name, slug: t.slug, icon: t.icon })));
    });
  }, []);
  const isAdminPage = pathname.startsWith("/admin");
  const isDashboard = pathname.startsWith("/dashboard");
  const isMinimalUI =
    pathname.startsWith("/topics") ||
    pathname.startsWith("/problems") ||
    pathname.startsWith("/roadmap");
  
  const isLandingPage = pathname === "/";

  return (
    <>
      {!isAdminPage && !isDashboard && <Navbar topics={topics} />}
      <main className="min-h-screen">{children}</main>
      {isLandingPage && (
        <>
          <div className="h-16 bg-black"></div>
          <FAQ />
        </>
      )}
      {!isAdminPage && !isDashboard && !isMinimalUI && <Footer />}
    </>
  );
}
