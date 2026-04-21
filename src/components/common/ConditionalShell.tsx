"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isDashboard = pathname.startsWith("/dashboard");
  const isMinimalUI =
    pathname.startsWith("/topics") ||
    pathname.startsWith("/problems") ||
    pathname.startsWith("/roadmap");

  return (
    <>
      {!isAdminPage && !isDashboard && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isAdminPage && !isDashboard && !isMinimalUI && <Footer />}
    </>
  );
}
