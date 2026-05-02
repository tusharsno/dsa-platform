"use client";

import { useState, useEffect } from "react";
import { X, Save } from "lucide-react";
import { createOrUpdateNote } from "@/lib/note-actions";
import { useRouter } from "next/navigation";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemId: string;
  problemTitle: string;
  existingNote?: {
    title?: string;
    content: string;
    approach?: string;
    mistakes?: string;
    timeComplexity?: string;
    spaceComplexity?: string;
  } | null;
}

export function NoteModal({
  isOpen,
  onClose,
  problemId,
  problemTitle,
  existingNote,
}: NoteModalProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    approach: "",
    mistakes: "",
    timeComplexity: "",
    spaceComplexity: "",
  });

  useEffect(() => {
    if (existingNote) {
      setFormData({
        title: existingNote.title || "",
        content: existingNote.content || "",
        approach: existingNote.approach || "",
        mistakes: existingNote.mistakes || "",
        timeComplexity: existingNote.timeComplexity || "",
        spaceComplexity: existingNote.spaceComplexity || "",
      });
    }
  }, [existingNote]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const result = await createOrUpdateNote(problemId, formData);

    if (result.success) {
      router.refresh();
      onClose();
    }

    setIsSaving(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-white/10 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold text-white">Add Note</h2>
            <p className="text-sm text-white/60 mt-1">{problemTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5 text-white/60" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Note Title (Optional)
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Two Pointer Approach"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Notes <span className="text-red-400">*</span>
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your notes here..."
              required
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Approach
            </label>
            <textarea
              value={formData.approach}
              onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
              placeholder="Describe your solution approach..."
              rows={3}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Common Mistakes
            </label>
            <textarea
              value={formData.mistakes}
              onChange={(e) => setFormData({ ...formData, mistakes: e.target.value })}
              placeholder="Things to avoid or watch out for..."
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Time Complexity
              </label>
              <input
                type="text"
                value={formData.timeComplexity}
                onChange={(e) => setFormData({ ...formData, timeComplexity: e.target.value })}
                placeholder="e.g., O(n)"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Space Complexity
              </label>
              <input
                type="text"
                value={formData.spaceComplexity}
                onChange={(e) => setFormData({ ...formData, spaceComplexity: e.target.value })}
                placeholder="e.g., O(1)"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving || !formData.content}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Save Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
