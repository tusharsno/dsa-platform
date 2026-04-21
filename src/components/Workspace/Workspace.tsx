"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Play, Send, CheckCircle2, Bookmark } from "lucide-react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { submitSolution, toggleBookmark } from "@/lib/database-actions";
import { useRouter } from "next/navigation";

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
      : "function solution() {\n  // Write your code here\n}"
  );
  const [output, setOutput] = useState("Run your code to see results...");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(problem.isBookmarked || false);

  const { theme } = useTheme();
  const { width, height } = useWindowSize();
  const router = useRouter();

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
          `❌ Wrong Answer\nExpected: ${JSON.stringify(expected)}\nGot: ${JSON.stringify(result)}`
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
        setOutput(
          `❌ ${passedTests}/${totalTests} tests passed. Keep trying!`
        );
      }
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full">
      {showSuccess && (
        <>
          <div className="fixed inset-0 z-[100] pointer-events-none">
            <Confetti
              width={width}
              height={height}
              numberOfPieces={500}
              recycle={false}
              gravity={0.25}
              colors={['#22c55e', '#10b981', '#fbbf24', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#06b6d4', '#14b8a6']}
              tweenDuration={5000}
              opacity={1}
              drawShape={(ctx) => {
                ctx.beginPath();
                const size = Math.random() * 10 + 8;
                ctx.rect(-size / 2, -size / 2, size, size);
                ctx.fill();
                ctx.shadowBlur = 15;
                ctx.shadowColor = ctx.fillStyle as string;
              }}
            />
          </div>
          <style jsx global>{`
            canvas {
              filter: brightness(1.3) saturate(1.5);
            }
          `}</style>
        </>
      )}

      {/* Left: Problem Description */}
      <div className="w-1/2 overflow-y-auto p-6 border-r border-slate-200 dark:border-white/5">
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${
              problem.difficulty === "Easy"
                ? "bg-green-500/10 text-green-600"
                : problem.difficulty === "Medium"
                  ? "bg-yellow-500/10 text-yellow-600"
                  : "bg-red-500/10 text-red-600"
            }`}
          >
            {problem.difficulty}
          </span>
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-lg transition-colors ${
              isBookmarked
                ? "text-emerald-500 hover:text-red-500"
                : "text-slate-400 hover:text-emerald-500"
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>

        <div
          className="prose dark:prose-invert max-w-none text-sm"
          dangerouslySetInnerHTML={{ __html: problem.description }}
        />

        {problem.hints.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold mb-2">Hints:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {problem.hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          </div>
        )}

        {problem.constraints && (
          <div className="mt-6 p-4 bg-slate-100 dark:bg-zinc-900/50 rounded-lg">
            <h3 className="font-bold mb-2 text-sm">Constraints:</h3>
            <pre className="text-xs text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">
              {problem.constraints}
            </pre>
          </div>
        )}
      </div>

      {/* Right: Code Editor */}
      <div className="w-1/2 flex flex-col">
        <div className="flex items-center justify-between p-2 border-b border-slate-200 dark:border-white/5">
          <span className="text-xs font-medium text-zinc-500">JavaScript</span>
          <div className="flex gap-2">
            <button
              onClick={handleRun}
              className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-zinc-800 rounded hover:opacity-80"
            >
              <Play className="w-3 h-3" /> Run
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-1 px-4 py-1 text-xs font-bold bg-primary text-white rounded hover:opacity-90 disabled:opacity-50"
            >
              <Send className="w-3 h-3" />
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            theme={theme === "dark" ? "vs-dark" : "light"}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              padding: { top: 16 },
            }}
          />
        </div>

        <div className="h-32 border-t border-slate-200 dark:border-white/5 p-4 overflow-y-auto bg-slate-50 dark:bg-zinc-900/50">
          <p className="text-xs font-bold text-zinc-500 mb-2">Output:</p>
          <pre className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl text-center shadow-2xl max-w-sm">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Accepted!</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Your solution passed all test cases.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
