import React from "react";

export default function LinkedListContent() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Introduction to Linked Lists</h2>
        <div className="text-white/70 leading-relaxed space-y-4">
          <p>
            A linked list is a linear data structure where elements are stored in nodes, and each node
            points to the next node in the sequence. Unlike arrays, linked lists do not store elements
            in contiguous memory locations, making insertion and deletion operations more efficient.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Key Takeaway
            </h3>
            <p className="text-sm text-white/70">
              Linked lists provide O(1) time complexity for insertion and deletion at the beginning,
              making them ideal for scenarios where frequent modifications are needed. However, accessing
              elements requires O(n) time as you must traverse from the head.
            </p>
          </div>
        </div>
      </section>

      {/* What is Linked List */}
      <section id="what-is-linked-list" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What is a Linked List?</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            A linked list is a collection of nodes where each node contains data and a reference (pointer)
            to the next node. The first node is called the head, and the last node points to null.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Node Structure:</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-white/40">// JavaScript</span></div>
              <div><code className="text-blue-400">class</code> <span className="text-yellow-400">Node</span> {'{'}</div>
              <div>{'  '}<span className="text-green-400">constructor</span>(data) {'{'}</div>
              <div>{'    '}<code className="text-blue-400">this</code>.data = data;</div>
              <div>{'    '}<code className="text-blue-400">this</code>.next = <code className="text-blue-400">null</code>;</div>
              <div>{'  }'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Visual Representation:</h3>
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {[10, 20, 30, 40].map((val, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center">
                      <div className="bg-white/10 border border-white/20 p-4 rounded">
                        <div className="text-white font-mono text-sm">{val}</div>
                      </div>
                      <div className="text-white/40 text-xs mt-2">Node {idx + 1}</div>
                    </div>
                    {idx < 3 && (
                      <div className="text-white/60 text-2xl">→</div>
                    )}
                  </React.Fragment>
                ))}
                <div className="text-white/60 text-2xl">→</div>
                <div className="text-white/40 text-sm">null</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Linked Lists */}
      <section id="types-of-linked-lists" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Types of Linked Lists</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Singly Linked List */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Singly Linked List</h3>
              <p className="text-sm text-white/60 mb-4">
                Each node points to the next node. Traversal is only forward.
              </p>
              <div className="bg-zinc-900 rounded p-3 text-sm text-center">
                <div className="text-white/60">A → B → C → null</div>
              </div>
            </div>

            {/* Doubly Linked List */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Doubly Linked List</h3>
              <p className="text-sm text-white/60 mb-4">
                Each node has pointers to both next and previous nodes.
              </p>
              <div className="bg-zinc-900 rounded p-3 text-sm text-center">
                <div className="text-white/60">null ← A ⇄ B ⇄ C → null</div>
              </div>
            </div>

            {/* Circular Linked List */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">3. Circular Linked List</h3>
              <p className="text-sm text-white/60 mb-4">
                Last node points back to the first node, forming a circle.
              </p>
              <div className="bg-zinc-900 rounded p-3 text-sm text-center">
                <div className="text-white/60">A → B → C → A (circular)</div>
              </div>
            </div>

            {/* Circular Doubly Linked List */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">4. Circular Doubly Linked List</h3>
              <p className="text-sm text-white/60 mb-4">
                Combines doubly linked list with circular structure.
              </p>
              <div className="bg-zinc-900 rounded p-3 text-sm text-center">
                <div className="text-white/60">A ⇄ B ⇄ C ⇄ A (circular)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Representation */}
      <section id="memory-representation" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Memory Representation</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            Unlike arrays, linked list nodes are stored at non-contiguous memory locations.
            Each node contains data and a pointer to the next node's memory address.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Memory Layout Example:</h3>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 border border-white/20 p-3 rounded">
                  <div className="text-white/40 text-xs mb-2">Address: 1000</div>
                  <div className="text-white font-mono">Data: 10</div>
                  <div className="text-green-400 font-mono text-xs">Next: 2500</div>
                </div>
                <div className="bg-white/10 border border-white/20 p-3 rounded">
                  <div className="text-white/40 text-xs mb-2">Address: 2500</div>
                  <div className="text-white font-mono">Data: 20</div>
                  <div className="text-green-400 font-mono text-xs">Next: 1800</div>
                </div>
                <div className="bg-white/10 border border-white/20 p-3 rounded">
                  <div className="text-white/40 text-xs mb-2">Address: 1800</div>
                  <div className="text-white font-mono">Data: 30</div>
                  <div className="text-green-400 font-mono text-xs">Next: null</div>
                </div>
              </div>
              <p className="text-xs text-white/50">
                Nodes can be scattered in memory. Each node stores the address of the next node.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common Operations</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            Linked lists support various operations with different time complexities.
          </p>

          <div className="space-y-4">
            {/* Insertion at Beginning */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Insertion at Beginning</h3>
                <span className="text-green-400 font-mono text-sm">O(1)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Create new node and point it to current head. Update head to new node.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm space-y-1">
                <div><span className="text-green-400">insertAtBeginning</span>(data) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> newNode = <code className="text-blue-400">new</code> <span className="text-yellow-400">Node</span>(data);</div>
                <div>{'  '}newNode.next = <code className="text-blue-400">this</code>.head;</div>
                <div>{'  '}<code className="text-blue-400">this</code>.head = newNode;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Insertion at End */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Insertion at End</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Traverse to the last node and update its next pointer to new node.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm space-y-1">
                <div><span className="text-green-400">insertAtEnd</span>(data) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> newNode = <code className="text-blue-400">new</code> <span className="text-yellow-400">Node</span>(data);</div>
                <div>{'  '}<code className="text-blue-400">if</code> (!<code className="text-blue-400">this</code>.head) <code className="text-blue-400">this</code>.head = newNode;</div>
                <div>{'  '}<code className="text-blue-400">let</code> current = <code className="text-blue-400">this</code>.head;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (current.next) current = current.next;</div>
                <div>{'  '}current.next = newNode;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Deletion */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Deletion</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Find the node to delete and update the previous node's pointer.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm space-y-1">
                <div><span className="text-green-400">delete</span>(data) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">if</code> (<code className="text-blue-400">this</code>.head.data === data) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">this</code>.head = <code className="text-blue-400">this</code>.head.next;</div>
                <div>{'    '}<code className="text-blue-400">return</code>;</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> current = <code className="text-blue-400">this</code>.head;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (current.next && current.next.data !== data)</div>
                <div>{'    '}current = current.next;</div>
                <div>{'  '}<code className="text-blue-400">if</code> (current.next) current.next = current.next.next;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Search</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Traverse the list to find the target element.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm space-y-1">
                <div><span className="text-green-400">search</span>(data) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> current = <code className="text-blue-400">this</code>.head;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (current) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">if</code> (current.data === data) <code className="text-blue-400">return true</code>;</div>
                <div>{'    '}current = current.next;</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">return false</code>;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Complexity */}
      <section id="time-complexity" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Time Complexity</h2>
        <div className="text-white/70 leading-relaxed">
          <p className="mb-4">
            Understanding time complexity of linked list operations:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white font-semibold">Operation</th>
                  <th className="text-left p-4 text-white font-semibold">Time Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-white/60">Access</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Search</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Insertion (at beginning)</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Insertion (at end)</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Deletion (at beginning)</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Deletion (at position)</td>
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
            {/* Advantages */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <h3 className="text-green-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>✅</span> Advantages
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Dynamic Size:</strong> Can grow or shrink at runtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Easy Insertion/Deletion:</strong> O(1) at beginning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>No Memory Waste:</strong> Allocates memory as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Implementation:</strong> Easy to implement stacks and queues</span>
                </li>
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="text-red-400 font-semibold text-lg mb-4 flex items-center gap-2">
                <span>❌</span> Disadvantages
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Slow Access:</strong> O(n) time to access elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Extra Memory:</strong> Requires space for pointers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Not Cache Friendly:</strong> Non-contiguous memory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Reverse Traversal:</strong> Difficult in singly linked list</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Techniques */}
      <section id="common-techniques" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common Linked List Techniques</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>Master these techniques to solve linked list problems efficiently:</p>

          <div className="space-y-6">
            {/* Two Pointers */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Two Pointers (Fast & Slow)</h3>
              <p className="text-sm text-white/60 mb-4">
                Use two pointers moving at different speeds to detect cycles or find middle.
              </p>
              <div className="bg-zinc-900 rounded p-4 font-mono text-sm space-y-1">
                <div><span className="text-white/40">// Detect cycle in linked list</span></div>
                <div><code className="text-blue-400">function</code> <span className="text-green-400">hasCycle</span>(head) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> slow = head, fast = head;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (fast && fast.next) {'{'}</div>
                <div>{'    '}slow = slow.next;</div>
                <div>{'    '}fast = fast.next.next;</div>
                <div>{'    '}<code className="text-blue-400">if</code> (slow === fast) <code className="text-blue-400">return true</code>;</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">return false</code>;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Reverse Linked List */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Reverse Linked List</h3>
              <p className="text-sm text-white/60 mb-4">
                Reverse the pointers to change the direction of the list.
              </p>
              <div className="bg-zinc-900 rounded p-4 font-mono text-sm space-y-1">
                <div><span className="text-white/40">// Reverse a linked list</span></div>
                <div><code className="text-blue-400">function</code> <span className="text-green-400">reverse</span>(head) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> prev = <code className="text-blue-400">null</code>, current = head;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (current) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">let</code> next = current.next;</div>
                <div>{'    '}current.next = prev;</div>
                <div>{'    '}prev = current;</div>
                <div>{'    '}current = next;</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">return</code> prev;</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Real-World Applications</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>Linked lists are used extensively in real-world applications:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🌐</span> Browser History
              </h3>
              <p className="text-sm text-white/60">
                Back and forward navigation using doubly linked lists.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🎵</span> Music Playlists
              </h3>
              <p className="text-sm text-white/60">
                Next and previous song navigation in music players.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>↩️</span> Undo/Redo
              </h3>
              <p className="text-sm text-white/60">
                Text editors and design tools use linked lists for undo/redo.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>💾</span> Memory Management
              </h3>
              <p className="text-sm text-white/60">
                Operating systems use linked lists for free memory blocks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
