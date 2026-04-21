import { UserProfile } from "@clerk/nextjs";

export default function EditProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <UserProfile
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-card border border-border shadow-xl",
          },
        }}
      />
    </div>
  );
}
