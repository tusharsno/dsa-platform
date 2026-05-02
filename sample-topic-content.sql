-- Sample content for Arrays topic
-- Run this in your database to add content

UPDATE "Topic" 
SET 
  description = 'Master array manipulation, traversal, and optimization techniques',
  content = '# Arrays - Complete Guide

## 📖 Overview
Arrays are fundamental data structures that store elements in contiguous memory locations. They provide O(1) access time and are the foundation for many advanced data structures.

## 🎯 Key Concepts

### 1. Array Basics
- **Fixed Size**: Arrays have a predetermined size
- **Index-based Access**: Elements accessed via indices (0-based)
- **Contiguous Memory**: Elements stored sequentially in memory

### 2. Time Complexity
- Access: O(1)
- Search: O(n)
- Insert/Delete (end): O(1)
- Insert/Delete (middle): O(n)

## 🔥 Common Patterns

### Two Pointers
Used for problems involving pairs, triplets, or subarrays.
```javascript
// Example: Two Sum
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
}
```

### Sliding Window
Optimal for subarray/substring problems.
```javascript
// Example: Max sum of k consecutive elements
function maxSum(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  maxSum = windowSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

### Prefix Sum
Precompute cumulative sums for range queries.

### Kadane''s Algorithm
Find maximum subarray sum in O(n).

## 💡 Pro Tips

1. **Always check array bounds** before accessing elements
2. **Consider edge cases**: empty array, single element, all negatives
3. **Space-time tradeoff**: Hash maps can reduce time complexity
4. **In-place operations**: Modify array without extra space when possible

## 🌟 Real-world Applications

- Image processing (2D arrays/matrices)
- Database indexing
- Caching mechanisms
- Game boards (chess, tic-tac-toe)
- Music playlists

## 📚 Learning Path

1. Start with basic traversal problems
2. Master two pointers technique
3. Learn sliding window pattern
4. Practice prefix sum problems
5. Solve advanced problems (DP on arrays)

## 🎓 Recommended Problems

Start with Easy problems, then progress to Medium and Hard. Focus on understanding patterns rather than memorizing solutions.

Happy Coding! 🚀'
WHERE slug = 'arrays';
