import React from "react";

export default function StringContent() {
  return (
    <>
      {/* Introduction */}
      <section id="introduction" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Introduction to Strings</h2>
        <div className="text-white/70 leading-relaxed space-y-4">
          <p>
            A string is a sequence of characters used to represent text. Strings are one of the most
            commonly used data types in programming, essential for handling textual data, user input,
            file processing, and communication between systems.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-6">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Key Takeaway
            </h3>
            <p className="text-sm text-white/70">
              Strings are immutable in many programming languages, meaning once created, their content
              cannot be changed. Any modification creates a new string object. Understanding string
              manipulation techniques is crucial for text processing and pattern matching problems.
            </p>
          </div>
        </div>
      </section>

      {/* What is a String */}
      <section id="what-is-string" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">What is a String?</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            A string is a data structure that represents a sequence of characters. It can contain
            letters, digits, symbols, and whitespace. Strings are typically enclosed in quotes.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">String Declaration Example:</h3>
            <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-white/40">// JavaScript</span></div>
              <div><code className="text-blue-400">let</code> str = <span className="text-green-400">"Hello World"</span>;</div>
              <div className="mt-3"><span className="text-white/40">// Python</span></div>
              <div>str = <span className="text-green-400">'Hello World'</span></div>
              <div className="mt-3"><span className="text-white/40">// Java</span></div>
              <div><code className="text-blue-400">String</code> str = <span className="text-green-400">"Hello World"</span>;</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">String Indexing:</h3>
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center justify-center gap-1 flex-wrap">
                {["H", "e", "l", "l", "o"].map((char, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="bg-white/10 border border-white/20 px-4 py-3 text-center">
                      <div className="text-white font-mono">{char}</div>
                    </div>
                    <div className="text-white/40 text-xs mt-2">[{idx}]</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/50 mt-4 text-center">
                Each character can be accessed using zero-based indexing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* String Representation */}
      <section id="string-representation" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">String Representation</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            Strings are internally stored as arrays of characters in memory. Different languages
            handle string storage differently.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Immutable Strings</h3>
              <p className="text-sm text-white/60 mb-4">
                Languages like Java, Python, JavaScript treat strings as immutable.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <div><code className="text-blue-400">let</code> str = <span className="text-green-400">"Hello"</span>;</div>
                <div>str += <span className="text-green-400">" World"</span>; <span className="text-white/40">// Creates new string</span></div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">Mutable Strings</h3>
              <p className="text-sm text-white/60 mb-4">
                C/C++ allow direct character modification using char arrays.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <div><code className="text-blue-400">char</code> str[] = <span className="text-green-400">"Hello"</span>;</div>
                <div>str[<span className="text-yellow-400">0</span>] = <span className="text-green-400">'h'</span>; <span className="text-white/40">// Modifies in place</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Operations */}
      <section id="operations" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common String Operations</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>
            Strings support various operations for manipulation and analysis.
          </p>

          <div className="space-y-4">
            {/* Access */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Character Access</h3>
                <span className="text-green-400 font-mono text-sm">O(1)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Access individual characters using index notation.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <code className="text-blue-400">let</code> char = str[<span className="text-yellow-400">0</span>]; <span className="text-white/40">// 'H'</span>
              </div>
            </div>

            {/* Concatenation */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Concatenation</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n+m)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Combine two or more strings together.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <code className="text-blue-400">let</code> result = str1 + str2; <span className="text-white/40">// "Hello" + "World"</span>
              </div>
            </div>

            {/* Substring */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Substring</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Extract a portion of the string.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <code className="text-blue-400">let</code> sub = str.<span className="text-green-400">substring</span>(<span className="text-yellow-400">0</span>, <span className="text-yellow-400">5</span>); <span className="text-white/40">// "Hello"</span>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Search</h3>
                <span className="text-yellow-400 font-mono text-sm">O(n*m)</span>
              </div>
              <p className="text-sm text-white/60 mb-3">
                Find substring or pattern within string.
              </p>
              <div className="bg-zinc-900 rounded p-3 font-mono text-sm">
                <code className="text-blue-400">let</code> index = str.<span className="text-green-400">indexOf</span>(<span className="text-green-400">"World"</span>); <span className="text-white/40">// 6</span>
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
            Understanding time complexity of string operations:
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
                  <td className="p-4 text-white/60">Concatenation</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n+m)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Substring</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Search (naive)</td>
                  <td className="p-4 text-red-400 font-mono">O(n*m)</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">Search (KMP)</td>
                  <td className="p-4 text-yellow-400 font-mono">O(n+m)</td>
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
                  <span><strong>Easy to Use:</strong> Simple syntax for text manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Rich Methods:</strong> Built-in functions for common operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Unicode Support:</strong> Handle international characters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Pattern Matching:</strong> Regex support for complex searches</span>
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
                  <span><strong>Immutability:</strong> Creates new objects on modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Memory Overhead:</strong> String concatenation can be expensive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Slow Modifications:</strong> Multiple changes create many objects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span><strong>Encoding Issues:</strong> Different encodings can cause problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Techniques */}
      <section id="common-techniques" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6">Common String Techniques</h2>
        <div className="text-white/70 leading-relaxed space-y-6">
          <p>Master these techniques to solve string problems efficiently:</p>

          <div className="space-y-6">
            {/* Two Pointers */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-semibold text-lg mb-3">1. Two Pointers</h3>
              <p className="text-sm text-white/60 mb-4">
                Use two pointers to check palindromes or reverse strings.
              </p>
              <div className="bg-zinc-900 rounded p-4 font-mono text-sm space-y-1">
                <div><span className="text-white/40">// Check if string is palindrome</span></div>
                <div><code className="text-blue-400">function</code> <span className="text-green-400">isPalindrome</span>(str) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> left = <span className="text-yellow-400">0</span>, right = str.length - <span className="text-yellow-400">1</span>;</div>
                <div>{'  '}<code className="text-blue-400">while</code> (left {'<'} right) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">if</code> (str[left] !== str[right]) <code className="text-blue-400">return false</code>;</div>
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
                Find longest substring without repeating characters.
              </p>
              <div className="bg-zinc-900 rounded p-4 font-mono text-sm space-y-1">
                <div><span className="text-white/40">// Longest substring without repeating chars</span></div>
                <div><code className="text-blue-400">function</code> <span className="text-green-400">lengthOfLongestSubstring</span>(s) {'{'}</div>
                <div>{'  '}<code className="text-blue-400">let</code> map = <code className="text-blue-400">new</code> Map(), maxLen = <span className="text-yellow-400">0</span>, start = <span className="text-yellow-400">0</span>;</div>
                <div>{'  '}<code className="text-blue-400">for</code> (<code className="text-blue-400">let</code> end = <span className="text-yellow-400">0</span>; end {'<'} s.length; end++) {'{'}</div>
                <div>{'    '}<code className="text-blue-400">if</code> (map.<span className="text-green-400">has</span>(s[end])) start = Math.<span className="text-green-400">max</span>(start, map.<span className="text-green-400">get</span>(s[end]) + <span className="text-yellow-400">1</span>);</div>
                <div>{'    '}map.<span className="text-green-400">set</span>(s[end], end);</div>
                <div>{'    '}maxLen = Math.<span className="text-green-400">max</span>(maxLen, end - start + <span className="text-yellow-400">1</span>);</div>
                <div>{'  }'}</div>
                <div>{'  '}<code className="text-blue-400">return</code> maxLen;</div>
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
          <p>Strings are used extensively in real-world applications:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🔍</span> Search Engines
              </h3>
              <p className="text-sm text-white/60">
                Text indexing, pattern matching, and relevance ranking.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>💬</span> Text Editors
              </h3>
              <p className="text-sm text-white/60">
                Find and replace, syntax highlighting, auto-completion.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🌐</span> Web Development
              </h3>
              <p className="text-sm text-white/60">
                URL parsing, HTML/XML processing, form validation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <span>🔐</span> Cryptography
              </h3>
              <p className="text-sm text-white/60">
                Encryption, hashing, password validation and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
