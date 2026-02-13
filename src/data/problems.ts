export interface Problem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  description: string;
  sampleInput: string;
  expectedOutput: string;
  constraints: string[];
  initialCode: string;
}

export const problemsData: Record<string, Problem> = {
  // ১. Two Sum
  "1": {
    id: "1",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    sampleInput: "nums = [2,7,11,15], target = 9",
    expectedOutput: "[0,1]",
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
    initialCode:
      "def two_sum(nums, target):\n    # Write your code here\n    pass",
  },
  // ২. Reverse Linked List
  "2": {
    id: "2",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    description:
      "Given the head of a singly linked list, reverse the list and return its reversed version.",
    sampleInput: "head = [1,2,3,4,5]",
    expectedOutput: "[5,4,3,2,1]",
    constraints: [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000",
    ],
    initialCode:
      "def reverse_list(head):\n    # Use prev and curr pointers\n    pass",
  },
  // ৩. Number of Islands
  "3": {
    id: "3",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graphs",
    description:
      "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    sampleInput: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]',
    expectedOutput: "3",
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
    ],
    initialCode:
      "def num_islands(grid):\n    # BFS or DFS implementation\n    pass",
  },
  // ৪. Longest Palindromic Substring
  "4": {
    id: "4",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Strings",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    sampleInput: 's = "babad"',
    expectedOutput: '"bab"',
    constraints: [
      "1 <= s.length <= 1000",
      "s consists of only digits and English letters.",
    ],
    initialCode:
      "def longest_palindrome(s):\n    # Expand around center logic\n    pass",
  },
  // ৫. Median of Two Sorted Arrays
  "5": {
    id: "5",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    sampleInput: "nums1 = [1,3], nums2 = [2]",
    expectedOutput: "2.00000",
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m, n <= 1000",
    ],
    initialCode:
      "def find_median_sorted_arrays(nums1, nums2):\n    # Binary search for O(log(m+n))\n    pass",
  },
};
