"use server";

// রিকোয়ারমেন্ট ৪: ব্যাকএন্ডে ডাটা পাঠানোর ফাংশন
export async function createProblem(formData: FormData) {
  const title = formData.get("title");
  const topic = formData.get("topic");

  // ডাটা ভ্যালিডেশন (রিকোয়ারমেন্ট ৪: Client-side checks)
  if (!title || !topic) return { error: "Fields are required!" };

  console.log("Saving to DB:", { title, topic });
  
  // এখানে আপনার ডাটাবেস লজিক থাকবে
  return { success: true };
}