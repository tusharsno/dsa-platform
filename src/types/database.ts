// Database Model Types
export interface User {
  id: string;
  clerkId: string;
  email: string;
  name: string | null;
  imageUrl: string | null;
  points: number;
  streak: number;
  lastSolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  order: number;
  createdAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  createdAt: Date;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  hints: string[];
  constraints: string | null;
  starterCode: string | null;
  topicId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestCase {
  id: string;
  problemId: string;
  input: string;
  output: string;
  isHidden: boolean;
  order: number;
}

export interface Solution {
  id: string;
  userId: string;
  problemId: string;
  code: string;
  language: string;
  status: "Passed" | "Failed" | "Runtime Error";
  executionTime: number | null;
  memoryUsage: number | null;
  createdAt: Date;
}

export interface Discussion {
  id: string;
  problemId: string;
  userId: string;
  title: string;
  content: string;
  upvotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Reply {
  id: string;
  discussionId: string;
  userId: string;
  content: string;
  upvotes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  problemId: string;
  createdAt: Date;
}

// Extended Types with Relations
export interface ProblemWithRelations extends Problem {
  topic?: Topic;
  tags: Tag[];
  companies: Company[];
  testCases: TestCase[];
  _count?: {
    solutions: number;
    discussions: number;
    bookmarks: number;
  };
}

export interface SolutionWithRelations extends Solution {
  user: Pick<User, "id" | "name" | "imageUrl">;
  problem: Pick<Problem, "id" | "title" | "difficulty">;
}

export interface DiscussionWithRelations extends Discussion {
  user: Pick<User, "id" | "name" | "imageUrl">;
  replies: ReplyWithUser[];
  _count?: {
    replies: number;
  };
}

export interface ReplyWithUser extends Reply {
  user: Pick<User, "id" | "name" | "imageUrl">;
}

// Filter Types
export interface ProblemFilters {
  difficulty?: "Easy" | "Medium" | "Hard";
  topicId?: string;
  tagIds?: string[];
  companyIds?: string[];
  search?: string;
  status?: "solved" | "unsolved" | "attempted";
}

// Dashboard Stats
export interface DashboardStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  points: number;
  streak: number;
  rank?: number;
}

// Submission Result
export interface SubmissionResult {
  success: boolean;
  status: "Passed" | "Failed" | "Runtime Error";
  passedTests: number;
  totalTests: number;
  executionTime?: number;
  memoryUsage?: number;
  error?: string;
}

// Starter Code Template
export interface StarterCodeTemplate {
  javascript: string;
  python: string;
  java: string;
  cpp: string;
}
