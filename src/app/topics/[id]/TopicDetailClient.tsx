"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, PlayCircle } from "lucide-react";
import StringContent from "./StringContent";
import LinkedListContent from "./LinkedListContent";
import StackQueueContent from "./StackQueueContent";
import TreesContent from "./TreesContent";

interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  order: number;
  content?: string | null;
  problems?: Array<{
    id: string;
    title: string;
    slug: string;
    difficulty: string;
  }>;
}

interface Props {
  topicData: Topic;
  allTopics: Topic[];
  currentSlug: string;
}

export default function TopicDetailClient({ topicData, allTopics, currentSlug }: Props) {
  const [activeSection, setActiveSection] = useState("");

  // Extract headings from content for TOC based on topic
  const getTableOfContents = () => {
    if (currentSlug === "strings") {
      return [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-string", title: "What is a String?" },
        { id: "string-representation", title: "String Representation" },
        { id: "operations", title: "String Operations" },
        { id: "time-complexity", title: "Time Complexity" },
        { id: "advantages-disadvantages", title: "Advantages & Disadvantages" },
        { id: "common-techniques", title: "Common Techniques" },
        { id: "applications", title: "Real-World Applications" },
        { id: "practice-problems", title: "Practice Problems" },
      ];
    }
    if (currentSlug === "linked-lists") {
      return [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-linked-list", title: "What is a Linked List?" },
        { id: "types-of-linked-lists", title: "Types of Linked Lists" },
        { id: "memory-representation", title: "Memory Representation" },
        { id: "operations", title: "Linked List Operations" },
        { id: "time-complexity", title: "Time Complexity" },
        { id: "advantages-disadvantages", title: "Advantages & Disadvantages" },
        { id: "common-techniques", title: "Common Techniques" },
        { id: "applications", title: "Real-World Applications" },
        { id: "practice-problems", title: "Practice Problems" },
      ];
    }
    if (currentSlug === "stacks-queues") {
      return [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-stack", title: "What is a Stack?" },
        { id: "what-is-queue", title: "What is a Queue?" },
        { id: "types", title: "Types" },
        { id: "implementation", title: "Implementation" },
        { id: "time-complexity", title: "Time Complexity" },
        { id: "advantages-disadvantages", title: "Advantages & Disadvantages" },
        { id: "common-techniques", title: "Common Techniques" },
        { id: "applications", title: "Real-World Applications" },
        { id: "practice-problems", title: "Practice Problems" },
      ];
    }
    if (currentSlug === "trees") {
      return [
        { id: "introduction", title: "Introduction" },
        { id: "what-is-tree", title: "What is a Tree?" },
        { id: "types-of-trees", title: "Types of Trees" },
        { id: "tree-traversals", title: "Tree Traversals" },
        { id: "operations", title: "Common Operations" },
        { id: "time-complexity", title: "Time Complexity" },
        { id: "advantages-disadvantages", title: "Advantages & Disadvantages" },
        { id: "common-techniques", title: "Common Techniques" },
        { id: "applications", title: "Real-World Applications" },
        { id: "practice-problems", title: "Practice Problems" },
      ];
    }
    // Default: Arrays
    return [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-array", title: "What is an Array?" },
      { id: "types-of-arrays", title: "Types of Arrays" },
      { id: "memory-representation", title: "Memory Representation" },
      { id: "operations", title: "Array Operations" },
      { id: "time-complexity", title: "Time & Space Complexity" },
      { id: "advantages-disadvantages", title: "Advantages & Disadvantages" },
      { id: "common-techniques", title: "Common Techniques" },
      { id: "applications", title: "Real-World Applications" },
      { id: "practice-problems", title: "Practice Problems" },
    ];
  };

  const tableOfContents = getTableOfContents();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentSlug]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Left Sidebar - Topics Navigation */}
        <aside className="hidden lg:block w-64 border-r border-white/10 fixed left-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-white/40 mb-4 uppercase tracking-wider">
              Topics
            </h2>
            <nav className="space-y-1">
              {allTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.slug}`}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm transition-colors",
                    currentSlug === topic.slug
                      ? "bg-white/10 text-white font-medium"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {topic.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 lg:mr-64">
          <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {topicData.name}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                {topicData.description}
              </p>
            </header>

            {/* Content Sections */}
            <article className="prose prose-invert prose-lg max-w-none">
              {currentSlug === "strings" ? (
                <StringContent />
              ) : currentSlug === "linked-lists" ? (
                <LinkedListContent />
              ) : currentSlug === "stacks-queues" ? (
                <StackQueueContent />
              ) : currentSlug === "trees" ? (
                <TreesContent />
              ) : (
                <>
              {/* Introduction */}
              <section id="introduction" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Introduction to Arrays</h2>
                <div className="text-white/70 leading-relaxed space-y-4">
                  <p>
                    An array is one of the most fundamental and widely used data structures in computer science.
                    It is a collection of elements stored at contiguous memory locations, where each element
                    can be accessed directly using its index. Arrays form the foundation for many advanced
                    data structures and algorithms.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
                    <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                      <span>💡</span> Key Takeaway
                    </h3>
                    <p className="text-sm text-white/70">
                      Arrays provide O(1) time complexity for accessing elements by index, making them
                      extremely efficient for random access operations. However, insertion and deletion
                      operations can be costly as they may require shifting elements.
                    </p>
                  </div>
                </div>
              </section>

              {/* What is an Array */}
              <section id="what-is-array" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">What is an Array?</h2>
                <div className="text-white/70 leading-relaxed space-y-6">
                  <p>
                    An array is a linear data structure that stores a fixed-size sequential collection
                    of elements of the same type. Each element in an array is identified by an array
                    index or key.
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">Array Declaration Example:</h3>
                    <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-2">
                      <div><span className="text-white/40">// JavaScript</span></div>
                      <div><code className="text-blue-400">let</code> numbers = [<span className="text-yellow-400">10</span>, <span className="text-yellow-400">20</span>, <span className="text-yellow-400">30</span>, <span className="text-yellow-400">40</span>, <span className="text-yellow-400">50</span>];</div>
                      <div className="mt-3"><span className="text-white/40">// Python</span></div>
                      <div>numbers = [<span className="text-yellow-400">10</span>, <span className="text-yellow-400">20</span>, <span className="text-yellow-400">30</span>, <span className="text-yellow-400">40</span>, <span className="text-yellow-400">50</span>]</div>
                      <div className="mt-3"><span className="text-white/40">// Java</span></div>
                      <div><code className="text-blue-400">int</code>[] numbers = {'{'}<span className="text-yellow-400">10</span>, <span className="text-yellow-400">20</span>, <span className="text-yellow-400">30</span>, <span className="text-yellow-400">40</span>, <span className="text-yellow-400">50</span>{'}'};</div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">Visual Representation:</h3>
                    <div className="bg-zinc-900 rounded-lg p-6">
                      <div className="flex items-center justify-center gap-1">
                        {[10, 20, 30, 40, 50].map((val, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <div className="bg-white/10 border border-white/20 px-6 py-4 text-center">
                              <div className="text-white font-mono">{val}</div>
                            </div>
                            <div className="text-white/40 text-xs mt-2">arr[{idx}]</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Arrays */}
              <section id="types-of-arrays" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Types of Arrays</h2>
                <div className="text-white/70 leading-relaxed space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* One Dimensional */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">1. One-Dimensional Array</h3>
                      <p className="text-sm text-white/60 mb-4">
                        A linear array where elements are stored in a single row.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <code className="text-blue-400">int</code>[] arr = {'{'}<span className="text-yellow-400">1</span>, <span className="text-yellow-400">2</span>, <span className="text-yellow-400">3</span>, <span className="text-yellow-400">4</span>, <span className="text-yellow-400">5</span>{'}'};
                      </div>
                    </div>

                    {/* Multi Dimensional */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">2. Multi-Dimensional Array</h3>
                      <p className="text-sm text-white/60 mb-4">
                        Arrays with more than one dimension (2D, 3D, etc.).
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <code className="text-blue-400">int</code>[][] matrix = {'{'}<br/>
                        {'  '}{'{'}<span className="text-yellow-400">1</span>, <span className="text-yellow-400">2</span>, <span className="text-yellow-400">3</span>{'}'},<br/>
                        {'  '}{'{'}<span className="text-yellow-400">4</span>, <span className="text-yellow-400">5</span>, <span className="text-yellow-400">6</span>{'}'}<br/>
                        {'}'};
                      </div>
                    </div>

                    {/* Static */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">3. Static Array</h3>
                      <p className="text-sm text-white/60 mb-4">
                        Fixed size determined at compile time. Size cannot change.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <code className="text-blue-400">int</code> arr[<span className="text-yellow-400">5</span>]; <span className="text-white/40">// C/C++</span>
                      </div>
                    </div>

                    {/* Dynamic */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">4. Dynamic Array</h3>
                      <p className="text-sm text-white/60 mb-4">
                        Size can grow or shrink at runtime as needed.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <code className="text-blue-400">let</code> arr = []; <span className="text-white/40">// JavaScript</span><br/>
                        arr.<span className="text-green-400">push</span>(<span className="text-yellow-400">1</span>); <span className="text-white/40">// Dynamic resize</span>
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
                    Arrays are stored in contiguous memory locations. This means all elements are
                    placed next to each other in memory, which enables constant-time access.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">Memory Layout Example:</h3>
                    <p className="text-sm text-white/60 mb-4">
                      Consider an integer array: <code className="bg-zinc-900 px-2 py-1 rounded">int arr[5] = {'{'}10, 20, 30, 40, 50{'}'};</code>
                    </p>
                    <div className="bg-zinc-900 rounded-lg p-6 space-y-3">
                      <div className="grid grid-cols-5 gap-2 text-center">
                        <div>
                          <div className="bg-white/10 border border-white/20 p-3 rounded">
                            <div className="text-white font-mono text-sm">10</div>
                          </div>
                          <div className="text-white/40 text-xs mt-2">1000</div>
                        </div>
                        <div>
                          <div className="bg-white/10 border border-white/20 p-3 rounded">
                            <div className="text-white font-mono text-sm">20</div>
                          </div>
                          <div className="text-white/40 text-xs mt-2">1004</div>
                        </div>
                        <div>
                          <div className="bg-white/10 border border-white/20 p-3 rounded">
                            <div className="text-white font-mono text-sm">30</div>
                          </div>
                          <div className="text-white/40 text-xs mt-2">1008</div>
                        </div>
                        <div>
                          <div className="bg-white/10 border border-white/20 p-3 rounded">
                            <div className="text-white font-mono text-sm">40</div>
                          </div>
                          <div className="text-white/40 text-xs mt-2">1012</div>
                        </div>
                        <div>
                          <div className="bg-white/10 border border-white/20 p-3 rounded">
                            <div className="text-white font-mono text-sm">50</div>
                          </div>
                          <div className="text-white/40 text-xs mt-2">1016</div>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-4">
                        Each integer takes 4 bytes. Starting address is 1000, so elements are at 1000, 1004, 1008, 1012, 1016.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-3">Address Calculation Formula:</h3>
                    <div className="bg-zinc-900 rounded p-4 font-mono text-sm">
                      Address of arr[i] = Base Address + (i × Size of Element)
                    </div>
                    <p className="text-sm text-white/60 mt-3">
                      This formula allows O(1) access time for any element.
                    </p>
                  </div>
                </div>
              </section>

              {/* Operations */}
              <section id="operations" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Common Operations</h2>
                <div className="text-white/70 leading-relaxed space-y-6">
                  <p>
                    Arrays support various operations with different time complexities.
                    Understanding these operations is crucial for writing efficient code.
                  </p>

                  <div className="space-y-4">
                    {/* Access */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">Access / Read</h3>
                        <span className="text-green-400 font-mono text-sm">O(1)</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">
                        Direct access to any element using its index. This is the primary advantage of arrays.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <code className="text-blue-400">let</code> element = arr[<span className="text-yellow-400">5</span>]; <span className="text-white/40">// O(1)</span>
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">Search</h3>
                        <span className="text-yellow-400 font-mono text-sm">O(n)</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">
                        Linear search requires checking each element until found. Binary search is O(log n) for sorted arrays.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        <span className="text-white/40">// Linear Search</span><br/>
                        <code className="text-blue-400">for</code> (<code className="text-blue-400">let</code> i = <span className="text-yellow-400">0</span>; i {'<'} arr.length; i++) {'{'}<br/>
                        {'  '}<code className="text-blue-400">if</code> (arr[i] === target) <code className="text-blue-400">return</code> i;<br/>
                        {'}'}
                      </div>
                    </div>

                    {/* Insertion */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">Insertion</h3>
                        <span className="text-yellow-400 font-mono text-sm">O(n)</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">
                        Inserting at the end is O(1), but inserting at beginning or middle requires shifting elements.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        arr.<span className="text-green-400">push</span>(element);{' '}<span className="text-white/40">// O(1) - at end</span><br/>
                        arr.<span className="text-green-400">unshift</span>(element);{' '}<span className="text-white/40">// O(n) - at beginning</span>
                      </div>
                    </div>

                    {/* Deletion */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">Deletion</h3>
                        <span className="text-yellow-400 font-mono text-sm">O(n)</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">
                        Deleting from the end is O(1), but deleting from beginning or middle requires shifting elements.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        arr.<span className="text-green-400">pop</span>();{' '}<span className="text-white/40">// O(1) - from end</span><br/>
                        arr.<span className="text-green-400">shift</span>();{' '}<span className="text-white/40">// O(n) - from beginning</span>
                      </div>
                    </div>

                    {/* Traversal */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold text-lg">Traversal</h3>
                        <span className="text-yellow-400 font-mono text-sm">O(n)</span>
                      </div>
                      <p className="text-sm text-white/60 mb-3">
                        Visiting each element once to perform operations or calculations.
                      </p>
                      <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                        arr.<span className="text-green-400">forEach</span>(element {'=>'} {'{'}<br/>
                        {'  '}console.<span className="text-green-400">log</span>(element);<br/>
                        {'}'});
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
                    Understanding time complexity helps you write efficient code:
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
                          <td className="p-4 text-green-400 font-mono">O(1)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-white/60">Search</td>
                          <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-white/60">Insertion</td>
                          <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-white/60">Deletion</td>
                          <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Practice Problems */}

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
                          <span><strong>Fast Access:</strong> O(1) time to access any element by index</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span><strong>Memory Efficient:</strong> No extra memory for pointers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span><strong>Cache Friendly:</strong> Contiguous memory improves performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">•</span>
                          <span><strong>Simple to Use:</strong> Easy to understand and implement</span>
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
                          <span><strong>Fixed Size:</strong> Static arrays cannot grow or shrink</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span><strong>Costly Insertion/Deletion:</strong> O(n) time due to shifting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span><strong>Memory Waste:</strong> Unused space cannot be freed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span><strong>Homogeneous:</strong> Only same data type allowed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Techniques */}
              <section id="common-techniques" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Common Array Techniques</h2>
                <div className="text-white/70 leading-relaxed space-y-6">
                  <p>Master these techniques to solve array problems efficiently:</p>

                  <div className="space-y-6">
                    {/* Two Pointers */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">1. Two Pointers</h3>
                      <p className="text-sm text-white/60 mb-4">
                        Use two pointers moving from different ends or at different speeds.
                      </p>
                      <div className="bg-zinc-900 rounded p-4 font-mono text-sm">
                        <div><span className="text-white/40">// Check if array is palindrome</span></div>
                        <div><code className="text-blue-400">function</code> <span className="text-green-400">isPalindrome</span>(arr) {'{'}</div>
                        <div>{'  '}<code className="text-blue-400">let</code> left = <span className="text-yellow-400">0</span>, right = arr.length - <span className="text-yellow-400">1</span>;</div>
                        <div>{'  '}<code className="text-blue-400">while</code> (left {'<'} right) {'{'}</div>
                        <div>{'    '}<code className="text-blue-400">if</code> (arr[left] !== arr[right]) <code className="text-blue-400">return false</code>;</div>
                        <div>{'    '}left++; right--;</div>
                        <div>{'  }'}</div>
                        <div>{'  '}<code className="text-blue-400">return true</code>;</div>
                        <div>{'}'}</div>
                      </div>
                    </div>

                    {/* Sliding Window */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">2. Sliding Window</h3>
                      <p className="text-sm text-white/60 mb-4">
                        Maintain a window of elements and slide it to find optimal subarrays.
                      </p>
                      <div className="bg-zinc-900 rounded p-4 font-mono text-sm space-y-1">
                        <div><span className="text-white/40">// Maximum sum of k consecutive elements</span></div>
                        <div><code className="text-blue-400">function</code> <span className="text-green-400">maxSum</span>(arr, k) {'{'}</div>
                        <div>{'  '}<code className="text-blue-400">let</code> maxSum = <span className="text-yellow-400">0</span>, windowSum = <span className="text-yellow-400">0</span>;</div>
                        <div>{'  '}<code className="text-blue-400">for</code> (<code className="text-blue-400">let</code> i = <span className="text-yellow-400">0</span>; i {'<'} k; i++) windowSum += arr[i];</div>
                        <div>{'  '}maxSum = windowSum;</div>
                        <div>{'  '}<code className="text-blue-400">for</code> (<code className="text-blue-400">let</code> i = k; i {'<'} arr.length; i++) {'{'}</div>
                        <div>{'    '}windowSum += arr[i] - arr[i - k];</div>
                        <div>{'    '}maxSum = Math.<span className="text-green-400">max</span>(maxSum, windowSum);</div>
                        <div>{'  }'}</div>
                        <div>{'  '}<code className="text-blue-400">return</code> maxSum;</div>
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
                  <p>Arrays are used extensively in real-world applications:</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span>📊</span> Data Storage
                      </h3>
                      <p className="text-sm text-white/60">
                        Storing datasets in databases, spreadsheets, and data warehouses.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span>🖼️</span> Image Processing
                      </h3>
                      <p className="text-sm text-white/60">
                        Images are 2D arrays of pixels for manipulation and rendering.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span>💾</span> Caching Systems
                      </h3>
                      <p className="text-sm text-white/60">
                        LRU cache, buffer management, and temporary data storage.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                      <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span>🎮</span> Game Development
                      </h3>
                      <p className="text-sm text-white/60">
                        Game boards, tile maps, and sprite sheets use arrays.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="practice-problems" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8">Practice Problems</h2>
                {topicData.problems && topicData.problems.length > 0 ? (
                  <div className="space-y-0 border-t border-white/10">
                    {topicData.problems.map((problem, index) => (
                      <Link
                        key={problem.id}
                        href={`/problems/${problem.slug}`}
                        className="group block border-b border-white/10 py-5 hover:bg-white/5 transition-colors px-4 -mx-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-white/40 font-mono text-sm w-8">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3 className="text-base font-semibold text-white group-hover:text-white/80 transition-colors mb-1">
                                {problem.title}
                              </h3>
                              <span
                                className={cn(
                                  "text-xs font-medium",
                                  problem.difficulty === "Easy"
                                    ? "text-green-500"
                                    : problem.difficulty === "Medium"
                                      ? "text-yellow-500"
                                      : "text-red-500"
                                )}
                              >
                                {problem.difficulty}
                              </span>
                            </div>
                          </div>
                          <PlayCircle className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="border border-white/10 rounded-lg p-8 text-center">
                    <p className="text-white/50">
                      Problems for this topic are being prepared. Check back soon!
                    </p>
                  </div>
                )}
              </section>
                </>
              )}
            </article>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:block w-64 border-l border-white/10 fixed right-0 top-16 bottom-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-sm font-semibold text-white/40 mb-4 uppercase tracking-wider">
              On This Page
            </h2>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block w-full text-left px-3 py-1.5 text-sm rounded transition-colors",
                    activeSection === item.id
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
