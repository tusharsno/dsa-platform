// import { Sidebar } from "@/components/dashboard/Sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-screen bg-black overflow-hidden">
//       {/* বামপাশে প্রফেশনাল সাইডবার */}
//       <Sidebar />

//       {/* ডানপাশে মেইন কন্টেন্ট এলাকা (এখানে কোনো Navbar বা Footer থাকবে না) */}
//       <main className="flex-1 relative overflow-y-auto bg-zinc-950/50 p-4 lg:p-8">
//         {/* টপ প্রোফাইল সেকশন (ঐচ্ছিক: ছোট করে শুধু নাম বা সার্চ বার থাকতে পারে) */}
//         <div className="max-w-7xl mx-auto">{children}</div>
//       </main>
//     </div>
//   );
// }

// import { Sidebar } from "@/components/dashboard/Sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex h-screen bg-black overflow-hidden">
//       <Sidebar />
//       <main className="flex-1 overflow-y-auto bg-zinc-950/50 p-6">
//         <div className="max-w-7xl mx-auto">{children}</div>
//       </main>
//     </div>
//   );
// }

import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar /> {/* ড্যাশবোর্ডের জন্য শুধু সাইডবার */}
      <main className="flex-1 overflow-y-auto bg-zinc-950/50">{children}</main>
    </div>
  );
}
