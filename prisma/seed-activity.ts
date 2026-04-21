import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL!;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding activity data...");

  // Get first user
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("❌ No user found. Please sign up first.");
    return;
  }

  // Get all problems
  const problems = await prisma.problem.findMany();
  if (problems.length === 0) {
    console.log("❌ No problems found. Please seed problems first.");
    return;
  }

  // Generate random submissions for last 6 months
  const today = new Date();
  const submissions = [];

  for (let i = 0; i < 180; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Random chance of submission (30%)
    if (Math.random() > 0.7) {
      const randomProblem = problems[Math.floor(Math.random() * problems.length)];
      
      submissions.push({
        userId: user.id,
        problemId: randomProblem.id,
        code: "function solution() { return true; }",
        language: "javascript",
        status: "Passed",
        createdAt: date,
        updatedAt: date,
      });
    }
  }

  // Create submissions
  for (const submission of submissions) {
    await prisma.solution.upsert({
      where: {
        userId_problemId: {
          userId: submission.userId,
          problemId: submission.problemId,
        },
      },
      update: {
        createdAt: submission.createdAt,
      },
      create: submission,
    });
  }

  console.log(`✅ Created ${submissions.length} test submissions`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
