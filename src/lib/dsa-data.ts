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



export interface DSATopic {
  id: string;
  title: string;
  description: string;
  complexity: string;
  iconName: string;
  color: string;
  bg: string;
  detailedContent: string; // বিস্তারিত আলোচনার জন্য
}

export const dsaTopics: DSATopic[] = [
  {
    id: "arrays",
    title: "Arrays",
    description: "Master contiguous memory locations and basic data manipulation.",
    complexity: "O(1) Access",
    iconName: "Layers",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    detailedContent: "Arrays are the simplest and most widely used data structure. They store elements in contiguous memory locations, making access extremely fast using indices."
  },
  {
    id: "linked-list",
    title: "Linked List",
    description: "Understand dynamic data structures and pointer-based connections.",
    complexity: "O(n) Search",
    iconName: "List",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    detailedContent: "A linked list is a linear data structure where elements are not stored at contiguous memory locations. Instead, elements are linked using pointers."
  },
  {
    id: "stack",
    title: "Stack",
    description: "Explore the Last-In-First-Out (LIFO) principle and recursion.",
    complexity: "O(1) Push/Pop",
    iconName: "Database",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    detailedContent: "Stack is a linear data structure which follows a particular order in which operations are performed: LIFO (Last In First Out)."
  },
  {
    id: "graphs",
    title: "Graphs",
    description: "Model complex relationships using nodes and edges.",
    complexity: "O(V + E)",
    iconName: "Share2",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    detailedContent: "A Graph is a non-linear data structure consisting of vertices and edges. Graphs are used to solve many real-life problems like social networks and maps."
  },
  {
    id: "trees",
    title: "Trees",
    description: "Hierarchical data structures for efficient searching.",
    complexity: "O(log n)",
    iconName: "BrainCircuit",
    color: "text-red-500",
    bg: "bg-red-500/10",
    detailedContent: "A Tree is a hierarchical data structure. Binary Search Trees (BST) allow for fast searching, insertion, and deletion of data."
  },
  {
    id: "sorting",
    title: "Sorting",
    description: "Master algorithms like Quick Sort, Merge Sort, and Heap Sort.",
    complexity: "O(n log n)",
    iconName: "Zap",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    detailedContent: "Sorting refers to arranging data in a particular format, either ascending or descending. Efficient sorting is important for optimizing searching."
  }
];