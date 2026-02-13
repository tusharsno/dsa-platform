// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // ১. কোন রুটগুলো পাবলিক (সবার জন্য খোলা) থাকবে তা ডিফাইন করা
// const isPublicRoute = createRouteMatcher([
//   "/api/webhooks(.*)", // আপনার ক্লার্ক ওয়েব হুক রুটটি এখানে পাবলিক করা হলো
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/",
// ]);

// export default clerkMiddleware(async (auth, request) => {
//   // ২. যদি রুটটি পাবলিক না হয়, তবেই কেবল সিকিউরিটি চেক করবে
//   if (!isPublicRoute(request)) {
//     await auth.protect();
//   }
// });

// export const config = {
//   matcher: [
//     // Next.js এর ইন্টারনাল ফাইল এবং স্ট্যাটিক ফাইলগুলো স্কিপ করবে
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // সব এপিআই রুটের জন্য রান করবে
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// এই লাইনটি নিশ্চিত করে যে Webhook রুটটি সবার জন্য খোলা
const isPublicRoute = createRouteMatcher([
  "/api/webhooks(.*)",
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
