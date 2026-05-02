export default function StackQueueContent() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Introduction to Stacks & Queues</h2>
        <div className="text-white/70 leading-relaxed space-y-4">
          <p>
            Stacks and Queues are fundamental linear data structures that follow specific ordering principles.
            They are essential for solving problems involving sequential data processing, backtracking, and
            managing resources in a controlled manner.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Key Takeaway
            </h3>
            <p className="text-sm text-white/70">
              Stack follows LIFO (Last In First Out) principle, while Queue follows FIFO (First In First Out).
              Understanding these principles is crucial for choosing the right data structure for your problem.
            </p>
          </div>
        </div>
      </section>

      {/* What is Stack */}
      <section id="what-is-stack" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What is a Stack?</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            A Stack is a linear data structure that follows the LIFO (Last In First Out) principle.
            Elements are added and removed from the same end, called the "top" of the stack.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Stack Operations:</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-blue-400">push</span>(element) - Add element to top</div>
              <div><span className="text-blue-400">pop</span>() - Remove and return top element</div>
              <div><span className="text-blue-400">peek</span>() - View top element without removing</div>
              <div><span className="text-blue-400">isEmpty</span>() - Check if stack is empty</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Visual Representation:</h3>
            <div className="bg-zinc-900 rounded-lg p-6 flex justify-center">
              <div className="space-y-2">
                <div className="bg-white/10 border border-white/20 px-8 py-3 text-center">30 ← Top</div>
                <div className="bg-white/10 border border-white/20 px-8 py-3 text-center">20</div>
                <div className="bg-white/10 border border-white/20 px-8 py-3 text-center">10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Queue */}
      <section id="what-is-queue" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What is a Queue?</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            A Queue is a linear data structure that follows the FIFO (First In First Out) principle.
            Elements are added at the rear and removed from the front.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Queue Operations:</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-blue-400">enqueue</span>(element) - Add element to rear</div>
              <div><span className="text-blue-400">dequeue</span>() - Remove and return front element</div>
              <div><span className="text-blue-400">front</span>() - View front element without removing</div>
              <div><span className="text-blue-400">isEmpty</span>() - Check if queue is empty</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Visual Representation:</h3>
            <div className="bg-zinc-900 rounded-lg p-6 flex justify-center">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-sm">Front →</span>
                <div className="bg-white/10 border border-white/20 px-6 py-3">10</div>
                <div className="bg-white/10 border border-white/20 px-6 py-3">20</div>
                <div className="bg-white/10 border border-white/20 px-6 py-3">30</div>
                <span className="text-white/40 text-sm">← Rear</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="types" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Types of Stacks & Queues</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Stack Types</h3>
              <ul className="space-y-2 text-sm">
                <li>• Fixed Size Stack</li>
                <li>• Dynamic Stack</li>
                <li>• Min Stack</li>
                <li>• Max Stack</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Queue Types</h3>
              <ul className="space-y-2 text-sm">
                <li>• Simple Queue</li>
                <li>• Circular Queue</li>
                <li>• Priority Queue</li>
                <li>• Deque (Double-ended Queue)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section id="implementation" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Implementation</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Stack Implementation (JavaScript):</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
              <div><code className="text-blue-400">class</code> <span className="text-yellow-400">Stack</span> {'{'}</div>
              <div>{'  '}<span className="text-blue-400">constructor</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">this</code>.items = [];</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">push</span>(element) {'{'}</div>
              <div>{'    '}<code className="text-blue-400">this</code>.items.<span className="text-green-400">push</span>(element);</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">pop</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">return this</code>.items.<span className="text-green-400">pop</span>();</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">peek</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">return this</code>.items[<code className="text-blue-400">this</code>.items.length - <span className="text-yellow-400">1</span>];</div>
              <div>{'  }'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">Queue Implementation (JavaScript):</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-1">
              <div><code className="text-blue-400">class</code> <span className="text-yellow-400">Queue</span> {'{'}</div>
              <div>{'  '}<span className="text-blue-400">constructor</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">this</code>.items = [];</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">enqueue</span>(element) {'{'}</div>
              <div>{'    '}<code className="text-blue-400">this</code>.items.<span className="text-green-400">push</span>(element);</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">dequeue</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">return this</code>.items.<span className="text-green-400">shift</span>();</div>
              <div>{'  }'}</div>
              <div>{'  '}<span className="text-green-400">front</span>() {'{'}</div>
              <div>{'    '}<code className="text-blue-400">return this</code>.items[<span className="text-yellow-400">0</span>];</div>
              <div>{'  }'}</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Complexity */}
      <section id="time-complexity" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Time Complexity</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white font-semibold">Operation</th>
                  <th className="text-left p-4 text-white font-semibold">Stack</th>
                  <th className="text-left p-4 text-white font-semibold">Queue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-4 text-white/60">Insert</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Delete</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Access Top/Front</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                  <td className="p-4 text-green-400 font-mono">O(1)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Search</td>
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
                  <span><strong>Simple:</strong> Easy to implement and understand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Fast Operations:</strong> O(1) insert and delete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Memory Efficient:</strong> No extra pointers needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Controlled Access:</strong> Enforces ordering principles</span>
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
                  <span><strong>Limited Access:</strong> Can only access top/front element</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>No Random Access:</strong> Cannot access middle elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Fixed Size:</strong> Array-based implementation has size limit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Search Inefficient:</strong> O(n) time for searching</span>
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
              <h3 className="text-white font-semibold text-lg mb-3">1. Monotonic Stack</h3>
              <p className="text-sm text-white/60 mb-4">
                Maintain elements in increasing or decreasing order. Used for next greater/smaller element problems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">2. Two Stacks in Array</h3>
              <p className="text-sm text-white/60 mb-4">
                Implement two stacks in a single array efficiently by growing from opposite ends.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">3. Queue using Stacks</h3>
              <p className="text-sm text-white/60 mb-4">
                Implement queue operations using two stacks for amortized O(1) operations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">4. Sliding Window with Deque</h3>
              <p className="text-sm text-white/60 mb-4">
                Use deque to efficiently find maximum/minimum in sliding window problems.
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
              <h3 className="text-white font-semibold mb-2">Stack Applications</h3>
              <ul className="text-sm text-white/60 space-y-1">
                <li>• Function call stack</li>
                <li>• Undo/Redo operations</li>
                <li>• Browser history</li>
                <li>• Expression evaluation</li>
                <li>• Backtracking algorithms</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">Queue Applications</h3>
              <ul className="text-sm text-white/60 space-y-1">
                <li>• Task scheduling</li>
                <li>• Printer queue</li>
                <li>• BFS traversal</li>
                <li>• Request handling</li>
                <li>• Message queues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
