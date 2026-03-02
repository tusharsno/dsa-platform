import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* শুধু ল্যান্ডিং পেজের জন্য ন্যাভবার */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
