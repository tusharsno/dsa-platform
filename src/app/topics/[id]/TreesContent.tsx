export default function TreesContent() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Introduction to Trees</h2>
        <div className="text-white/70 leading-relaxed space-y-4">
          <p>
            A Tree is a hierarchical data structure consisting of nodes connected by edges. It's one of the most
            important non-linear data structures used in computer science for representing hierarchical relationships,
            organizing data efficiently, and enabling fast search operations.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Key Takeaway
            </h3>
            <p className="text-sm text-white/70">
              Trees provide O(log n) time complexity for search, insert, and delete operations in balanced trees,
              making them ideal for databases, file systems, and search algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Tree */}
      <section id="what-is-tree" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What is a Tree?</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            A Tree is a collection of nodes where each node contains a value and references to its child nodes.
            The topmost node is called the root, and nodes with no children are called leaves.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Tree Terminology:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div><strong className="text-white">Root:</strong> Topmost node</div>
                <div><strong className="text-white">Parent:</strong> Node with children</div>
                <div><strong className="text-white">Child:</strong> Node connected below</div>
                <div><strong className="text-white">Leaf:</strong> Node with no children</div>
              </div>
              <div className="space-y-2">
                <div><strong className="text-white">Height:</strong> Longest path to leaf</div>
                <div><strong className="text-white">Depth:</strong> Distance from root</div>
                <div><strong className="text-white">Subtree:</strong> Tree formed by node and descendants</div>
                <div><strong className="text-white">Sibling:</strong> Nodes with same parent</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Visual Representation:</h3>
            <div className="bg-zinc-900 rounded-lg p-8 flex justify-center">
              <div className="text-center space-y-4 font-mono text-sm">
                <div className="flex justify-center">
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">1 (Root)</div>
                </div>
                <div className="flex justify-center gap-8">
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">2</div>
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">3</div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">4</div>
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">5</div>
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">6</div>
                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded">7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Trees */}
      <section id="types-of-trees" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Types of Trees</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Binary Tree</h3>
              <p className="text-sm text-white/60 mb-4">
                Each node has at most two children (left and right).
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Max children per node: 2
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Binary Search Tree (BST)</h3>
              <p className="text-sm text-white/60 mb-4">
                Left child &lt; Parent &lt; Right child. Enables fast search.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Search: O(log n) average
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">3. AVL Tree</h3>
              <p className="text-sm text-white/60 mb-4">
                Self-balancing BST. Height difference ≤ 1 for all nodes.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Balanced: O(log n) guaranteed
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">4. Red-Black Tree</h3>
              <p className="text-sm text-white/60 mb-4">
                Self-balancing BST with color properties for balance.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Used in: C++ STL, Java TreeMap
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">5. Heap (Binary Heap)</h3>
              <p className="text-sm text-white/60 mb-4">
                Complete binary tree. Max-Heap or Min-Heap property.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Used in: Priority Queue
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">6. Trie (Prefix Tree)</h3>
              <p className="text-sm text-white/60 mb-4">
                Tree for storing strings. Each path represents a word.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Used in: Autocomplete, Dictionary
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">7. Segment Tree</h3>
              <p className="text-sm text-white/60 mb-4">
                For range queries and updates on arrays.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Range Query: O(log n)
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">8. B-Tree / B+ Tree</h3>
              <p className="text-sm text-white/60 mb-4">
                Multi-way tree for databases and file systems.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-xs">
                Used in: Databases, File Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Traversals */}
      <section id="tree-traversals" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Tree Traversals</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>Tree traversal is the process of visiting all nodes in a specific order.</p>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Inorder Traversal (Left → Root → Right)</h3>
              <p className="text-sm text-white/60 mb-4">
                Visits left subtree, then root, then right subtree. Gives sorted order in BST.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code className="text-blue-400">function</code> <span className="text-green-400">inorder</span>(node) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">if</code> (!node) <code className="text-blue-400">return</code>;</div>
                <div>{'  '}<span className="text-green-400">inorder</span>(node.left);</div>
                <div>{'  '}console.<span className="text-green-400">log</span>(node.val);</div>
                <div>{'  '}<span className="text-green-400">inorder</span>(node.right);</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Preorder Traversal (Root → Left → Right)</h3>
              <p className="text-sm text-white/60 mb-4">
                Visits root first, then left subtree, then right subtree. Used for copying tree.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code className="text-blue-400">function</code> <span className="text-green-400">preorder</span>(node) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">if</code> (!node) <code className="text-blue-400">return</code>;</div>
                <div>{'  '}console.<span className="text-green-400">log</span>(node.val);</div>
                <div>{'  '}<span className="text-green-400">preorder</span>(node.left);</div>
                <div>{'  '}<span className="text-green-400">preorder</span>(node.right);</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">3. Postorder Traversal (Left → Right → Root)</h3>
              <p className="text-sm text-white/60 mb-4">
                Visits left subtree, then right subtree, then root. Used for deleting tree.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code className="text-blue-400">function</code> <span className="text-green-400">postorder</span>(node) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">if</code> (!node) <code className="text-blue-400">return</code>;</div>
                <div>{'  '}<span className="text-green-400">postorder</span>(node.left);</div>
                <div>{'  '}<span className="text-green-400">postorder</span>(node.right);</div>
                <div>{'  '}console.<span className="text-green-400">log</span>(node.val);</div>
                <div>{'}'}</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">4. Level Order Traversal (BFS)</h3>
              <p className="text-sm text-white/60 mb-4">
                Visits nodes level by level from top to bottom. Uses queue.
              </p>
              <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
                <div><code className="text-blue-400">function</code> <span className="text-green-400">levelOrder</span>(root) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> queue = [root], result = [];</div>
                <div>{'  '}<code className="text-blue-400">while</code> (queue.length) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">let</code> node = queue.<span className="text-green-400">shift</span>();</div>
                <div>{'    '}result.<span className="text-green-400">push</span>(node.val);</div>
                <div>{'    '}<code className="text-blue-400">if</code> (node.left) queue.<span className="text-green-400">push</span>(node.left);</div>
                <div>{'    '}<code className="text-blue-400">if</code> (node.right) queue.<span className="text-green-400">push</span>(node.right);</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">return</code> result;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common Operations</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Search</h3>
                <span className="text-yellow-400 font-mono text-sm">O(log n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Find a node with given value in BST by comparing and moving left or right.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Insertion</h3>
                <span className="text-yellow-400 font-mono text-sm">O(log n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Add new node at correct position maintaining BST property.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Deletion</h3>
                <span className="text-yellow-400 font-mono text-sm">O(log n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Remove node and restructure tree. Three cases: leaf, one child, two children.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Height Calculation</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Find maximum depth from root to leaf node recursively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Complexity */}
      <section id="time-complexity" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Time Complexity</h2>
        <div className="text-white/70 leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white font-semibold">Operation</th>
                  <th className="text-left p-4 text-white font-semibold">Average (BST)</th>
                  <th className="text-left p-4 text-white font-semibold">Worst (BST)</th>
                  <th className="text-left p-4 text-white font-semibold">Balanced Tree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-white/60">Search</td>
                  <td className="p-4 text-yellow-400 font-mono">O(log n)</td>
                  <td className="p-4 text-red-400 font-mono">O(n)</td>
                  <td className="p-4 text-green-400 font-mono">O(log n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Insert</td>
                  <td className="p-4 text-yellow-400 font-mono">O(log n)</td>
                  <td className="p-4 text-red-400 font-mono">O(n)</td>
                  <td className="p-4 text-green-400 font-mono">O(log n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Delete</td>
                  <td className="p-4 text-yellow-400 font-mono">O(log n)</td>
                  <td className="p-4 text-red-400 font-mono">O(n)</td>
                  <td className="p-4 text-green-400 font-mono">O(log n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Traversal</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section id="advantages-disadvantages" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Advantages & Disadvantages</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>✅</span> Advantages
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Fast Search:</strong> O(log n) in balanced trees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Hierarchical:</strong> Natural representation of hierarchical data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Flexible:</strong> Dynamic size, easy insertion/deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Sorted Order:</strong> Inorder traversal gives sorted data in BST</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="text-red-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>❌</span> Disadvantages
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Complex:</strong> More complex than linear data structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Memory Overhead:</strong> Extra memory for pointers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Balancing Required:</strong> Unbalanced trees degrade to O(n)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>No Random Access:</strong> Cannot access by index like arrays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Techniques */}
      <section id="common-techniques" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common Techniques</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Recursion</h3>
              <p className="text-sm text-white/60 mb-4">
                Most tree problems are solved recursively. Base case: null node. Recursive case: process left and right subtrees.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Level Order Traversal (BFS)</h3>
              <p className="text-sm text-white/60 mb-4">
                Use queue to process nodes level by level. Useful for finding shortest path, level-wise operations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">3. DFS with Stack</h3>
              <p className="text-sm text-white/60 mb-4">
                Iterative DFS using stack. Alternative to recursion, avoids stack overflow for deep trees.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">4. Morris Traversal</h3>
              <p className="text-sm text-white/60 mb-4">
                Inorder traversal without recursion or stack. O(1) space complexity using threaded binary tree concept.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">5. Path Sum Problems</h3>
              <p className="text-sm text-white/60 mb-4">
                Track path from root to leaf. Use backtracking to explore all paths and find target sum.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">6. Lowest Common Ancestor (LCA)</h3>
              <p className="text-sm text-white/60 mb-4">
                Find common ancestor of two nodes. Use recursion or parent pointers to track ancestors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Real-World Applications</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">File Systems</h3>
              <p className="text-sm text-white/60">
                Directory structure with folders and files organized hierarchically.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">Databases</h3>
              <p className="text-sm text-white/60">
                B-Trees and B+ Trees for indexing and fast data retrieval.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">DOM (HTML)</h3>
              <p className="text-sm text-white/60">
                Web page structure represented as tree of HTML elements.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">Compilers</h3>
              <p className="text-sm text-white/60">
                Abstract Syntax Trees (AST) for parsing and code generation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">AI Decision Trees</h3>
              <p className="text-sm text-white/60">
                Machine learning models for classification and prediction.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">Autocomplete</h3>
              <p className="text-sm text-white/60">
                Trie data structure for efficient prefix-based search.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
