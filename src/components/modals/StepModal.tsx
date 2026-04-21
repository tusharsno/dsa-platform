"use client";

import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    beamColor: string;
    link: string;
    content: {
      intro: string;
      sections: {
        heading: string;
        text: string;
      }[];
      tips: string[];
      cta: {
        text: string;
        link: string;
      };
    };
  };
  index: number;
}

export default function StepModal({ isOpen, onClose, step, index }: StepModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl max-h-[80vh] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 px-6 md:px-8 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} p-[1px]`}
                >
                  <div className="w-full h-full rounded-[11px] bg-zinc-950 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 mb-1">
                    STEP {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-xl font-bold text-white">{step.title}</h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)] px-6 md:px-8 py-8">
              {/* Intro */}
              <div className="mb-8">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {step.content.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8 mb-8">
                {step.content.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                      {section.heading}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tips */}
              {step.content.tips.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    💡 Pro Tips
                  </h3>
                  <ul className="space-y-3">
                    {step.content.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-zinc-400 flex gap-3">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Link
                href={step.content.cta.link}
                className={`group flex items-center justify-between w-full bg-gradient-to-r ${step.color} p-[1px] rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all`}
              >
                <div className="w-full bg-zinc-950 rounded-[15px] px-6 py-4 flex items-center justify-between group-hover:bg-transparent transition-colors">
                  <span className="font-bold text-white group-hover:text-white">
                    {step.content.cta.text}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
