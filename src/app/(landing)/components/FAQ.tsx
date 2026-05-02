"use client";

import { useState } from "react";
import { ChevronDown, Cpu, HelpCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const faqData = [
  {
    question: "Is the platform free to use?",
    answer: "Yes! DSA Learn is completely free for all users. You can access all problems, track your progress, and use all features without any cost. We believe in making quality education accessible to everyone."
  },
  {
    question: "What programming languages are supported?",
    answer: "Currently, we support JavaScript for coding solutions. We're actively working on adding support for Python, Java, C++, and other popular languages. Stay tuned for updates!"
  },
  {
    question: "How do I track my progress?",
    answer: "Your progress is automatically tracked! Visit your dashboard to see solved problems, current streak, points earned, and a GitHub-style activity heatmap. You can also bookmark problems for later review."
  },
  {
    question: "How are problems organized?",
    answer: "Problems are organized by topics (Arrays, Strings, DP, etc.) and difficulty levels (Easy, Medium, Hard). You can filter by company tags, search by keywords, and follow our structured learning roadmap."
  },
  {
    question: "Do you provide solutions and explanations?",
    answer: "Yes! Each problem includes detailed explanations, multiple solution approaches, time/space complexity analysis, and helpful hints to guide your learning process."
  },
  {
    question: "Can I bookmark problems for later?",
    answer: "Absolutely! You can bookmark any problem from the problem list or detail page. Access all your bookmarked problems from your dashboard or the dedicated bookmarks page."
  },
  {
    question: "How does the scoring system work?",
    answer: "You earn points based on problem difficulty: Easy (10 points), Medium (20 points), Hard (30 points). Maintain daily streaks to build consistency and unlock achievements as you progress."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Currently, DSA Learn is a web-based platform optimized for all devices. While we don't have a dedicated mobile app yet, our responsive design works perfectly on mobile browsers."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { user, isLoaded } = useUser();

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="container px-6 mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
            <Cpu className="w-3 h-3 text-white/60" />
            <span className="text-white/80">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {isLoaded && user ? (
              <>Need <span className="text-white/80">Help?</span></>
            ) : (
              <>Got <span className="text-white/80">Questions?</span></>
            )}
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            {isLoaded && user 
              ? "Find answers to common questions about using the platform and maximizing your learning."
              : "Everything you need to know about getting started with DSA Learn and mastering algorithms."
            }
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => handleClick(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/80 transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 pl-20 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="mailto:support@dsalearn.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Support
              <Cpu className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}