// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { BrainCircuit, Terminal, Code2, Rocket, Sparkles } from "lucide-react";

// const steps = [
//   {
//     title: "Choose a Topic",
//     description:
//       "Start with fundamentals like Arrays or jump into advanced DP.",
//     icon: BrainCircuit,
//     color: "from-blue-500 to-cyan-400",
//     beamColor: "via-blue-500",
//   },
//   {
//     title: "Master Concepts",
//     description:
//       "Read interview insights and conceptual overviews curated by experts.",
//     icon: Terminal,
//     color: "from-purple-500 to-pink-500",
//     beamColor: "via-purple-500",
//   },
//   {
//     title: "Solve Problems",
//     description: "Write and test your code in our high-performance workspace.",
//     icon: Code2,
//     color: "from-emerald-500 to-teal-400",
//     beamColor: "via-emerald-500",
//   },
//   {
//     title: "Track Progress",
//     description:
//       "Monitor stats and climb the roadmap as you solve 80+ challenges.",
//     icon: Rocket,
//     color: "from-orange-500 to-yellow-500",
//     beamColor: "via-orange-500",
//   },
// ];

// const Process = () => {
//   return (
//     <section className="py-24 relative overflow-hidden bg-background">
//       <div className="container px-6 mx-auto max-w-7xl">
//         <div className="flex flex-col items-center text-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
//               <Sparkles className="w-3 h-3" />
//               The Ecosystem
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
//               Mastery in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
//                 4 Simple Steps
//               </span>
//             </h2>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="group relative"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               {/* Card Body */}
//               <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-card/50 backdrop-blur-sm hover:border-white/20 hover:bg-card/80 transition-all duration-500 relative overflow-hidden">
//                 {/* 1. Icon Container with Glow (Restored) */}
//                 <div
//                   className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-gradient-to-br ${step.color} p-[1px]`}
//                 >
//                   <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center">
//                     <step.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
//                   </div>
//                   {/* Background Glow Effect */}
//                   <div
//                     className={`absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
//                   />
//                 </div>

//                 {/* 2. Text Content */}
//                 <div className="space-y-3 relative z-10">
//                   <div className="flex items-center gap-3">
//                     <span className="text-xs font-mono text-muted-foreground opacity-50 italic">
//                       0{index + 1}.
//                     </span>
//                     <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors italic">
//                       {step.title}
//                     </h3>
//                   </div>
//                   <p className="text-sm text-muted-foreground leading-relaxed font-light">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* 3. Bottom Decorative Beam (Restored) */}
//                 <div
//                   className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${step.beamColor} to-transparent`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Terminal,
  Code2,
  Rocket,
} from "lucide-react";
import StepModal from "@/components/modals/StepModal";

const steps = [
  {
    title: "Choose a Topic",
    description:
      "Start with fundamentals like Arrays or jump into advanced DP.",
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-400",
    beamColor: "via-blue-500",
    link: "/topics",
    content: {
      intro:
        "Begin your DSA journey by selecting a topic that matches your current skill level and learning goals. Our structured curriculum covers everything from basic data structures to advanced algorithms.",
      sections: [
        {
          heading: "Browse Our Topic Library",
          text:
            "Explore 12+ carefully curated topics including Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and more. Each topic is organized by difficulty and real-world application.",
        },
        {
          heading: "Understand Prerequisites",
          text:
            "Each topic page shows recommended prerequisites and related concepts. Start with fundamentals like Arrays and Strings before moving to complex topics like Graph Algorithms or Advanced DP.",
        },
        {
          heading: "Track Your Coverage",
          text:
            "See your progress across all topics with visual indicators. The platform tracks which topics you've started, how many problems you've solved, and suggests what to learn next.",
        },
      ],
      tips: [
        "Start with Easy problems to build confidence before tackling Medium/Hard",
        "Focus on one topic at a time for better retention",
        "Revisit topics periodically to reinforce learning",
        "Check company tags to prioritize interview-relevant topics",
      ],
      cta: {
        text: "Explore All Topics",
        link: "/topics",
      },
    },
  },
  {
    title: "Master Concepts",
    description:
      "Read interview insights and conceptual overviews curated by experts.",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    beamColor: "via-purple-500",
    link: "/roadmap",
    content: {
      intro:
        "Deep dive into algorithmic concepts with our comprehensive learning resources. Each topic includes detailed explanations, time/space complexity analysis, and real-world applications.",
      sections: [
        {
          heading: "Conceptual Overviews",
          text:
            "Read expert-written explanations that break down complex algorithms into digestible concepts. Learn the 'why' behind each approach, not just the 'how'.",
        },
        {
          heading: "Pattern Recognition",
          text:
            "Identify common problem-solving patterns like Two Pointers, Sliding Window, Binary Search, and Backtracking. Understanding patterns helps you solve new problems faster.",
        },
        {
          heading: "Interview Insights",
          text:
            "Learn what top tech companies look for in coding interviews. Get tips on how to approach problems, communicate your thought process, and optimize solutions.",
        },
      ],
      tips: [
        "Take notes on key concepts and patterns you encounter",
        "Draw diagrams to visualize data structures and algorithms",
        "Explain concepts out loud to test your understanding",
        "Connect new concepts to problems you've already solved",
      ],
      cta: {
        text: "View Learning Roadmap",
        link: "/roadmap",
      },
    },
  },
  {
    title: "Solve Problems",
    description: "Write and test your code in our high-performance workspace.",
    icon: Code2,
    color: "from-emerald-500 to-teal-400",
    beamColor: "via-emerald-500",
    link: "/problems",
    content: {
      intro:
        "Put your knowledge into practice with our interactive coding environment. Write, test, and submit solutions with instant feedback on correctness and performance.",
      sections: [
        {
          heading: "Monaco Code Editor",
          text:
            "Code in a professional VS Code-powered editor with syntax highlighting, auto-completion, and error detection. Supports JavaScript with more languages coming soon.",
        },
        {
          heading: "Real-time Test Cases",
          text:
            "Run your code against sample test cases instantly. See input, expected output, and your output side-by-side. Debug efficiently with detailed error messages.",
        },
        {
          heading: "Submit & Validate",
          text:
            "Submit your solution to run against all test cases including hidden edge cases. Get immediate feedback on correctness, execution time, and memory usage.",
        },
      ],
      tips: [
        "Start by understanding the problem before writing code",
        "Test with edge cases: empty inputs, single elements, large datasets",
        "Optimize after getting a working solution first",
        "Review other solutions after solving to learn new approaches",
      ],
      cta: {
        text: "Start Solving Problems",
        link: "/problems",
      },
    },
  },
  {
    title: "Track Progress",
    description:
      "Monitor stats and climb the roadmap as you solve 80+ challenges.",
    icon: Rocket,
    color: "from-orange-500 to-yellow-500",
    beamColor: "via-orange-500",
    link: "/dashboard",
    content: {
      intro:
        "Stay motivated with comprehensive progress tracking. Visualize your journey, maintain streaks, and celebrate milestones as you grow your problem-solving skills.",
      sections: [
        {
          heading: "GitHub-Style Heatmap",
          text:
            "See your daily coding activity at a glance with a contribution-style heatmap. Track your consistency and identify patterns in your learning habits.",
        },
        {
          heading: "Detailed Statistics",
          text:
            "Monitor problems solved by difficulty (Easy/Medium/Hard), topics mastered, current streak, and total points earned. Set goals and track your improvement over time.",
        },
        {
          heading: "Achievement System",
          text:
            "Earn points for each problem solved based on difficulty. Maintain daily streaks to build consistency. Unlock badges as you hit milestones in your learning journey.",
        },
      ],
      tips: [
        "Aim for consistency over intensity - solve at least one problem daily",
        "Review your heatmap weekly to identify gaps in practice",
        "Set monthly goals for problems solved and topics covered",
        "Celebrate small wins to stay motivated long-term",
      ],
      cta: {
        text: "View Your Dashboard",
        link: "/dashboard",
      },
    },
  },
];

const Process = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <>
      <section className="py-12 relative overflow-hidden bg-background">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Step-by-Step Guide
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 italic">
                How it{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase not-italic">
                  Works
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setSelectedStep(index)}
                  className="w-full h-full p-8 rounded-2xl border border-white/[0.08] bg-card/50 backdrop-blur-sm hover:border-white/20 hover:bg-card/80 transition-all duration-500 relative overflow-hidden cursor-pointer text-left"
                >
                  <div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-gradient-to-br ${step.color} p-[1px]`}
                  >
                    <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div
                      className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                    />
                  </div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-foreground opacity-50 italic">
                        0{index + 1}.
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors italic">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                      Learn More
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-transparent ${step.beamColor} to-transparent`}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStep !== null && (
        <StepModal
          isOpen={selectedStep !== null}
          onClose={() => setSelectedStep(null)}
          step={steps[selectedStep]}
          index={selectedStep}
        />
      )}
    </>
  );
};

export default Process;
