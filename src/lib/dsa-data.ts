// export interface DSATopic {
//   id: string;
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string; // স্ট্রিং হিসেবে নাম ব্যবহার করছি
//   color: string;
//   bg: string;
// }

// export const dsaTopics: DSATopic[] = [
//   {
//     id: "arrays",
//     title: "Arrays",
//     description: "Master contiguous memory locations and basic data manipulation.",
//     complexity: "O(1) Access",
//     iconName: "Layers",
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//   },
//   {
//     id: "strings",
//     title: "Strings",
//     description: "Learn sequence manipulation and pattern matching algorithms.",
//     complexity: "O(n) Search",
//     iconName: "Hash",
//     color: "text-emerald-500",
//     bg: "bg-emerald-500/10",
//   },
//   {
//     id: "linked-list",
//     title: "Linked List",
//     description: "Understand dynamic data structures and pointer-based connections.",
//     complexity: "O(1) Insertion",
//     iconName: "List",
//     color: "text-purple-500",
//     bg: "bg-purple-500/10",
//   },
//   {
//     id: "stack",
//     title: "Stack",
//     description: "Explore the Last-In-First-Out (LIFO) principle and recursion.",
//     complexity: "O(1) Push/Pop",
//     iconName: "Database",
//     color: "text-orange-500",
//     bg: "bg-orange-500/10",
//   },
//   {
//     id: "queue",
//     title: "Queue",
//     description: "Master First-In-First-Out (FIFO) structures for task scheduling.",
//     complexity: "O(1) Enqueue",
//     iconName: "Binary",
//     color: "text-cyan-500",
//     bg: "bg-cyan-500/10",
//   },
//   {
//     id: "trees",
//     title: "Trees",
//     description: "Hierarchical data structures for efficient searching and sorting.",
//     complexity: "O(log n)",
//     iconName: "BrainCircuit",
//     color: "text-red-500",
//     bg: "bg-red-500/10",
//   }
// ];

// before/02/2026
// export interface DSATopic {
//   id: string;
//   title: string;
//   description: string;
//   complexity: string;
//   iconName: string;
//   color: string;
//   bg: string;
//   detailedContent: string; // বিস্তারিত আলোচনার জন্য
// }

// export const dsaTopics: DSATopic[] = [
//   {
//     id: "arrays",
//     title: "Arrays",
//     description: "Master contiguous memory locations and basic data manipulation.",
//     complexity: "O(1) Access",
//     iconName: "Layers",
//     color: "text-blue-500",
//     bg: "bg-blue-500/10",
//     detailedContent: "Arrays are the simplest and most widely used data structure. They store elements in contiguous memory locations, making access extremely fast using indices."
//   },
//   {
//     id: "linked-list",
//     title: "Linked List",
//     description: "Understand dynamic data structures and pointer-based connections.",
//     complexity: "O(n) Search",
//     iconName: "List",
//     color: "text-purple-500",
//     bg: "bg-purple-500/10",
//     detailedContent: "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, elements are linked using pointers."
//   },
//   {
//     id: "stack",
//     title: "Stack",
//     description: "Explore the Last-In-First-Out (LIFO) principle and recursion.",
//     complexity: "O(1) Push/Pop",
//     iconName: "Database",
//     color: "text-orange-500",
//     bg: "bg-orange-500/10",
//     detailedContent: "Stack is a linear data structure which follows a particular order in which operations are performed: LIFO (Last In First Out)."
//   },
//   {
//     id: "graphs",
//     title: "Graphs",
//     description: "Model complex relationships using nodes and edges.",
//     complexity: "O(V + E)",
//     iconName: "Share2",
//     color: "text-indigo-500",
//     bg: "bg-indigo-500/10",
//     detailedContent: "A Graph is a non-linear data structure consisting of vertices and edges. Graphs are used to solve many real-life problems like social networks and maps."
//   },
//   {
//     id: "trees",
//     title: "Trees",
//     description: "Hierarchical data structures for efficient searching.",
//     complexity: "O(log n)",
//     iconName: "BrainCircuit",
//     color: "text-red-500",
//     bg: "bg-red-500/10",
//     detailedContent: "A Tree is a hierarchical data structure. Binary Search Trees (BST) allow for fast searching, insertion, and deletion of data."
//   },
//   {
//     id: "sorting",
//     title: "Sorting",
//     description: "Master algorithms like Quick Sort, Merge Sort, and Heap Sort.",
//     complexity: "O(n log n)",
//     iconName: "Zap",
//     color: "text-yellow-500",
//     bg: "bg-yellow-500/10",
//     detailedContent: "Sorting refers to arranging data in a particular format, either ascending or descending. Efficient sorting is important for optimizing searching."
//   }
// ];

// 12/02/2026 - color update
export interface DSATopic {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
  color: string;
  bg: string;
  detailedContent: string;
  readingTime: string; // নতুন যোগ করা হয়েছে
  interviewImportance: "High" | "Medium" | "Low"; // নতুন যোগ করা হয়েছে
}

export const dsaTopics: DSATopic[] = [
  {
    id: "arrays",
    title: "Arrays",
    description:
      "Master contiguous memory locations and basic data manipulation.",
    complexity: "O(1) Access",
    iconName: "Layers",
    color: "text-blue-400", // ডার্ক মোডে আরও উজ্জ্বল দেখাবে
    bg: "bg-blue-400/10",
    detailedContent:
      "Arrays are the simplest and most widely used data structure. They store elements in contiguous memory locations, making access extremely fast using indices.",
    readingTime: "30 min read",
    interviewImportance: "High",
  },
  {
    id: "linked-list",
    title: "Linked List",
    description:
      "Understand dynamic data structures and pointer-based connections.",
    complexity: "O(n) Search",
    iconName: "List",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    detailedContent:
      "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, elements are linked using pointers.",
    readingTime: "45 min read",
    interviewImportance: "High",
  },
  {
    id: "stack",
    title: "Stack",
    description:
      "Explore the Last-In-First-Out (LIFO) principle and recursion.",
    complexity: "O(1) Push/Pop",
    iconName: "Database",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    detailedContent:
      "Stack is a linear data structure which follows a particular order in which operations are performed: LIFO (Last In First Out).",
    readingTime: "25 min read",
    interviewImportance: "Medium",
  },
  {
    id: "graphs",
    title: "Graphs",
    description: "Model complex relationships using nodes and edges.",
    complexity: "O(V + E)",
    iconName: "Share2",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    detailedContent:
      "A Graph is a non-linear data structure consisting of vertices and edges. Graphs are used to solve many real-life problems like social networks and maps.",
    readingTime: "60 min read",
    interviewImportance: "High",
  },
  {
    id: "trees",
    title: "Trees",
    description: "Hierarchical data structures for efficient searching.",
    complexity: "O(log n)",
    iconName: "BrainCircuit",
    color: "text-rose-400", // Red এর বদলে Rose ডার্ক মোডে বেশি প্রিমিয়াম লাগে
    bg: "bg-rose-400/10",
    detailedContent:
      "A Tree is a hierarchical data structure. Binary Search Trees (BST) allow for fast searching, insertion, and deletion of data.",
    readingTime: "50 min read",
    interviewImportance: "High",
  },
  {
    id: "sorting",
    title: "Sorting",
    description:
      "Master algorithms like Quick Sort, Merge Sort, and Heap Sort.",
    complexity: "O(n log n)",
    iconName: "Zap",
    color: "text-amber-400", // Yellow এর বদলে Amber চোখে আরামদায়ক
    bg: "bg-amber-400/10",
    detailedContent:
      "Sorting refers to arranging data in a particular format, either ascending or descending. Efficient sorting is important for optimizing searching.",
    readingTime: "40 min read",
    interviewImportance: "Medium",
  },
  // আগের ৬টি টপিকের নিচে এই ডাটাগুলো কপি করে বসিয়ে দিন

  {
    id: "hashing",
    title: "Hashing",
    description: "Learn fast data retrieval using Hash Maps and Hash Tables.",
    complexity: "O(1) Average",
    iconName: "Hash",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    detailedContent:
      "Hashing is a technique to uniquely identify a specific object from a group of similar objects using hash functions. It's the backbone of HashMaps and Dictionaries.",
    readingTime: "35 min read",
    interviewImportance: "High",
  },
  {
    id: "recursion",
    title: "Recursion",
    description:
      "Master the art of functions calling themselves to solve complex problems.",
    complexity: "Variable",
    iconName: "RotateCw",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    detailedContent:
      "Recursion is a process in which a function calls itself as a subroutine. It allows the program to repeat a certain block of code for a specific number of times.",
    readingTime: "40 min read",
    interviewImportance: "High",
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Solve complex problems by breaking them into simpler subproblems.",
    complexity: "O(n*m)",
    iconName: "Cpu",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    detailedContent:
      "DP is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.",
    readingTime: "75 min read",
    interviewImportance: "High",
  },
  {
    id: "greedy-algorithms",
    title: "Greedy Algorithms",
    description:
      "Make the locally optimal choice at each step to find a global optimum.",
    complexity: "Varies",
    iconName: "Zap",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    detailedContent:
      "A greedy algorithm is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum.",
    readingTime: "30 min read",
    interviewImportance: "Medium",
  },
  {
    id: "bit-manipulation",
    title: "Bit Manipulation",
    description:
      "Perform operations at the bit level for high-performance computing.",
    complexity: "O(1)",
    iconName: "Binary",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    detailedContent:
      "Bit manipulation is the act of algorithmically manipulating bits or other pieces of data shorter than a word. It's used heavily in low-level programming and optimization.",
    readingTime: "20 min read",
    interviewImportance: "Medium",
  },
  {
    id: "backtracking",
    title: "Backtracking",
    description:
      "Systematically search for a solution to a problem among all available options.",
    complexity: "Exponential",
    iconName: "Undo2",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    detailedContent:
      "Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.",
    readingTime: "45 min read",
    interviewImportance: "High",
  },
];
