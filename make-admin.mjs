import db from "./src/lib/db.js";

async function makeAdmin() {
  const email = process.argv[2];
  
  if (!email) {
    console.log("Usage: node make-admin.mjs <email>");
    process.exit(1);
  }

  try {
    const user = await db.user.update({
      where: { email },
      data: { role: "admin" },
    });
    
    console.log(`✅ User ${user.email} is now an admin!`);
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await db.$disconnect();
  }
}

makeAdmin();
