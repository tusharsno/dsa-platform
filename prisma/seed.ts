import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // 1. Create Topics
  const topics = await Promise.all([
    prisma.topic.upsert({
      where: { slug: "arrays" },
      update: {},
      create: {
        name: "Arrays",
        slug: "arrays",
        description: "Master array manipulation and traversal techniques",
        icon: "Layers",
        order: 1,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "strings" },
      update: {},
      create: {
        name: "Strings",
        slug: "strings",
        description: "String manipulation and pattern matching",
        icon: "Hash",
        order: 2,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "linked-lists" },
      update: {},
      create: {
        name: "Linked Lists",
        slug: "linked-lists",
        description: "Pointer-based data structures",
        icon: "List",
        order: 3,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "stacks-queues" },
      update: {},
      create: {
        name: "Stacks & Queues",
        slug: "stacks-queues",
        description: "LIFO and FIFO data structures",
        icon: "Database",
        order: 4,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "trees" },
      update: {},
      create: {
        name: "Trees",
        slug: "trees",
        description: "Hierarchical data structures",
        icon: "BrainCircuit",
        order: 5,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "graphs" },
      update: {},
      create: {
        name: "Graphs",
        slug: "graphs",
        description: "Network and relationship problems",
        icon: "Share2",
        order: 6,
      },
    }),
    prisma.topic.upsert({
      where: { slug: "dynamic-programming" },
      update: {},
      create: {
        name: "Dynamic Programming",
        slug: "dynamic-programming",
        description: "Optimization through memoization",
        icon: "Cpu",
        order: 7,
      },
    }),
  ]);

  console.log("✅ Topics created");

  // 2. Create Tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: "two-pointers" },
      update: {},
      create: { name: "Two Pointers", slug: "two-pointers" },
    }),
    prisma.tag.upsert({
      where: { slug: "sliding-window" },
      update: {},
      create: { name: "Sliding Window", slug: "sliding-window" },
    }),
    prisma.tag.upsert({
      where: { slug: "binary-search" },
      update: {},
      create: { name: "Binary Search", slug: "binary-search" },
    }),
    prisma.tag.upsert({
      where: { slug: "hash-table" },
      update: {},
      create: { name: "Hash Table", slug: "hash-table" },
    }),
    prisma.tag.upsert({
      where: { slug: "recursion" },
      update: {},
      create: { name: "Recursion", slug: "recursion" },
    }),
    prisma.tag.upsert({
      where: { slug: "backtracking" },
      update: {},
      create: { name: "Backtracking", slug: "backtracking" },
    }),
  ]);

  console.log("✅ Tags created");

  // 3. Create Companies
  const companies = await Promise.all([
    prisma.company.upsert({
      where: { slug: "google" },
      update: {},
      create: { name: "Google", slug: "google" },
    }),
    prisma.company.upsert({
      where: { slug: "amazon" },
      update: {},
      create: { name: "Amazon", slug: "amazon" },
    }),
    prisma.company.upsert({
      where: { slug: "microsoft" },
      update: {},
      create: { name: "Microsoft", slug: "microsoft" },
    }),
    prisma.company.upsert({
      where: { slug: "facebook" },
      update: {},
      create: { name: "Meta", slug: "facebook" },
    }),
  ]);

  console.log("✅ Companies created");

  // 4. Create Sample Problems
  const twoSumProblem = await prisma.problem.upsert({
    where: { slug: "two-sum" },
    update: {},
    create: {
      title: "Two Sum",
      slug: "two-sum",
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\``,
      difficulty: "Easy",
      hints: [
        "Use a hash map to store numbers you've seen",
        "For each number, check if target - number exists in the map",
      ],
      constraints: `- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.`,
      starterCode: JSON.stringify({
        javascript: `function twoSum(nums, target) {
    // Write your code here
}`,
        python: `def twoSum(nums, target):
    # Write your code here
    pass`,
      }),
      topicId: topics[0].id, // Arrays
      tags: {
        connect: [{ id: tags[3].id }], // Hash Table
      },
      companies: {
        connect: [{ id: companies[0].id }, { id: companies[1].id }], // Google, Amazon
      },
    },
  });

  // Add test cases for Two Sum
  await prisma.testCase.createMany({
    data: [
      {
        problemId: twoSumProblem.id,
        input: JSON.stringify({ nums: [2, 7, 11, 15], target: 9 }),
        output: JSON.stringify([0, 1]),
        isHidden: false,
        order: 1,
      },
      {
        problemId: twoSumProblem.id,
        input: JSON.stringify({ nums: [3, 2, 4], target: 6 }),
        output: JSON.stringify([1, 2]),
        isHidden: false,
        order: 2,
      },
      {
        problemId: twoSumProblem.id,
        input: JSON.stringify({ nums: [3, 3], target: 6 }),
        output: JSON.stringify([0, 1]),
        isHidden: true,
        order: 3,
      },
    ],
  });

  console.log("✅ Two Sum problem created");

  // 5. Valid Parentheses
  const validParentheses = await prisma.problem.upsert({
    where: { slug: "valid-parentheses" },
    update: {},
    create: {
      title: "Valid Parentheses",
      slug: "valid-parentheses",
      description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**
\`\`\`
Input: s = "()"
Output: true
\`\`\`

**Example 2:**
\`\`\`
Input: s = "()[]{}"
Output: true
\`\`\`

**Example 3:**
\`\`\`
Input: s = "(]"
Output: false
\`\`\``,
      difficulty: "Easy",
      hints: [
        "Use a stack data structure",
        "Push opening brackets, pop when you see closing brackets",
      ],
      constraints: `- 1 <= s.length <= 10^4
- s consists of parentheses only '()[]{}'.`,
      starterCode: JSON.stringify({
        javascript: `function isValid(s) {
    // Write your code here
}`,
        python: `def isValid(s):
    # Write your code here
    pass`,
      }),
      topicId: topics[3].id, // Stacks & Queues
      tags: {
        connect: [{ id: tags[0].id }], // Two Pointers (or create stack tag)
      },
      companies: {
        connect: [{ id: companies[1].id }, { id: companies[2].id }], // Amazon, Microsoft
      },
    },
  });

  await prisma.testCase.createMany({
    data: [
      {
        problemId: validParentheses.id,
        input: JSON.stringify({ s: "()" }),
        output: JSON.stringify(true),
        isHidden: false,
        order: 1,
      },
      {
        problemId: validParentheses.id,
        input: JSON.stringify({ s: "()[]{}" }),
        output: JSON.stringify(true),
        isHidden: false,
        order: 2,
      },
      {
        problemId: validParentheses.id,
        input: JSON.stringify({ s: "(]" }),
        output: JSON.stringify(false),
        isHidden: true,
        order: 3,
      },
    ],
  });

  console.log("✅ Valid Parentheses problem created");

  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
