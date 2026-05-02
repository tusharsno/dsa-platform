"use client";

import { useState, useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Play, Send, CheckCircle2, Bookmark, StickyNote } from "lucide-react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { submitSolution, toggleBookmark } from "@/lib/database-actions";
import { useRouter } from "next/navigation";
import { NoteModal } from "@/components/notes/NoteModal";

interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  hints: string[];
  constraints: string | null;
  starterCode: string | null;
  isBookmarked?: boolean;
  testCases: {
    input: string;
    output: string;
    isHidden: boolean;
  }[];
}

export default function Workspace({ problem }: { problem: Problem }) {
  const [code, setCode] = useState(
    problem.starterCode
      ? JSON.parse(problem.starterCode).javascript
      : "function solution() {\n  // Write your code here\n}",
  );
  const [output, setOutput] = useState("Run your code to see results...");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(
    problem.isBookmarked || false,
  );
  const [showNoteModal, setShowNoteModal] = useState(false);

  const { width, height } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('custom-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          'editor.background': '#0d0d0d',
          'editor.lineHighlightBackground': '#1a1a1a',
          'editorLineNumber.foreground': '#858585',
          'editorLineNumber.activeForeground': '#c6c6c6',
        },
      });
    });
  }, []);

  const handleBookmark = async () => {
    const result = await toggleBookmark(problem.id);
    if (!result.error) {
      setIsBookmarked(result.bookmarked!);
      router.refresh();
    }
  };

  const handleRun = () => {
    try {
      const testCase = problem.testCases.find((tc) => !tc.isHidden);
      if (!testCase) {
        setOutput("No test cases available");
        return;
      }

      const input = JSON.parse(testCase.input);
      const expected = JSON.parse(testCase.output);

      const userFunction = new Function(`return (${code})`)();
      const result = userFunction(...Object.values(input));

      if (JSON.stringify(result) === JSON.stringify(expected)) {
        setOutput(`✅ Test Passed!\nOutput: ${JSON.stringify(result)}`);
      } else {
        setOutput(
          `❌ Wrong Answer\nExpected: ${JSON.stringify(expected)}\nGot: ${JSON.stringify(result)}`,
        );
      }
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      let passedTests = 0;
      const totalTests = problem.testCases.length;

      for (const testCase of problem.testCases) {
        const input = JSON.parse(testCase.input);
        const expected = JSON.parse(testCase.output);

        const userFunction = new Function(`return (${code})`)();
        const result = userFunction(...Object.values(input));

        if (JSON.stringify(result) === JSON.stringify(expected)) {
          passedTests++;
        }
      }

      if (passedTests === totalTests) {
        await submitSolution(problem.id, code, "javascript", "Passed");
        setShowSuccess(true);
        setOutput(`✅ All ${totalTests} tests passed!`);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setOutput(`❌ ${passedTests}/${totalTests} tests passed. Keep trying!`);
      }
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full bg-black text-[#d4d4d4]">
      {showSuccess && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            recycle={false}
          />
        </div>
      )}

      {/* Left Panel - Match Pic 2 (image_9589c6.png) */}
      <div className="w-1/2 overflow-y-auto p-8 border-r border-[#1e1e1e] bg-black">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                problem.difficulty === "Easy"
                  ? "bg-[#162a1e] border-[#22c55e33] text-[#4ade80]"
                  : problem.difficulty === "Medium"
                    ? "bg-[#2a2416] border-[#f59e0b33] text-[#fbbf24]"
                    : "bg-[#2a1616] border-[#ef444433] text-[#f87171]"
              }`}
            >
              {problem.difficulty}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowNoteModal(true)}
              className="p-2 hover:bg-[#ffffff0d] rounded-md transition-colors text-zinc-500 hover:text-white"
            >
              <StickyNote size={18} />
            </button>
            <button
              onClick={handleBookmark}
              className={`p-2 hover:bg-[#ffffff0d] rounded-md transition-colors ${isBookmarked ? "text-[#3b82f6]" : "text-zinc-500 hover:text-white"}`}
            >
              <Bookmark
                size={18}
                className={isBookmarked ? "fill-current" : ""}
              />
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">
          {problem.title}
        </h1>
        <div
          className="prose prose-invert prose-sm max-w-none text-[#e4e4e7] leading-relaxed text-[15px]"
          dangerouslySetInnerHTML={{ __html: problem.description }}
        />

        {problem.constraints && (
          <div className="mt-10 space-y-3">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
              Constraints
            </p>
            <div className="p-4 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg font-mono text-sm text-[#d4d4d4]">
              {problem.constraints}
            </div>
          </div>
        )}
      </div>

      {/* Right Panel - Match Pic 1 (image_95dc74.jpg) */}
      <div className="w-1/2 flex flex-col bg-[#0d0d0d]">
        <div className="flex items-center justify-between h-11 bg-[#1a1a1a] border-b border-[#1e1e1e]">
          <div className="flex h-full">
            {/* Workspace.tsx tag removed, only JS icon/label kept or styled as tab */}
            <div className="flex items-center gap-2 px-6 h-full bg-[#1a1a1a] border-t-2 border-t-[#3b82f6] text-[12px] text-white cursor-default">
              <span className="text-[#f59e0b] font-bold">JS</span>
              <span className="opacity-80">Solution</span>
            </div>
          </div>
          <div className="flex gap-2 px-3">
            <button
              onClick={handleRun}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-[#1e1e1e] text-[#cccccc] rounded hover:bg-[#2a2a2a] border border-[#333333] transition-all"
            >
              <Play size={12} className="fill-current" /> Run
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-bold bg-[#3b82f6] text-white rounded hover:bg-[#2563eb] disabled:opacity-50 transition-all"
            >
              <Send size={12} />
              {isSubmitting ? "..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-[#0d0d0d]">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            theme="custom-dark"
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
              lineNumbers: "on",
              renderLineHighlight: "all",
              scrollbar: {
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
              },
              padding: { top: 20 },
              cursorBlinking: "smooth",
              formatOnPaste: true,
              automaticLayout: true,
              fontLigatures: true,
              lineHeight: 22,
              smoothScrolling: true,
            }}
          />
        </div>

        {/* Terminal/Output Section */}
        <div className="h-48 bg-[#0d0d0d] border-t border-[#1e1e1e] flex flex-col">
          <div className="flex items-center px-4 h-9 bg-[#141414] text-[10px] uppercase font-bold text-zinc-500 tracking-widest border-b border-[#1e1e1e]">
            Console Output
          </div>
          <div className="p-5 overflow-y-auto flex-1 font-mono text-[13px]">
            <div className="flex gap-3 text-[#d4d4d4]">
              <span className="text-[#3b82f6] font-bold">~</span>
              <pre
                className={`whitespace-pre-wrap ${output.includes("✅") ? "text-emerald-400" : output.includes("❌") ? "text-rose-400" : "text-zinc-400"}`}
              >
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141414] border border-[#1e1e1e] p-8 rounded-2xl text-center shadow-2xl max-w-sm">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/20">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white">Accepted</h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Great job! Your solution passed all test cases.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-[#3b82f6] text-white rounded-xl text-sm font-bold hover:bg-[#2563eb] transition-colors shadow-lg shadow-blue-500/20"
            >
              Next Challenge
            </button>
          </div>
        </div>
      )}

      <NoteModal
        isOpen={showNoteModal}
        problemId={problem.id}
        problemTitle={problem.title}
        onClose={() => setShowNoteModal(false)}
      />
    </div>
  );
}
